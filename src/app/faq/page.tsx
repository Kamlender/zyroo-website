'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from '../(legal)/legal.module.css';

const faqs = [
  {
    question: 'What services does ZYROO provide?',
    answer:
      'ZYROO specializes in creative web design, UI/UX design, branding, animations, and digital experiences tailored for modern businesses and brands.',
  },
  {
    question: 'How long does it take to complete a website project?',
    answer:
      'Project timelines depend on the size and complexity of the work. A standard business website may take 1–3 weeks, while advanced custom projects can take longer.',
  },
  {
    question: 'Do you create custom website designs?',
    answer:
      'Yes, every project is designed according to the client\'s brand identity, goals, and audience instead of using generic templates.',
  },
  {
    question: 'Is the website mobile-friendly?',
    answer:
      'Yes, all websites created by ZYROO are optimized for mobile, tablet, and desktop devices to ensure a smooth user experience across all screen sizes.',
  },
  {
    question: 'Can I request revisions during the project?',
    answer:
      'Yes, revisions are included during the design process to make sure the final result matches your expectations and requirements.',
  },
  {
    question: 'Do you provide website maintenance after delivery?',
    answer:
      'Yes, maintenance and support services can be provided depending on the project plan or client requirements.',
  },
  {
    question: 'Will my website be SEO optimized?',
    answer:
      'Basic SEO optimization such as fast loading speed, responsive layout, and search-friendly structure is included in most projects.',
  },
  {
    question: 'What information do I need to provide before starting a project?',
    answer:
      'You may need to provide your business details, branding materials, content, references, and project goals before the work begins.',
  },
  {
    question: 'How can I get a quotation for my project?',
    answer:
      'You can contact ZYROO through the website inquiry form or available contact details to discuss your project and receive a custom quotation.',
  },
  {
    question: 'Do you work with clients outside India?',
    answer:
      'Yes, ZYROO can work with clients globally through online communication and remote collaboration.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className={styles.legalPage}>
        <div className={styles.legalContainer}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backArrow}>←</span>
            Back to Home
          </Link>

          <div className={styles.legalHeader}>
            <span className={styles.legalBadge}>Support</span>
            <h1 className={styles.legalTitle}>
              Frequently Asked Questions
            </h1>
            <p className={styles.legalSubtitle}>
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={styles.faqItem}
                id={`faq-item-${index}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  id={`faq-toggle-${index}`}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`${styles.faqIcon} ${
                      openIndex === index ? styles.faqIconOpen : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`${styles.faqAnswer} ${
                    openIndex === index ? styles.faqAnswerOpen : ''
                  }`}
                >
                  <div className={styles.faqAnswerInner}>{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
