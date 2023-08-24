import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

import * as THREE from 'three';

const Ball:React.FC<{icon: string, position: any}> = ({ icon, position }) => {
  console.log(position)
  const decal = useMemo(() => new THREE.TextureLoader().load(icon), [icon]);

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={2}>
      <ambientLight intensity={0.100} />
      <directionalLight position={[10, 5, 0]} />
      <mesh castShadow receiveShadow scale={1} position={position}>
        <icosahedronGeometry args={[1, 15]} />
        <meshStandardMaterial
          color='#fff8eb'
          flatShading
          polygonOffset
          polygonOffsetFactor={-5}
          
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.2}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas:React.FC<{icons: string[]}>= ({ icons }) => {
  return (
    <Canvas frameloop='always'
    shadows
    dpr={[1, 1]}
    camera={{ position: [0, -2, 5], fov: 65,}}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <group>
          {icons.map((icon, index) => {
            const row = Math.floor(index / 3);
            const col = index % 5;
            return (
              <Ball key={icon} icon={icon} position={[col * 3 - 4, row * 3 + -2,-9]} />
            );
          })}
        </group>
      </Suspense>
      <Preload all />

      <perspectiveCamera
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        position={[0, 0, 3]}
        near={0.1}
        far={100}
      >

      </perspectiveCamera>
    </Canvas>
  );
};

export default BallCanvas;