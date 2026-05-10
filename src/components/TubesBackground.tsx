'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import './TubesBackground.css';

/** Generate N random hex colors */
const randomColors = (count: number): string[] =>
  Array.from({ length: count }, () =>
    '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
  );

interface TubesBackgroundProps {
  /** Content to overlay on top of the canvas */
  children?: React.ReactNode;
  /** Additional class names for the outer wrapper */
  className?: string;
  /** Whether clicking randomises neon colours (default: true) */
  enableClickInteraction?: boolean;
}

/**
 * Interactive 3D neon tubes background powered by threejs-components.
 * Tubes follow the user's cursor; clicking randomises colours.
 * Falls back to a gradient if WebGL fails to load.
 */
export function TubesBackground({
  children,
  className = '',
  enableClickInteraction = true,
}: TubesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tubesRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        // webpackIgnore prevents Next.js/webpack from bundling the CDN URL
        const cdnUrl =
          'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js';
        // @ts-ignore — dynamic CDN import resolved at runtime
        const module = await import(/* webpackIgnore: true */ cdnUrl);
        const TubesCursor = module.default;

        if (!mounted || !canvasRef.current) return;

        // ZYROO brand–aligned neon palette
        const app = TubesCursor(canvasRef.current, {
          tubes: {
            colors: ['#a855f7', '#ec4899', '#6366f1'],
            lights: {
              intensity: 200,
              colors: ['#8b5cf6', '#ec4899', '#06b6d4', '#a78bfa'],
            },
          },
        });

        tubesRef.current = app;
      } catch (err) {
        console.error('TubesBackground: failed to load WebGL effect', err);
      }
    };

    initTubes();

    return () => {
      mounted = false;
    };
  }, []);

  const handleClick = useCallback(() => {
    if (!enableClickInteraction || !tubesRef.current) return;
    tubesRef.current.tubes.setColors(randomColors(3));
    tubesRef.current.tubes.setLightsColors(randomColors(4));
  }, [enableClickInteraction]);

  return (
    <div className={`tubes-wrapper ${className}`} onClick={handleClick}>
      <canvas
        ref={canvasRef}
        className="tubes-canvas"
        style={{ touchAction: 'none' }}
      />

      {children && <div className="tubes-content">{children}</div>}
    </div>
  );
}

export default TubesBackground;
