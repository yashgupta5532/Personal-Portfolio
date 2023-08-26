import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonImage from "../../images/moonImage.jpg";
import venusImage from "../../images/venusImage.jpg";

const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry =new THREE.SphereGeometry(3,64,64);
    const moonMaterial =new THREE.MeshStandardMaterial({map:moonTexture})
    const moon =new THREE.Mesh(moonGeometry,moonMaterial)

    const pointLight =new THREE.PointLight(0xffffff,3);  //color for object
    const lightHelper =new THREE.PointLightHelper(pointLight);
    pointLight.position.set(0, 0, 8); 

    scene.add(moon);
    scene.add(pointLight);
    scene.add(lightHelper);
    
    camera.position.z=7;
    const controls =new OrbitControls(camera,renderer.domElement);
    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y +=0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
    </div>
  );
};

export default Home;
