import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from '../(legal)/legal.module.css';

export const metadata: Metadata = {
  title: 'Return Policy',
  description:
    'ZYROO Return Policy — understand our refund and cancellation terms for digital design services.',
};

export default function ReturnPolicyPage() {
  return (
    <>
      <div className={styles.legalPage}>
        <div className={styles.legalContainer}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backArrow}>←</span>
            Back to Home
          </Link>

          <div className={styles.legalHeader}>
            <span className={styles.legalBadge}>Policy</span>
            <h1 className={styles.legalTitle}>Return Policy</h1>
            <p className={styles.legalSubtitle}>
              Our approach to refunds and cancellations for digital services.
            </p>
          </div>

          <div className={styles.legalCard}>
            <h2>Digital Services</h2>
            <p>
              As ZYROO provides digital and creative services, refunds are generally not
              applicable once project work has begun. This includes website design, UI/UX
              design, branding, and other creative deliverables.
            </p>

            <h2>Client Satisfaction</h2>
            <p>
              Client satisfaction is important to us, and we aim to resolve any genuine
              concerns regarding service quality, delivery, or project execution. We
              encourage open communication throughout the project to ensure the final
              result meets your expectations.
            </p>

            <h2>Refund Evaluation</h2>
            <p>
              Any refund or cancellation requests will be evaluated based on the project
              scope, completed work, and agreed terms between both parties. Each case is
              reviewed individually to ensure a fair outcome.
            </p>

            <h2>Contact</h2>
            <p>
              To discuss a refund or cancellation, please reach out to us at{' '}
              <a href="mailto:jha@tinytoono.in">jha@tinytoono.in</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
