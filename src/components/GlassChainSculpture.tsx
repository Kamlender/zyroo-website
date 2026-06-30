'use client';

import React from 'react';
import styles from './GlassChainSculpture.module.css';

/**
 * GlassChainSculpture
 *
 * Galileo-style 3D glass sculpture — translucent cobalt-blue
 * interconnected rings and floating glass discs with refractive
 * shimmer and atmospheric glow. Pure CSS, no dependencies.
 */
export default function GlassChainSculpture() {
  return (
    <div className={styles.wrapper}>
      {/* Atmospheric glow layers */}
      <div className={styles.glowPrimary} />
      <div className={styles.glowSecondary} />

      {/* 3D Glass Scene */}
      <div className={styles.scene}>
        {/* Interconnected glass rings */}
        <div className={`${styles.ring} ${styles.ring1}`} />
        <div className={`${styles.ring} ${styles.ring2}`} />
        <div className={`${styles.ring} ${styles.ring3}`} />
        <div className={`${styles.ring} ${styles.ring4}`} />
        <div className={`${styles.ring} ${styles.ring5}`} />

        {/* Central glass blob */}
        <div className={styles.centralBlob} />

        {/* Floating glass discs */}
        <div className={`${styles.disc} ${styles.disc1}`} />
        <div className={`${styles.disc} ${styles.disc2}`} />
        <div className={`${styles.disc} ${styles.disc3}`} />
        <div className={`${styles.disc} ${styles.disc4}`} />
        <div className={`${styles.disc} ${styles.disc5}`} />
        <div className={`${styles.disc} ${styles.disc6}`} />
      </div>
    </div>
  );
}
