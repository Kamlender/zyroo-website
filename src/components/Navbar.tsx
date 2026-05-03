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

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      id="main-navbar"
    >
      <div className={styles.navbarInner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
          <div className={styles.logoIcon}>Z</div>
          <span className={styles.logoText}>ZYRO</span>
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
            onClick={() => scrollToSection('process')}
          >
            Process
          </button>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('testimonials')}
          >
            Reviews
          </button>
          <button
            className={`btn btn-primary btn-sm ${styles.navCta}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
