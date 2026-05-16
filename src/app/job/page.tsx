'use client';

import React from 'react';
import { ParallaxStars } from '@/components/ParallaxStars';
import styles from './page.module.css';

const perks = [
  { icon: '🏠', label: 'Work From Home', desc: 'Ghar se kaam karo, no office required' },
  { icon: '💰', label: 'Fixed Salary + Incentive', desc: 'Har call pe incentive, on-time payment guaranteed' },
  { icon: '📞', label: 'Training Provided', desc: 'Calling script aur training hum denge, experience zaruri nahi' },
  { icon: '🕐', label: 'Flexible Shifts', desc: 'Day shift ya evening shift, apni choice' },
];

const openings = [
  {
    role: 'Telecaller – Client Outreach',
    type: 'Full-time',
    location: 'Remote',
    experience: 'Fresher / 0-1 yr',
    applyLink: 'mailto:zyroodesign@gmail.com?subject=Application: Telecaller – Client Outreach',
  },
  {
    role: 'Sales Caller – Lead Generation',
    type: 'Part-time',
    location: 'Remote',
    experience: 'Fresher',
    applyLink: 'mailto:zyroodesign@gmail.com?subject=Application: Sales Caller – Lead Generation',
  },
  {
    role: 'Follow-up Caller',
    type: 'Part-time',
    location: 'Remote',
    experience: 'Fresher',
    applyLink: 'mailto:zyroodesign@gmail.com?subject=Application: Follow-up Caller',
  },
];

export default function JobPage() {
  return (
    <ParallaxStars speed={0.8}>
      <section className={styles.jobPage}>
        <div className="container">
          {/* Header */}
          <div className={styles.header}>

            <h1 className={styles.title}>
              Join Our <span className={styles.titleHighlight}>Calling Team</span>
            </h1>

          </div>

          {/* Perks */}
          <div className={styles.perksSection}>
            <h2 className={styles.perksTitle}>
              Why Work at <span className="gradient-text">ZYROO</span>?
            </h2>
            <div className={styles.perksGrid}>
              {perks.map((perk, i) => (
                <div key={i} className={styles.perkCard}>
                  <span className={styles.perkIcon}>{perk.icon}</span>
                  <h3 className={styles.perkLabel}>{perk.label}</h3>
                  <p className={styles.perkDesc}>{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>
    </ParallaxStars>
  );
}
