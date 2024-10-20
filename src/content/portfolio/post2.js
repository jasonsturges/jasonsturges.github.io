import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Post2 = () => {
  const canvasRef = useRef();

  useEffect(() => {
    // Ensure this code only runs on the client-side
    if (typeof window === "undefined") return;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add a simple cube to the scene
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div>
      <p>
        This is an example article about my first portfolio project using
        Three.js. Below is an interactive 3D cube created with Three.js.
      </p>
      <canvas ref={canvasRef} />
    </div>
  );
};

// Add static metadata
Post2.metadata = {
  title: "Post with Three.js",
  date: "2024-10-19",
};

export default Post2;
