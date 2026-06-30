'use client';

import React from 'react';
import Link from 'next/link';
import styles from './SolutionSection.module.css';

const solutions = [
  {
    icon: '⚡',
    title: 'Conversion Architecture',
    desc: 'Every pixel is placed to guide visitors toward booking, selling, or buying. We design with behavioral psychology, not guesswork.',
    points: ['Heatmap-based layouts', 'A/B tested CTAs', 'Frictionless forms', 'Trust signals placement'],
  },
  {
    icon: '🚀',
    title: 'Performance Obsession',
    desc: 'Sub-1.5-second load times. 100/100 PageSpeed scores. Mobile-first everything.',
    points: ['Next.js 14 app Router', 'Razor-thin deployments', 'Image optimization', 'Core Web Vitals green'],
  },
  {
    icon: '🌐',
    title: 'Local Business DNA',
    desc: "We know your industry, your customers, your city. Our designs speak your market's language.",
    points: ['Industry-specific design', 'Local SEO built-in', 'Regional payment gateways', 'Multi-language support'],
  },
];

export default function SolutionSection() {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} container`}>
        <span className={styles.tag}>THE SOLUTION</span>
        <h2 className={styles.heading}>
          We Build Websites That Work<br />As Hard As You Do
        </h2>
        <p className={styles.subtitle}>
          Revenue-focused design. Elite engineering. White-glove service.
        </p>

        <div className={styles.grid}>
          {solutions.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <ul className={styles.cardList}>
                {item.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link href="/services" className={styles.cta}>
          Explore Our Process
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </Link>
      </div>
    </section>
  );
}
