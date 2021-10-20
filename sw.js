const cacheName="vre02",precacheResources=["/"];self.addEventListener("install",e=>{e.waitUntil(caches.open("vre02").then(e=>e.addAll(precacheResources)))}),addEventListener("activate",e=>{e.waitUntil(async
function(){self.registration.navigationPreload&&await self.registration.navigationPreload.enable()}())}),addEventListener("fetch",e=>{e.respondWith(async
function(){const t=await caches.match(e.request);if(t)return t;const a=await e.preloadResponse;return a||fetch(e.request)}())})
