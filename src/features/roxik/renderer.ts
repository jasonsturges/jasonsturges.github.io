import { PCFSoftShadowMap, ShaderMaterial, WebGLRenderer } from "three";
import { BokehDepthShader } from "three/addons/shaders/BokehShader2.js";
import { camera, cameraFrameHandler } from "./camera.ts";
import { postprocessing } from "./postprocessing.ts";
import { motionFrameHandler } from "./motion.ts";
import { scene } from "./scene.ts";

const el = document.querySelector<HTMLCanvasElement>("canvas");
export const renderer = new WebGLRenderer({ antialias: true, canvas: el! });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFSoftShadowMap;
renderer.setPixelRatio(window.devicePixelRatio);

const depthShader = BokehDepthShader;

const materialDepth = new ShaderMaterial({
  uniforms: depthShader.uniforms,
  vertexShader: depthShader.vertexShader,
  fragmentShader: depthShader.fragmentShader,
});

materialDepth.uniforms["mNear"].value = 2;
materialDepth.uniforms["mFar"].value = 10;

renderer.setAnimationLoop(() => {
  cameraFrameHandler();
  motionFrameHandler();
  // renderer.render(scene, camera);
  // postprocessing.composer.render( 0.1 );

  renderer.clear();

  // render scene into texture
  renderer.setRenderTarget(postprocessing.rtTextureColor);
  renderer.clear();
  renderer.render(scene, camera);

  // render depth into texture
  scene.overrideMaterial = materialDepth;
  renderer.setRenderTarget(postprocessing.rtTextureDepth);
  renderer.clear();
  renderer.render(scene, camera);
  scene.overrideMaterial = null;

  // render bokeh composite
  renderer.setRenderTarget(null);
  renderer.render(postprocessing.scene, postprocessing.camera);
});
