'use client';

import React from 'react';
import Link from 'next/link';
import { services } from '@/lib/services';
import PricingSection from '@/components/PricingSection';
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

  const processSteps = [
    {
      num: '01',
      title: 'Share Your Vision',
      desc: 'WhatsApp pe apni requirements batao. Hum samjhenge ki aapko kya chahiye.',
      icon: '💬',
    },
    {
      num: '02',
      title: 'We Design & Build',
      desc: 'Hamari team aapka website design karegi. Har step pe aapko updates milenge.',
      icon: '🎨',
    },
    {
      num: '03',
      title: 'Go Live!',
      desc: 'Testing ke baad aapki website live hogi. Free deployment aur support ke saath.',
      icon: '🚀',
    },
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
          <div className={`${styles.heroBadge} animate-fadeInUp`}>
            <span className={styles.heroBadgeDot}></span>
            Available for Projects
          </div>

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
            <a href="#services" className={`btn btn-primary btn-lg ${styles.heroBtn}`}>
              Explore Services
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-whatsapp btn-lg ${styles.heroBtn}`}
            >
              💬 WhatsApp Us
            </a>
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

      {/* ==================== PROCESS — HORIZONTAL TIMELINE ==================== */}
      <section className={`section ${styles.process}`} id="process">
        <div className="container">
          <div className={styles.sectionTop}>
            <div className="section-tag">⚙️ How It Works</div>
            <h2 className={styles.sectionHeading}>
              Simple <span className="gradient-text">3-Step</span> Process
            </h2>
          </div>

          <div className={styles.timeline}>
            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className={`${styles.timelineCard} animate-fadeInUp stagger-${index + 1}`}>
                  <div className={styles.timelineNum}>{step.num}</div>
                  <div className={styles.timelineIcon}>{step.icon}</div>
                  <h3 className={styles.timelineTitle}>{step.title}</h3>
                  <p className={styles.timelineDesc}>{step.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className={styles.timelineArrow}>→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== REVIEWS ==================== */}
      <section className={`section ${styles.reviews}`} id="reviews">
        <div className="container">
          <div className={styles.sectionTop}>
            <div className="section-tag">⭐ Reviews</div>
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
          {/* CTA */}
          <div className={styles.ctaBlock}>
            <h2 className={styles.ctaHeading}>
              Ready to Build Your
              <br />
              <span className="gradient-text">Dream Website?</span>
            </h2>
            <p className={styles.ctaSub}>
              Abhi WhatsApp karo — Free consultation + quote milega 10 minute mein!
            </p>
            <div className={styles.ctaBtns}>
              <a href="#services" className="btn btn-primary btn-lg">
                Browse Services
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

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
              <a href="#process">How It Works</a>
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
