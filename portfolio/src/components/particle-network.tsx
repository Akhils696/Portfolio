"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import {
  BufferAttribute,
  BufferGeometry,
  LineBasicMaterial,
  LineSegments,
  Points,
  PointsMaterial,
} from "three";

const pointPositions = new Float32Array([
  -2.2, 1.3, 0.4, -1.7, 0.3, -0.8, -1.1, -1.4, 0.9, -0.4, 1.6, -1.2, 0.1, 0.2, 1.4,
  0.7, -1.5, -0.4, 1.2, 0.9, 0.2, 1.9, -0.6, 1.1, 2.2, 0.6, -0.7, 1.7, -0.9, -1.1,
  -0.9, 1.1, -1.6, 0.3, -0.8, 0.6, -2.4, -0.3, 0.2, 0.9, 1.6, -0.4,
]);

const linePositions = new Float32Array([
  -2.2, 1.3, 0.4, -1.7, 0.3, -0.8, -1.7, 0.3, -0.8, -1.1, -1.4, 0.9, -1.1, -1.4, 0.9,
  -0.4, 1.6, -1.2, -0.4, 1.6, -1.2, 0.1, 0.2, 1.4, 0.1, 0.2, 1.4, 1.2, 0.9, 0.2,
  1.2, 0.9, 0.2, 2.2, 0.6, -0.7, 2.2, 0.6, -0.7, 1.7, -0.9, -1.1, 1.7, -0.9, -1.1,
  0.7, -1.5, -0.4, 0.7, -1.5, -0.4, -0.9, 1.1, -1.6, -0.9, 1.1, -1.6, 0.3, -0.8, 0.6,
  0.3, -0.8, 0.6, -2.4, -0.3, 0.2, -2.4, -0.3, 0.2, 0.9, 1.6, -0.4,
]);

function NetworkMesh() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.24) * 0.08;
  });

  const pointGeometry = new BufferGeometry();
  pointGeometry.setAttribute("position", new BufferAttribute(pointPositions, 3));

  const lineGeometry = new BufferGeometry();
  lineGeometry.setAttribute("position", new BufferAttribute(linePositions, 3));

  return (
    <group ref={groupRef}>
      <primitive
        object={
          new Points(
            pointGeometry,
            new PointsMaterial({
              color: "#72f6ff",
              size: 0.08,
              transparent: true,
              opacity: 0.95,
            }),
          )
        }
      />
      <primitive
        object={
          new LineSegments(
            lineGeometry,
            new LineBasicMaterial({
              color: "#60d7ff",
              transparent: true,
              opacity: 0.28,
            }),
          )
        }
      />
    </group>
  );
}

export function ParticleNetwork() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.4], fov: 48 }}>
        <fog attach="fog" args={["#04050d", 4, 9]} />
        <ambientLight intensity={0.8} />
        <pointLight position={[2, 3, 3]} intensity={12} color="#5ee7ff" />
        <NetworkMesh />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} />
      </Canvas>
    </div>
  );
}
