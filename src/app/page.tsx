'use client';

import React from 'react';
import { LightBeamButton } from '@/components/LightBeamButton';
import SolutionSection from '@/components/SolutionSection';
import PortfolioSection from '@/components/PortfolioSection';
import ProcessSection from '@/components/ProcessSection';
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

        {/* Floating Surrealist Hands */}
        <div className={styles.handLeft}>
          <img
            src="https://framerusercontent.com/images/KNhiA5A2ykNYqNkj04Hk6BVg5A.png?width=1540&height=1320"
            alt=""
            draggable={false}
          />
        </div>
        <div className={styles.handRight}>
          <img
            src="https://framerusercontent.com/images/X89VFCABCEjjZ4oLGa3PjbOmsA.png?width=1542&height=1002"
            alt=""
            draggable={false}
          />
        </div>

        <div className={`${styles.heroInner} container`}>
          <div className={styles.heroCenter}>
            <h1 className={styles.heroTitle}>
              Make Premium websites for
              <br />
              Your Business
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
        </div>
      </section>

      {/* ==================== SOLUTION ==================== */}
      <SolutionSection />

      {/* ==================== PORTFOLIO ==================== */}
      <PortfolioSection />

      {/* ==================== PROCESS ==================== */}
      <ProcessSection />

      {/* ==================== FOOTER ==================== */}
      <Footer />
    </>
  );
}
