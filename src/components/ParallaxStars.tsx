'use client';

import React, { useMemo } from 'react';

export interface ParallaxStarsProps {
  /** Speed multiplier for the animation. Higher = faster. @default 1 */
  speed?: number;
  /** Additional class name for the container */
  className?: string;
  /** Children to render on top of the stars */
  children?: React.ReactNode;
}

// Generate random box-shadow stars
const generateBoxShadows = (n: number, maxX: number = 2000, maxY: number = 2000) => {
  const shadows: string[] = [];
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    // Mix of pure white and slightly tinted stars
    const colors = ['#FFF', '#FFF', '#FFF', '#e0d4ff', '#c4b5fd'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    shadows.push(`${x}px ${y}px ${color}`);
  }
  return shadows.join(', ');
};

export function ParallaxStars({
  speed = 1,
  className = '',
  children,
}: ParallaxStarsProps) {
  // Memoize shadows so they don't regenerate on re-renders
  const shadowsSmall = useMemo(() => generateBoxShadows(700), []);
  const shadowsMedium = useMemo(() => generateBoxShadows(200), []);
  const shadowsBig = useMemo(() => generateBoxShadows(100), []);

  return (
    <div className={`parallax-stars-wrap ${className}`}>
      <style>{`
        .parallax-stars-wrap {
          position: relative;
          overflow: hidden;
        }
        .parallax-stars-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: radial-gradient(ellipse at bottom, #0c0628 0%, #030014 100%);
          pointer-events: none;
        }
        @keyframes parallaxStarScroll {
          from { transform: translateY(0px); }
          to   { transform: translateY(-2000px); }
        }
        .parallax-stars-content {
          position: relative;
          z-index: 2;
        }
      `}</style>

      {/* Deep space gradient base */}
      <div className="parallax-stars-bg" />

      {/* Stars Layer 1 — Small (1px) */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '1px',
          height: '1px',
          background: 'transparent',
          zIndex: 1,
          boxShadow: shadowsSmall,
          animation: `parallaxStarScroll ${50 / speed}s linear infinite`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '2000px',
            width: '1px',
            height: '1px',
            background: 'transparent',
            boxShadow: shadowsSmall,
          }}
        />
      </div>

      {/* Stars Layer 2 — Medium (2px) */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '2px',
          height: '2px',
          background: 'transparent',
          zIndex: 1,
          boxShadow: shadowsMedium,
          animation: `parallaxStarScroll ${100 / speed}s linear infinite`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '2000px',
            width: '2px',
            height: '2px',
            background: 'transparent',
            boxShadow: shadowsMedium,
          }}
        />
      </div>

      {/* Stars Layer 3 — Big (3px) */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '3px',
          height: '3px',
          background: 'transparent',
          zIndex: 1,
          boxShadow: shadowsBig,
          animation: `parallaxStarScroll ${150 / speed}s linear infinite`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '2000px',
            width: '3px',
            height: '3px',
            background: 'transparent',
            boxShadow: shadowsBig,
          }}
        />
      </div>

      {/* Content on top */}
      <div className="parallax-stars-content">
        {children}
      </div>
    </div>
  );
}

export default ParallaxStars;
