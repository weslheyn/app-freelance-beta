const CACHE='coco-bambu-v6-busca';
self.addEventListener('install',e=>e.waitUntil((async()=>{self.skipWaiting(); const c=await caches.open(CACHE); try{await c.addAll(['./','./index.html','./manifest.json','./script.js','./sw.js','./icon.png','/escala-garcons/','/escala-garcons/index.html','/escala-garcons/manifest.json']);}catch(e){}})()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{await Promise.all((await caches.keys()).filter(k=>k!==CACHE).map(k=>caches.delete(k))); await self.clients.claim();})()));
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
