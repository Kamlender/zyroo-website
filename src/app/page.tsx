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
    { name: 'Raj', avatar: 'R', role: 'Business Owner' },
    { name: 'Ashish', avatar: 'A', role: 'Startup Founder' },
    { name: 'Anil', avatar: 'AN', role: 'Freelancer' },
    { name: 'Twinkle', avatar: 'T', role: 'Shop Owner' },
  ];



  return (
    <>
      {/* ==================== HERO — CENTERED FULL WIDTH ==================== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <div className={styles.heroGlow1}></div>
          <div className={styles.heroGlow2}></div>
          <div className={styles.heroNoise}></div>
        </div>

        <div className={`${styles.heroInner} container`}>

          <h1 className={`${styles.heroTitle} animate-fadeInUp stagger-1`}>
            We Build
            <br />
            <span className={styles.heroHighlight}>Premium</span> Websites
          </h1>

          <p className={`${styles.heroSub} animate-fadeInUp stagger-2`}>
            From stunning landing pages to full-scale e-commerce stores — we
            bring your vision to life with pixel-perfect design and clean code.
          </p>

          <div className={`${styles.heroCtas} animate-fadeInUp stagger-3`}>
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
              💬 WhatsApp Us
            </LightBeamButton>
          </div>

          {/* Stats Ticker */}
          <div className={`${styles.statsTicker} animate-fadeInUp stagger-4`}>
            <div className={styles.tickerItem}>
              <span className={styles.tickerVal}>50+</span>
              <span className={styles.tickerLabel}>Projects</span>
            </div>
            <div className={styles.tickerDot}></div>
            <div className={styles.tickerItem}>
              <span className={styles.tickerVal}>30+</span>
              <span className={styles.tickerLabel}>Clients</span>
            </div>
            <div className={styles.tickerDot}></div>
            <div className={styles.tickerItem}>
              <span className={styles.tickerVal}>24/7</span>
              <span className={styles.tickerLabel}>Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MARQUEE STRIP ==================== */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className={styles.marqueeContent}>
              <span>Web Design</span>
              <span className={styles.marqueeStar}>★</span>
              <span>E-Commerce</span>
              <span className={styles.marqueeStar}>★</span>
              <span>Landing Pages</span>
              <span className={styles.marqueeStar}>★</span>
              <span>Business Sites</span>
              <span className={styles.marqueeStar}>★</span>
              <span>Portfolio</span>
              <span className={styles.marqueeStar}>★</span>
              <span>Redesign</span>
              <span className={styles.marqueeStar}>★</span>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== SERVICES — PRICING SECTION ==================== */}
      <PricingSection />



      {/* ==================== REVIEWS ==================== */}
      <section className={`section ${styles.reviews}`} id="reviews">
        <div className="container">
          <div className={styles.sectionTop}>
            <div className="section-tag">Reviews</div>
            <h2 className={styles.sectionHeading}>
              Our <span className="gradient-text">Happy Clients</span>
            </h2>
          </div>

          <div className={styles.reviewGrid}>
            {clients.map((c, index) => (
              <div
                key={index}
                className={`${styles.reviewCard} animate-fadeInUp stagger-${index + 1}`}
              >
                <div className={styles.reviewAvatar}>{c.avatar}</div>
                <h4 className={styles.reviewName}>{c.name}</h4>
                <span className={styles.reviewRole}>{c.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className={styles.footer} id="contact">
        <div className="container">


          {/* Founder */}
          <div className={styles.founderStrip} id="about">
            <div className={styles.founderAvatar}>PJ</div>
            <div className={styles.founderInfo}>
              <h4>Pawash Jha</h4>
              <span>Founder &amp; Lead Developer</span>
              <p>
                Passionate about creating pixel-perfect, high-performance
                websites that help businesses grow online.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <div className={styles.fLogo}>
                <div className={styles.fLogoIcon}>Z</div>
                <div className={styles.fLogoText}>
                  <span>ZYROO</span>
                  <span className={styles.fLogoSub}>Web-Design</span>
                </div>
              </div>
              <p className={styles.fDesc}>
                Premium web design studio crafting beautiful websites for
                businesses across India.
              </p>
            </div>

            <div className={styles.fCol}>
              <h5>Quick Links</h5>
              <a href="#services">Services</a>
              <a href="#reviews">Reviews</a>
            </div>

            <div className={styles.fCol}>
              <h5>Services</h5>
              {services.slice(0, 4).map((s) => (
                <Link key={s.id} href={`/order/${s.id}`}>
                  {s.shortTitle}
                </Link>
              ))}
            </div>

            <div className={styles.fCol}>
              <h5>Connect</h5>
              <a href="mailto:jha@tinytoono.in">✉️ jha@tinytoono.in</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>

          <div className={styles.footerBar}>
            <p>© {new Date().getFullYear()} ZYROO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
