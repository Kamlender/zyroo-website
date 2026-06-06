'use client';

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
      'Portfolio site ke liye contact kiya tha. Design acchi banayi, bas ek revision mein thoda time laga. But final output dekh ke khush ho gaya, worth it tha.',
  },
  {
    name: 'Ashish',
    avatar: 'A',
    role: 'Startup Founder',
    stars: 5,
    review:
      'Humara SaaS launch hone wala tha aur landing page urgent chahiye tha. Inlogo ne 2 din mein bana diya — investor meeting mein sabne website ki tarif ki.',
  },
  {
    name: 'Anil',
    avatar: 'AN',
    role: 'Shop Owner',
    stars: 4,
    review:
      'Meri saree ki dukaan hai, online store banana tha. Payment gateway, WhatsApp order sab set kar diya. Pehle mahine mein hi 12 online orders aaye.',
  },
  {
    name: 'Twinkle',
    avatar: 'T',
    role: 'Business Owner',
    stars: 5,
    review:
      'Maine 3 freelancers try kiye pehle, kisi ne dhang se kaam nahi kiya. ZYROO ko contact kiya toh 6 din mein site ready thi. Ab Google se directly leads aa rahi hain.',
  },
];

export default function ReviewsPage() {
  return (
    <>
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
