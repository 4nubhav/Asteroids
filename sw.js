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
    "revision": "211688ec5fa86200549a219faca4d536"
  },
  {
    "url": "precache-manifest.ccc95a761df421f20e167b12c483b070.js",
    "revision": "ccc95a761df421f20e167b12c483b070"
  },
  {
    "url": "service-worker.js",
    "revision": "507cba6ae2a28e6e90638c68be82e581"
  },
  {
    "url": "static/css/2.e4aaca1a.chunk.css",
    "revision": "9f7f2a4225cacd8158b6101653c77ae3"
  },
  {
    "url": "static/css/main.ce1c6959.chunk.css",
    "revision": "56d5958324e7194441c2aef99127e510"
  },
  {
    "url": "static/js/2.1ce93bfd.chunk.js",
    "revision": "d1490f073be059ac07bed884409206d4"
  },
  {
    "url": "static/js/main.88068a4c.chunk.js",
    "revision": "36f2b488acd11fbf9befa5d8e6b2f807"
  },
  {
    "url": "static/js/runtime-main.9e90bde1.js",
    "revision": "a3edf5d66435eb4e10417739023fbeeb"
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
