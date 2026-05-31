'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import * as THREE from 'three';
import { Sparkles, ArrowRight, Monitor, Layers, Wand2, Zap } from 'lucide-react';
import styles from './RedesignBanner3D.module.css';

export default function RedesignBanner3D() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.3, 4.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();

    // ---- Monitor Screen (purple-tinted wireframe) ----
    const screenGeo = new THREE.BoxGeometry(2.8, 1.7, 0.06, 3, 3, 1);
    const screenMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#7a2a9e'),
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    mainGroup.add(screen);

    // Display surface
    const displayGeo = new THREE.PlaneGeometry(2.6, 1.5);
    const displayMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#e8d8f4'),
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    });
    const display = new THREE.Mesh(displayGeo, displayMat);
    display.position.z = 0.04;
    mainGroup.add(display);

    // Code lines on screen
    const codeLines: THREE.Line[] = [];
    for (let i = 0; i < 7; i++) {
      const y = 0.55 - i * 0.18;
      const w = 0.3 + Math.random() * 1.6;
      const x = -1.1 + Math.random() * 0.2;
      const pts = [
        new THREE.Vector3(x, y, 0.05),
        new THREE.Vector3(x + w, y, 0.05),
      ];
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color(i % 3 === 0 ? '#7a2a9e' : i % 3 === 1 ? '#d4622a' : '#5a1a6e'),
        transparent: true,
        opacity: 0.15 + Math.random() * 0.2,
      });
      const line = new THREE.Line(geo, mat);
      codeLines.push(line);
      mainGroup.add(line);
    }

    // Stand
    const standGeo = new THREE.CylinderGeometry(0.06, 0.12, 0.65, 8);
    const standMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#7a2a9e'),
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const stand = new THREE.Mesh(standGeo, standMat);
    stand.position.y = -1.15;
    mainGroup.add(stand);

    // Base
    const baseGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.04, 16);
    const baseMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#5a1a6e'),
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = -1.47;
    mainGroup.add(base);

    // ---- Floating UI cards ----
    // Left card
    const card1Geo = new THREE.PlaneGeometry(0.6, 0.4);
    const card1Mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#d4622a'),
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    });
    const card1 = new THREE.Mesh(card1Geo, card1Mat);
    card1.position.set(-1.8, 0.4, 0.5);
    card1.rotation.y = 0.3;
    mainGroup.add(card1);

    const card1BorderGeo = new THREE.EdgesGeometry(card1Geo);
    const card1BorderMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#d4622a'),
      transparent: true,
      opacity: 0.2,
    });
    const card1Border = new THREE.LineSegments(card1BorderGeo, card1BorderMat);
    card1Border.position.copy(card1.position);
    card1Border.rotation.copy(card1.rotation);
    mainGroup.add(card1Border);

    // Right card
    const card2Geo = new THREE.PlaneGeometry(0.5, 0.35);
    const card2Mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#7a2a9e'),
      transparent: true,
      opacity: 0.06,
      side: THREE.DoubleSide,
    });
    const card2 = new THREE.Mesh(card2Geo, card2Mat);
    card2.position.set(1.7, -0.3, 0.6);
    card2.rotation.y = -0.25;
    mainGroup.add(card2);

    const card2BorderGeo = new THREE.EdgesGeometry(card2Geo);
    const card2BorderMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#7a2a9e'),
      transparent: true,
      opacity: 0.2,
    });
    const card2Border = new THREE.LineSegments(card2BorderGeo, card2BorderMat);
    card2Border.position.copy(card2.position);
    card2Border.rotation.copy(card2.rotation);
    mainGroup.add(card2Border);

    // ---- Particles (soft purple) ----
    const pCount = 60;
    const pPositions = new Float32Array(pCount * 3);
    const pSpeeds: number[] = [];
    for (let i = 0; i < pCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 8;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 1;
      pSpeeds.push(0.001 + Math.random() * 0.003);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      color: new THREE.Color('#7a2a9e'),
      transparent: true,
      opacity: 0.25,
      size: 0.03,
      sizeAttenuation: true,
      blending: THREE.NormalBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // ---- Subtle ring ----
    const ringGeo = new THREE.TorusGeometry(1.9, 0.01, 8, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#5a1a6e'),
      transparent: true,
      opacity: 0.08,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -1.47;
    scene.add(ring);

    mainGroup.rotation.y = -0.25;
    mainGroup.rotation.x = 0.04;
    scene.add(mainGroup);

    // ---- Animate ----
    const clock = new THREE.Clock();
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Gentle float
      mainGroup.position.y = Math.sin(t * 0.5) * 0.06;
      mainGroup.rotation.y = -0.25 + Math.sin(t * 0.35) * 0.05;
      mainGroup.rotation.x = 0.04 + Math.cos(t * 0.45) * 0.02;

      // Pulse code lines
      codeLines.forEach((line, idx) => {
        const mat = line.material as THREE.LineBasicMaterial;
        mat.opacity = 0.12 + Math.sin(t * 2 + idx * 0.7) * 0.1;
      });

      // Float cards
      card1.position.y = 0.4 + Math.sin(t * 0.7) * 0.08;
      card1Border.position.y = card1.position.y;
      card2.position.y = -0.3 + Math.sin(t * 0.6 + 1) * 0.06;
      card2Border.position.y = card2.position.y;

      // Particles
      const posArr = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < pCount; i++) {
        posArr[i * 3 + 1] += pSpeeds[i];
        if (posArr[i * 3 + 1] > 3) posArr[i * 3 + 1] = -3;
      }
      pGeo.attributes.position.needsUpdate = true;

      // Ring
      ring.rotation.z = t * 0.08;

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
    <section className={styles.banner} id="3d-redesign-banner">
      {/* 3D Canvas Background */}
      <div ref={canvasRef} className={styles.canvas3d} />

      {/* Overlay for readability */}
      <div className={styles.overlay} />

      {/* Ambient glows */}
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />

      <div className={`${styles.inner} container`}>
        {/* Content in a glass card */}
        <div className={styles.content}>
          <div className={styles.glassCard}>
            {/* Badge */}
            <div className={styles.badge}>
              <Sparkles size={14} />
              <span>3D Web Design</span>
            </div>

            <h2 className={styles.title}>
              Purani Website Ko
              <br />
              <span className={styles.gradientText}>3D Mein Transform</span> Karo
            </h2>

            <p className={styles.subtitle}>
              Apni boring website ko ek premium, immersive 3D experience mein upgrade karo. 
              Modern animations, glassmorphism, aur Three.js powered visuals ke saath.
            </p>

            {/* Feature pills */}
            <div className={styles.featurePills}>
              <div className={styles.pill}>
                <Monitor size={14} />
                <span>3D Visuals</span>
              </div>
              <div className={styles.pill}>
                <Layers size={14} />
                <span>Glassmorphism</span>
              </div>
              <div className={styles.pill}>
                <Wand2 size={14} />
                <span>Smooth Animations</span>
              </div>
            </div>

            {/* CTA */}
            <div className={styles.ctaRow}>
              <Link
                href="/order/website-redesign"
                className={styles.ctaButton}
                id="banner-3d-order-btn"
              >
                <span>Order Now</span>
                <Zap size={14} />
              </Link>
              <div className={styles.priceTag}>
                <span className={styles.priceLabel}>Starting at</span>
                <span className={styles.priceValue}>₹20,000</span>
              </div>
              <span className={styles.deliveryBadge}>📅 4 days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
