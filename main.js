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
// function create cube mesh
function createcubemesh(name, xg, yg, zg, geometry, texture, material) {
    const geometry = new THREE.BoxGeometry(xg, yg, zg);
    const material = new THREE.MeshBasicMaterial({map:texture});
    name = new THREE.Mesh(geometry, material);
    scene.add(name);
}
// meshes

createcubemesh(cube, 1, 1, 1, geometry1, dirt, dirtM)

// pre position

camera.position.z = 5;

cube.position.x = 0;
// animate

function animate() {
    cube.rotateX(-0.02);
    cube.rotateY(-0.02);
	renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);