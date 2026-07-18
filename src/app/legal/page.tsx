import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from '../(legal)/legal.module.css';

export const metadata: Metadata = {
  title: 'Legal',
  description:
    'Legal information for ZYROO — copyright, intellectual property, and legal jurisdiction details.',
  alternates: {
    canonical: 'https://tinytoono.in/legal',
  },
};

export default function LegalPage() {
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
            <h1 className={styles.legalTitle}>Legal</h1>
            <p className={styles.legalSubtitle}>
              Copyright, intellectual property, and jurisdiction information.
            </p>
          </div>

          <div className={styles.legalCard}>
            <h2>Copyright Protection</h2>
            <p>
              All content, branding, UI/UX elements, illustrations, animations, and
              website designs featured on ZYROO — Web Design are protected under copyright
              and intellectual property laws.
            </p>

            <h2>Unauthorized Use</h2>
            <p>
              Unauthorized use, duplication, or commercial exploitation of our work is
              strictly prohibited. This includes but is not limited to copying website
              designs, reusing creative assets, and reproducing proprietary content without
              express written permission.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from the use of this website or our services shall be
              governed by applicable laws and legal jurisdiction. We encourage amicable
              resolution of disputes wherever possible.
            </p>

            <h2>Contact</h2>
            <p>
              For legal inquiries, contact us at{' '}
              <a href="mailto:jha@tinytoono.in">jha@tinytoono.in</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
