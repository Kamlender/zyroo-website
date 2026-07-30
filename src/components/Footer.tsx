import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.footerContent}>
          {/* Brand + Help info */}
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <Image src="/skull-logo.png" alt="ZYROO" width={32} height={32} className={styles.footerLogoIcon} />
              <div className={styles.footerLogoGroup}>
                <span className={styles.footerLogoText}>ZYROO</span>
                <span className={styles.footerLogoNiche}>S T U D I O</span>
              </div>
            </Link>
            <p className={styles.footerDesc}>
              We design and build premium websites for local businesses that turn visitors into customers, allowing you to focus on running your business.
            </p>
            <div className={styles.footerContactInfo}>
              <a href="mailto:jha@tinytoono.in" className={styles.footerContactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                jha@tinytoono.in
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>Services</h4>
            <Link href="/order/landing-page" className={styles.footerLink}>Landing Page</Link>
            <Link href="/order/portfolio-website" className={styles.footerLink}>Portfolio Website</Link>
            <Link href="/order/small-business" className={styles.footerLink}>Small Business</Link>
            <Link href="/order/business-website" className={styles.footerLink}>Business Website</Link>
            <Link href="/order/ecommerce-store" className={styles.footerLink}>E-Commerce Store</Link>
            <Link href="/order/website-redesign" className={styles.footerLink}>Website Redesign</Link>
            <Link href="/order/3d-web-design" className={styles.footerLink}>3D Web Design</Link>
            <Link href="/order/hospital-website" className={styles.footerLink}>Hospital Website</Link>
            <Link href="/order/clinic-website" className={styles.footerLink}>Clinic Website</Link>
          </div>

          {/* About Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>About</h4>
            <Link href="/terms" className={styles.footerLink}>Terms and Conditions</Link>
            <Link href="/terms-of-use" className={styles.footerLink}>Terms of Use</Link>
            <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
            <Link href="/return-policy" className={styles.footerLink}>Return Policy</Link>
            <Link href="/legal" className={styles.footerLink}>Legal</Link>
            <Link href="/faq" className={styles.footerLink}>FAQ</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBar}>
          <p>© {new Date().getFullYear()} ZYROO Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
