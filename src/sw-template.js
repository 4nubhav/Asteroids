importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute([]);

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
