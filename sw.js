self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('3dcalc').then(cache => {
      return cache.addAll([
        'index.html'
      ]);
    })
  );
});
