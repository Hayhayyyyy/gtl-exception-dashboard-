let cachedHeaders = {};

// Load on startup with safety guards
chrome.storage.local.get(['gtlHeaders']).then((res) => {
    if (res && res.gtlHeaders) {
        cachedHeaders = res.gtlHeaders;
    }
}).catch(err => console.error("Storage error:", err));

// Capture headers from actual GTL requests
chrome.webRequest.onBeforeSendHeaders.addListener(
    function(details) {
        let updated = false;
        for (let header of details.requestHeaders) {
            let name = header.name.toLowerCase();
            if (['authorization', 'x-location', 'x-timezone', 'x-appversion', 'device-id'].includes(name)) {
                cachedHeaders[header.name] = header.value;
                updated = true;
            }
        }
        if (updated) {
            chrome.storage.local.set({ gtlHeaders: cachedHeaders }).catch(e => console.error(e));
        }
    },
    { urls: ["https://gtl-id.tokgistic.com/ehc/v1/*"] },
    ["requestHeaders", "extraHeaders"]
);

// Proxy fetch requests from the dashboard
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "FETCH_GTL_DATA") {
        if (!cachedHeaders || !cachedHeaders['Authorization']) {
            sendResponse({ error: "Token not found. Please refresh the GTL tab first." });
            return true;
        }
        
        fetch("https://gtl-id.tokgistic.com/ehc/v1/ui/ehc/" + message.url, {
            method: message.body ? "POST" : "GET",
            headers: Object.assign({}, cachedHeaders, {
                "Content-Type": "application/json",
                "Accept": "application/json, text/plain, */*"
            }),
            body: message.body ? JSON.stringify(message.body) : undefined,
            credentials: "include"
        })
        .then(res => res.text().then(text => ({ ok: res.ok, status: res.status, text })))
        .then(({ ok, status, text }) => {
            if (!ok) throw new Error(`HTTP ${status}: ${text.substring(0, 100)}`);
            sendResponse({ data: JSON.parse(text) });
        })
        .catch(err => sendResponse({ error: err.message }));
        
        return true;
    }
});
