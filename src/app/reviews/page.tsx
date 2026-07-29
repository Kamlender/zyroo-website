import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: {
    absolute: 'Client Reviews & Testimonials | ZYROO STUDIO',
  },
  description:
    'Read reviews and testimonials from clients who built their landing pages, online stores, and websites with ZYROO STUDIO. Real feedback, real results.',
  alternates: {
    canonical: 'https://tinytoono.in/reviews',
  },
};

import React from 'react';
import Footer from '@/components/Footer';
import ReviewFeedback from '@/components/ReviewFeedback';
import styles from './reviews.module.css';

const clients = [
  {
    name: 'Raj',
    avatar: 'R',
    role: 'Freelancer',
    stars: 5,
    review:
      'Reached out for a portfolio site. The design turned out great — one revision took a bit of time, but the final output was totally worth it.',
  },
  {
    name: 'Ashish',
    avatar: 'A',
    role: 'Startup Founder',
    stars: 5,
    review:
      'Our SaaS was about to launch and we needed a landing page urgently. They built it in just 2 days — everyone at the investor meeting praised the website.',
  },
  {
    name: 'Anil',
    avatar: 'AN',
    role: 'Shop Owner',
    stars: 4,
    review:
      'I own a saree shop and wanted to set up an online store. They integrated payment gateway, WhatsApp ordering — everything. Got 12 online orders in the very first month.',
  },
  {
    name: 'Twinkle',
    avatar: 'T',
    role: 'Business Owner',
    stars: 5,
    review:
      'I tried 3 freelancers before, none of them delivered properly. Contacted ZYROO and the site was ready in 6 days. Now I\'m getting leads directly from Google.',
  },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tinytoono.in' },
            { '@type': 'ListItem', position: 2, name: 'Reviews', item: 'https://tinytoono.in/reviews' },
          ],
        }}
      />
      <div className={styles.reviewsPage}>
        <div className="container">
          {/* Header */}
          <div className={styles.header}>
            <span className={styles.badge}>⭐ Client Reviews</span>
            <h1 className={styles.title}>
              What Our <span className={styles.highlight}>Clients Say</span>
            </h1>
            <p className={styles.subtitle}>
              Real feedback from real clients. No fake reviews, no paid testimonials.
            </p>
          </div>

          {/* Review Grid */}
          <div className={styles.reviewGrid}>
            {clients.map((c, index) => (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.reviewStars}>
                  {Array.from({ length: c.stars }).map((_, i) => (
                    <span key={i} className={styles.star}>★</span>
                  ))}
                  {Array.from({ length: 5 - c.stars }).map((_, i) => (
                    <span key={i} className={styles.starEmpty}>★</span>
                  ))}
                </div>
                <p className={styles.reviewText}>&ldquo;{c.review}&rdquo;</p>
                <div className={styles.reviewAuthor}>
                  <div className={styles.reviewAvatar}>{c.avatar}</div>
                  <div>
                    <h4 className={styles.reviewName}>{c.name}</h4>
                    <span className={styles.reviewRole}>{c.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rate Us — Feedback Card */}
          <ReviewFeedback />
        </div>
      </div>
      <Footer />
    </>
  );
}
