'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from '../(legal)/legal.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hi! I want to discuss a web design project.'
  )}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent(
      formData.subject || 'Project Inquiry from ZYROO Website'
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:jha@tinytoono.in?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className={styles.legalPage}>
        <div className={styles.legalContainer} style={{ maxWidth: 1000 }}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backArrow}>←</span>
            Back to Home
          </Link>

          <div className={styles.legalHeader}>
            <span className={styles.legalBadge}>Get in Touch</span>
            <h1 className={styles.legalTitle}>Contact Us</h1>
            <p className={styles.legalSubtitle}>
              Have a project in mind? Let&apos;s build something amazing together.
            </p>
          </div>

          <div className={styles.contactGrid}>
            {/* Left — Contact Info */}
            <div className={styles.contactInfo}>
              <div className={styles.contactInfoItem}>
                <div className={styles.contactInfoIcon}>✉</div>
                <div>
                  <div className={styles.contactInfoLabel}>Email</div>
                  <div className={styles.contactInfoValue}>
                    <a href="mailto:jha@tinytoono.in">jha@tinytoono.in</a>
                  </div>
                </div>
              </div>

              <div className={styles.contactInfoItem}>
                <div className={styles.contactInfoIcon}>💬</div>
                <div>
                  <div className={styles.contactInfoLabel}>WhatsApp</div>
                  <div className={styles.contactInfoValue}>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.contactInfoItem}>
                <div className={styles.contactInfoIcon}>📍</div>
                <div>
                  <div className={styles.contactInfoLabel}>Location</div>
                  <div className={styles.contactInfoValue}>
                    India — Working globally
                  </div>
                </div>
              </div>

              <div className={styles.contactInfoItem}>
                <div className={styles.contactInfoIcon}>⏰</div>
                <div>
                  <div className={styles.contactInfoLabel}>Response Time</div>
                  <div className={styles.contactInfoValue}>
                    Within 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.contactFormRow}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={styles.contactFormRow}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-phone">
                    Phone
                  </label>
                  <input
                    className="form-input"
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="+91 ..."
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="Project inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  className="form-input form-textarea"
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                id="contact-submit"
                style={{ width: '100%' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
