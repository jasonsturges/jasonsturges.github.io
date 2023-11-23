import { camera } from "./camera.ts";
import { postprocessing } from "./postprocessing.ts";
import { renderer } from "./renderer.ts";

export const resize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  postprocessing.rtTextureDepth.setSize(window.innerWidth, window.innerHeight);
  postprocessing.rtTextureColor.setSize(window.innerWidth, window.innerHeight);
  postprocessing.bokehUniforms["textureWidth"].value = window.innerWidth;
  postprocessing.bokehUniforms["textureHeight"].value = window.innerHeight;
};

window.addEventListener("resize", resize);
