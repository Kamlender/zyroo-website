import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'ZYROO STUDIO | Premium Web Design & Development Agency India',
  },
  description:
    'ZYROO STUDIO is a premium web design and development agency based in India. We build high-converting landing pages, e-commerce stores, and custom web apps for startups and small businesses.',
  alternates: {
    canonical: 'https://tinytoono.in',
  },
};

import React from 'react';
import { LightBeamButton } from '@/components/LightBeamButton';
import SolutionSection from '@/components/SolutionSection';
import PortfolioSection from '@/components/PortfolioSection';
import ProcessSection from '@/components/ProcessSection';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function HomePage() {
  const whatsappNumber = '918278148729';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi! I want to discuss a web design project.'
  )}`;

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroOverlay}></div>


        <div className={`${styles.heroInner} container`}>
          {/* Ad Section (Left Side) */}
          <div className={styles.heroAdWrapper}>
            {/* Independence Day Offer — with full EXPIRED watermark */}
            <div className={styles.stickyAd}>
              <div className={styles.tape}></div>
              <img src="/offer.jpg" alt="Independence Day Offer - Expired" className={styles.adImage} />
              {/* Full watermark pattern like CONFIDENTIAL stamp */}
              <div className={styles.expiredWatermark}>
                <span>EXPIRED</span><span>EXPIRED</span><span>EXPIRED</span>
                <span>EXPIRED</span><span>EXPIRED</span><span>EXPIRED</span>
                <span>EXPIRED</span><span>EXPIRED</span><span>EXPIRED</span>
                <span>EXPIRED</span><span>EXPIRED</span><span>EXPIRED</span>
              </div>
            </div>
            {/* Raksha Bandhan Offer — overlapping on top as separate sticky note */}
            <div className={`${styles.stickyAd} ${styles.stickyAdOverlap}`}>
              <div className={styles.tape}></div>
              <img src="/raksha-bandhan-offer.jpg" alt="Raksha Bandhan Offer - 60% Off on All Services - Use Code RAKSHABANDHAN60 - Valid till 31 August" className={styles.adImage} />
            </div>
          </div>

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
