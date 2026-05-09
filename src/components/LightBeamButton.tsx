'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './LightBeamButton.module.css';

export interface LightBeamButtonProps {
  children: React.ReactNode;
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** For <a> tag behavior — href makes it render as a link */
  href?: string;
  target?: string;
  rel?: string;
  /** 3 gradient colors for the rotating beam: [start, middle, end] */
  gradientColors?: [string, string, string];
  /** Visual variant for different glow colors */
  variant?: 'primary' | 'whatsapp';
}

/**
 * LightBeamButton
 *
 * A high-performance button/link with a rotating light beam border effect.
 * Uses CSS @property for smooth gradient rotation animations.
 * Adapted for ZYROO's CSS Module design system (no Tailwind).
 */
export function LightBeamButton({
  children,
  className,
  onClick,
  href,
  target,
  rel,
  gradientColors = ['#8b5cf6', '#06b6d4', '#8b5cf6'],
  variant = 'primary',
}: LightBeamButtonProps) {
  // Build the conic gradient string from provided colors
  const gradientBg = `conic-gradient(from var(--gradient-angle), transparent 0%, ${gradientColors[0]} 40%, ${gradientColors[1]} 50%, transparent 60%, transparent 100%)`;

  // Shine overlay color matches the primary gradient color
  const shineColor = variant === 'whatsapp'
    ? 'rgba(37, 211, 102, 0.15)'
    : 'rgba(139, 92, 246, 0.15)';

  const shineBg = `radial-gradient(circle at 50% 0%, ${shineColor} 0%, transparent 60%)`;

  // Pick the variant class
  const variantClass = variant === 'whatsapp'
    ? styles.variantWhatsapp
    : styles.variantPrimary;

  const combinedClass = [
    styles.lightBeamBtn,
    variantClass,
    className || '',
  ].filter(Boolean).join(' ');

  // Shared inner content
  const innerContent = (
    <>
      <span className={styles.btnContent}>{children}</span>

      {/* Rotating gradient border */}
      <div
        className={styles.beamBorder}
        style={{ background: gradientBg } as React.CSSProperties}
      />

      {/* Solid inner bg — keeps text readable */}
      <div className={styles.beamInner} />

      {/* Hover shine glow */}
      <div
        className={styles.beamShine}
        style={{ background: shineBg }}
      />
    </>
  );

  // If href is provided, render as <a> wrapped in motion.a
  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        target={target}
        rel={rel}
        className={combinedClass}
      >
        {innerContent}
      </motion.a>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={combinedClass}
    >
      {innerContent}
    </motion.button>
  );
}

export default LightBeamButton;
