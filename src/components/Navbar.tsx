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

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '918278148729';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I want to discuss a web design project.')}`;

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
              <span className={styles.logoNiche}>S T U D I O</span>
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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookCallBtn}
              onClick={() => setMobileOpen(false)}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </nav>

    </>
  );
}
