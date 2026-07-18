import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about ZYROO web design services — timelines, pricing, revisions, and more.',
  alternates: {
    canonical: 'https://tinytoono.in/faq',
  },
};

const faqData = [
  {
    q: 'What services does ZYROO provide?',
    a: 'ZYROO specializes in creative web design, UI/UX design, branding, animations, and digital experiences tailored for modern businesses and brands.',
  },
  {
    q: 'How long does it take to complete a website project?',
    a: 'Project timelines depend on the size and complexity of the work. A standard business website may take 1–3 weeks, while advanced custom projects can take longer.',
  },
  {
    q: 'Do you create custom website designs?',
    a: "Yes, every project is designed according to the client's brand identity, goals, and audience instead of using generic templates.",
  },
  {
    q: 'Is the website mobile-friendly?',
    a: 'Yes, all websites created by ZYROO are optimized for mobile, tablet, and desktop devices to ensure a smooth user experience across all screen sizes.',
  },
  {
    q: 'Can I request revisions during the project?',
    a: 'Yes, revisions are included during the design process to make sure the final result matches your expectations and requirements.',
  },
  {
    q: 'Do you provide website maintenance after delivery?',
    a: 'Yes, maintenance and support services can be provided depending on the project plan or client requirements.',
  },
  {
    q: 'Will my website be SEO optimized?',
    a: 'Basic SEO optimization such as fast loading speed, responsive layout, and search-friendly structure is included in most projects.',
  },
  {
    q: 'What information do I need to provide before starting a project?',
    a: 'You may need to provide your business details, branding materials, content, references, and project goals before the work begins.',
  },
  {
    q: 'How can I get a quotation for my project?',
    a: 'You can contact ZYROO through the website inquiry form or available contact details to discuss your project and receive a custom quotation.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes, ZYROO can work with clients globally through online communication and remote collaboration.',
  },
];

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tinytoono.in' },
            { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://tinytoono.in/faq' },
          ],
        }}
      />
      {children}
    </>
  );
}
