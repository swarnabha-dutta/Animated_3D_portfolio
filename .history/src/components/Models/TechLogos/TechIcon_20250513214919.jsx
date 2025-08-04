import { Environment, Float, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';

const TechIcon = ({model}) => {
  const scene = useGLTF(model.modelPath);
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <Environment preset="city" />
      <Float speed={5.5} rotationIntensity={3} floatIntensity={0.9}>
        <group scale={3}>
          <primitive object={scene.scene}/>
        </group>
      </Float>
    </Canvas>
  );
}

export default TechIcon;
