import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const canvas = document.getElementById('starfield');
if (!canvas) console.warn('starfield canvas not found');

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1200);
camera.position.set(0, 0, 1);

const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: false,
  powerPreference: 'low-power',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);

const STAR_COUNT  = 1200;
const SPREAD      = 2000;
const FAR         = 1200;
const NEAR        = 2;
const SPEED       = 45;
const VX          = -20;
const VY          =  20;
const FADE_IN_Z   = FAR  * 0.15;
const FADE_OUT_Z  = FAR  * 0.04;

const positions  = new Float32Array(STAR_COUNT * 3);
const colors     = new Float32Array(STAR_COUNT * 3);
const baseColors = new Float32Array(STAR_COUNT * 3);

for (let i = 0; i < STAR_COUNT; i++) {
  positions[i * 3]     = (Math.random() - 0.5) * SPREAD;
  positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD;
  positions[i * 3 + 2] = -Math.random() * FAR;

  const shade = 0.55 + Math.random() * 0.45;
  baseColors[i * 3]     = shade;
  baseColors[i * 3 + 1] = shade;
  baseColors[i * 3 + 2] = shade + Math.random() * 0.05;

  colors[i * 3]     = baseColors[i * 3];
  colors[i * 3 + 1] = baseColors[i * 3 + 1];
  colors[i * 3 + 2] = baseColors[i * 3 + 2];
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

const sprite = createStarSprite();

const material = new THREE.PointsMaterial({
  size: 3.5,
  sizeAttenuation: true,
  vertexColors: true,
  map: sprite,
  alphaMap: sprite,
  transparent: true,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

const starField = new THREE.Points(geometry, material);
scene.add(starField);

let pointer   = { x: 0, y: 0 };
let camTarget = { x: 0, y: 0 };

window.addEventListener('pointermove', (e) => {
  pointer.x =  (e.clientX / window.innerWidth  - 0.5) * 2;
  pointer.y =  (e.clientY / window.innerHeight - 0.5) * 2;
}, { passive: true });

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();

function animate() {
  const dt  = clock.getDelta();
  const pos = geometry.attributes.position.array;

  const col = geometry.attributes.color.array;

  for (let i = 0; i < STAR_COUNT; i++) {
    pos[i * 3]     += VX * dt;
    pos[i * 3 + 1] += VY * dt;
    pos[i * 3 + 2] += SPEED * dt;

    if (pos[i * 3 + 2] > -NEAR) {
      pos[i * 3]     = (Math.random() - 0.5) * SPREAD;
      pos[i * 3 + 1] = (Math.random() - 0.5) * SPREAD;
      pos[i * 3 + 2] = -FAR;
    }

    const depth     = -pos[i * 3 + 2];
    const fadeIn    = Math.min(1, (FAR - depth) / FADE_IN_Z);
    const fadeOut   = Math.min(1, (depth - NEAR) / FADE_OUT_Z);
    const alpha     = Math.min(fadeIn, fadeOut);

    col[i * 3]     = baseColors[i * 3]     * alpha;
    col[i * 3 + 1] = baseColors[i * 3 + 1] * alpha;
    col[i * 3 + 2] = baseColors[i * 3 + 2] * alpha;
  }
  geometry.attributes.position.needsUpdate = true;
  geometry.attributes.color.needsUpdate    = true;

  camTarget.x += (pointer.x * 12 - camTarget.x) * 0.04;
  camTarget.y += (-pointer.y * 12 - camTarget.y) * 0.04;
  camera.position.x = camTarget.x;
  camera.position.y = camTarget.y;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

function createStarSprite() {
  const size = 64;
  const c    = document.createElement('canvas');
  c.width    = size;
  c.height   = size;
  const ctx  = c.getContext('2d');
  const grd  = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grd.addColorStop(0.0,  'rgba(255,255,255,1)');
  grd.addColorStop(0.3,  'rgba(255,255,255,0.9)');
  grd.addColorStop(0.65, 'rgba(255,255,255,0.2)');
  grd.addColorStop(1.0,  'rgba(255,255,255,0)');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}
