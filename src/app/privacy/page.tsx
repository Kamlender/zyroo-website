import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from '../(legal)/legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'ZYROO Privacy Policy — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <div className={styles.legalPage}>
        <div className={styles.legalContainer}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backArrow}>←</span>
            Back to Home
          </Link>

          <div className={styles.legalHeader}>
            <span className={styles.legalBadge}>Privacy</span>
            <h1 className={styles.legalTitle}>Privacy Policy</h1>
            <p className={styles.legalSubtitle}>
              Your privacy matters. Learn how we handle your personal data.
            </p>
          </div>

          <div className={styles.legalCard}>
            <h2>Information We Collect</h2>
            <p>
              At ZYROO — Web Design, we respect your privacy and are committed to
              protecting your personal information. We may collect details such as your
              name, email address, phone number, or project inquiry information to improve
              communication and provide our services effectively.
            </p>

            <h2>How We Use Your Data</h2>
            <p>
              The information collected is used solely to respond to inquiries, provide
              project quotations, deliver our services, and improve user experience on our
              website.
            </p>

            <h2>Third-Party Sharing</h2>
            <p>
              Your information will never be sold or shared with third parties without
              consent, except where required by law. We do not use your data for
              advertising purposes.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures to safeguard user data and maintain
              confidentiality. While no method of transmission over the Internet is 100%
              secure, we strive to protect your personal information.
            </p>

            <h2>Contact</h2>
            <p>
              If you have any questions about our Privacy Policy, contact us at{' '}
              <a href="mailto:jha@tinytoono.in">jha@tinytoono.in</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
