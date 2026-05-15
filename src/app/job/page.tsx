'use client';

import React from 'react';
import { ParallaxStars } from '@/components/ParallaxStars';
import styles from './page.module.css';

const perks = [
  { icon: '🏠', label: 'Work From Home', desc: 'Poore India se kaam karo, no office required' },
  { icon: '💰', label: 'Fair Pay', desc: 'On-time payment with performance bonuses' },
  { icon: '📈', label: 'Growth', desc: 'Real projects, real clients, real portfolio' },
  { icon: '🕐', label: 'Flexible Hours', desc: 'Apne time pe kaam karo, deadlines meet karo' },
];

const openings = [
  {
    role: 'Frontend Developer',
    type: 'Freelance',
    location: 'Remote',
    experience: '1+ yr',
    applyLink: 'mailto:zyroodesign@gmail.com?subject=Application: Frontend Developer',
  },
  {
    role: 'UI/UX Designer',
    type: 'Freelance',
    location: 'Remote',
    experience: '1+ yr',
    applyLink: 'mailto:zyroodesign@gmail.com?subject=Application: UI/UX Designer',
  },
  {
    role: 'Full Stack Developer',
    type: 'Part-time',
    location: 'Remote',
    experience: '2+ yrs',
    applyLink: 'mailto:zyroodesign@gmail.com?subject=Application: Full Stack Developer',
  },
];

export default function JobPage() {
  return (
    <ParallaxStars speed={0.8}>
      <section className={styles.jobPage}>
        <div className="container">
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              We&apos;re Hiring
            </div>
            <h1 className={styles.title}>
              Build the Web <span className={styles.titleHighlight}>With Us</span>
            </h1>
            <p className={styles.subtitle}>
              ZYROO is growing and we need talented people who love building beautiful,
              functional websites. Remote-first, flexible, and project-based.
            </p>
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

          {/* Open Positions */}
          <div className={styles.listingsSection}>
            <h2 className={styles.listingsTitle}>
              Open <span className="gradient-text">Positions</span>
            </h2>

            {openings.length > 0 ? (
              <div className={styles.jobList}>
                {openings.map((job, i) => (
                  <div key={i} className={styles.jobCard}>
                    <div className={styles.jobInfo}>
                      <h3 className={styles.jobRole}>{job.role}</h3>
                      <div className={styles.jobMeta}>
                        <span className={styles.jobTag}>📋 {job.type}</span>
                        <span className={styles.jobTag}>📍 {job.location}</span>
                        <span className={styles.jobTag}>⏳ {job.experience}</span>
                      </div>
                    </div>
                    <a
                      href={job.applyLink}
                      className={styles.jobApply}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now →
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <span className={styles.emptyIcon}>🔍</span>
                <h3 className={styles.emptyTitle}>No openings right now</h3>
                <p className={styles.emptyDesc}>
                  We don&apos;t have any open roles at the moment, but we&apos;re always
                  looking for talented people. Drop your resume!
                </p>
                <a href="mailto:zyroodesign@gmail.com" className={styles.emptyEmail}>
                  ✉️ zyroodesign@gmail.com
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </ParallaxStars>
  );
}
