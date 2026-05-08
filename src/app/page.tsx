'use client';

import React from 'react';
import Link from 'next/link';
import { services, formatPrice } from '@/lib/services';
import styles from './page.module.css';

export default function HomePage() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi! I want to discuss a web design project.'
  )}`;

  const clients = [
    { name: 'Raj', avatar: 'R' },
    { name: 'Ashish', avatar: 'A' },
    { name: 'Anil', avatar: 'AN' },
    { name: 'Twinkle', avatar: 'T' },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discuss Your Idea',
      description:
        'WhatsApp pe apni requirements batao. Hum samjhenge ki aapko kya chahiye.',
      icon: '💬',
    },
    {
      step: '02',
      title: 'Design & Develop',
      description:
        'Hamari team aapka website design karegi. Har step pe aapko updates milenge.',
      icon: '🎨',
    },
    {
      step: '03',
      title: 'Launch & Deliver',
      description:
        'Testing ke baad aapki website live hogi. Free deployment aur support ke saath.',
      icon: '🚀',
    },
  ];

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className={styles.hero} id="hero">
        {/* Animated background elements */}
        <div className={styles.heroBg}>
          <div className={styles.heroOrb1}></div>
          <div className={styles.heroOrb2}></div>
          <div className={styles.heroOrb3}></div>
          <div className={styles.heroGrid}></div>
        </div>

        <div className={`${styles.heroContent} container`}>
          <div className={styles.heroText}>
            <div className={`${styles.heroBadge} animate-fadeInUp`}>
              <span className={styles.heroBadgeDot}></span>
              Available for Projects
            </div>

            <h1 className={`${styles.heroTitle} animate-fadeInUp stagger-1`}>
              We Build Websites
              <br />
              <span className={styles.heroTitleGradient}>That Convert</span>
            </h1>

            <p className={`${styles.heroSubtitle} animate-fadeInUp stagger-2`}>
              From stunning landing pages to full-scale e-commerce stores — we
              bring your vision to life with pixel-perfect design and clean code.
            </p>

            <div className={`${styles.heroActions} animate-fadeInUp stagger-3`}>
              <a href="#services" className="btn btn-primary btn-lg">
                View Services
              </a>
            </div>

            <div className={`${styles.heroStats} animate-fadeInUp stagger-4`}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>50+</span>
                <span className={styles.heroStatLabel}>Projects Done</span>
              </div>
              <div className={styles.heroStatDivider}></div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>30+</span>
                <span className={styles.heroStatLabel}>Happy Clients</span>
              </div>
              <div className={styles.heroStatDivider}></div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>24/7</span>
                <span className={styles.heroStatLabel}>Support</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className={`${styles.heroVisual} animate-fadeIn stagger-3`}>
            <div className={styles.heroCardMain}>
              <div className={styles.heroCardBrowser}>
                <div className={styles.heroBrowserDots}>
                  <span style={{ background: '#ff5f57' }}></span>
                  <span style={{ background: '#febc2e' }}></span>
                  <span style={{ background: '#28c840' }}></span>
                </div>
                <div className={styles.heroBrowserUrl}>
                  <span>🔒</span> www.yourwebsite.com
                </div>
              </div>
              <div className={styles.heroCardContent}>
                <div className={styles.heroCardNav}></div>
                <div className={styles.heroCardHero}>
                  <div className={styles.heroCardTitle}></div>
                  <div className={styles.heroCardSubtitle}></div>
                  <div className={styles.heroCardBtn}></div>
                </div>
                <div className={styles.heroCardGrid}>
                  <div className={styles.heroCardGridItem}></div>
                  <div className={styles.heroCardGridItem}></div>
                  <div className={styles.heroCardGridItem}></div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className={`${styles.floatingBadge} ${styles.floatingBadge1}`}>
              <span>⚡</span> Fast Loading
            </div>
            <div className={`${styles.floatingBadge} ${styles.floatingBadge2}`}>
              <span>📱</span> Responsive
            </div>
            <div className={`${styles.floatingBadge} ${styles.floatingBadge3}`}>
              <span>🔒</span> Secure
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className={`section ${styles.services}`} id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">💼 Our Services</div>
            <h2 className="section-title">
              Choose Your <span className="gradient-text">Perfect Plan</span>
            </h2>
            <p className="section-subtitle">
              Premium web design packages at honest prices. Click any service to
              place your order instantly via WhatsApp.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={`/order/${service.id}`}
                className={`${styles.serviceCard} animate-fadeInUp stagger-${index + 1}`}
                id={`service-${service.id}`}
              >
                {service.popular && (
                  <div className={styles.popularTag}>
                    <span className="badge badge-popular">🔥 Most Popular</span>
                  </div>
                )}

                <div
                  className={styles.serviceCardGlow}
                  style={{ background: service.gradient }}
                ></div>

                <div className={styles.serviceCardHeader}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <div className={styles.serviceCategory}>
                    {service.category}
                  </div>
                </div>

                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>

                <div className={styles.servicePricing}>
                  {service.originalPrice && (
                    <span className={styles.serviceOriginalPrice}>
                      {formatPrice(service.originalPrice)}
                    </span>
                  )}
                  <span className={styles.servicePrice}>
                    {formatPrice(service.price)}
                  </span>
                </div>

                <div className={styles.serviceFeatures}>
                  {service.features.map((feature, i) => (
                    <div key={i} className={styles.serviceFeature}>
                      <span className={styles.serviceFeatureCheck}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className={styles.serviceFooter}>
                  <span className={styles.serviceDelivery}>
                    📅 {service.deliveryDays} days delivery
                  </span>
                  <span className={styles.serviceOrderBtn}>
                    Order Now →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className={`section ${styles.process}`} id="process">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">⚙️ How It Works</div>
            <h2 className="section-title">
              Simple <span className="gradient-text">3-Step Process</span>
            </h2>
            <p className="section-subtitle">
              No complicated forms or long meetings. Just tell us what you need
              and we&apos;ll deliver.
            </p>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`${styles.processCard} animate-fadeInUp stagger-${index + 1}`}
              >
                <div className={styles.processStep}>{step.step}</div>
                <div className={styles.processIcon}>{step.icon}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className={styles.processConnector}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>50+</div>
              <div className={styles.statLabel}>Projects Delivered</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>30+</div>
              <div className={styles.statLabel}>Happy Clients</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>2026</div>
              <div className={styles.statLabel}>Est. Year</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>24/7</div>
              <div className={styles.statLabel}>Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className={`section ${styles.about}`} id="about">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">👨‍💻 About Us</div>
            <h2 className="section-title">
              Meet the <span className="gradient-text">Founder</span>
            </h2>
          </div>

          <div className={styles.aboutContent}>
            <div className={`${styles.aboutCard} animate-fadeInUp`}>
              <div className={styles.aboutAvatar}>PJ</div>
              <h3 className={styles.aboutName}>Pawash Jha</h3>
              <p className={styles.aboutRole}>Founder &amp; Lead Developer</p>
              <p className={styles.aboutBio}>
                Passionate about creating pixel-perfect, high-performance websites
                that help businesses grow online. Every project at ZYROO is personally
                overseen to ensure premium quality and on-time delivery.
              </p>
            </div>
          </div>

          {/* Trusted Clients */}
          <div className={styles.clientsSection}>
            <h3 className={styles.clientsTitle}>Trusted By</h3>
            <div className={styles.clientsGrid}>
              {clients.map((c, index) => (
                <div
                  key={index}
                  className={`${styles.clientBadge} animate-fadeInUp stagger-${index + 1}`}
                >
                  <div className={styles.clientAvatar}>{c.avatar}</div>
                  <span className={styles.clientName}>{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      {/* ==================== FOOTER (CTA + Links merged) ==================== */}
      <footer className={styles.footer} id="contact">
        <div className="container">
          {/* CTA Area */}
          <div className={styles.footerCta}>
            <div className={styles.ctaGlow}></div>
            <h2 className={styles.ctaTitle}>
              Ready to Build Your
              <br />
              <span className="gradient-text">Dream Website?</span>
            </h2>
            <p className={styles.ctaSubtitle}>
              Abhi WhatsApp karo — Free consultation + quote milega 10 minute
              mein!
            </p>
            <div className={styles.ctaActions}>
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

          {/* Footer Links */}
          <div className={styles.footerInner}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <div className={styles.footerLogoIcon}>Z</div>
                <div className={styles.footerLogoGroup}>
                  <span>ZYROO</span>
                  <span className={styles.footerLogoNiche}>Web-Design</span>
                </div>
              </div>
              <p className={styles.footerDesc}>
                Premium web design studio crafting beautiful, high-performance
                websites for businesses across India.
              </p>
            </div>

            <div className={styles.footerLinks}>
              <h4>Quick Links</h4>
              <a href="#services">Services</a>
              <a href="#process">How It Works</a>
              <a href="#about">About</a>
            </div>

            <div className={styles.footerLinks}>
              <h4>Services</h4>
              {services.slice(0, 4).map((s) => (
                <Link key={s.id} href={`/order/${s.id}`}>
                  {s.shortTitle}
                </Link>
              ))}
            </div>

            <div className={styles.footerLinks}>
              <h4>Contact</h4>
              <a href="mailto:jha@tinytoono.in">
                ✉️ jha@tinytoono.in
              </a>
              <div className={styles.footerSocials}>
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} ZYROO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
