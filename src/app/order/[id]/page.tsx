import { Suspense } from 'react';
import { services } from '@/lib/services';
import OrderPageClient from './OrderPageClient';

// Generate static pages for all services (required for static export)
export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function OrderPage() {
  return (
    <Suspense>
      <OrderPageClient />
    </Suspense>
  );
}
