self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("lab-v1").then(cache =>
      cache.addAll([
        "/laboratorio/",
        "/laboratorio/index.html",
        "/laboratorio/style.css",
        "/laboratorio/experiments/timer.html"
      ])
    )
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
