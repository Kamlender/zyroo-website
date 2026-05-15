'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      id="main-navbar"
    >
      <div className={styles.navbarInner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
          <div className={styles.logoIcon}>Z</div>
          <div className={styles.logoGroup}>
            <span className={styles.logoText}>ZYROO</span>
            <span className={styles.logoNiche}>Web-Design</span>
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

        {/* Nav Links */}
        <div className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>
          <Link
            href="/"
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('services')}
          >
            Services
          </button>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('reviews')}
          >
            Reviews
          </button>
          <Link
            href="/job"
            className={`${styles.navLink} ${isActive('/job') ? styles.active : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            Job
          </Link>
          <button
            className={`btn btn-primary btn-sm ${styles.navCta}`}
            onClick={() => scrollToSection('contact')}
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
}
