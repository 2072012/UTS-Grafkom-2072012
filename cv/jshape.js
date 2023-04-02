import * as THREE from 'three';
class jShape {
    constructor() {

        const helperTexture = new THREE.TextureLoader().load('./texture/UV.png');
        const normalTexture = new THREE.TextureLoader().load('./texture/UX.png');
        const bumpTexture = new THREE.TextureLoader().load('./texture/UP.png');
        const boxMat = new THREE.MeshPhongMaterial({ map: helperTexture, normalMap: normalTexture, bumpMap: bumpTexture });
        const geo_saya = new THREE.BufferGeometry();
       
        let vertices = new Float32Array([
            3, 5, 1,
            3, -1, 1,
            1, -1, 1,
            1, 5, 1,
            3, -2, 1,
            -3, -2, 1,
            -3, -1, 1,
            -1, -1, 1,
            -1, 1, 1,
            -3, 1, 1,
            // belakang
            3, 5, -1,
            3, -1, -1,
            1, -1, -1,
            1, 5, -1,
            3, -2, -1,
            -3, -2, -1,
            -3, -1, -1,
            -1, -1, -1,
            -1, 1, -1,
            -3, 1, -1,
            //bawah
            0, -3.5, 1,
            0, -3.5, -1,
          ]);
          let uvs = new Float32Array([
            0.8, 1,
            0.8, 0.4,
            0.6, 0.4,
            0.6, 1,
            0.8, 0.3,
            0.2, 0.3,
            0.2, 0.4,
            0.4, 0.4,
            0.4, 0.6,
            0.2, 0.6,
          
            0.8, 1,
            0.8, 0.4,
            0.6, 0.4,
            0.6, 1,
            0.8, 0.3,
            0.2, 0.3,
            0.2, 0.4,
            0.4, 0.4,
            0.4, 0.6,
            0.2, 0.6,
          
            0.5, 0.15,
            0.5, 0.15,
          
            0.5, 0,
            0.5, 0,
          ]);
          geo_saya.setIndex([
            2, 0, 3,
            0, 2, 1,
            1, 5, 4,
            5, 1, 6,
            6, 8, 9,
            8, 6, 7,
          
            12, 13, 10,
            10, 11, 12,
            11, 14, 15,
            15, 16, 11,
            16, 19, 18,
            18, 17, 16,
          
            5, 9, 15,
            15, 9, 19,
          
            3, 12, 2,
            3, 13, 12,
            0, 14, 10,
            0, 4, 14,
            7, 18, 8,
            7, 17, 18,
            3, 0, 10, 
            3, 10, 13, 
            9, 8, 18,
            9, 18, 19,
            5, 14, 4,
            5, 15, 14,
            7, 2, 12,
            7, 12, 17,
          
            5, 20, 4,
            15, 14, 21,
            5, 15, 20,
            15, 21, 20,
            4, 20, 21,
            4, 21, 14,
          ]);
          geo_saya.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
          geo_saya.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
          geo_saya.computeVertexNormals();

          let mesh_saya = new THREE.Mesh(geo_saya, boxMat);
          return mesh_saya;
    }
}
export default jShape;