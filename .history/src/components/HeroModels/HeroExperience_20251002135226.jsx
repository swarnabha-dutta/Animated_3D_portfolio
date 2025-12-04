import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, lazy } from 'react';
import { useMediaQuery } from 'react-responsive';

// Lazy load heavy 3D components
const Room = lazy(() => import('./Room').then(module => ({ default: module.Room })));
const HeroLights = lazy(() => import('./HeroLights.jsx'));
const Particles = lazy(() => import('./Particles.jsx'));

// Simple loading placeholder for 3D scene
const Loader3D = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#4338ca" wireframe />
  </mesh>
);

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
  return (
    <Canvas 
      camera={{ position: [0, 0, 15], fov: 45 }}
      // Performance optimizations
      dpr={[1, 2]} // Limit pixel ratio for better performance
      performance={{ min: 0.5 }} // Allow frame rate to drop if needed
      gl={{ 
        antialias: !isMobile, // Disable antialiasing on mobile
        powerPreference: "high-performance" 
      }}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        enableDamping // Smooth controls
        dampingFactor={0.05}
      />
      
      <Suspense fallback={<Loader3D />}>
        <HeroLights />
        {/* Only load particles on desktop */}
        {!isMobile && <Particles count={isMobile ? 50 : 100} />}
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
}

export default HeroExperience;