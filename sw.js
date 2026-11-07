"use strict";
// scripts/build_app.py fills these in, so every build gets a new cache.
const VERSION = "24b3370202e4";
const FILES = ["./", "fonts/ibm-plex-sans-thai-latin-400.82ddd36544.woff2", "fonts/ibm-plex-sans-thai-latin-500.50cf74f017.woff2", "fonts/ibm-plex-sans-thai-latin-600.2a1bc932c8.woff2", "fonts/ibm-plex-sans-thai-thai-400.2d66381c26.woff2", "fonts/ibm-plex-sans-thai-thai-500.7e01c13303.woff2", "fonts/ibm-plex-sans-thai-thai-600.ea935955dc.woff2", "fonts/mitr-latin-500.464991abe0.woff2", "fonts/mitr-latin-600.abbee5fd41.woff2", "fonts/mitr-thai-500.1237c67ea8.woff2", "fonts/mitr-thai-600.91b3b89d3a.woff2", "icons/icon-180.2bc05198d1.png", "icons/icon-192.c705302bc3.png", "icons/icon-512.2e24cb3f08.png", "manifest.webmanifest", "data/quiz-000.eb094df461.json", "data/quiz-001.7363917c2a.json", "data/quiz-002.9f1da8cdf0.json", "data/quiz-003.a36ada2a95.json", "data/quiz-004.e084ae5747.json", "data/quiz-005.7106a2565f.json", "data/quiz-006.393424911a.json", "data/pipes-easy.e4b3229019.json", "data/pipes-medium.76d3f71ab5.json", "data/pipes-hard.2ddc349dd8.json", "data/flow-easy.e37299beef.json", "data/flow-medium.75979b7cd9.json", "data/flow-hard.8f51f0c890.json", "data/wordsearch-easy.92c260de83.json", "data/wordsearch-medium.5af1952df1.json", "data/wordsearch-hard.284807a1ee.json", "data/make_24-easy.3a3dbf8469.json", "data/make_24-medium.77a854045c.json", "data/make_24-hard.4ebff1c207.json", "data/water_sort-easy.9e574dc373.json", "data/water_sort-medium.509dfc21c5.json", "data/water_sort-hard.32963dc200.json", "data/parking-easy.9480fc7f08.json", "data/parking-medium.c693ee2bba.json", "data/parking-hard.5fd4547205.json", "data/ice_slide-easy.ece2226f17.json", "data/ice_slide-medium.d2ba8005d0.json", "data/ice_slide-hard.f2c40c61b1.json", "data/tilt-easy.b27fb47b9c.json", "data/tilt-medium.1f0f848457.json", "data/tilt-hard.edea08f806.json", "data/legal.13449dadf2.html", "assets/supabase.ee3be8de19.js", "assets/app.c86e0b176b.js", "assets/boot.6da2b83baf.js", "index.html"];
const CACHE = "pingpong-" + VERSION;
const HASHED = /\.[0-9a-f]{10}\.[a-z0-9]+$/;

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
  if (request.mode === "navigate") event.waitUntil(dropOldCaches());
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const target = request.mode === "navigate" ? "./" : request;
    const hit = await cache.match(target, { ignoreSearch: true });
    return hit || (HASHED.test(url.pathname) && await caches.match(request, { ignoreSearch: true })) || fetch(request);
  })());
});
