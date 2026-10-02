import * as THREE from 'three' 
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);
// camera 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerWidth);
camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);


// controls 
const controls = new OrbitControls(camera,renderer.domElement);

// scene 
const scene = new THREE.Scene();
const geomtry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(geomtry, material);
scene.add(cube);



function animate() {
    requestAnimationFrame(animate);
    
    renderer.render(scene, camera);
}

window.addEventListener(('resize'), () => {
    camera.aspect(window.innerWidth / window.innerHeight);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

})
animate();
