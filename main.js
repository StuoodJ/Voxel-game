import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// define renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// define textures

const dirt = new THREE.TextureLoader().load('textures/dirt.png');
const stone = new THREE.TextureLoader().load('textures/stone.png');



const dirtM = new THREE.MeshBasicMaterial({map:dirt});

// function create cube mesh
function createcubemesh(xg, yg, zg, material) {
    const geometry = new THREE.BoxGeometry(xg, yg, zg);
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}
// meshes

createcubemesh(1, 1, 1, dirtM);

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