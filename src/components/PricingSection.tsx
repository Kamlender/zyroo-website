'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Check,
  Rocket,
  Zap,
  ShoppingCart,
  Palette,
  Globe,
  RefreshCcw,
  Store,
  Box,
  Hospital,
  HeartPulse,
  Dumbbell,
} from 'lucide-react';
import { services, formatPrice } from '@/lib/services';
import styles from './PricingSection.module.css';

const iconMap: Record<string, React.ElementType> = {
  'landing-page': Rocket,
  'portfolio-website': Palette,
  'small-business': Store,
  'business-website': Globe,
  'ecommerce-store': ShoppingCart,

  'website-redesign': RefreshCcw,
  '3d-web-design': Box,
  'hospital-website': Hospital,
  'clinic-website': HeartPulse,
  'gym-fitness-website': Dumbbell,
};

export default function PricingSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '918278148729';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I want to discuss a web design project.')}`;

  return (
    <>
    <section className={styles.section} id="services">
      {/* Background Decor */}
      <div className={styles.bgDecor}>
        <div className={styles.bgGlowTop} />
        <div className={styles.bgGlowBottom} />
      </div>

      <div className={`${styles.inner} container`}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.heading}>
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className={styles.subtitle}>
            No hidden fees, no surprises. Pick a plan and we&apos;ll handle the rest.
          </p>


        </div>

        {/* Pricing Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = iconMap[service.id] || Zap;
            const displayPrice = service.price;
            const deliveryDays = service.deliveryDays;
            const displayMax = service.maxPrice || null;

            return (
              <div
                key={service.id}
                className={service.popular ? styles.cardPopularWrap : ''}
              >
                <Link
                  href={`/order/${service.id}`}
                  className={`${styles.card} ${service.popular ? styles.cardPopular : ''}`}
                  id={`service-${service.id}`}
                >
                  {service.popular && (
                    <div className={styles.popularBadge}>
                      🔥 Most Popular
                    </div>
                  )}

                  {/* Card Header */}
                  <div className={styles.cardHeader}>
                    <div
                      className={`${styles.cardIcon} ${service.popular ? styles.cardIconPopular : ''}`}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className={styles.cardName}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.description}</p>
                  </div>

                  {/* Price */}
                  <div className={styles.priceBlock}>
                    <div className={styles.priceRow}>
                      <span className={styles.price}>
                        {formatPrice(displayPrice)}
                        {displayMax && (
                          <> – {formatPrice(displayMax)}</>
                        )}
                      </span>
                    </div>
                    <span className={styles.priceSuffix}>
                      / project
                    </span>
                  </div>

                  {/* Features */}
                  <ul className={styles.features}>
                    {service.features.map((feat, i) => (
                      <li key={i} className={styles.featureItem}>
                        <Check
                          size={16}
                          className={
                            service.popular
                              ? styles.checkPopular
                              : styles.checkNormal
                          }
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className={styles.cardFooter}>
                    <span
                      className={`${styles.ctaBtn} ${service.popular ? styles.ctaBtnPopular : ''}`}
                    >
                      Order Now
                      <Zap
                        size={14}
                        className={styles.ctaIcon}
                      />
                    </span>
                    <span className={styles.delivery}>
                      📅 {deliveryDays} days
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <p className={styles.note}>
          Talk to us first, then decide. Consultation is free.
        </p>

      </div>
    </section>

      {/* CTA Section — Full Width */}
      <section className={styles.ctaSection}>
        <div className={`${styles.ctaInner} container`}>
          <h2 className={styles.ctaHeading}>
            Ready to Turn Your Website Into Your Best Salesperson?
          </h2>
          <p className={styles.ctaSubtext}>
            Book a free 20-minute strategy call. We&apos;ll audit your current site and show you exactly what&apos;s possible.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            WhatsApp Us
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>
        </div>
      </section>


    </>
  );
}
