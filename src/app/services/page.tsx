import React from 'react';
import type { Metadata } from 'next';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: {
    absolute: 'Web Design & Development Services | ZYROO STUDIO',
  },
  description:
    'Explore ZYROO STUDIO web design and development services. We create high-converting landing pages, e-commerce stores, clinic websites, and custom web applications.',
  alternates: {
    canonical: 'https://tinytoono.in/services',
  },
};


export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tinytoono.in' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://tinytoono.in/services' },
          ],
        }}
      />
      <PricingSection />
      <Footer />
    </>
  );
}
