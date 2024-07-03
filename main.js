import * as THREE from 'three';
import { range } from 'three/examples/jsm/nodes/Nodes.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// define renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// define textures

const dirt = new THREE.TextureLoader().load('public/textures/dirt.png');
const stone = new THREE.TextureLoader().load('public/textures/stone.png');
// define geometries

const geometry = new THREE.BoxGeometry(1, 1, 1);

const f = new THREE.CylinderGeometry(2, 2, 4, 32, 1, false, -90, Math.PI * 2);
// define texture materials

const dirtM = new THREE.MeshBasicMaterial({map:dirt});
const stoneM = new THREE.MeshBasicMaterial({map:stone});
// define meshes

const cube = new THREE.BoxGeometry(1, 1 , 1);

// add meshes

scene.add(cube);

// pre position

camera.position.z = 5;
cube.position.x = -6;

// animate

function animate() {
    cube2.rotateX(0.01);
    cube2.rotateY(0.01);
    cube.rotateX(-0.02);
    cube.rotateY(-0.02);
    cylinder.rotateY(-0.02);
	renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);