import { Suspense } from 'react';
import type { Metadata } from 'next';
import { services, getServiceById } from '@/lib/services';
import JsonLd from '@/components/JsonLd';
import OrderPageClient from './OrderPageClient';

// Generate static pages for all services (required for static export)
export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

// Dynamic metadata per service
export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const service = getServiceById(params.id);
  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} — Order Now`,
    description: `Order ${service.title} from ZYROO Studio — ₹${service.price.toLocaleString('en-IN')}, delivered in ${service.deliveryDays} days. ${service.features.slice(0, 3).join(', ')}, and more.`,
    alternates: {
      canonical: `https://tinytoono.in/order/${service.id}`,
    },
  };
}

export default function OrderPage({
  params,
}: {
  params: { id: string };
}) {
  const service = getServiceById(params.id);

  return (
    <>
      {service && (
        <>
          {/* Service + Offer Schema */}
          <JsonLd
            data={{
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: service.title,
              provider: { '@id': 'https://tinytoono.in/#organization' },
              areaServed: { '@type': 'Country', name: 'India' },
              offers: {
                '@type': 'Offer',
                price: String(service.price),
                priceCurrency: 'INR',
                priceValidUntil: '2026-12-31',
                availability: 'https://schema.org/InStock',
              },
              description: service.description,
            }}
          />
          {/* BreadcrumbList */}
          <JsonLd
            data={{
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tinytoono.in' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://tinytoono.in/services' },
                { '@type': 'ListItem', position: 3, name: service.title, item: `https://tinytoono.in/order/${service.id}` },
              ],
            }}
          />
        </>
      )}
      <Suspense>
        <OrderPageClient />
      </Suspense>
    </>
  );
}
