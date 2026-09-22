# GTL Exception Dashboard

## Apa itu Project Ini?
Project ini adalah dashboard kustom untuk memantau data GTL Exception secara *real-time* dan interaktif. Project ini terdiri dari dua bagian utama:
1. **Chrome Extension**: Berfungsi sebagai *bridge* (jembatan) untuk mengambil data langsung dari GTL (mengatasi masalah CORS dan Authentication) secara aman.
2. **Dashboard HTML**: Antarmuka visual (UI) *standalone* yang menampilkan metrik KPI, tren grafik, dan tabel data yang kaya fitur (pagination, multi-select filter, ekspor Excel).

---

## Persyaratan (Requirements)
Sebelum menggunakan, pastikan Anda memenuhi persyaratan berikut:
- **Browser Google Chrome** (wajib untuk menginstall extension).
- Akun GTL yang aktif dan bisa mengakses halaman Exception List.
- Terkoneksi ke **SealSuite / VPN** ByteDance (karena GTL dan AIME site membutuhkan akses internal).

---

## Cara Install Chrome Extension
Extension ini tidak ada di Chrome Web Store, jadi harus di-*load* secara manual (unpacked).
1. Buka browser Chrome, lalu ketik `chrome://extensions/` di address bar dan tekan Enter.
2. Di pojok kanan atas, pastikan **Developer mode** sudah **Aktif** (posisi *toggle* menyala).
3. Klik tombol **Load unpacked** di kiri atas.
4. Pilih folder `chrome-extension` dari repository ini.
5. Pastikan extension bernama **GTL Exception Dashboard** sudah muncul dan aktif.

---

## Cara Buka dan Pakai Dashboard
1. Pastikan Anda sudah login ke [GTL Exception List](https://gtl-id.tokgistic.com/oms/exception/list) setidaknya sekali agar sesi login dan cookie Anda valid.
2. Buka URL Dashboard: [https://ed1d04b87bb1.aime-site.tiktok-row.net](https://ed1d04b87bb1.aime-site.tiktok-row.net).
   *(Atau Anda bisa membuka file `dashboard/index.html` langsung dari komputer Anda).*
3. Di dashboard, pastikan status menunjukkan **Extension Active** (ikon hijau).
4. Klik tombol **Load All Data** untuk mulai menarik data dari GTL ke dashboard.
5. Anda bisa langsung menggunakan filter, melihat metrik, dan berinteraksi dengan grafik.

---

## Cara Update Jika Ada Perubahan
### 1. Update Dashboard HTML
- Dashboard versi web (`aime-site`) akan diperbarui secara otomatis dari sisi server jika ada deploy baru.
- Jika Anda menggunakan file lokal, cukup *pull* (tarik) versi terbaru dari GitHub, lalu buka kembali file `dashboard/index.html`.

### 2. Update Chrome Extension
- Jika ada perubahan pada folder `chrome-extension`, *pull* perubahan terbaru dari GitHub.
- Buka `chrome://extensions/`.
- Cari kotak extension "GTL Exception Dashboard".
- Klik tombol **Reload** (ikon melingkar) pada extension tersebut untuk menerapkan perubahan terbaru.

---
*Dibuat oleh Aime untuk Hypercare Medan.*