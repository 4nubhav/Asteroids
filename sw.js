importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

try {
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
    "revision": "018f6de1023ca977157271c544b7e286"
  },
  {
    "url": "precache-manifest.3fbe189e70fa6b5908f981c38a1e7bd1.js",
    "revision": "3fbe189e70fa6b5908f981c38a1e7bd1"
  },
  {
    "url": "service-worker.js",
    "revision": "a77161b9e407f20b053e00a9989b0bcd"
  },
  {
    "url": "static/css/2.b20b9002.chunk.css",
    "revision": "a8c849b2d6e971ba339b2b6f36063b59"
  },
  {
    "url": "static/css/main.2efc435b.chunk.css",
    "revision": "ce9fbe5ddb37f254b4f61f0a39ae6871"
  },
  {
    "url": "static/js/2.734c5043.chunk.js",
    "revision": "d94903963e37f83b4508ff6551e24b63"
  },
  {
    "url": "static/js/main.dda701c7.chunk.js",
    "revision": "caa3cd59560fe8eb16d75d47cf19ce89"
  },
  {
    "url": "static/js/runtime-main.72554802.js",
    "revision": "74c106802149c11c514dd44310fd9cf1"
  }
]);
} catch (e) {
    console.log(e);
}


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
