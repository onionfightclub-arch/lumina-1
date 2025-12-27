
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { 
  Float, 
  MeshDistortMaterial, 
  Sphere, 
  Torus, 
  MeshWobbleMaterial, 
  Environment, 
  Octahedron, 
  ContactShadows,
  PresentationControls
} from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveShapeProps {
  position: [number, number, number];
  color: string;
  type: 'sphere' | 'torus' | 'octahedron';
  scale?: number;
}

const InteractiveShape: React.FC<InteractiveShapeProps> = ({ position, color, type, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = Math.cos(t / 4) / 2;
      meshRef.current.rotation.y = Math.sin(t / 4) / 2;
      meshRef.current.rotation.z += active ? 0.05 : 0.005;
    }
  });

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHovered(false);
    document.body.style.cursor = 'default';
  };

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setActive(!active);
  };

  const targetScale = (hovered ? 1.2 : 1) * (active ? 1.4 : 1) * scale;

  return (
    <Float 
      speed={active ? 6 : 2} 
      rotationIntensity={hovered ? 2 : 0.5} 
      floatIntensity={active ? 4 : 1}
    >
      {type === 'sphere' && (
        <Sphere 
          ref={meshRef as any}
          args={[1, 128, 128]} 
          position={position}
          scale={targetScale}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={handleClick}
        >
          <MeshDistortMaterial
            color={active ? '#f59e0b' : (hovered ? '#818cf8' : color)}
            speed={active ? 5 : 2}
            distort={active ? 0.7 : 0.4}
            radius={1}
            roughness={0.1}
            metalness={1}
            emissive={active ? '#7c3aed' : '#000000'}
            emissiveIntensity={active ? 0.5 : 0}
          />
        </Sphere>
      )}

      {type === 'torus' && (
        <Torus 
          ref={meshRef as any}
          args={[0.6, 0.18, 16, 100]} 
          position={position}
          scale={targetScale}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={handleClick}
        >
          <MeshWobbleMaterial 
            color={active ? '#10b981' : (hovered ? '#f43f5e' : color)} 
            speed={active ? 8 : (hovered ? 4 : 1)} 
            factor={active ? 1.5 : (hovered ? 0.8 : 0.3)} 
            metalness={0.9} 
            roughness={0.1} 
          />
        </Torus>
      )}

      {type === 'octahedron' && (
        <Octahedron 
          ref={meshRef as any}
          args={[0.8, 0]} 
          position={position}
          scale={targetScale}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={handleClick}
        >
          <meshStandardMaterial 
            color={active ? '#ffffff' : (hovered ? '#ec4899' : color)} 
            wireframe={active}
            metalness={active ? 0 : 0.9}
            roughness={0.1}
            emissive={active ? '#ffffff' : '#000000'}
            emissiveIntensity={active ? 1 : 0}
          />
        </Octahedron>
      )}
    </group>
  );
};

const SceneContent: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (-state.mouse.y * Math.PI) / 10, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <InteractiveShape type="sphere" position={[0, 0, 0]} color="#4f46e5" scale={1.2} />
      <InteractiveShape type="torus" position={[3.5, 1.5, -2]} color="#8b5cf6" scale={0.7} />
      <InteractiveShape type="octahedron" position={[-3.5, -1, -1.5]} color="#ec4899" scale={0.6} />
      <InteractiveShape type="torus" position={[-3, 2.5, -3]} color="#6366f1" scale={0.4} />
      <InteractiveShape type="sphere" position={[3, -2, -2.5]} color="#d1d5db" scale={0.3} />
      
      <ContactShadows position={[0, -4, 0]} opacity={0.5} scale={20} blur={2.5} far={5} />
    </group>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#f472b6" />
      <spotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={1} color="#ffffff" />
      
      <PresentationControls
        global
        config={{ mass: 1, tension: 200 }}
        snap={{ mass: 2, tension: 400 }}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 2, Math.PI / 2]}
      >
        <SceneContent />
      </PresentationControls>
      
      <Environment preset="night" />
    </Canvas>
  );
};

export default ThreeScene;
