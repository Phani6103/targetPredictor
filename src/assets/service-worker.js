const CACHE_NAME = 'cache-v2';
const DATA_CACHE_NAME = 'data-cache-v2';

const FILES_TO_CACHE = [
  './assets/offline.html'
];

self.addEventListener('install', (evt) => {
  console.log('service worker install', evt);
  evt.waitUntil(
      caches.open(CACHE_NAME)
        .then( cache => {
            return cache.addAll(FILES_TO_CACHE);
          }
        )
  );
  self.skipWaiting();
});

self.addEventListener('activate', evt => {
  console.log('Service Worker Activate');
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log('Service worker Removing old cache', key);
            return caches.delete(key);
          }
        })
      )
    })
  )

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorkers] Fetch', evt.request.url);
  if (evt.request.mode !== 'navigate') {
    return;
  }
  evt.respondWith(
    fetch(evt.request)
      .catch( () => {
        return caches.open(CACHE_NAME)
          .then( cache => {
            return cache.match('offline.html')
          })
      })
  )
});
