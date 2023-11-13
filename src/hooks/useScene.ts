"use client";

import {
  BoxGeometry,
  Color,
  DirectionalLight,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  SpotLight,
  Vector3,
  WebGLRenderer,
} from "three";

export enum MotionType {
  ANTIGRAVITY = 0,
  CUBE = 1,
  CYLINDER = 2,
  GRAVITY = 3,
  SPHERE = 4,
  TUBE = 5,
  WAVE = 6,
}

export type MotionData = {
  animate: boolean;
  dest: Vector3;
  dir: Vector3;
  accel: number;
  speed: number;
};

// Renderer
export const renderer = new WebGLRenderer({ antialias: true });

// Scene
const scene = new Scene();
scene.background = new Color(0x000000);

// Lights
const l = new SpotLight();
l.intensity = 100;
l.castShadow = true;
l.penumbra = 1;
l.shadow.camera.near = 2;
l.shadow.camera.far = 180;
l.shadow.camera.fov = 8;
l.position.set(0, 10, 0);
scene.add(l);

const directionalLight = new DirectionalLight(0x9090aa);
directionalLight.position.set(-10, -10, -10).normalize();
scene.add(directionalLight);

// Materials
const colors = [0x548cd6, 0xd2d6dc, 0x131313];
const sphereMaterials: MeshPhongMaterial[] = [];

for (let i = 0; i < colors.length; i++) {
  const material = new MeshPhongMaterial({
    color: colors[i],
    specular: colors[i],
    shininess: 99,
  });

  sphereMaterials.push(material);
}

const planeMaterial = new MeshLambertMaterial({
  color: 0xdddddd,
});

// Geometry
const length = 8;
const bet = 0.8;
const offset = (length - 1) * bet * 0.5;
const geometry = new IcosahedronGeometry(0.3, 2);

export const models: (Mesh<IcosahedronGeometry, MeshPhongMaterial> & MotionData)[] = [];

for (let i = 0; i < length; i++) {
  for (let j = 0; j < length; j++) {
    for (let k = 0; k < length; k++) {
      const material = sphereMaterials[Math.floor(Math.random() * colors.length)];
      const mesh = new Mesh(geometry, material);
      mesh.position.set(i * bet - offset, j * bet - offset, k * bet - offset);
      mesh.castShadow = true;

      models.push(mesh as Mesh<IcosahedronGeometry, MeshPhongMaterial> & MotionData);
      scene.add(mesh);
    }
  }
}

const planeGeometry = new PlaneGeometry(118, 118);
const planeMesh = new Mesh(planeGeometry, planeMaterial);
planeMesh.position.set(0, -9.3, 0);
planeMesh.rotation.x = -(Math.PI / 2);
planeMesh.receiveShadow = true;
scene.add(planeMesh);

// Camera
const camera = new PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.001, 1000);
camera.position.set(0, 0, 10);

const getCameraFrameHandler = () => {
  let targetModel: Mesh<IcosahedronGeometry, MeshPhongMaterial>;
  let frame = 1000;
  let sceneLimit = 90;
  let target = new Vector3(0, 0, 0);
  let cs = 0;
  let gy = 0;
  let l = 0;
  let bl = 6;
  let ts = 0;
  let r = 0;
  let rp = 0.03;

  return () => {
    if (++frame > sceneLimit) {
      frame = 0;
      sceneLimit = Math.floor(Math.random() * 60 + 30);
      targetModel = models[Math.floor(Math.random() * models.length)];
      ts = 0;
      cs = 0;
      gy = Math.random() * 8 - 4;
      rp = Math.random() * 0.06 - 0.03;
      bl = Math.random() * 4 + 7;
    }

    if (ts < 0.05) ts += 0.005;
    if (cs < 0.5) cs += 0.005;

    target.x += (targetModel.position.x - target.x) * ts;
    target.y += (targetModel.position.y - target.y) * ts;
    target.z += (targetModel.position.z - target.z) * ts;

    camera.lookAt(target);

    r += rp;
    l += (bl - l) * 0.1;

    camera.position.x += (Math.cos(r) * l + targetModel.position.x - camera.position.x) * cs;
    camera.position.y += (targetModel.position.y + gy - camera.position.y) * cs;
    camera.position.z += (Math.sin(r) * l + targetModel.position.z - camera.position.z) * cs;
  };
};

const cameraFrameHandler = getCameraFrameHandler();

renderer.setAnimationLoop(() => {
  renderer.render(scene, camera);
  cameraFrameHandler();
});

const resizeHandler = (width: number, height: number) => {
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
};

export const useScene = () => {
  return {
    scene,
    camera,
    canvas: renderer.domElement,
    resizeHandler: resizeHandler,
  };
};
