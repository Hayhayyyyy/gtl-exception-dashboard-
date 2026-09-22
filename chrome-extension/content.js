console.log("GTL Extension content script injected!");

// Dispatch ready event
document.dispatchEvent(new CustomEvent('gtl-extension-ready'));

window.addEventListener('message', (event) => {
    if (event.source !== window || !event.data) return;
    
    if (event.data.type === 'PING') {
        window.postMessage({ source: 'GTL_EXTENSION', type: 'PONG' }, '*');
    }
    
    if (event.data.type === 'FETCH_GTL') {
        if (typeof chrome === 'undefined' || !chrome.runtime || !chrome.runtime.sendMessage) {
            window.postMessage({ 
                source: 'GTL_EXTENSION', 
                id: event.data.id, 
                response: { error: 'Chrome runtime unavailable. Extension might be disabled or disconnected.' } 
            }, '*');
            return;
        }
        
        chrome.runtime.sendMessage({ 
            type: 'FETCH_GTL_DATA', 
            url: event.data.url, 
            body: event.data.body 
        }, (response) => {
            window.postMessage({ 
                source: 'GTL_EXTENSION', 
                id: event.data.id, 
                response: response || { error: 'No response from background script.' } 
            }, '*');
        });
    }
});
