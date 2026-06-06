'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import styles from './about.module.css';

export default function AboutPage() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi! I want to discuss a web design project.'
  )}`;

  return (
    <>
      <div className={styles.aboutPage}>
        <div className="container">
          {/* Hero */}
          <div className={styles.header}>
            <span className={styles.badge}>🚀 About Us</span>
            <h1 className={styles.title}>
              We Build Websites That{' '}
              <span className={styles.highlight}>Actually Work</span>
            </h1>
            <p className={styles.subtitle}>
              ZYROO is a web design studio based in India. We help small
              businesses, startups, and individuals build professional,
              fast, and beautiful websites — without the agency price tag.
            </p>
          </div>

          {/* Stats */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>47+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>32</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>2+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>3–10</span>
              <span className={styles.statLabel}>Days Delivery</span>
            </div>
          </div>

          {/* What We Do */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>What We Do</h2>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎯</div>
                <h3 className={styles.featureTitle}>Landing Pages</h3>
                <p className={styles.featureDesc}>
                  Conversion-focused single page designs for product launches, ad campaigns, and more.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🏪</div>
                <h3 className={styles.featureTitle}>Business Websites</h3>
                <p className={styles.featureDesc}>
                  Multi-page professional websites with SEO, contact forms, and Google Analytics.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🛒</div>
                <h3 className={styles.featureTitle}>E-Commerce</h3>
                <p className={styles.featureDesc}>
                  Online stores with payment gateways, inventory management, and order tracking.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🏥</div>
                <h3 className={styles.featureTitle}>Hospital & Clinic</h3>
                <p className={styles.featureDesc}>
                  Doctor profiles, appointment booking, patient portals — complete healthcare web solutions.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🧊</div>
                <h3 className={styles.featureTitle}>3D Web Design</h3>
                <p className={styles.featureDesc}>
                  Immersive 3D visuals with Three.js, glassmorphism, and smooth animations.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3 className={styles.featureTitle}>Custom Web Apps</h3>
                <p className={styles.featureDesc}>
                  Dashboards, booking systems, and custom tools — built from scratch.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Why Choose ZYROO?</h2>
            <div className={styles.whyGrid}>
              <div className={styles.whyCard}>
                <span className={styles.whyNumber}>01</span>
                <h3 className={styles.whyTitle}>Fair Pricing</h3>
                <p className={styles.whyDesc}>
                  No hidden charges, no surprise bills. You know exactly what you&apos;re paying for upfront.
                </p>
              </div>
              <div className={styles.whyCard}>
                <span className={styles.whyNumber}>02</span>
                <h3 className={styles.whyTitle}>Quick Delivery</h3>
                <p className={styles.whyDesc}>
                  Most projects delivered within 3–10 days. Need it faster? We offer rush delivery.
                </p>
              </div>
              <div className={styles.whyCard}>
                <span className={styles.whyNumber}>03</span>
                <h3 className={styles.whyTitle}>Modern Design</h3>
                <p className={styles.whyDesc}>
                  Clean, responsive, SEO-optimized websites that look great on every device.
                </p>
              </div>
              <div className={styles.whyCard}>
                <span className={styles.whyNumber}>04</span>
                <h3 className={styles.whyTitle}>Direct Communication</h3>
                <p className={styles.whyDesc}>
                  Talk directly with the developer. No middlemen, no project managers in between.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to Build Something?</h2>
            <p className={styles.ctaText}>
              Pehle baat karo, phir decide karo. Consultation free hai.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/services" className="btn btn-primary btn-lg">
                View Services
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
