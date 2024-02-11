import type { BokehShaderUniforms } from "three/examples/jsm/shaders/BokehShader2.js";
import type { IUniform } from "three";
import {
  HalfFloatType,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  UniformsUtils,
  WebGLRenderTarget,
} from "three";
import { BokehShader } from "three/addons/shaders/BokehShader2.js";

type PostProcessingSettings = {
  scene: Scene;
  camera: OrthographicCamera;
  rtTextureDepth: WebGLRenderTarget;
  rtTextureColor: WebGLRenderTarget;
  bokehUniforms: BokehShaderUniforms;
  materialBokeh: ShaderMaterial;
  quad: Mesh;
};

const shaderSettings = {
  rings: 3,
  samples: 4,
};

export const postprocessing: PostProcessingSettings = {} as PostProcessingSettings;
postprocessing.scene = new Scene();

postprocessing.camera = new OrthographicCamera(
  window.innerWidth / -2,
  window.innerWidth / 2,
  window.innerHeight / 2,
  window.innerHeight / -2,
  -10000,
  10000,
);
postprocessing.camera.position.z = 100;
postprocessing.scene.add(postprocessing.camera);

postprocessing.rtTextureDepth = new WebGLRenderTarget(window.innerWidth, window.innerHeight, {
  type: HalfFloatType,
});
postprocessing.rtTextureColor = new WebGLRenderTarget(window.innerWidth, window.innerHeight, {
  type: HalfFloatType,
});

const bokehShader = BokehShader;

postprocessing.bokehUniforms = UniformsUtils.clone(
  bokehShader.uniforms as Partial<BokehShaderUniforms>,
) as BokehShaderUniforms;
postprocessing.bokehUniforms["tColor"].value = postprocessing.rtTextureColor.texture;
postprocessing.bokehUniforms["tDepth"].value = postprocessing.rtTextureDepth.texture;
postprocessing.bokehUniforms["textureWidth"].value = window.innerWidth;
postprocessing.bokehUniforms["textureHeight"].value = window.innerHeight;
postprocessing.bokehUniforms["focalDepth"].value = 200;
postprocessing.bokehUniforms["vignetting"].value = true;

postprocessing.materialBokeh = new ShaderMaterial({
  uniforms: { ...postprocessing.bokehUniforms } as { [key: string]: IUniform },
  vertexShader: bokehShader.vertexShader,
  fragmentShader: bokehShader.fragmentShader,
  defines: {
    RINGS: shaderSettings.rings,
    SAMPLES: shaderSettings.samples,
  },
});

postprocessing.quad = new Mesh(new PlaneGeometry(window.innerWidth, window.innerHeight), postprocessing.materialBokeh);
postprocessing.quad.position.z = -500;
postprocessing.scene.add(postprocessing.quad);
