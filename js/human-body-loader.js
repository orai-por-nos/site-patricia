const host = document.getElementById('humanBodyExplorer');
const initial = host?.innerHTML;
let instance;
function wire() {
  const button = document.getElementById('humanBodyStart');
  button?.addEventListener('click', async () => {
    button.disabled = true;
    const status = document.getElementById('humanBodyStatus');
    status.textContent = 'Abrindo a experiência…';
    try {
      const { mount } = await import('./human-body/explorer.js');
      host.innerHTML = '';
      instance = mount(host, {
        assetBase: new URL('../assets/models/human-atlas/', import.meta.url).href,
        onClose() {
          instance?.destroy(); instance = undefined;
          host.innerHTML = initial;
          wire();
          document.getElementById('humanBodyStart')?.focus();
        }
      });
      requestAnimationFrame(() => host.querySelector('.hbe-close')?.focus());
    } catch {
      status.textContent = 'Não foi possível abrir a experiência. Confira sua conexão e tente novamente.';
      button.disabled = false;
    }
  });
}
if (host) wire();
