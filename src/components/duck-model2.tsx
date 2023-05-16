import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const DuckModel = () => {
    const gltf = useLoader(GLTFLoader, './duck_small.glb')
    return <primitive object={gltf.scene} />
}

const DuckCanvas = () => {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <DuckModel />
                <OrbitControls />
                <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]}>
                    <perspectiveCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
                </directionalLight>
                {/* <Environment preset="sunset" background /> */}
            </Suspense>
        </Canvas>
    )
}

export default DuckCanvas