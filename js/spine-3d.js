const elements = {
  stage: document.getElementById('spineStage'),
  canvas: document.getElementById('spineCanvas'),
  loading: document.getElementById('spineLoading'),
  loadingText: document.getElementById('spineLoadingText'),
  fallback: document.getElementById('spineFallback'),
  selectionText: document.getElementById('spineSelection')
};

if (elements.stage && elements.canvas) {
  const diagnostics = {
    state: 'waiting',
    requestedAt: null,
    readyAt: null,
    usableAfterMs: null
  };
  window.__anatomyLazyDiagnostics = diagnostics;

  async function initializeViewer() {
    if (diagnostics.state !== 'waiting') return;
    diagnostics.state = 'loading';
    diagnostics.requestedAt = performance.now();

    try {
      const [THREE, loaderModule, viewerModule, setModule] = await Promise.all([
        import('three'),
        import('./vendor/three/GLTFLoader.js'),
        import('./anatomy/anatomy-viewer.js'),
        import('./anatomy/sets/spine.js')
      ]);
      const { GLTFLoader } = loaderModule;
      const { createAnatomyViewer } = viewerModule;
      const { spineSet } = setModule;

      return fetch('assets/models/anatomy-catalog.json')
    .then((response) => {
      if (!response.ok) throw new Error(`Catálogo anatômico indisponível (${response.status})`);
      return response.json();
    })
    .then((catalog) => {
      const activeEntry = catalog.sets.find((entry) => entry.id === catalog.defaultSet && entry.enabled);
      if (!activeEntry || activeEntry.id !== spineSet.id) throw new Error('Conjunto anatômico padrão inválido');
      const initialSet = {
        ...spineSet,
        label: activeEntry.label,
        manifestUrl: activeEntry.manifest,
        expectedPartCount: activeEntry.expectedParts
      };
      const viewer = createAnatomyViewer({ THREE, GLTFLoader, elements, initialSet });
      window.__anatomyViewer = viewer;
      const readyProbe = window.setInterval(() => {
        if (!viewer.getDiagnostics().ready) return;
        window.clearInterval(readyProbe);
        diagnostics.state = 'ready';
        diagnostics.readyAt = performance.now();
        diagnostics.usableAfterMs = diagnostics.readyAt - diagnostics.requestedAt;
      }, 50);
    })
      .catch(handleInitializationError);
    } catch (error) {
      handleInitializationError(error);
    }
  }

  function handleInitializationError(error) {
      console.error('Falha ao iniciar o visualizador anatômico:', error);
      if (elements.loading) elements.loading.hidden = true;
      if (elements.fallback) elements.fallback.hidden = false;
      elements.stage.classList.add('has-error');
      diagnostics.state = 'error';
    }

  if ('IntersectionObserver' in window) {
    const proximityObserver = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      proximityObserver.disconnect();
      initializeViewer();
    }, { rootMargin: '2400px 0px', threshold: 0 });
    proximityObserver.observe(elements.stage);
  } else {
    window.addEventListener('load', initializeViewer, { once: true });
  }
}