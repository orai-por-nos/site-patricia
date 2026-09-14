const host = document.getElementById('humanBodyExplorer');
let instance;

async function start() {
  if (!host || instance) return;

  try {
    const { mount } = await import('./human-body/explorer.js');
    host.innerHTML = '';
    instance = mount(host, {
      assetBase: new URL('../assets/models/human-atlas/', import.meta.url).href
    });
  } catch {
    host.innerHTML = '<div class="hbe-autoload" role="alert">Não foi possível abrir o corpo em 3D. Recarregue a página para tentar novamente.</div>';
  }
}

start();
