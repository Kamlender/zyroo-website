'use client';

import React, { useRef, useEffect, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface LottieCheckboxProps {
  size?: number;
  autoplay?: boolean;
}

export default function LottieCheckbox({ size = 22, autoplay = true }: LottieCheckboxProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch('/checkbox.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => {});
  }, []);

  if (!animationData) {
    return (
      <span style={{ fontSize: size * 0.8, lineHeight: 1 }}>
        ✅
      </span>
    );
  }

  return (
    <div
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
        autoplay={autoplay}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
