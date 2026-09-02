import * as THREE from 'three';
import { GLTFLoader } from './vendor/three/GLTFLoader.js';
import { createAnatomyViewer } from './anatomy/anatomy-viewer.js';
import { spineSet } from './anatomy/sets/spine.js';

const elements = {
  stage: document.getElementById('spineStage'),
  canvas: document.getElementById('spineCanvas'),
  loading: document.getElementById('spineLoading'),
  loadingText: document.getElementById('spineLoadingText'),
  fallback: document.getElementById('spineFallback'),
  selectionText: document.getElementById('spineSelection')
};

if (elements.stage && elements.canvas) {
  fetch('assets/models/anatomy-catalog.json')
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
    })
    .catch((error) => {
      console.error('Falha ao iniciar o visualizador anatômico:', error);
      if (elements.loading) elements.loading.hidden = true;
      if (elements.fallback) elements.fallback.hidden = false;
      elements.stage.classList.add('has-error');
    });
}
