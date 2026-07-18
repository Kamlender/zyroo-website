import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from '../(legal)/legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms of Use for the ZYROO website — understand acceptable use of our platform and services.',
  alternates: {
    canonical: 'https://tinytoono.in/terms-of-use',
  },
};

export default function TermsOfUsePage() {
  return (
    <>
      <div className={styles.legalPage}>
        <div className={styles.legalContainer}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backArrow}>←</span>
            Back to Home
          </Link>

          <div className={styles.legalHeader}>
            <span className={styles.legalBadge}>Legal</span>
            <h1 className={styles.legalTitle}>Terms of Use</h1>
            <p className={styles.legalSubtitle}>
              Guidelines for lawful and professional use of our website and services.
            </p>
          </div>

          <div className={styles.legalCard}>
            <h2>Acceptable Use</h2>
            <p>
              The content and services available on ZYROO — Web Design are intended for
              lawful and professional use only. Users must not attempt to disrupt the
              website, misuse forms, upload harmful files, or engage in unauthorized
              activities.
            </p>

            <h2>Accuracy of Information</h2>
            <p>
              Any information submitted through our website should be accurate and genuine.
              We rely on truthful submissions to provide accurate quotations and deliver
              quality service.
            </p>

            <h2>Right to Refuse Service</h2>
            <p>
              ZYROO reserves the right to suspend access or refuse service to anyone
              violating these conditions. Any form of abuse, spam, or harmful behavior
              will result in immediate access restriction.
            </p>

            <h2>Contact</h2>
            <p>
              For any questions about these Terms of Use, reach out to us at{' '}
              <a href="mailto:jha@tinytoono.in">jha@tinytoono.in</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
