'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const CONNECTION_DISTANCE = 2.5;
const FIELD_SIZE = 12;

function Particles({ count }: { count: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const { positions, velocities, pointsGeo, linesGeo } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * FIELD_SIZE;
      positions[i * 3 + 1] = (Math.random() - 0.5) * FIELD_SIZE;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      velocities[i * 3] = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const maxLines = count * 20;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    linesGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    return { positions, velocities, pointsGeo, linesGeo };
  }, [count]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current.x = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
        mouse.current.y = -(e.touches[0].clientY / window.innerHeight - 0.5) * 2;
      }
    };
    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('touchmove', handleTouch, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;

    const posArr = positions;

    for (let i = 0; i < count; i++) {
      posArr[i * 3] += velocities[i * 3];
      posArr[i * 3 + 1] += velocities[i * 3 + 1];
      posArr[i * 3 + 2] += velocities[i * 3 + 2];

      for (let j = 0; j < 3; j++) {
        const limit = j === 2 ? 2 : FIELD_SIZE / 2;
        if (Math.abs(posArr[i * 3 + j]) > limit) {
          velocities[i * 3 + j] *= -1;
        }
      }
    }

    pointsGeo.attributes.position.needsUpdate = true;

    groupRef.current.rotation.y += (mouse.current.x * 0.08 - groupRef.current.rotation.y) * 0.02;
    groupRef.current.rotation.x += (mouse.current.y * 0.04 - groupRef.current.rotation.x) * 0.02;

    const linePosArr = linesGeo.attributes.position.array as Float32Array;
    const lineColArr = linesGeo.attributes.color.array as Float32Array;
    let idx = 0;

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = posArr[i * 3] - posArr[j * 3];
        const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
        const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE && idx < linePosArr.length / 6) {
          const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.5;
          linePosArr[idx * 6] = posArr[i * 3];
          linePosArr[idx * 6 + 1] = posArr[i * 3 + 1];
          linePosArr[idx * 6 + 2] = posArr[i * 3 + 2];
          linePosArr[idx * 6 + 3] = posArr[j * 3];
          linePosArr[idx * 6 + 4] = posArr[j * 3 + 1];
          linePosArr[idx * 6 + 5] = posArr[j * 3 + 2];

          const r = 0.145 * alpha;
          const g = 0.39 * alpha;
          const b = 0.92 * alpha;
          lineColArr[idx * 6] = r;
          lineColArr[idx * 6 + 1] = g;
          lineColArr[idx * 6 + 2] = b;
          lineColArr[idx * 6 + 3] = r;
          lineColArr[idx * 6 + 4] = g;
          lineColArr[idx * 6 + 5] = b;
          idx++;
        }
      }
    }

    for (let i = idx * 6; i < linePosArr.length; i++) {
      linePosArr[i] = 0;
      lineColArr[i] = 0;
    }

    linesGeo.attributes.position.needsUpdate = true;
    linesGeo.attributes.color.needsUpdate = true;
    linesGeo.setDrawRange(0, idx * 2);
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={pointsGeo}>
        <pointsMaterial
          size={0.04}
          color="#3b82f6"
          transparent
          opacity={0.5}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef} geometry={linesGeo}>
        <lineBasicMaterial vertexColors transparent opacity={0.4} depthWrite={false} />
      </lineSegments>
    </group>
  );
}

export default function ParticleField() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.7 }}>
      <Canvas
        camera={{ position: [0, 0, isMobile ? 7 : 6], fov: 60 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
        style={{ background: 'transparent' }}
      >
        <Particles count={isMobile ? 50 : 100} />
      </Canvas>
    </div>
  );
}
