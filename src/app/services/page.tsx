import React from 'react';
import type { Metadata } from 'next';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore ZYROO web design services — landing pages, portfolios, e-commerce stores, hospital & clinic websites, and custom web apps. Fair pricing, fast delivery.',
};

export default function ServicesPage() {
  return (
    <>
      <PricingSection />
      <Footer />
    </>
  );
}
