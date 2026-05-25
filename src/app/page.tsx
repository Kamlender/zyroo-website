'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      // TODO: hook up to an actual email service
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className={styles.comingSoonPage}>
      {/* Decorative blurred shapes */}
      <div className={styles.decoTop} />
      <div className={styles.decoBottom} />

      {/* ==================== HERO ==================== */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroHeadline}>
          Coming Soon
        </h1>

        {/* Glowing Orb */}
        <div className={styles.orbContainer}>
          <div className={styles.orb} />
        </div>
      </section>

      {/* ==================== INFO ROW ==================== */}
      <div className={styles.infoRow}>
        <div className={styles.infoLeft}>
          <h2>
            A Bright New Launch
            <br />
            Is On The Way
          </h2>
        </div>
        <div className={styles.infoRight}>
          <p>
            We&rsquo;re putting the final touches on something fresh, bold, 
            and built to give you an edge. ZYROO is almost ready.
          </p>
        </div>
      </div>

      {/* ==================== EMAIL SIGNUP ==================== */}
      <div className={styles.signupSection}>
        <h3 className={styles.signupTitle}>Be The First To Catch It</h3>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.signupInput}
            required
            id="email-signup"
          />
          <button type="submit" className={styles.signupButton}>
            {submitted ? '✓ Noted!' : 'Notify Me'}
          </button>
        </form>
      </div>

      {/* ==================== FOOTER ==================== */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} ZYROO. All rights reserved.</p>
      </footer>
    </div>
  );
}
