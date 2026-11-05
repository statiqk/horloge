var CACHE = 'horloge-v4';
var SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png',
  'fonts/bricolage-300.woff2', 'fonts/bricolage-400.woff2', 'fonts/bricolage-500.woff2', 'fonts/tabler-icons.woff2'];
var HOSTS = [];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var u = new URL(req.url);
  var ok = u.origin === self.location.origin || HOSTS.indexOf(u.hostname) !== -1;
  if (!ok) return;
  var isPage = req.mode === 'navigate' || u.pathname.slice(-1) === '/' || u.pathname.slice(-11) === 'index.html';
  if (isPage) {
    e.respondWith(new Promise(function (resolve) {
      var done = false;
      function fallback() {
        return caches.match(req, { ignoreSearch: true }).then(function (hit) { return hit || caches.match('index.html'); });
      }
      var timer = setTimeout(function () {
        fallback().then(function (hit) { if (hit && !done) { done = true; resolve(hit); } });
      }, 1500);
      fetch(req, { cache: 'no-cache' }).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
          if (!done) { done = true; clearTimeout(timer); resolve(res); }
        } else if (!done) {
          clearTimeout(timer);
          fallback().then(function (hit) { if (!done) { done = true; resolve(hit || res); } });
        }
      }).catch(function () {
        clearTimeout(timer);
        fallback().then(function (hit) { if (!done) { done = true; resolve(hit || Response.error()); } });
      });
    }));
    return;
  }
  e.respondWith(caches.open(CACHE).then(function (c) {
    return c.match(req, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok) c.put(req, res.clone());
        return res;
      }).catch(function () { return hit; });
      return hit || net;
    });
  }));
});
