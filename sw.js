// Service worker Kantong: menyimpan berkas aplikasi agar bisa dibuka tanpa internet.
// Setelah mengubah index.html, naikkan nomor VERSI supaya perangkat mengambil versi baru.
var VERSI = 'kantong-v1';
var BERKAS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSI).then(function (c) { return c.addAll(BERKAS); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (names) {
      return Promise.all(names.filter(function (n) { return n !== VERSI; }).map(function (n) { return caches.delete(n); }));
    }).then(function () { return self.clients.claim(); })
  );
});

// Ambil dari cache lebih dulu, lalu perbarui cache di latar belakang.
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      var jaringan = fetch(e.request).then(function (res) {
        if (res && (res.ok || res.type === 'opaque')) {
          var salinan = res.clone();
          caches.open(VERSI).then(function (c) { c.put(e.request, salinan); });
        }
        return res;
      }).catch(function () { return hit; });
      return hit || jaringan;
    })
  );
});
