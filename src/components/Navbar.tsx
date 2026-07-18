'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Detect if we've scrolled past the hero into dark sections
      const hero = document.getElementById('hero');
      if (hero) {
        const heroBottom = hero.offsetTop + hero.offsetHeight - 100;
        setDarkMode(window.scrollY > heroBottom);
      } else {
        // No hero section = keep light navbar (frosted glass with black text)
        setDarkMode(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (pathname !== '/') {
      window.location.href = '/#' + id;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const lightPages: string[] = [];
  const isLightPage = lightPages.some((p) => pathname === p || pathname.startsWith(p + '/'));

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${isLightPage ? styles.lightMode : ''} ${darkMode ? styles.darkMode : ''}`}
        id="main-navbar"
      >
        <div className={styles.navbarInner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
            <Image src="/skull-logo.png" alt="ZYROO" width={38} height={38} className={styles.logoIcon} />
            <div className={styles.logoGroup}>
              <span className={styles.logoText}>ZYROO</span>
              <span className={styles.logoNiche}>Studio</span>
            </div>
          </Link>

          {/* Mobile toggle */}
          <button
            className={`${styles.mobileToggle} ${mobileOpen ? styles.active : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="navbar-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Nav Links — Floating Glass Pill */}
          <div className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>
            <div className={styles.navPillBg} />
            <Link
              href="/"
              className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`${styles.navLink} ${isActive('/services') ? styles.active : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/reviews"
              className={`${styles.navLink} ${isActive('/reviews') ? styles.active : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/about"
              className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <button
              className={styles.bookCallBtn}
              onClick={() => { setMobileOpen(false); setShowCallPopup(true); }}
            >
              Book Call
            </button>
          </div>
        </div>
      </nav>

      {/* Call Popup */}
      {showCallPopup && (
        <div className={styles.callOverlay} onClick={() => setShowCallPopup(false)}>
          <div className={styles.callPopup} onClick={(e) => e.stopPropagation()}>
            <button className={styles.callPopupClose} onClick={() => setShowCallPopup(false)}>
              ✕
            </button>
            <div className={styles.callPopupIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <h3 className={styles.callPopupTitle}>Call Us Now</h3>
            <span className={styles.callPopupNumber}>
              8278148729
            </span>
            <p className={styles.callPopupNote}>Tap to call · Free consultation</p>
          </div>
        </div>
      )}
    </>
  );
}
