import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from '../(legal)/legal.module.css';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description:
    'Read the Terms and Conditions for using ZYROO — Web Design Studio services and website.',
};

export default function TermsPage() {
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
            <h1 className={styles.legalTitle}>Terms and Conditions</h1>
            <p className={styles.legalSubtitle}>
              Please read these terms carefully before using our website and services.
            </p>
          </div>

          <div className={styles.legalCard}>
            <h2>Agreement to Terms</h2>
            <p>
              Welcome to ZYROO — Web Design. By accessing or using our website, you agree to
              comply with our terms and conditions. All website content, designs, graphics,
              animations, and creative assets are the intellectual property of ZYROO unless
              otherwise stated.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              Users may not copy, reproduce, or redistribute any material without written
              permission. All creative work, including but not limited to website designs,
              UI/UX elements, illustrations, and animations, remain the property of ZYROO
              until full project payment and ownership transfer is agreed upon.
            </p>

            <h2>Modifications</h2>
            <p>
              We reserve the right to modify services, pricing, or policies at any time
              without prior notice. Continued use of the website means acceptance of these
              terms. We recommend checking this page periodically for updates.
            </p>

            <h2>Contact</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us
              at <a href="mailto:jha@tinytoono.in">jha@tinytoono.in</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
