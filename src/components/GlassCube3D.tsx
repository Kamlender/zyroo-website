'use client';

import React from 'react';
import styles from './GlassCube3D.module.css';

/**
 * GlassCube3D
 * 
 * A pure CSS 3D rotating glass cube with chromatic aberration
 * light-leak effects. Floats with a gentle bob animation.
 */
export default function GlassCube3D() {
  return (
    <div className={styles.wrapper}>
      {/* Ambient glow */}
      <div className={styles.glow} />

      {/* 3D Scene */}
      <div className={styles.scene}>
        <div className={styles.cube}>
          <div className={`${styles.face} ${styles.front}`} />
          <div className={`${styles.face} ${styles.back}`} />
          <div className={`${styles.face} ${styles.right}`} />
          <div className={`${styles.face} ${styles.left}`} />
          <div className={`${styles.face} ${styles.top}`} />
          <div className={`${styles.face} ${styles.bottom}`} />
        </div>
      </div>
    </div>
  );
}
