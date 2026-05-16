'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Check,
  Rocket,
  Zap,
  ShoppingCart,
  Palette,
  Globe,
  RefreshCcw,
  Store,
} from 'lucide-react';
import { services, formatPrice } from '@/lib/services';
import styles from './PricingSection.module.css';

const iconMap: Record<string, React.ElementType> = {
  'landing-page': Rocket,
  'portfolio-website': Palette,
  'small-business': Store,
  'business-website': Globe,
  'ecommerce-store': ShoppingCart,
  'web-application': Zap,
  'website-redesign': RefreshCcw,
};

type PricingMode = 'standard' | 'rush';

export default function PricingSection() {
  const [mode, setMode] = useState<PricingMode>('standard');

  return (
    <section className={styles.section} id="services">
      {/* Background Decor */}
      <div className={styles.bgDecor}>
        <div className={styles.bgGlowTop} />
        <div className={styles.bgGlowBottom} />
      </div>

      <div className={`${styles.inner} container`}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.heading}>
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className={styles.subtitle}>
            No hidden fees, no surprises. Pick a plan and we&apos;ll handle the rest.
          </p>

          {/* Toggle */}
          <motion.div
            className={styles.toggle}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span
              className={`${styles.toggleLabel} ${mode === 'standard' ? styles.toggleActive : ''}`}
            >
              Standard
            </span>
            <button
              className={styles.toggleTrack}
              onClick={() =>
                setMode((m) => (m === 'standard' ? 'rush' : 'standard'))
              }
              aria-label="Toggle pricing mode"
            >
              <motion.div
                className={styles.toggleThumb}
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                animate={{ x: mode === 'standard' ? 0 : 24 }}
              />
            </button>
            <span
              className={`${styles.toggleLabel} ${mode === 'rush' ? styles.toggleActive : ''}`}
            >
              Rush
              <span className={styles.toggleBadge}>⚡ 2× faster</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = iconMap[service.id] || Zap;
            const rushPrice = Math.round(service.price * 1.5);
            const displayPrice =
              mode === 'standard' ? service.price : rushPrice;
            const deliveryDays =
              mode === 'standard'
                ? service.deliveryDays
                : Math.ceil(service.deliveryDays / 2);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 + 0.3 }}
                className={service.popular ? styles.cardPopularWrap : ''}
              >
                <Link
                  href={`/order/${service.id}${mode === 'rush' ? '?mode=rush' : ''}`}
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
                        {service.maxPrice && (
                          <> – {formatPrice(mode === 'standard' ? service.maxPrice : Math.round(service.maxPrice * 1.5))}</>
                        )}
                      </span>
                      {service.originalPrice && mode === 'standard' && (
                        <span className={styles.oldPrice}>
                          {formatPrice(service.originalPrice)}
                        </span>
                      )}
                    </div>
                    <span className={styles.priceSuffix}>
                      / project
                      {mode === 'rush' && (
                        <span className={styles.rushNote}>rush delivery</span>
                      )}
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
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className={styles.note}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Pehle baat karo, phir decide karo. Consultation free hai.
        </motion.p>
      </div>
    </section>
  );
}
