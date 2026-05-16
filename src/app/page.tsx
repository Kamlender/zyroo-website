'use client';

import React from 'react';
import Link from 'next/link';
import { services } from '@/lib/services';
import PricingSection from '@/components/PricingSection';
import { LightBeamButton } from '@/components/LightBeamButton';
import styles from './page.module.css';

export default function HomePage() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi! I want to discuss a web design project.'
  )}`;

  const clients = [
    {
      name: 'Raj',
      avatar: 'R',
      role: 'Business Owner',
      stars: 5,
      review: 'Maine 3 freelancers try kiye pehle, kisi ne dhang se kaam nahi kiya. ZYROO ko contact kiya toh 6 din mein site ready thi. Ab Google se directly leads aa rahi hain.',
    },
    {
      name: 'Ashish',
      avatar: 'A',
      role: 'Startup Founder',
      stars: 5,
      review: 'Humara SaaS launch hone wala tha aur landing page urgent chahiye tha. Inlogo ne 2 din mein bana diya — investor meeting mein sabne website ki tarif ki.',
    },
    {
      name: 'Anil',
      avatar: 'AN',
      role: 'Freelancer',
      stars: 4,
      review: 'Portfolio site ke liye contact kiya tha. Design acchi banayi, bas ek revision mein thoda time laga. But final output dekh ke khush ho gaya, worth it tha.',
    },
    {
      name: 'Twinkle',
      avatar: 'T',
      role: 'Shop Owner',
      stars: 5,
      review: 'Meri saree ki dukaan hai, online store banana tha. Payment gateway, WhatsApp order sab set kar diya. Pehle mahine mein hi 12 online orders aaye.',
    },
  ];

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
                href="#services"
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

          {/* Right — Code Window */}
          <div className={styles.heroRight}>
            <div className={styles.codeWindow}>
              <div className={styles.codeWindowHeader}>
                <span className={styles.codeDot} style={{ background: '#ff5f57' }}></span>
                <span className={styles.codeDot} style={{ background: '#febc2e' }}></span>
                <span className={styles.codeDot} style={{ background: '#28c840' }}></span>
              </div>
              <pre className={styles.codeBlock}>
                <code>
                  <span className={styles.codeComment}>{'// Your new website, simplified'}</span>{`\n`}
                  <span className={styles.codeKeyword}>{'const'}</span>{' site = '}<span className={styles.codeFunc}>{'createSite'}</span>{'('}{`\n`}
                  {'  name: '}<span className={styles.codeString}>{'"My Business"'}</span>{','}{`\n`}
                  {'  pages: '}<span className={styles.codeString}>{'"5"'}</span>{','}{`\n`}
                  {'  responsive: '}<span className={styles.codeKeyword}>{'true'}</span>{','}{`\n`}
                  {'  seo: '}<span className={styles.codeKeyword}>{'true'}</span>{','}{`\n`}
                  {'  analytics: '}<span className={styles.codeKeyword}>{'true'}</span>{','}{`\n`}
                  {'})'}{`\n`}{`\n`}
                  <span className={styles.codeComment}>{'// Deploy in days, not months'}</span>{`\n`}
                  <span className={styles.codeKeyword}>{'await'}</span>{' site.'}<span className={styles.codeFunc}>{'deploy'}</span>{'()'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== SERVICES — PRICING SECTION ==================== */}
      <PricingSection />

      {/* ==================== REVIEWS ==================== */}
      <section className={`section ${styles.reviews}`} id="reviews">
        <div className="container">
          <div className={styles.sectionTop}>
            <h2 className={styles.sectionHeading}>
              What <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className={styles.reviewGrid}>
            {clients.map((c, index) => (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.reviewStars}>
                  {Array.from({ length: c.stars }).map((_, i) => (
                    <span key={i} className={styles.star}>★</span>
                  ))}
                </div>
                <p className={styles.reviewText}>&ldquo;{c.review}&rdquo;</p>
                <div className={styles.reviewAuthor}>
                  <div className={styles.reviewAvatar}>{c.avatar}</div>
                  <div>
                    <h4 className={styles.reviewName}>{c.name}</h4>
                    <span className={styles.reviewRole}>{c.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className={styles.footer} id="contact">
        <div className="container">
          <div className={styles.footerBar}>
            <p>© {new Date().getFullYear()} ZYROO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
