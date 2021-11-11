const cacheName = '6-version-11';
const precacheResources = ['icon-192x192.png','icon-512x512.png','manifest.json'];
self.addEventListener('install', (event)=>{
    console.log('Service worker install event!');
    event.waitUntil(caches.open(cacheName).then((cache)=>cache.addAll(precacheResources)));
}
);
self.addEventListener('activate', (event)=>{
    console.log('Service worker activate event!');
}
);
self.addEventListener('fetch', (event)=>{
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(caches.match(event.request).then((cachedResponse)=>{
        if (cachedResponse) {
            return cachedResponse;
        }
        return fetch(event.request);
    }
    ), );
}
);
