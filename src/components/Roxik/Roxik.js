import React, { createRef, useEffect } from 'react';
import * as THREE from 'three';
import CameraController from './CameraController';
import MotionController from './MotionController';
import { useWindowDimensions } from "../../helpers/resize";

let models = [];
let camera;
let renderer;
let scene;
let cameraController;
let motionController;

export const Roxik = () => {
  const [ width, height ] = useWindowDimensions();
  const canvas = createRef();
  const requestRef = React.useRef();

  useEffect(() => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e0e0e);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvas.current.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.001, 1000);

    camera.position.x = 2;
    camera.position.y = 2;
    camera.position.z = -2;

    cameraController = new CameraController();
    cameraController.camera = camera;

    const ambientLight = new THREE.DirectionalLight(0x9090aa);
    ambientLight.position.set(-10, 10, -10).normalize();
    scene.add(ambientLight);

    const light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(1, 1, 1);
    scene.add(light);

    const colors = [ 0x97350b, 0x266ea5, 0x00847f, 0x2f818e, 0x08917c, 0x08917c, 0x6b458c, 0x7a4526 ];
    let sphereMaterial = [];

    for (let i = 0; i < 8; i++) {
      const mat = new THREE.MeshLambertMaterial({ color: colors[i] });
      sphereMaterial.push(mat);
    }

    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xdddddd });
    cubeMaterial.wireframe = true;

    const bet = 0.7;
    const offset = (((8 - 1) * bet) * 0.5);
    const geometry = new THREE.IcosahedronBufferGeometry(0.3, 2);

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        for (let k = 0; k < 8; k++) {
          const m = sphereMaterial[Math.floor(Math.random() * 8)];
          const s = new THREE.Mesh(geometry, m);
          s.position.set(((i * bet) - offset), ((j * bet) - offset), ((k * bet) - offset));

          models.push(s);
          scene.add(s);
        }
      }
    }

    const cube = new THREE.CubeGeometry(18, 18, 18, 4, 4, 4);
    const cubeMesh = new THREE.Mesh(cube, cubeMaterial);
    scene.add(cubeMesh);

    cameraController.models = models;

    motionController = new MotionController();
    motionController.models = models;
    motionController.changeScene(MotionController.CYLINDER);
  }, []);


  useEffect(() => {
    renderer.setSize(width, 410);
    camera.aspect = width / 410;
    camera.updateProjectionMatrix();
  }, [ width, height ]);


  const animate = time => {
    requestRef.current = requestAnimationFrame(animate);

    cameraController.step();
    motionController.step();
    renderer.render(scene, camera);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once

  return (
    <div ref={canvas}></div>
  );
};

/*

export default class Roxik extends React.Component {


  /!**
   * Initialization
   *!/
  componentDidMount() {
    initialize();
    animate();


  }



  initializeListeners() {
    document.addEventListener("keydown", keydownHandler.bind(this));
  }

  /!**
   * Animation loop
   *!/
  animate() {
    requestAnimationFrame(animate.bind(this));

    cameraController.step();
    motionController.step();

    renderer.render(scene, camera);
  }

  keydownHandler(event) {
    const keyCode = event.which;

    switch (keyCode) {
      case 49:
      case 97:
        motionController.changeScene(MotionController.CYLINDER);
        break;
      case 50:
      case 98:
        motionController.changeScene(MotionController.SPHERE);
        break;
      case 51:
      case 99:
        motionController.changeScene(MotionController.CUBE);
        break;
      case 52:
      case 100:
        motionController.changeScene(MotionController.TUBE);
        break;
      case 53:
      case 101:
        motionController.changeScene(MotionController.WAVE);
        break;
      case 54:
      case 102:
        motionController.changeScene(MotionController.GRAVITY);
        break;
      case 55:
      case 103:
        motionController.changeScene(MotionController.ANTIGRAVITY);
        break;
    }
  }




}
*/
