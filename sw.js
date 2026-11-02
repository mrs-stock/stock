// Stock Vs IP: minimal service worker so the app installs full screen. Always uses the network (no stale copies).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { });
