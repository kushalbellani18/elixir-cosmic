import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import * as THREE from "three";

const CosmicOrb = ({ position, color, size = 1, speed = 1 }) => {
  const meshRef = useRef(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

const ParticleField = () => {
  const particlesRef = useRef(null);
  
  const particleCount = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const NebulaMesh = () => {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[30, 30]} />
      <meshBasicMaterial transparent opacity={0.1}>
        <primitive 
          attach="map" 
          object={new THREE.CanvasTexture(createNebulaTexture())} 
        />
      </meshBasicMaterial>
    </mesh>
  );
};

const createNebulaTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
  gradient.addColorStop(0, "rgba(255, 0, 255, 0.3)");
  gradient.addColorStop(0.5, "rgba(138, 43, 226, 0.2)");
  gradient.addColorStop(1, "rgba(0, 255, 255, 0.1)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  return canvas;
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff00ff" />
      <pointLight position={[-10, -10, 5]} intensity={0.3} color="#00ffff" />
      
      <Stars
        radius={50}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      
      <ParticleField />
      <NebulaMesh />
      
      <CosmicOrb position={[-3, 1, -2]} color="#ff00ff" size={0.8} speed={0.8} />
      <CosmicOrb position={[3, -1, -3]} color="#00ffff" size={0.6} speed={1.2} />
      <CosmicOrb position={[0, 2, -4]} color="#8b5cf6" size={1} speed={0.5} />
      <CosmicOrb position={[-2, -2, -2]} color="#ff00ff" size={0.4} speed={1.5} />
      <CosmicOrb position={[2, 0, -1]} color="#00ffff" size={0.5} speed={1} />
    </>
  );
};

const CosmicScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default CosmicScene;
