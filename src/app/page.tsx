'use client';

import React from 'react';
import { LightBeamButton } from '@/components/LightBeamButton';
import GlassCube3D from '@/components/GlassCube3D';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function HomePage() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi! I want to discuss a web design project.'
  )}`;

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroOverlay}></div>

        <div className={`${styles.heroInner} container`}>
          {/* Left — Text Content */}
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              Make Your Business
              <br />
              <span className={styles.heroHighlight}>Invincible</span>
            </h1>

            <div
              className={styles.heroCtas}
              style={{ pointerEvents: 'auto' }}
            >
              <LightBeamButton
                href="/services"
                variant="primary"
                gradientColors={['#8b5cf6', '#06b6d4', '#8b5cf6']}
              >
                Explore Services
              </LightBeamButton>
              <LightBeamButton
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                gradientColors={['#25d366', '#128c7e', '#25d366']}
              >
                WhatsApp Us
              </LightBeamButton>
            </div>

            {/* Stats Ticker */}
            <div className={styles.statsTicker}>
              <div className={styles.tickerItem}>
                <span className={styles.tickerVal}>47+</span>
                <span className={styles.tickerLabel}>Projects</span>
              </div>
              <div className={styles.tickerDot}></div>
              <div className={styles.tickerItem}>
                <span className={styles.tickerVal}>32</span>
                <span className={styles.tickerLabel}>Clients</span>
              </div>
              <div className={styles.tickerDot}></div>
              <div className={styles.tickerItem}>
                <span className={styles.tickerVal}>2 yrs</span>
                <span className={styles.tickerLabel}>Experience</span>
              </div>
            </div>
          </div>

          {/* Right — 3D Glass Cube */}
          <div className={styles.heroRight}>
            <GlassCube3D />
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <Footer />
    </>
  );
}

