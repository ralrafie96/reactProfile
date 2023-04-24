import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// interface loadGLTFModelProps {
//     scene: THREE.Scene,
//     glbPath: string,
//     options: any
// }

export const loadGLTFModel = (scene: THREE.Scene, glbPath: string, options: any = { receiveShadow: true, castShadow: true }) => {

    // console.log('in loadGLTFModel')
    const { receiveShadow, castShadow } = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'duck'
                obj.position.y = 0
                obj.position.x = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow
                scene.add(obj)

                obj.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        if (child.isMesh) {
                            child.castShadow = castShadow
                            child.receiveShadow = receiveShadow
                        }
                    }
                })

                resolve(obj)
            },
            undefined,
            (error) => {
                reject(error)
            }
        )
    })
}

// export default loadGLTFModel