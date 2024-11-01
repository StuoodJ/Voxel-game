import * as THREE from 'three';
import { range } from 'three/examples/jsm/nodes/Nodes.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// define renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// define textures

const dirt = new THREE.TextureLoader().load('/textures/dirt.png');
const stone = new THREE.TextureLoader().load('/textures/stone.png');
// define geometries

const geometry1 = new THREE.BoxGeometry(1, 1, 1);

// define texture materials

const dirtM = new THREE.MeshBasicMaterial({map:dirt});
const stoneM = new THREE.MeshBasicMaterial({map:stone});

// Render Functions
const cubes = [new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM),
               new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM),
               new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM),
               new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM),
               new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM), new THREE.Mesh(geometry1, dirtM)
];

for (let r = 0; r < 5; r++) {
    for (let i = 0; i < 5; i++) {
        scene.add(cubes[i]);
        cubes[i].position.x = i;
    }
    scene.add(cubes[r]);
    cubes[r].position.y = r;
}
// add meshes


// pre position

camera.position.z = 5;
camera.position.y = 1;
// animate

function animate() {
	renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);