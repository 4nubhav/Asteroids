importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute([
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "b905a9b6c625924e9e35f253754908d9"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "998eaad369ddf214dae058725a55e5fe"
  },
  {
    "url": "img/icons/icon-48x48.png",
    "revision": "e8540eb03189a9a4785267856f642ad8"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "1f12006eb7490d6ea0fa4ce581677abe"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "d0c411404c91943654eb80e31de5a955"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "049455dac80a8e1492c678389fd88ed1"
  },
  {
    "url": "index.html",
    "revision": "fd115372cc58d40b38b7e4e09046df66"
  },
  {
    "url": "precache-manifest.7879b4aadd8e57b725540d8041852b30.js",
    "revision": "7879b4aadd8e57b725540d8041852b30"
  },
  {
    "url": "service-worker.js",
    "revision": "b0352809680cb319eebc7872c25aed22"
  },
  {
    "url": "static/css/2.b20b9002.chunk.css",
    "revision": "a8c849b2d6e971ba339b2b6f36063b59"
  },
  {
    "url": "static/css/main.50170a78.chunk.css",
    "revision": "93dd1f661aec59e88337a7f5f1b7c58e"
  },
  {
    "url": "static/js/2.ddd62352.chunk.js",
    "revision": "0b60b727ccf6bf4cc3dd4d49a660e458"
  },
  {
    "url": "static/js/main.02757b71.chunk.js",
    "revision": "cc0e8a17e080751bfc8e59e9e8d519f2"
  },
  {
    "url": "static/js/runtime-main.72554802.js",
    "revision": "74c106802149c11c514dd44310fd9cf1"
  },
  {
    "url": "static/media/asteroid-1.d4bd71ea.png",
    "revision": "d4bd71ea6f2ee9ccf1a1e3c667014140"
  },
  {
    "url": "static/media/asteroid-2.11fe73a2.png",
    "revision": "11fe73a29ddbbfa2521729527f20b8d0"
  }
]);

workbox.routing.registerRoute(
    new RegExp('https://secret-meadow-61226.herokuapp.com'),
    new workbox.strategies.CacheFirst({
        cacheName: 'json-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 1,
            }),
        ]
    })
);
