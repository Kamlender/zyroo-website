import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.footerContent}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <Image src="/skull-logo.png" alt="ZYROO" width={32} height={32} className={styles.footerLogoIcon} />
              <div className={styles.footerLogoGroup}>
                <span className={styles.footerLogoText}>ZYROO</span>
                <span className={styles.footerLogoNiche}>Web-Design</span>
              </div>
            </Link>
          </div>

          {/* About Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>About</h4>
            <Link href="/terms" className={styles.footerLink}>Terms and Conditions</Link>
            <Link href="/terms-of-use" className={styles.footerLink}>Terms of Use</Link>
            <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
            <Link href="/return-policy" className={styles.footerLink}>Return Policy</Link>
            <Link href="/legal" className={styles.footerLink}>Legal</Link>
          </div>

          {/* Help Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>Help</h4>
            <Link href="/faq" className={styles.footerLink}>FAQ</Link>
            <span className={styles.footerLink}>Contact</span>
            <a href="mailto:jha@tinytoono.in" className={styles.footerLink}>jha@tinytoono.in</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBar}>
          <p>© {new Date().getFullYear()} ZYROO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
