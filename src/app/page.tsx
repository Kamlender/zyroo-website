'use client';

import React from 'react';
import Link from 'next/link';
import PricingSection from '@/components/PricingSection';
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

  const featureHighlights = [
    {
      icon: '⚡',
      title: 'Built for Speed',
      body: 'Every site ships with optimized assets, lazy loading, and server-side rendering. Your users never wait.',
    },
    {
      icon: '🎨',
      title: 'Designed to Convert',
      body: 'Clean layouts, focused CTAs, and mobile-first design that turns visitors into customers.',
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      body: 'SSL certificates, form validation, and secure payment gateways — all configured from day one.',
    },
    {
      icon: '📱',
      title: 'Mobile Responsive',
      body: 'Pixel-perfect on every screen size. Desktop, tablet, phone — it just works.',
    },
    {
      icon: '🔍',
      title: 'SEO Optimized',
      body: 'Structured data, meta tags, sitemap, and fast loading speed. Get found on Google organically.',
    },
    {
      icon: '🛠️',
      title: 'Easy to Manage',
      body: 'Simple admin panels and CMS integration. Update your content without touching code.',
    },
  ];

  return (
    <>
      {/* ==================== HERO STRIPE ==================== */}
      <section className={styles.hero} id="hero">
        <div className={`${styles.heroInner} container`}>
          <div className={`${styles.heroBadge} animate-fadeInUp stagger-1`}>
            <span className={styles.heroBadgeDot}></span>
            Available for projects
          </div>

          <h1 className={`${styles.heroTitle} animate-fadeInUp stagger-2`}>
            Websites That
            <br />
            <span className={styles.heroHighlight}>Actually</span> Work
          </h1>

          <p className={`${styles.heroSub} animate-fadeInUp stagger-3`}>
            We build fast, modern websites for businesses and startups.
            No templates, no fluff — just clean code and sharp design.
          </p>

          <div className={`${styles.heroCtas} animate-fadeInUp stagger-3`}>
            <a href="#services" className="btn-primary">
              Explore Services
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Stats */}
          <div className={`${styles.statsTicker} animate-fadeInUp stagger-4`}>
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
      </section>

      {/* ==================== MARQUEE STRIP ==================== */}
      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeTrack}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className={styles.marqueeContent}>
              <span>Web Design</span>
              <span className={styles.marqueeStar}>●</span>
              <span>E-Commerce</span>
              <span className={styles.marqueeStar}>●</span>
              <span>Landing Pages</span>
              <span className={styles.marqueeStar}>●</span>
              <span>Business Sites</span>
              <span className={styles.marqueeStar}>●</span>
              <span>Portfolio</span>
              <span className={styles.marqueeStar}>●</span>
              <span>Redesign</span>
              <span className={styles.marqueeStar}>●</span>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== CODE WINDOW SECTION ==================== */}
      <section className={styles.codeSection}>
        <div className={styles.codeSectionGlow}></div>
        <div className="container">
          <div className={styles.codeSplit}>
            <div className={styles.codeNarrative}>
              <h2 className={styles.codeNarrativeTitle}>
                Integrate this weekend
              </h2>
              <p className={styles.codeNarrativeBody}>
                We write clean, production-ready code. No bloated frameworks or
                unnecessary dependencies. Just what your site needs to be fast,
                accessible, and easy to maintain.
              </p>
              <div>
                <a href="#services" className="btn-primary">
                  View Services
                </a>
              </div>
            </div>
            <div className={styles.codeWindow}>
              <div className={styles.codeWindowDots}>
                <div className={`${styles.codeWindowDot} ${styles.codeWindowDotRed}`}></div>
                <div className={`${styles.codeWindowDot} ${styles.codeWindowDotYellow}`}></div>
                <div className={`${styles.codeWindowDot} ${styles.codeWindowDotGreen}`}></div>
              </div>
              <code className={styles.codeBlock}>
                <span className={styles.codeComment}>{'// Your new website, simplified'}</span>{'\n'}
                <span className={styles.codeKeyword}>{'const'}</span>{' site = '}<span className={styles.codeFunction}>{'createSite'}</span>{'({'}{'\n'}
                {'  name: '}<span className={styles.codeString}>{'"My Business"'}</span>{','}{'\n'}
                {'  pages: '}<span className={styles.codeString}>{'"5"'}</span>{','}{'\n'}
                {'  responsive: '}<span className={styles.codeKeyword}>{'true'}</span>{','}{'\n'}
                {'  seo: '}<span className={styles.codeKeyword}>{'true'}</span>{','}{'\n'}
                {'  analytics: '}<span className={styles.codeKeyword}>{'true'}</span>{','}{'\n'}
                <span className={styles.codePunctuation}>{'}'}</span><span className={styles.codePunctuation}>{')'}</span>{'\n\n'}
                <span className={styles.codeComment}>{'// Deploy in days, not months'}</span>{'\n'}
                <span className={styles.codeKeyword}>{'await'}</span>{' site.'}<span className={styles.codeFunction}>{'deploy'}</span><span className={styles.codePunctuation}>{'()'}</span>
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURE HIGHLIGHTS ==================== */}
      <section className={styles.features}>
        <div className={styles.featuresGlow}></div>
        <div className="container">
          <div className={styles.sectionTop}>
            <h2 className={styles.sectionHeading}>
              Everything you need
            </h2>
            <p className={styles.sectionDesc}>
              From design to deployment, we handle the full stack so you can focus on your business.
            </p>
          </div>
          <div className={styles.featureGrid}>
            {featureHighlights.map((feat, i) => (
              <div key={i} className={styles.featureCard}>
                <span className={styles.featureCardIcon}>{feat.icon}</span>
                <h3 className={styles.featureCardTitle}>{feat.title}</h3>
                <p className={styles.featureCardBody}>{feat.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRICING / SERVICES ==================== */}
      <PricingSection />

      {/* ==================== REVIEWS ==================== */}
      <section className={`${styles.reviews}`} id="reviews">
        <div className={styles.reviewsGlow}></div>
        <div className="container">
          <div className={styles.sectionTop}>
            <h2 className={styles.sectionHeading}>
              What clients say
            </h2>
          </div>

          <div className={styles.reviewGrid}>
            {clients.map((c, index) => (
              <div
                key={index}
                className={`${styles.reviewCard} animate-fadeInUp stagger-${index + 1}`}
              >
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
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <span className={styles.footerBrandName}>ZYROO</span>
              <p className={styles.footerBrandDesc}>
                Web design studio based in India. We build websites, online stores,
                and web apps for small businesses and startups.
              </p>
              <div className={styles.footerStatus}>
                <span className={styles.statusDot}></span>
                Accepting projects
              </div>
            </div>

            <div className={styles.footerCol}>
              <span className={styles.footerColTitle}>Services</span>
              <a href="#services" className={styles.footerLink}>Landing Pages</a>
              <a href="#services" className={styles.footerLink}>Business Sites</a>
              <a href="#services" className={styles.footerLink}>E-Commerce</a>
              <a href="#services" className={styles.footerLink}>Portfolios</a>
            </div>

            <div className={styles.footerCol}>
              <span className={styles.footerColTitle}>Company</span>
              <a href="#hero" className={styles.footerLink}>About</a>
              <a href="#reviews" className={styles.footerLink}>Reviews</a>
              <a href="#services" className={styles.footerLink}>Pricing</a>
            </div>

            <div className={styles.footerCol}>
              <span className={styles.footerColTitle}>Contact</span>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                WhatsApp
              </a>
              <a href="mailto:hello@zyroo.in" className={styles.footerLink}>
                hello@zyroo.in
              </a>
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
