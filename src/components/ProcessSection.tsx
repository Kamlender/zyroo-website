'use client';

import React from 'react';
import styles from './ProcessSection.module.css';

const steps = [
  {
    num: '01',
    icon: '📋',
    label: 'DAY 1',
    title: 'Discovery',
    desc: 'We audit your current site, study competitors, and define success metrics.',
    points: ['Competitive Analysis', 'User Journey Map', 'Success Metrics', 'Content Strategy'],
  },
  {
    num: '02',
    icon: '🎨',
    label: 'DAY 2-3',
    title: 'Design',
    desc: 'You get a custom design in Figma. Unlimited revisions until you love it.',
    points: ['Wireframes', 'High-fidelity Design', 'Mobile Responsive', 'Design Systems'],
  },
  {
    num: '03',
    icon: '⚡',
    label: 'DAY 4-6',
    title: 'Build',
    desc: 'We engineer your site with clean code, blazing speed, and SEO fundamentals.',
    points: ['Next.js Development', 'CMS Integration', 'Performance Optimization', 'Accessibility Audit'],
  },
  {
    num: '04',
    icon: '🚀',
    label: 'DAY 7',
    title: 'Launch',
    desc: 'We go live, train your team, and monitor for 7-day post-launch.',
    points: ['Domain Setup', 'Analytics Integration', 'Team Training', '7-Day Support'],
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} container`}>
        <span className={styles.tag}>OUR PROCESS</span>
        <h2 className={styles.heading}>
          From First Call to Live Site in 7 Days
        </h2>
        <p className={styles.subtitle}>
          A battle-tested process designed for busy business owners.
        </p>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.cardNum}>{step.num}</span>
              <div className={styles.cardIcon}>{step.icon}</div>
              <span className={styles.cardLabel}>{step.label}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.desc}</p>
              <ul className={styles.cardList}>
                {step.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
