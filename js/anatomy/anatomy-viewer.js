export function createAnatomyViewer({ THREE, GLTFLoader, elements, initialSet }) {
  const { stage, canvas, loading, loadingText, fallback, selectionText } = elements;
  if (!stage || !canvas) return null;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const scene = new THREE.Scene();
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

  const root = new THREE.Group();
  scene.add(root);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const loader = new GLTFLoader();
  const clock = new THREE.Clock();
  const groupObjects = new Map();
  const parts = [];
  const interactiveMeshes = [];

  let activeSet = initialSet;
  let selectedGroup = 'all';
  let selectedPartId = null;
  let exploded = false;
  let isDragging = false;
  let pointerMoved = false;
  let previousPointer = { x: 0, y: 0 };
  let targetRotation = { x: 0.02, y: -0.2 };
  let cameraDistance = 15;
  let visible = true;
  let ready = false;
  let loadVersion = 0;
  let animationFrame = 0;

  function setLoadingMessage(message) {
    if (loadingText) loadingText.textContent = message;
  }

  function buttonGroup(button) {
    return button.dataset.spineRegion || button.dataset.anatomyGroup || 'all';
  }

  function updateSelectionUI(partName) {
    document.querySelectorAll('[data-spine-region], [data-anatomy-group]').forEach((button) => {
      const active = buttonGroup(button) === selectedGroup;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    parts.forEach((part) => {
      const active = selectedGroup === 'all' || part.groupId === selectedGroup;
      part.targetOpacity = active ? 1 : 0.16;
    });

    if (!selectionText) return;
    const count = selectedGroup === 'all'
      ? parts.length
      : parts.filter((part) => part.groupId === selectedGroup).length;
    selectionText.textContent = partName || `${activeSet.groupLabels[selectedGroup]} · ${count} ${count === 1 ? 'estrutura' : 'estruturas'}`;
  }

  function selectGroup(groupId, partId = null, partName = null) {
    selectedGroup = groupId || 'all';
    selectedPartId = partId;
    updateSelectionUI(partName);
  }

  function buildMaterial(groupId) {
    return new THREE.MeshBasicMaterial({
      color: activeSet.groupColors[groupId],
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1
    });
  }

  function disposeObject(object) {
    object.traverse((child) => {
      if (!child.isMesh) return;
      child.geometry?.dispose();
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((material) => material?.dispose());
    });
  }

  function clearSet() {
    while (root.children.length) {
      const child = root.children[root.children.length - 1];
      root.remove(child);
      disposeObject(child);
    }
    root.position.set(0, 0, 0);
    groupObjects.clear();
    parts.length = 0;
    interactiveMeshes.length = 0;
  }

  async function loadPart(partDefinition, index, total, version) {
    const gltf = await loader.loadAsync(`${activeSet.assetBaseUrl}${partDefinition.path}`);
    if (version !== loadVersion) {
      disposeObject(gltf.scene);
      return;
    }

    const partScene = gltf.scene;
    const partObject = new THREE.Group();
    const materials = [];
    partScene.traverse((child) => {
      if (!child.isMesh) return;
      const material = buildMaterial(partDefinition.group);
      child.material = material;
      child.userData.anatomyGroup = partDefinition.group;
      child.userData.anatomyPartId = partDefinition.id;
      child.userData.anatomyLabel = partDefinition.label;
      materials.push(material);
      interactiveMeshes.push(child);
    });

    const box = new THREE.Box3().setFromObject(partScene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const naturalHeight = Math.max(size.y, 0.0001);
    const targetHeight = activeSet.targetHeights[partDefinition.group];
    const scale = targetHeight / naturalHeight;
    partScene.scale.setScalar(scale);
    partScene.position.copy(center).multiplyScalar(-scale);
    partObject.add(partScene);
    partObject.userData = {
      anatomyGroup: partDefinition.group,
      anatomyPartId: partDefinition.id,
      anatomyLabel: partDefinition.label
    };

    if (!groupObjects.has(partDefinition.group)) {
      const groupObject = new THREE.Group();
      groupObject.userData.anatomyGroup = partDefinition.group;
      groupObjects.set(partDefinition.group, groupObject);
      root.add(groupObject);
    }
    groupObjects.get(partDefinition.group).add(partObject);
    parts.push({
      object: partObject,
      groupId: partDefinition.group,
      id: partDefinition.id,
      label: partDefinition.label,
      materials,
      height: targetHeight,
      home: new THREE.Vector3(),
      targetOpacity: 1
    });
    setLoadingMessage(`Carregando anatomia 3D · ${index + 1} de ${total}`);
  }

  function resize() {
    const width = Math.max(stage.clientWidth, 1);
    const height = Math.max(stage.clientHeight, 1);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function updateExplodedTargets(immediate = false) {
    groupObjects.forEach((groupObject, groupId) => {
      const values = exploded ? activeSet.explodeOffsets[groupId] : [0, 0, 0];
      const target = new THREE.Vector3(...values);
      groupObject.userData.targetPosition = target;
      if (immediate || reducedMotion) groupObject.position.copy(target);
    });
  }

  function reset() {
    exploded = false;
    const explodeButton = document.getElementById('spineExplode');
    if (explodeButton) {
      explodeButton.setAttribute('aria-pressed', 'false');
      explodeButton.textContent = 'Separar regiões';
    }
    const [x, y] = activeSet.initialRotation;
    targetRotation = { x, y };
    updateExplodedTargets();
    selectGroup('all');
  }

  function animate() {
    animationFrame = requestAnimationFrame(animate);
    if (!visible || !ready) return;
    const delta = Math.min(clock.getDelta(), 0.05);
    const ease = reducedMotion ? 1 : Math.min(delta * 7, 1);
    root.rotation.x += (targetRotation.x - root.rotation.x) * ease;
    root.rotation.y += (targetRotation.y - root.rotation.y) * ease;
    camera.position.z += (cameraDistance - camera.position.z) * ease;
    groupObjects.forEach((groupObject) => {
      const target = groupObject.userData.targetPosition || new THREE.Vector3();
      groupObject.position.lerp(target, ease);
    });
    parts.forEach((part) => {
      part.materials.forEach((material) => {
        material.opacity += (part.targetOpacity - material.opacity) * ease;
      });
    });
    if (!reducedMotion && !isDragging && selectedGroup === 'all') targetRotation.y += delta * 0.055;
    renderer.render(scene, camera);
  }

  function updatePointer(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  }

  function pickAtClientPoint(clientX, clientY) {
    updatePointer(clientX, clientY);
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(interactiveMeshes, false)[0];
    if (!hit) return null;
    const { anatomyGroup, anatomyPartId, anatomyLabel } = hit.object.userData;
    selectGroup(anatomyGroup, anatomyPartId, `${activeSet.groupLabels[anatomyGroup]} · ${anatomyLabel}`);
    return { groupId: anatomyGroup, partId: anatomyPartId, label: anatomyLabel };
  }

  function onPointerDown(event) {
    isDragging = true;
    pointerMoved = false;
    previousPointer = { x: event.clientX, y: event.clientY };
    canvas.setPointerCapture(event.pointerId);
    canvas.classList.add('is-dragging');
  }

  function onPointerMove(event) {
    if (!isDragging) return;
    const dx = event.clientX - previousPointer.x;
    const dy = event.clientY - previousPointer.y;
    if (Math.abs(dx) + Math.abs(dy) > 3) pointerMoved = true;
    targetRotation.y += dx * 0.008;
    targetRotation.x = THREE.MathUtils.clamp(targetRotation.x + dy * 0.005, -0.5, 0.5);
    previousPointer = { x: event.clientX, y: event.clientY };
  }

  function onPointerEnd(event) {
    if (!isDragging) return;
    isDragging = false;
    canvas.classList.remove('is-dragging');
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    if (pointerMoved) return;
    pickAtClientPoint(event.clientX, event.clientY);
  }

  function onWheel(event) {
    event.preventDefault();
    const settings = activeSet.camera;
    cameraDistance = THREE.MathUtils.clamp(cameraDistance + event.deltaY * 0.008, settings.minDistance, settings.maxDistance);
  }

  function onKeyDown(event) {
    const settings = activeSet.camera;
    if (event.key === 'ArrowLeft') targetRotation.y -= 0.16;
    else if (event.key === 'ArrowRight') targetRotation.y += 0.16;
    else if (event.key === 'ArrowUp') targetRotation.x = Math.max(-0.5, targetRotation.x - 0.1);
    else if (event.key === 'ArrowDown') targetRotation.x = Math.min(0.5, targetRotation.x + 0.1);
    else if (event.key === '+' || event.key === '=') cameraDistance = Math.max(settings.minDistance, cameraDistance - 0.7);
    else if (event.key === '-') cameraDistance = Math.min(settings.maxDistance, cameraDistance + 0.7);
    else return;
    event.preventDefault();
  }

  async function loadSet(nextSet) {
    const version = ++loadVersion;
    activeSet = nextSet;
    ready = false;
    stage.classList.remove('is-ready', 'has-error');
    if (loading) loading.hidden = false;
    if (fallback) fallback.hidden = true;
    clearSet();

    const settings = activeSet.camera;
    camera.fov = settings.fov;
    camera.near = settings.near;
    camera.far = settings.far;
    cameraDistance = settings.initialDistance;
    const [rx, ry, rz] = activeSet.initialRotation;
    root.rotation.set(rx, ry, rz);
    targetRotation = { x: rx, y: ry };

    try {
      resize();
      const response = await fetch(activeSet.manifestUrl);
      if (!response.ok) throw new Error(`Manifesto indisponível (${response.status})`);
      const manifest = await response.json();
      const definitions = activeSet.getParts(manifest);
      if (definitions.length !== activeSet.expectedPartCount) {
        throw new Error(`Quantidade inesperada de modelos: ${definitions.length}`);
      }
      for (let index = 0; index < definitions.length; index += 1) {
        await loadPart(definitions[index], index, definitions.length, version);
        if (version !== loadVersion) return;
      }

      const arrangement = activeSet.arrangeParts({ parts, root, camera, THREE });
      cameraDistance = arrangement.cameraDistance;
      camera.position.set(0, settings.y, cameraDistance);
      camera.lookAt(0, 0, 0);
      updateExplodedTargets(true);
      selectGroup('all');
      ready = true;
      stage.classList.add('is-ready');
      if (loading) loading.hidden = true;
    } catch (error) {
      if (version !== loadVersion) return;
      console.error(`Falha ao carregar o conjunto anatômico ${activeSet.label}:`, error);
      if (loading) loading.hidden = true;
      if (fallback) fallback.hidden = false;
      stage.classList.add('has-error');
    }
  }

  function getDiagnostics() {
    return {
      setId: activeSet.id,
      setLabel: activeSet.label,
      ready,
      loadedParts: parts.length,
      groupCounts: Object.fromEntries(activeSet.orderedGroups.map((groupId) => [groupId, parts.filter((part) => part.groupId === groupId).length])),
      selectedGroup,
      selectedPartId,
      exploded,
      targetRotation: { ...targetRotation },
      rotation: { x: root.rotation.x, y: root.rotation.y, z: root.rotation.z },
      cameraDistance,
      cameraZ: camera.position.z,
      groupPositions: Object.fromEntries([...groupObjects].map(([groupId, groupObject]) => [groupId, {
        position: groupObject.position.toArray(),
        target: (groupObject.userData.targetPosition || new THREE.Vector3()).toArray()
      }])),
      reducedMotion,
      coarsePointer
    };
  }

  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerup', onPointerEnd);
  canvas.addEventListener('pointercancel', onPointerEnd);
  canvas.addEventListener('wheel', onWheel, { passive: false });
  canvas.addEventListener('keydown', onKeyDown);
  document.querySelectorAll('[data-spine-region], [data-anatomy-group]').forEach((button) => {
    button.addEventListener('click', () => selectGroup(buttonGroup(button)));
  });
  document.getElementById('spineExplode')?.addEventListener('click', (event) => {
    exploded = !exploded;
    event.currentTarget.setAttribute('aria-pressed', String(exploded));
    event.currentTarget.textContent = exploded ? 'Reunir regiões' : 'Separar regiões';
    updateExplodedTargets();
  });
  document.getElementById('spineReset')?.addEventListener('click', reset);

  new ResizeObserver(resize).observe(stage);
  new IntersectionObserver((entries) => {
    visible = entries[0]?.isIntersecting ?? true;
    if (visible) clock.getDelta();
  }, { rootMargin: '180px' }).observe(stage);

  animate();
  loadSet(initialSet);

  return {
    loadSet,
    reset,
    selectGroup,
    pickAtClientPoint,
    getDiagnostics,
    destroy() {
      loadVersion += 1;
      cancelAnimationFrame(animationFrame);
      clearSet();
      renderer.dispose();
    }
  };
}
