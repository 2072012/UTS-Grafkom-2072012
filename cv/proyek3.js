import * as THREE from 'three';

import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import {RGBELoader} from './node_modules/three/examples/jsm/loaders/RGBELoader.js';


const scene = new THREE.Scene();
const canva = document.querySelector("#mycanvas4");
const cam = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 100);


const renderer = new THREE.WebGLRenderer({ canvas: canva });
renderer.setSize(800, 500);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 4; 

cam.position.set (2,0.8,1.5);

let controls = new OrbitControls(cam,renderer.domElement);
scene.add(controls);
const clock = new THREE.Clock();

const backgroundTexture = new THREE.TextureLoader().load('./texture/white.png');
scene.background = backgroundTexture;


let rgbeLoader = new RGBELoader();
rgbeLoader.load('model/MR_INT-005_WhiteNeons_NAD.hdr', function(texture){
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;

    let car;
    let loader = new GLTFLoader().load('model/ford_mustang_1965.glb', function(result){
    car = result.scene.children[0],
    scene.add(car);
})
})


const draw = () => {
  controls.update( clock.getDelta() );


  renderer.render(scene, cam); //function gambar ulang
  requestAnimationFrame(draw); // mengulang scene secara terus menerus
}
draw();

