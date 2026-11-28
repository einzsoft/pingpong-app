"use strict";
// scripts/build_app.py fills these in, so every build gets a new cache.
const VERSION = "940bea1f94f2";
const FILES = ["./", "fonts/ibm-plex-sans-thai-latin-400.82ddd36544.woff2", "fonts/ibm-plex-sans-thai-latin-500.50cf74f017.woff2", "fonts/ibm-plex-sans-thai-latin-600.2a1bc932c8.woff2", "fonts/ibm-plex-sans-thai-thai-400.2d66381c26.woff2", "fonts/ibm-plex-sans-thai-thai-500.7e01c13303.woff2", "fonts/ibm-plex-sans-thai-thai-600.ea935955dc.woff2", "fonts/mitr-latin-500.464991abe0.woff2", "fonts/mitr-latin-600.abbee5fd41.woff2", "fonts/mitr-thai-500.1237c67ea8.woff2", "fonts/mitr-thai-600.91b3b89d3a.woff2", "icons/icon-180.2bc05198d1.png", "icons/icon-192.c705302bc3.png", "icons/icon-512.2e24cb3f08.png", "manifest.webmanifest", "data/quiz-000.9aca19a122.json", "data/quiz-001.539383797a.json", "data/quiz-002.67567e3936.json", "data/quiz-003.071f10fce0.json", "data/quiz-004.0e700b3dc7.json", "data/quiz-005.63ced424ca.json", "data/quiz-006.677b48d2f9.json", "data/quiz-007.4ce19fe59a.json", "data/quiz-008.079b923ce6.json", "data/quiz-009.64f57d72aa.json", "data/quiz-010.c1c9f988fb.json", "data/quiz-011.f158b92231.json", "data/quiz-012.94c97ec1be.json", "data/quizindex.3b69edc2ab.json", "data/pipes-easy.e4b3229019.json", "data/pipes-medium.76d3f71ab5.json", "data/pipes-hard.2ddc349dd8.json", "data/flow-easy.e37299beef.json", "data/flow-medium.75979b7cd9.json", "data/flow-hard.8f51f0c890.json", "data/wordsearch-easy.92c260de83.json", "data/wordsearch-medium.5af1952df1.json", "data/wordsearch-hard.284807a1ee.json", "data/make_24-easy.3a3dbf8469.json", "data/make_24-medium.77a854045c.json", "data/make_24-hard.4ebff1c207.json", "data/water_sort-easy.9e574dc373.json", "data/water_sort-medium.509dfc21c5.json", "data/water_sort-hard.32963dc200.json", "data/parking-easy.9480fc7f08.json", "data/parking-medium.c693ee2bba.json", "data/parking-hard.5fd4547205.json", "data/ice_slide-easy.ece2226f17.json", "data/ice_slide-medium.d2ba8005d0.json", "data/ice_slide-hard.f2c40c61b1.json", "data/tilt-easy.b27fb47b9c.json", "data/tilt-medium.1f0f848457.json", "data/tilt-hard.edea08f806.json", "games/swim.697e9a9e93.bin", "games/bounce.42620cffe3.bin", "games/tower.6a564abfe8.bin", "data/legal.04467c75fb.html", "assets/supabase.ee3be8de19.js", "assets/delete.5f2be0e191.js", "assets/app.bc871c8586.js", "assets/boot.85ba0e912c.js", "index.html"];
const CACHE = "pingpong-" + VERSION;
const HASHED = /\.[0-9a-f]{10}\.[a-z0-9]+$/;

/* The last page of all: the app's own files are missing from this device and the network is gone too. Plain on purpose (no file it
   could need is there to load); both themes follow the device. */
const OFFLINE_PAGE = `<!doctype html><html lang="th"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>ปิ๊งป่อง</title><style>
html{background:#0E0E12;color:#F4F4F6}@media(prefers-color-scheme:light){html{background:#fff;color:#111114}}
body{margin:0;min-height:100vh;display:grid;place-items:center;align-content:center;gap:20px;padding:24px;text-align:center;font:500 18px/1.6 system-ui,sans-serif}
p{margin:0}button{font:inherit;font-weight:600;min-height:48px;padding:0 28px;border:0;border-radius:24px;background:#FFC233;color:#111114}
</style></head><body><p>ต่อเน็ตไม่ได้ ต่อเน็ตแล้วลองอีกครั้งนะ</p><button type="button" onclick="location.reload()">ลองอีกครั้ง</button></body></html>`;

// Safari refuses a cached response that came from a redirect, so store a clean copy.
async function clean(response) {
  if (!response.redirected) return response;
  return new Response(await response.blob(), { status: response.status, statusText: response.statusText, headers: response.headers });
}

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(FILES.map(async file => {
      // A file with a content hash in its name cannot have changed: reuse it from the old cache.
      const old = HASHED.test(file) ? await caches.match(file) : null;
      const response = old || await clean(await fetch(new Request(file, { cache: "reload" })));
      if (!response.ok) throw new Error("cannot cache " + file);
      await cache.put(file, response);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

/* A page opened before the update still asks for the files of its own build, which the server no longer has.
   So the old cache stays until a page is opened: from then on nothing needs it. A new build still installing
   has its cache in the list too, and it must not lose that. */
async function dropOldCaches() {
  const keys = await caches.keys();
  if (self.registration.installing || self.registration.waiting) return;
  for (const key of keys) if (key.startsWith("pingpong-") && key !== CACHE) await caches.delete(key);
}

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== location.origin) return;
  if (/^\/(privacy|delete)(\/|$)/.test(url.pathname)) return; // the policy and the deletion page are pages of their own: they come from the site, never the app
  if (request.mode === "navigate") event.waitUntil(dropOldCaches());
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const navigating = request.mode === "navigate";
    const target = navigating ? "./" : request;
    const hit = await cache.match(target, { ignoreSearch: true });
    const old = hit || (HASHED.test(url.pathname) && await caches.match(request, { ignoreSearch: true }));
    if (old) return old;
    try { return await fetch(request); } catch (error) {
      // Nothing cached and no network: a page the app draws itself, never the browser's error page.
      if (!navigating) throw error;
      return (await caches.match("./", { ignoreSearch: true })) || new Response(OFFLINE_PAGE, { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } });
    }
  })());
});
