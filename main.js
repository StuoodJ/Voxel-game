import * as THREE from 'three';

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
const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const geometry3 = new THREE.SphereGeometry(2, 32, 16);

// define texture materials

const dirtM = new THREE.MeshBasicMaterial({map:dirt});
const stoneM = new THREE.MeshBasicMaterial({map:stone});
// define meshes

const cube = new THREE.Mesh(geometry, dirtM);
const cube2 = new THREE.Mesh(geometry2, stoneM);
const sphere = new THREE.Mesh(geometry3, dirtM);

// add meshes

scene.add(cube);
scene.add(cube2);

// pre position

camera.position.z = 5;
cube2.position.x = 6;
cube.position.x = -6;
// animate

function animate() {
    cube2.rotateX(0.01);
    cube2.rotateY(0.01);
    cube.rotateX(-0.02);
    cube.rotateY(-0.02);
	renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);