const cacheName="aversion_2",precacheResources=["/","manifest.json","icon-512x512.png","icon-192x192.png","apple-touch-icon.png","favicon-32x32.png"];self.addEventListener("install",e=>{e.waitUntil(caches.open("aversion_2").then(e=>e.addAll(precacheResources)))}),addEventListener("activate",e=>{e.waitUntil(async function(){self.registration.navigationPreload&&await self.registration.navigationPreload.enable()}())}),addEventListener("fetch",e=>{e.respondWith(async function(){const t=await caches.match(e.request);if(t)return t;const a=await e.preloadResponse;return a||fetch(e.request)}())});
