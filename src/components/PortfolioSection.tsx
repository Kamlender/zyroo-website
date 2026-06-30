'use client';

import React, { useState } from 'react';
import styles from './PortfolioSection.module.css';

const categories = ['All', 'Medical', 'Restaurant', 'Fitness', 'Services'];

const projects = [
  {
    name: 'OM Dental',
    category: 'Medical',
    type: 'MEDICAL',
    stat: '+290%',
    statLabel: 'PATIENTS',
    desc: 'Modern dental clinic website with online booking and patient inquiries.',
  },
  {
    name: 'Groom Cars',
    category: 'Services',
    type: 'SERVICES',
    stat: '+340%',
    statLabel: 'BOOKINGS',
    desc: 'Subscription booking platform for daily doorstep car cleaning services.',
  },
  {
    name: 'North Shore Dentistry',
    category: 'Medical',
    type: 'MEDICAL',
    stat: '+210%',
    statLabel: 'ENQUIRIES',
    desc: 'Premium cosmetic and implant dentistry website built for restorative dental practice.',
  },
  {
    name: 'Anytime Fitness NFC',
    category: 'Fitness',
    type: 'FITNESS',
    stat: '+180%',
    statLabel: 'MEMBERS & INQUIRIES',
    desc: 'High-converting landing page for 24/7 fitness center and personal training.',
  },
  {
    name: 'Sambar Pot',
    category: 'Restaurant',
    type: 'RESTAURANT',
    stat: '+410%',
    statLabel: 'ONLINE ORDERS',
    desc: 'Authentic South Indian restaurant website featuring online menu ordering.',
  },
  {
    name: 'Accelero Studio',
    category: 'Services',
    type: 'SERVICES',
    stat: '+10x',
    statLabel: 'BUSINESS GROWTH',
    desc: 'Premium web presence acceleration platform for growing local businesses.',
  },
];

const typeIcons: Record<string, string> = {
  MEDICAL: '🏥',
  SERVICES: '💼',
  FITNESS: '💪',
  RESTAURANT: '🍽️',
};

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className={styles.section}>
      <div className={`${styles.inner} container`}>
        <span className={styles.tag}>PORTFOLIO</span>
        <h2 className={styles.heading}>Work That Speaks For Itself</h2>
        <p className={styles.subtitle}>
          A selection of websites we&apos;ve built for businesses just like yours.
        </p>

        {/* Filter Tabs */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardPreview}>
                <span className={styles.cardTypeIcon}>{typeIcons[project.type] || '🌐'}</span>
                <span className={styles.cardType}>{project.type}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardName}>{project.name}</h3>
                  <span className={styles.cardCategory}>{project.category}</span>
                </div>
                <div className={styles.cardStat}>
                  <span className={styles.statValue}>{project.stat}</span>
                  <span className={styles.statLabel}>{project.statLabel}</span>
                </div>
              </div>
              <p className={styles.cardDesc}>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
