const cacheName="ver_1_1",precacheResources=["/"];self.addEventListener("install",e=>{console.log("Service worker install event!"),e.waitUntil(caches.open("ver_1_1").then(e=>e.addAll(precacheResources)))}),addEventListener("activate",e=>{e.waitUntil(async function(){self.registration.navigationPreload&&await self.registration.navigationPreload.enable()}())}),addEventListener("fetch",e=>{e.respondWith(async function(){const t=await caches.match(e.request);if(t)return t;const a=await e.preloadResponse;return a||fetch(e.request)}())});
