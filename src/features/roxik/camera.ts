import { Clock, IcosahedronGeometry, Mesh, MeshPhongMaterial, PerspectiveCamera, Vector3 } from "three";
import { OrbitControls } from "three-stdlib";
import { models } from "./scene.ts";
import { renderer } from "./renderer.ts";

// Camera properties
let targetModel: Mesh<IcosahedronGeometry, MeshPhongMaterial>;
let speed = 0;
let offset = 0;
let distance = 6;
let targetDistance = 0;
let targetPosition = new Vector3(0, 0, 0);
let targetSpeed = 0;
let rotationAngle = 0;
let rotationSpeed = 0.03;
let timer = 0;
let isPaused = false;
const clock = new Clock();

// Camera
export const camera = new PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.001, 1000);
camera.position.set(0, 0, 10);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.update();

// Change scene
export const changeCamera = () => {
  timer = clock.elapsedTime + Math.random() + 0.5;
  targetModel = models[Math.floor(Math.random() * models.length)];
  targetSpeed = 0;
  speed = 0;
  offset = Math.random() * 8 - 4;
  rotationSpeed = Math.random() * 0.06 - 0.03;
  distance = Math.random() * 4 + 7;
};
changeCamera();

// Pause camera
export const pauseCamera = () => {
  controls.enableZoom = true;
  isPaused = true;
};

// Resume camera
export const resumeCamera = () => {
  controls.enableZoom = false;
  controls.target = targetPosition;
  clock.getDelta();
  isPaused = false;
};

// Camera frame handler
export const cameraFrameHandler = () => {
  if (isPaused) return;
  const delta = clock.getDelta() * 35;

  if (clock.elapsedTime > timer) changeCamera();
  if (targetSpeed < 0.05) targetSpeed += 0.005 * delta;
  if (speed < 0.5) speed += 0.005 * delta;

  rotationAngle += rotationSpeed * delta;
  targetDistance += (distance - targetDistance) * 0.1 * delta;

  targetPosition.x += (targetModel.position.x - targetPosition.x) * targetSpeed * delta;
  targetPosition.y += (targetModel.position.y - targetPosition.y) * targetSpeed * delta;
  targetPosition.z += (targetModel.position.z - targetPosition.z) * targetSpeed * delta;

  camera.position.x += (Math.cos(rotationAngle) * targetDistance + targetModel.position.x - camera.position.x) * speed * delta;
  camera.position.y += (targetModel.position.y + offset - camera.position.y) * speed * delta;
  camera.position.z += (Math.sin(rotationAngle) * targetDistance + targetModel.position.z - camera.position.z) * speed * delta;
  camera.lookAt(targetPosition);
};
