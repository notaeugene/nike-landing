import React, { Suspense, useRef } from 'react'
import { Canvas, useThree, useFrame, extend } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import styles from './HomeScreen.module.scss'

import { ReactComponent as ShapeSvg } from '../../assets/shapeBottomRight.svg'

import Content from '../Content'

extend({ OrbitControls })

const CameraControls = () => {
    const { camera, gl: { domElement } } = useThree()
  
    const controls = useRef()
    useFrame(state => controls.current.update())

    return (
      <orbitControls
        ref={controls}
        args={[camera, domElement]}
        enableZoom={false}
        maxAzimuthAngle={Math.PI / 4}
        maxPolarAngle={Math.PI}
        minAzimuthAngle={-Math.PI / 4}
        minPolarAngle={0}
      />
    )
}

const Lights = () => (
    <>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
    </>
)

const Model = ({ rotation }) => {
    const gltf = useGLTF('/scene.gltf', true)
    
    return (
        <primitive
            object={gltf.scene}
            position={[0, 0.25, 0]}
            rotation={[-0.2, 0.6, 0.2]}
            dispose={null}
        />
    )
}

const HomeScreen = () => {
    return (
        <div className={styles.root}>
            <Content />
            <Canvas
                concurrent
                colorManagement
                camera={{ fov: 25 }}
                className={styles.scene}
            >
                <CameraControls />
                <Lights />
                <Suspense fallback={null}>
                    <mesh rotation={[0, Math.PI / 2, 0]}>
                        <Model />
                    </mesh>
                </Suspense>
            </Canvas>
            <div className={styles.socialNetworks}>
                <a href="#/" className={styles.socialNetworkLink}>Twitter</a>
                <a href="#/" className={styles.socialNetworkLink}>Instagram</a>
                <a href="#/" className={styles.socialNetworkLink}>Facebook</a>
            </div>
            <ShapeSvg className={styles.shapeSvg} />
        </div>
    )
}

export default HomeScreen