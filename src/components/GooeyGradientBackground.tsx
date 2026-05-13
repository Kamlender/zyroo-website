'use client';

import React, { useEffect, useRef } from 'react';
import './GooeyGradientBackground.css';

interface GooeyGradientBackgroundProps {
  /**
   * Content to render on top of the background
   */
  children?: React.ReactNode;
  /**
   * Additional class names for the container
   */
  className?: string;
}

/**
 * A mesmerizing, interactive gooey liquid gradient background with animated blobs.
 * Features:
 * - Pure CSS animations for background blobs
 * - SVG filter for the "gooey" liquid effect
 * - Interactive mouse-following blob
 * - Responsive and container-aware
 */
export function GooeyGradientBackground({ children, className = '' }: GooeyGradientBackgroundProps) {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
    let animationId: number;

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    const animate = () => {
      if (!interactiveRef.current) return;

      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;

      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className={`gooey-wrapper ${className}`}>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div ref={interactiveRef} className="interactive"></div>
        </div>
      </div>

      {/* Content Layer */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
}

export default GooeyGradientBackground;
