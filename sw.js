self.addEventListener("install",i=>{i.waitUntil(caches.open("v9").then(i=>i.addAll(["/","manifest.json","favicon-32x32.png","icon-144x144.png"]).then(function(){console.log("Success! App is available offline!")})))}),self.addEventListener("fetch",i=>{i.respondWith(caches.match(i.request).then(n=>n||fetch(i.request)))});
