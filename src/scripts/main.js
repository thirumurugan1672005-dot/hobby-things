import * as THREE from 'three' 

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHwight);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer);

