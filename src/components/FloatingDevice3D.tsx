'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

interface FloatingDevice3DProps {
  className?: string;
}

export default function FloatingDevice3D({ className }: FloatingDevice3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.5, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ---- Create Monitor/Screen shape ----
    const monitorGroup = new THREE.Group();

    // Screen frame (rounded box-like shape)
    const screenGeo = new THREE.BoxGeometry(3.2, 2, 0.08, 4, 4, 1);
    const screenEdgeMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#8b5cf6'),
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenEdgeMat);
    monitorGroup.add(screenMesh);

    // Screen surface (the "display")
    const displayGeo = new THREE.PlaneGeometry(3.0, 1.8);
    const displayMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#0a0015'),
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide,
    });
    const displayMesh = new THREE.Mesh(displayGeo, displayMat);
    displayMesh.position.z = 0.05;
    monitorGroup.add(displayMesh);

    // Code lines on screen (glowing horizontal lines)
    const linesMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#a78bfa'),
      transparent: true,
      opacity: 0.5,
    });
    for (let i = 0; i < 8; i++) {
      const y = 0.7 - i * 0.2;
      const width = 0.4 + Math.random() * 1.8;
      const xStart = -1.3 + Math.random() * 0.3;
      const points = [
        new THREE.Vector3(xStart, y, 0.06),
        new THREE.Vector3(xStart + width, y, 0.06),
      ];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeo, linesMat.clone());
      (line.material as THREE.LineBasicMaterial).opacity = 0.2 + Math.random() * 0.4;
      monitorGroup.add(line);
    }

    // Stand
    const standGeo = new THREE.CylinderGeometry(0.08, 0.15, 0.8, 8);
    const standMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#6d28d9'),
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const standMesh = new THREE.Mesh(standGeo, standMat);
    standMesh.position.y = -1.4;
    monitorGroup.add(standMesh);

    // Base
    const baseGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.06, 16);
    const baseMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#7c3aed'),
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -1.8;
    monitorGroup.add(baseMesh);

    monitorGroup.rotation.y = -0.3;
    monitorGroup.rotation.x = 0.05;
    scene.add(monitorGroup);

    // ---- Floating particles ----
    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);
    const particleSpeeds: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 10;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
      particleSizes[i] = Math.random() * 3 + 1;
      particleSpeeds.push(0.002 + Math.random() * 0.005);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));

    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color('#a78bfa'),
      transparent: true,
      opacity: 0.4,
      size: 0.04,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ---- Glowing ring around monitor ----
    const ringGeo = new THREE.TorusGeometry(2.2, 0.015, 8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#ec4899'),
      transparent: true,
      opacity: 0.15,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -1.8;
    scene.add(ring);

    // Second ring
    const ring2Geo = new THREE.TorusGeometry(1.8, 0.01, 8, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#8b5cf6'),
      transparent: true,
      opacity: 0.1,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 2;
    ring2.position.y = -1.8;
    scene.add(ring2);

    // ---- Animation loop ----
    const clock = new THREE.Clock();

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Gentle float
      monitorGroup.position.y = Math.sin(elapsed * 0.6) * 0.12;
      monitorGroup.rotation.y = -0.3 + Math.sin(elapsed * 0.4) * 0.08;
      monitorGroup.rotation.x = 0.05 + Math.cos(elapsed * 0.5) * 0.03;

      // Pulse code lines
      monitorGroup.children.forEach((child, idx) => {
        if (child instanceof THREE.Line) {
          const mat = child.material as THREE.LineBasicMaterial;
          mat.opacity = 0.2 + Math.sin(elapsed * 2 + idx * 0.5) * 0.15;
        }
      });

      // Particles drift upward
      const posArr = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3 + 1] += particleSpeeds[i];
        if (posArr[i * 3 + 1] > 4) {
          posArr[i * 3 + 1] = -4;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Rings rotate
      ring.rotation.z = elapsed * 0.15;
      ring2.rotation.z = -elapsed * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // ---- Resize ----
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
