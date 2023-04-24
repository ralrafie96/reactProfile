import { Box, Spinner } from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from './model'

const easeOutCircle = (x: number) => {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const DuckModel = () => {
    const refContainer = useRef<any>()
    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState<THREE.WebGLRenderer>()
    const [camera, setCamera] = useState<THREE.OrthographicCamera>()
    const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI),
        )
    )
    const [scene] = useState(new THREE.Scene())
    const [controls, setControls] = useState<OrbitControls>()

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        console.log('in duck-model')
        const { current: container } = refContainer
        console.log(container, renderer)
        if (container && !renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            // 640 -> 240
            // 8 -> 6
            const scale = scH * 0.005 + 4.8
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)

            const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
            scene.add(ambientLight)

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            setControls(controls)

            loadGLTFModel(scene, 'duck.glb', {
                receiveShadow: false,
                castShadow: false
            }).then(() => {
                animate()
                setLoading(false)
            })

            let req: any = null
            let frame = 0
            const animate = () => {
                req = requestAnimationFrame(animate)
                frame = frame <= 100 ? frame + 1 : frame

                if (frame <= 100) {
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCircle(frame / 120) * Math.PI * 20

                    camera.position.y = 10
                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                } else {
                    controls.update()
                }
                renderer.render(scene, camera)
            }

            return () => {
                cancelAnimationFrame(req)
                renderer.dispose()
            }
        }
    }, [initialCameraPosition, renderer, scene, target])

    return (
        <Box
            ref={refContainer.current}
            className='duck-model'
            mb={['-40px', '-140px', '-200px']}
            w={[280, 480, 640]}
            h={[280, 480, 640]}>
            {loading && (
                <Spinner size={'xl'} position='absolute' left='50%' top='50%'/>
            )}
            Duck?
        </Box>
    )
}

export default DuckModel