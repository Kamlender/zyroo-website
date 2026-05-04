'use client';

import React, { useRef, useEffect, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface LottieCheckboxProps {
  size?: number;
}

export default function LottieCheckbox({ size = 22 }: LottieCheckboxProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    fetch('/checkbox.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!containerRef.current || !animationData) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            setHasPlayed(true);
            lottieRef.current?.goToAndPlay(0, true);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animationData, hasPlayed]);

  if (!animationData) {
    return (
      <span style={{ color: 'var(--accent-emerald)', fontWeight: 700, fontSize: size * 0.7 }}>
        ✓
      </span>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
