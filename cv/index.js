import * as THREE from 'three';
import Land from './land.js';
import jShape from './jshape.js';
import { FirstPersonControls } from './node_modules/three/examples/jsm/controls/FirstPersonControls.js';

const scene = new THREE.Scene();
const canva = document.querySelector("#jshape");
const cam = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 100);


const renderer = new THREE.WebGLRenderer({ canvas: canva });
renderer.setSize(1680, 880);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
cam.position.set (0,0,20);

let controls = new FirstPersonControls(cam,renderer.domElement);
scene.add(controls);
const clock = new THREE.Clock();


const backgroundTexture = new THREE.TextureLoader().load('./texture/background.jpg');
scene.background = backgroundTexture;

const land = Land();
land.receiveShadow = true;
scene.add(land);

const light = new THREE.SpotLight(0xffffff,1,100);

light.castShadow = true;
light.position.set(-6, 7, 0);
scene.add(light);

const light1 = new THREE.DirectionalLight(0xffffff,1,200);

light1.castShadow = true;
light1.position.set(0, -2, 3);
scene.add(light1);

const light2 = new THREE.DirectionalLight(0xffffff,1,200);

light2.castShadow = true;
light2.position.set(0, -2, -3);
scene.add(light2);


const light3 = new THREE.PointLight(0xffffff,1,50);

light3.castShadow = true;
light3.position.set(0, 0, 0);
scene.add(light3);


let mesh_saya = new jShape();
mesh_saya.receiveShadow = true;


scene.add(mesh_saya);
const draw = () => {
  controls.update( clock.getDelta() );
  mesh_saya.rotation.y += 0.01;
  // mesh_saya.rotation.x += 0.01;
  renderer.render(scene, cam); //function gambar ulang
  requestAnimationFrame(draw); // mengulang scene secara terus menerus
}
draw();
