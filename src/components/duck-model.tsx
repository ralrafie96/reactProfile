import { Box, Spinner } from '@chakra-ui/react'
import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from './model'
import './duck-model.css'

const easeOutCircle = (x: number) => {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const DuckModel = () => {
    const refRenderer = useRef<THREE.WebGLRenderer>()
    // const refContainer = useRef<any>()
    const [loading, setLoading] = useState(true)
    // const [renderer, setRenderer] = useState<THREE.WebGLRenderer>()

    const handleWindowResize = useCallback(() => {
        const { current: renderer } = refRenderer
        // const canvas = document.querySelector('#duck-model')
        const canvasContainer = document.querySelector('#duck-model-container')
        if (renderer && canvasContainer) {
            const scW = canvasContainer.clientWidth
            const scH = canvasContainer.clientHeight

            renderer.setSize(scW, scH)
        }
    }, [])

    useEffect(() => {
        const scene = new THREE.Scene()
        const canvas = document.querySelector('#duck-model')
        const canvasContainer = document.querySelector('#duck-model-container')

        if (!!canvas && !!canvasContainer) {
            const target = new THREE.Vector3(0, 0.2, 0)
            // const initialCameraPosition = new THREE.Vector3(
            //     2 * Math.sin(0.2 * Math.PI),
            //     1,
            //     1 * Math.cos(0.2 * Math.PI)
            // )
            const initialCameraPosition = new THREE.Vector3(
                0.8, 0.4, 0.4
            )
            const camera = new THREE.PerspectiveCamera(50, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.1, 1000)
            // camera.position.setZ(2)
            camera.position.copy(initialCameraPosition)
            camera.rotation.set(10, 10, 0)
            // camera.lookAt(target)
            const rndr = new THREE.WebGLRenderer({
                canvas,
                antialias: true,
                alpha: true
            })
            rndr.setPixelRatio(window.devicePixelRatio)
            rndr.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight)
            rndr.outputEncoding = THREE.sRGBEncoding
            refRenderer.current = rndr

            const directionalLight1 = new THREE.DirectionalLight(0xcccccc, 1)
            directionalLight1.position.set( 0, 10, 0 );
            scene.add(directionalLight1)

            const directionalLight2 = new THREE.DirectionalLight(0xcccccc, 1)
            directionalLight2.position.set( 0, -10, 0 );
            scene.add(directionalLight2)

            loadGLTFModel(scene, '/duck_small.glb', {
                receiveShadow: true,
                castShadow: true
            }).then(() => {
                animate()
                setLoading(false)
            })

            const controls = new OrbitControls(camera, rndr.domElement)
            controls.autoRotate = true
            controls.target = target

            // const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
            // const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true })
            // const torus = new THREE.Mesh(geometry, material)
            // scene.add(torus)
            let frame = 0
            const animate = () => {

                frame = frame <= 100 ? frame + 1 : frame

                if (frame <= 100) {
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCircle(frame / 120) * Math.PI * 20

                    camera.position.y = 0.5
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                } else {
                    controls.update()
                }
                rndr.render(scene, camera)
                window.requestAnimationFrame(animate)
            }
            // animate()
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
            window.removeEventListener('resize', handleWindowResize, false)
        }
    }, [handleWindowResize])
    // const [renderer, setRenderer] = useState<THREE.WebGLRenderer>()
    // const [camera, setCamera] = useState<THREE.OrthographicCamera>()
    // const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
    // const [initialCameraPosition] = useState(
    //     new THREE.Vector3(
    //         20 * Math.sin(0.2 * Math.PI),
    //         10,
    //         20 * Math.cos(0.2 * Math.PI),
    //     )
    // )
    // const [scene] = useState(new THREE.Scene())
    // const [controls, setControls] = useState<OrbitControls>()

    // /* eslint-disable react-hooks/exhaustive-deps */
    // useEffect(() => {
    //     console.log('in duck-model')
    //     const { current: container } = refContainer
    //     console.log(container, renderer)
    //     if (container && !renderer) {
    //         const scW = container.clientWidth
    //         const scH = container.clientHeight

    //         const renderer = new THREE.WebGLRenderer({
    //             antialias: true,
    //             alpha: true
    //         })
    //         renderer.setPixelRatio(window.devicePixelRatio)
    //         renderer.setSize(scW, scH)
    //         renderer.outputEncoding = THREE.sRGBEncoding
    //         container.appendChild(renderer.domElement)
    //         setRenderer(renderer)

    //         // 640 -> 240
    //         // 8 -> 6
    //         const scale = scH * 0.005 + 4.8
    //         const camera = new THREE.OrthographicCamera(
    //             -scale,
    //             scale,
    //             scale,
    //             -scale,
    //             0.01,
    //             50000
    //         )
    //         camera.position.copy(initialCameraPosition)
    //         camera.lookAt(target)
    //         setCamera(camera)

    //         const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
    //         scene.add(ambientLight)

    //         const controls = new OrbitControls(camera, renderer.domElement)
    //         controls.autoRotate = true
    //         controls.target = target
    //         setControls(controls)

    //         loadGLTFModel(scene, 'duck.glb', {
    //             receiveShadow: false,
    //             castShadow: false
    //         }).then(() => {
    //             animate()
    //             setLoading(false)
    //         })

    //         let req: any = null
    //         let frame = 0
    //         const animate = () => {
    //             req = requestAnimationFrame(animate)
    //             frame = frame <= 100 ? frame + 1 : frame

    //             if (frame <= 100) {
    //                 const p = initialCameraPosition
    //                 const rotSpeed = -easeOutCircle(frame / 120) * Math.PI * 20

    //                 camera.position.y = 10
    //                 camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
    //                 camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
    //                 camera.lookAt(target)
    //             } else {
    //                 controls.update()
    //             }
    //             renderer.render(scene, camera)
    //         }

    //         return () => {
    //             cancelAnimationFrame(req)
    //             renderer.dispose()
    //         }
    //     }
    // }, [])

    return (
        <Box
            // ref={refContainer.current}
            id='duck-model-container'
            className='duck-model'
        // w={[280, 480, 640]}
        // h={[280, 480, 640]}
        >
            <canvas id='duck-model'>
                {loading && (
                    <Spinner size={'xl'} />
                )}
            </canvas>
        </Box>
    )
}

export default DuckModel