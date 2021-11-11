const cacheName = '5-version-11';
const precacheResources = ['manifest.json','login_a.html','login_d.html','login_z.html','login_y.html'];
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
