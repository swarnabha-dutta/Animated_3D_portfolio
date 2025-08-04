import React from 'react';

const  HeroLights = () => {
  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        angle={0.16}
        intensity={150}
        penumbra={0.2}
        color="#fff"
        
      />
      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        intensity={40}
        penumbra={0.2}
        color="4cc9f0"
        
      />

      <spotLight
        position={[-3, 5, 5]}
        angle={0.3}
        intensity={40}
        penumbra={1}
        color="9d4edd"
        
      />
      <primitive
      
      
      />
    
    
    </>
  );
}

export default HeroLights;
