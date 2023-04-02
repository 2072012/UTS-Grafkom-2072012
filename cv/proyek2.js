import * as THREE from 'three';

import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js';


const scene = new THREE.Scene();
const canva = document.querySelector("#mycanvas3");
const cam = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 100);


const renderer = new THREE.WebGLRenderer({ canvas: canva });
renderer.setSize(800, 500);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;

cam.position.set (-8,5,20);

let controls = new OrbitControls(cam,renderer.domElement);
scene.add(controls);
const clock = new THREE.Clock();


const backgroundTexture = new THREE.TextureLoader().load('./texture/white.png');
scene.background = backgroundTexture;


let room;
let loader = new GLTFLoader().load('model/arc_de_triomphe.glb', function(result){
    room = result.scene.children[0],
    scene.add(room);
})

const draw = () => {
  controls.update( clock.getDelta() );


  renderer.render(scene, cam); //function gambar ulang
  requestAnimationFrame(draw); // mengulang scene secara terus menerus
}
draw();

