import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Client Reviews',
  description:
    'Read real reviews from ZYROO clients — freelancers, startup founders, and business owners share their experience with our web design services.',
  alternates: {
    canonical: 'https://tinytoono.in/reviews',
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      {children}
    </>
  );
}
