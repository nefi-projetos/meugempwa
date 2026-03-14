self.addEventListener('install', (e) => {
  console.log('[PWA] Instalado com sucesso!');
});

self.addEventListener('fetch', (e) => {
  // Isso apenas permite que o app use a internet normalmente
});
