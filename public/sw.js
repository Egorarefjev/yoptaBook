const CACHE_NAME = 'yopta-static-v1';
const API_CACHE = 'yopta-api-v1';

const FILES_TO_PRECACHE = [
    '/',
    '/index.html',
    '/favicon.svg',
];

// Установка: базовые файлы
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_PRECACHE))
    );
    self.skipWaiting();
});

// Активация: удаление старого кеша
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => ![CACHE_NAME, API_CACHE].includes(key)).map(k => caches.delete(k))
            )
        )
    );
    self.clients.claim();
});

// Перехват запросов
self.addEventListener('fetch', event => {
    const { request } = event;

    // Не обрабатываем preflight
    if (request.method === 'OPTIONS') return;

    // Обработка SPA-роутинга
    if (request.mode === 'navigate') {
        event.respondWith(
            caches.match('/index.html').then(response => response || fetch('/index.html'))
        );
        return;
    }

    // Обработка API /api/dictionary
    if (request.url.includes('/api/dictionary')) {
        event.respondWith(
            fetch(request)
                .then(response => {
                    const cloned = response.clone();
                    caches.open(API_CACHE).then(cache => cache.put(request, cloned));
                    return response;
                })
                .catch(() => caches.match(request))
        );
        return;
    }

    // Обработка статики (кеш на лету)
    event.respondWith(
        caches.match(request).then(cachedResponse => {
            if (cachedResponse) return cachedResponse;

            return fetch(request)
                .then(networkResponse => {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(request, networkResponse.clone());
                        return networkResponse;
                    });
                })
                .catch(() =>
                    new Response('Нет интернета', {
                        headers: { 'Content-Type': 'text/plain' }
                    })
                );
        })
    );
});
