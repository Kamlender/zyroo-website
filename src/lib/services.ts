// ============================================
// ZYRO — Web Design Services Data
// ============================================

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  icon: string;
  popular: boolean;
  gradient: string;
  deliveryDays: number;
  category: string;
}

export const services: Service[] = [
  {
    id: 'landing-page',
    title: 'Landing Page Design',
    shortTitle: 'Landing Page',
    description:
      'High-converting single page website perfect for startups, products, and marketing campaigns.',
    price: 4999,
    originalPrice: 7999,
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Contact Form Integration',
      'Fast Loading Speed',
      'Modern UI/UX',
    ],
    icon: '🎯',
    popular: false,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    deliveryDays: 3,
    category: 'Design',
  },
  {
    id: 'business-website',
    title: 'Business Website',
    shortTitle: 'Business Site',
    description:
      'Professional multi-page website to establish your brand online and attract more customers.',
    price: 14999,
    originalPrice: 19999,
    features: [
      'Up to 7 Pages',
      'CMS Integration',
      'SEO Setup',
      'Google Analytics',
      'Email Integration',
      'Fully Responsive',
    ],
    icon: '🏢',
    popular: true,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    deliveryDays: 7,
    category: 'Development',
  },
  {
    id: 'ecommerce-store',
    title: 'E-Commerce Store',
    shortTitle: 'E-Commerce',
    description:
      'Full-featured online store with payment gateway, inventory management, and admin panel.',
    price: 24999,
    originalPrice: 34999,
    features: [
      'Product Management',
      'Payment Gateway',
      'Order Tracking',
      'Admin Dashboard',
      'Inventory System',
      'Mobile Optimized',
    ],
    icon: '🛒',
    popular: false,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    deliveryDays: 14,
    category: 'Development',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    shortTitle: 'Portfolio',
    description:
      'Showcase your work beautifully with a stunning portfolio site that leaves a lasting impression.',
    price: 9999,
    originalPrice: 12999,
    features: [
      'Project Gallery',
      'Smooth Animations',
      'Contact Form',
      'Social Media Links',
      'Blog Section',
    ],
    icon: '🎨',
    popular: false,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    deliveryDays: 5,
    category: 'Design',
  },
  {
    id: 'web-application',
    title: 'Custom Web Application',
    shortTitle: 'Web App',
    description:
      'Fully custom web application tailored to your business logic with modern tech stack.',
    price: 49999,
    originalPrice: 69999,
    features: [
      'Custom Architecture',
      'Database Design',
      'API Development',
      'User Authentication',
      'Admin Panel',
      'Cloud Deployment',
    ],
    icon: '⚡',
    popular: false,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    deliveryDays: 21,
    category: 'Development',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    shortTitle: 'Redesign',
    description:
      'Modernize your existing website with fresh design, improved UX, and better performance.',
    price: 7999,
    originalPrice: 11999,
    features: [
      'UI/UX Audit',
      'Modern Redesign',
      'Performance Boost',
      'Mobile Responsive',
      'SEO Improvement',
    ],
    icon: '🔄',
    popular: false,
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    deliveryDays: 5,
    category: 'Design',
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((s) => s.id === id);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
