# Kantong

Pencatat keuangan, hutang, dan piutang. Satu halaman web yang bisa dipasang di Android dan dipakai tanpa internet. Dikunci dengan PIN 6 angka (opsional). Data tersimpan di perangkat, tanpa akun online.

## Berkas

- `index.html`: aplikasinya
- `manifest.webmanifest`: informasi aplikasi untuk dipasang di layar utama
- `sw.js`: membuat aplikasi bisa dibuka offline
- `icon-192.png`, `icon-512.png`: ikon aplikasi

## Pasang di GitHub Pages

1. Buka github.com, ketuk **New repository**.
2. Nama: `kantong`, pilih **Public**, lalu **Create repository**.
3. Ketuk **uploading an existing file**, tarik atau pilih kelima berkas di atas, lalu **Commit changes**.
4. Buka **Settings**, lalu **Pages**. Di bagian Build and deployment pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu **Save**.
5. Tunggu 1 sampai 2 menit. Alamatnya: `https://NAMA-GITHUB-KAMU.github.io/kantong/`

## Pasang di Android

1. Buka alamat di atas lewat Chrome.
2. Ketuk menu ⋮, lalu **Pasang aplikasi** atau **Tambahkan ke layar utama**.
3. Buka dari ikon di layar utama. Setelah dimuat sekali, aplikasi bisa dibuka tanpa internet.

## Catatan

- Data tersimpan di browser ponsel. Salin cadangan secara berkala lewat ikon gerigi di dalam aplikasi.
- Setelah mengubah `index.html`, naikkan nilai `VERSI` di `sw.js` (misalnya `kantong-v2`) agar perangkat mengambil versi terbaru.
- PIN bisa dibuat, diganti, dimatikan, atau dipakai untuk mengunci sekarang lewat ikon gerigi. Aplikasi terkunci otomatis setelah ditinggalkan lebih dari 1 menit.
- PIN tidak bisa dipulihkan. Kalau lupa, pilih "Lupa PIN?" di layar kunci; itu menghapus semua data di perangkat, jadi simpan cadangan.
- Data contoh di awal bisa dihapus dengan tombol **Hapus contoh**.
