var cacheName = 'hello-pwa';
<<<<<<< HEAD
var filesToCache = ['/', '/index.html', '/css/style.css', '/js/main.js'];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
=======
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
>>>>>>> d4a153a94cae5cb891ca9cadc536b9a4811ea451
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
<<<<<<< HEAD
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
=======
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
>>>>>>> d4a153a94cae5cb891ca9cadc536b9a4811ea451
      return response || fetch(e.request);
    })
  );
});
