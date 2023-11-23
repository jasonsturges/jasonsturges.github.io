import {
  Color,
  DirectionalLight,
  HalfFloatType,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  SpotLight,
  UniformsUtils,
  WebGLRenderTarget,
} from "three";
import { BokehShader } from "three/addons/shaders/BokehShader2.js";
import type { MotionData } from "./MotionData.ts";

// Scene
export const scene = new Scene();
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
