const orderedGroups = ['cervical', 'thoracic', 'lumbar', 'sacrum_coccyx'];

export const spineSet = {
  id: 'spine',
  label: 'Coluna',
  manifestUrl: 'assets/models/spine/spine-manifest.json',
  assetBaseUrl: 'assets/models/spine/',
  expectedPartCount: 25,
  orderedGroups,
  groupLabels: {
    all: 'Coluna completa',
    cervical: 'Região cervical',
    thoracic: 'Região torácica',
    lumbar: 'Região lombar',
    sacrum_coccyx: 'Sacro e cóccix'
  },
  groupColors: {
    cervical: 0xd7a17f,
    thoracic: 0x80b3a0,
    lumbar: 0xe0c58e,
    sacrum_coccyx: 0xb98779
  },
  targetHeights: {
    cervical: 0.42,
    thoracic: 0.48,
    lumbar: 0.62,
    sacrum_coccyx: 1.08
  },
  explodeOffsets: {
    cervical: [-1.1, 0.45, 0],
    thoracic: [0.72, 0.08, 0],
    lumbar: [-0.82, -0.18, 0],
    sacrum_coccyx: [0.78, -0.45, 0]
  },
  initialRotation: [0.02, -0.2, -0.025],
  camera: {
    fov: 30,
    near: 0.1,
    far: 100,
    y: 0.15,
    initialDistance: 15,
    minimumFitDistance: 12,
    fitPadding: 1.18,
    minDistance: 9,
    maxDistance: 21
  },

  getParts(manifest) {
    return orderedGroups.flatMap((group) =>
      (manifest.regions[group] || []).map((path) => ({
        id: path.split('/').pop().replace('.glb', ''),
        label: path.split('/').pop().replace('.glb', ''),
        group,
        path
      }))
    );
  },

  arrangeParts({ parts, root, camera, THREE }) {
    let cursorY = 0;
    parts.forEach((part, index) => {
      const ratio = index / Math.max(parts.length - 1, 1);
      const gap = part.groupId === 'sacrum_coccyx' ? 0.03 : 0.045;
      const y = -cursorY - part.height * 0.5;
      const x = Math.sin((ratio - 0.5) * Math.PI) * 0.08;
      const z = Math.sin(ratio * Math.PI * 2 - 0.9) * 0.16;
      part.home.set(x, y, z);
      part.object.position.copy(part.home);
      part.object.rotation.y = Math.sin(ratio * Math.PI * 1.5) * 0.035;
      cursorY += part.height * 0.76 + gap;
    });

    const bounds = new THREE.Box3().setFromObject(root);
    const center = bounds.getCenter(new THREE.Vector3());
    root.position.sub(center);
    const size = bounds.getSize(new THREE.Vector3());
    const settings = this.camera;
    const cameraDistance = Math.max(
      settings.minimumFitDistance,
      size.y / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5))) * settings.fitPadding
    );
    return { cameraDistance };
  }
};
