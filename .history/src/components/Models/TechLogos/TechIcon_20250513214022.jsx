import { Environment, useGLTF } from '@react-three/drei';
import React from 'react';

const TechIcon = ({model}) => {
  const scene = useGLTF(model.modelPath);
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <Environment preset="city" />
    </Canvas>
  );
}

export default TechIcon;
