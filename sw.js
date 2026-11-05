// Copia locale dei file del sistema, così si apre anche senza connessione.
// Quando pubblichi una versione nuova di index.html, scrivi qui sotto lo stesso numero di versione (es. 1.5).
const VERSIONE = 'sistema-os-1.4';
const FILE = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSIONE).then((c) => c.addAll(FILE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((nomi) => Promise.all(nomi.filter((n) => n !== VERSIONE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// Prima prova la rete (versione più recente), se non c'è usa la copia salvata.
// Si salvano anche i visualizzatori (PDF, Excel, Word, zip) e i caratteri, così funzionano offline dopo il primo uso.
const ESTERNI = ['cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com'];
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const nostro = url.origin === location.origin;
  const esterno = ESTERNI.includes(url.hostname);
  if (!nostro && !esterno) return;
  e.respondWith(
    fetch(e.request)
      .then((r) => {
        if ((r.ok && nostro) || (esterno && (r.ok || r.type === 'opaque'))) {
          const copia = r.clone();
          caches.open(VERSIONE).then((c) => c.put(e.request, copia));
        }
        return r;
      })
      .catch(() => caches.match(e.request).then((r) => r || (nostro ? caches.match('index.html') : Response.error())))
  );
});
