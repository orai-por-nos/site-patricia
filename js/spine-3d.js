import * as THREE from 'three';
import { GLTFLoader } from './vendor/three/GLTFLoader.js';

const stage = document.getElementById('spineStage');
const canvas = document.getElementById('spineCanvas');
const loading = document.getElementById('spineLoading');
const loadingText = document.getElementById('spineLoadingText');
const fallback = document.getElementById('spineFallback');
const selectionText = document.getElementById('spineSelection');

if (stage && canvas) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const regionLabels = {
    all: 'Coluna completa',
    cervical: 'Região cervical',
    thoracic: 'Região torácica',
    lumbar: 'Região lombar',
    sacrum_coccyx: 'Sacro e cóccix'
  };
  const regionColors = {
    cervical: 0xd7a17f,
    thoracic: 0x80b3a0,
    lumbar: 0xe0c58e,
    sacrum_coccyx: 0xb98779
  };
  const targetHeights = {
    cervical: 0.42,
    thoracic: 0.48,
    lumbar: 0.62,
    sacrum_coccyx: 1.08
  };
  const explodeOffsets = {
    cervical: new THREE.Vector3(-1.1, 0.45, 0),
    thoracic: new THREE.Vector3(0.72, 0.08, 0),
    lumbar: new THREE.Vector3(-0.82, -0.18, 0),
    sacrum_coccyx: new THREE.Vector3(0.78, -0.45, 0)
  };

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarsePointer ? 1.35 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.22;

  scene.add(new THREE.AmbientLight(0xfaf6ef, 1.7));
  scene.add(new THREE.HemisphereLight(0xfaf6ef, 0x123c34, 2.2));
  const keyLight = new THREE.DirectionalLight(0xfff4e6, 3.4);
  keyLight.position.set(5, 8, 7);
  scene.add(keyLight);
  const rimLight = new THREE.DirectionalLight(0x80b3a0, 2.2);
  rimLight.position.set(-5, 1, -4);
  scene.add(rimLight);

  const spineRoot = new THREE.Group();
  spineRoot.rotation.set(0.02, -0.2, -0.025);
  scene.add(spineRoot);

  const regionGroups = new Map();
  const parts = [];
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const loader = new GLTFLoader();
  const clock = new THREE.Clock();
  let selectedRegion = 'all';
  let exploded = false;
  let isDragging = false;
  let pointerMoved = false;
  let previousPointer = { x: 0, y: 0 };
  let targetRotation = { x: 0.02, y: -0.2 };
  let cameraDistance = 15;
  let visible = true;
  let ready = false;

  function setLoadingMessage(message) {
    if (loadingText) loadingText.textContent = message;
  }

  function setSelection(region, partName) {
    selectedRegion = region || 'all';
    document.querySelectorAll('[data-spine-region]').forEach((button) => {
      const active = button.dataset.spineRegion === selectedRegion;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    parts.forEach((part) => {
      const active = selectedRegion === 'all' || part.region === selectedRegion;
      part.targetOpacity = active ? 1 : 0.16;
    });

    if (selectionText) {
      const count = selectedRegion === 'all' ? parts.length : parts.filter((part) => part.region === selectedRegion).length;
      selectionText.textContent = partName || `${regionLabels[selectedRegion]} · ${count} ${count === 1 ? 'estrutura' : 'estruturas'}`;
    }
  }

  function buildMaterial(region) {
    return new THREE.MeshBasicMaterial({
      color: regionColors[region],
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1
    });
  }

  async function loadPart(region, relativePath, index, total) {
    const gltf = await loader.loadAsync(`assets/models/spine/${relativePath}`);
    const partObject = gltf.scene;
    const label = relativePath.split('/').pop().replace('.glb', '');
    const group = new THREE.Group();
    const materials = [];

    partObject.traverse((child) => {
      if (!child.isMesh) return;
      const material = buildMaterial(region);
      child.material = material;
      child.userData.spineRegion = region;
      child.userData.spineLabel = label;
      materials.push(material);
    });

    const box = new THREE.Box3().setFromObject(partObject);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const naturalHeight = Math.max(size.y, 0.0001);
    const scale = targetHeights[region] / naturalHeight;
    partObject.scale.setScalar(scale);
    // O centro do GLB está nas unidades originais. A translação precisa ser
    // escalada junto com a geometria; caso contrário, peças exportadas longe
    // da origem ficam fora da câmera mesmo depois de normalizadas.
    partObject.position.copy(center).multiplyScalar(-scale);
    group.add(partObject);
    group.userData = { region, label };

    if (!regionGroups.has(region)) {
      const regionGroup = new THREE.Group();
      regionGroup.userData.region = region;
      regionGroups.set(region, regionGroup);
      spineRoot.add(regionGroup);
    }
    regionGroups.get(region).add(group);
    parts.push({
      group,
      region,
      label,
      materials,
      height: targetHeights[region],
      home: new THREE.Vector3(),
      targetOpacity: 1
    });
    setLoadingMessage(`Carregando anatomia 3D · ${index + 1} de ${total}`);
  }

  function arrangeParts() {
    let cursorY = 0;
    parts.forEach((part, index) => {
      const ratio = index / Math.max(parts.length - 1, 1);
      const gap = part.region === 'sacrum_coccyx' ? 0.03 : 0.045;
      const y = -cursorY - part.height * 0.5;
      const x = Math.sin((ratio - 0.5) * Math.PI) * 0.08;
      const z = Math.sin(ratio * Math.PI * 2 - 0.9) * 0.16;
      part.home.set(x, y, z);
      part.group.position.copy(part.home);
      part.group.rotation.y = Math.sin(ratio * Math.PI * 1.5) * 0.035;
      cursorY += part.height * 0.76 + gap;
    });

    const bounds = new THREE.Box3().setFromObject(spineRoot);
    const center = bounds.getCenter(new THREE.Vector3());
    spineRoot.position.sub(center);
    const size = bounds.getSize(new THREE.Vector3());
    cameraDistance = Math.max(12, size.y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5))) * 1.18);
    camera.position.set(0, 0.15, cameraDistance);
    camera.lookAt(0, 0, 0);
  }

  function resize() {
    const width = Math.max(stage.clientWidth, 1);
    const height = Math.max(stage.clientHeight, 1);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function updateExplodedTargets(immediate = false) {
    regionGroups.forEach((group, region) => {
      const target = exploded ? explodeOffsets[region] : new THREE.Vector3();
      group.userData.targetPosition = target;
      if (immediate || reducedMotion) group.position.copy(target);
    });
  }

  function animate() {
    requestAnimationFrame(animate);
    if (!visible || !ready) return;
    const delta = Math.min(clock.getDelta(), 0.05);
    const ease = reducedMotion ? 1 : Math.min(delta * 7, 1);
    spineRoot.rotation.x += (targetRotation.x - spineRoot.rotation.x) * ease;
    spineRoot.rotation.y += (targetRotation.y - spineRoot.rotation.y) * ease;
    camera.position.z += (cameraDistance - camera.position.z) * ease;

    regionGroups.forEach((group) => {
      const target = group.userData.targetPosition || new THREE.Vector3();
      group.position.lerp(target, ease);
    });

    parts.forEach((part) => {
      part.materials.forEach((material) => {
        material.opacity += (part.targetOpacity - material.opacity) * ease;
      });
    });

    if (!reducedMotion && !isDragging && selectedRegion === 'all') {
      targetRotation.y += delta * 0.055;
    }
    renderer.render(scene, camera);
  }

  function updatePointer(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }

  canvas.addEventListener('pointerdown', (event) => {
    isDragging = true;
    pointerMoved = false;
    previousPointer = { x: event.clientX, y: event.clientY };
    canvas.setPointerCapture(event.pointerId);
    canvas.classList.add('is-dragging');
  });

  canvas.addEventListener('pointermove', (event) => {
    if (!isDragging) return;
    const dx = event.clientX - previousPointer.x;
    const dy = event.clientY - previousPointer.y;
    if (Math.abs(dx) + Math.abs(dy) > 3) pointerMoved = true;
    targetRotation.y += dx * 0.008;
    targetRotation.x = THREE.MathUtils.clamp(targetRotation.x + dy * 0.005, -0.5, 0.5);
    previousPointer = { x: event.clientX, y: event.clientY };
  });

  function endDrag(event) {
    if (!isDragging) return;
    isDragging = false;
    canvas.classList.remove('is-dragging');
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    if (pointerMoved) return;
    updatePointer(event);
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObject(spineRoot, true);
    const hit = hits.find((item) => item.object.userData.spineRegion);
    if (hit) setSelection(hit.object.userData.spineRegion, `${regionLabels[hit.object.userData.spineRegion]} · ${hit.object.userData.spineLabel}`);
  }

  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);
  canvas.addEventListener('wheel', (event) => {
    event.preventDefault();
    cameraDistance = THREE.MathUtils.clamp(cameraDistance + event.deltaY * 0.008, 9, 21);
  }, { passive: false });

  canvas.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') targetRotation.y -= 0.16;
    else if (event.key === 'ArrowRight') targetRotation.y += 0.16;
    else if (event.key === 'ArrowUp') targetRotation.x = Math.max(-0.5, targetRotation.x - 0.1);
    else if (event.key === 'ArrowDown') targetRotation.x = Math.min(0.5, targetRotation.x + 0.1);
    else if (event.key === '+' || event.key === '=') cameraDistance = Math.max(9, cameraDistance - 0.7);
    else if (event.key === '-') cameraDistance = Math.min(21, cameraDistance + 0.7);
    else return;
    event.preventDefault();
  });

  document.querySelectorAll('[data-spine-region]').forEach((button) => {
    button.addEventListener('click', () => setSelection(button.dataset.spineRegion));
  });

  document.getElementById('spineExplode')?.addEventListener('click', (event) => {
    exploded = !exploded;
    event.currentTarget.setAttribute('aria-pressed', String(exploded));
    event.currentTarget.textContent = exploded ? 'Reunir regiões' : 'Separar regiões';
    updateExplodedTargets();
  });

  document.getElementById('spineReset')?.addEventListener('click', () => {
    exploded = false;
    const explodeButton = document.getElementById('spineExplode');
    if (explodeButton) {
      explodeButton.setAttribute('aria-pressed', 'false');
      explodeButton.textContent = 'Separar regiões';
    }
    targetRotation = { x: 0.02, y: -0.2 };
    updateExplodedTargets();
    setSelection('all');
  });

  new ResizeObserver(resize).observe(stage);
  new IntersectionObserver((entries) => {
    visible = entries[0]?.isIntersecting ?? true;
    if (visible) clock.getDelta();
  }, { rootMargin: '180px' }).observe(stage);

  async function init() {
    try {
      resize();
      const response = await fetch('assets/models/spine/spine-manifest.json');
      if (!response.ok) throw new Error(`Manifesto indisponível (${response.status})`);
      const manifest = await response.json();
      const orderedRegions = ['cervical', 'thoracic', 'lumbar', 'sacrum_coccyx'];
      const files = orderedRegions.flatMap((region) => (manifest.regions[region] || []).map((path) => ({ region, path })));
      if (files.length !== 25) throw new Error(`Quantidade inesperada de modelos: ${files.length}`);

      for (let index = 0; index < files.length; index += 1) {
        await loadPart(files[index].region, files[index].path, index, files.length);
      }

      arrangeParts();
      updateExplodedTargets(true);
      setSelection('all');
      ready = true;
      stage.classList.add('is-ready');
      if (loading) loading.hidden = true;
      animate();
    } catch (error) {
      console.error('Falha ao carregar a coluna 3D:', error);
      if (loading) loading.hidden = true;
      if (fallback) fallback.hidden = false;
      stage.classList.add('has-error');
    }
  }

  init();
}
