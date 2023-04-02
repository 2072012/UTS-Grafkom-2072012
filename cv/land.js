import * as THREE from 'three';
function Land (){
    const geo = new THREE.BoxGeometry(50,0.1,50);
    const mat = new THREE.MeshStandardMaterial({color : 0xaabbff});
    const mesh = new THREE.Mesh(geo,mat);
    mesh.position.set(0,-3.9,0);
    return mesh
}
export default Land;