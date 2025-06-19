const CACHE_NAME = 'yopta-static-v1';
const API_CACHE = 'yopta-api-v1';
const FILES_TO_CACHE = [
    '/',
    '/dictionary',
    '/index.html',
    '/svg/logo.svg',
    '/styles.css',
    '/main.js',
];

// Установка
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

// Активация
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(key => ![CACHE_NAME, API_CACHE].includes(key)).map(k => caches.delete(k))
            )
        )
    );
});

// Перехват запросов
self.addEventListener('fetch', event => {
    const { request } = event;

    // 🎯 Обрабатываем запрос к API словаря
    if (request.url.includes('/api/dictionary')) {
        event.respondWith(
            fetch(request)
                .then(response => {
                    // Клонируем и кешируем ответ
                    const cloned = response.clone();
                    caches.open(API_CACHE).then(cache => cache.put(request, cloned));
                    return response;
                })
                .catch(() => caches.match(request))
        );
        return;
    }

    // 🧱 Остальное — кеш статики
    event.respondWith(
        caches.match(request).then(resp =>
                resp || fetch(request).catch(() =>
                    new Response('Нет интернета', { headers: { 'Content-Type': 'text/plain' } })
                )
        )
    );
});
