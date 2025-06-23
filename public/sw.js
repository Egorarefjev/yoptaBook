self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    caches.keys().then(names => {
        return Promise.all(names.map(name => caches.delete(name)));
    }).then(() => self.clients.claim());
});

self.addEventListener('fetch', () => {
    return fetch(''); // ничего не кешировать
});
