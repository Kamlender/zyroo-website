import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with ZYROO — Web Design Studio. Reach out for project inquiries, quotations, and collaboration.',
  alternates: {
    canonical: 'https://tinytoono.in/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
