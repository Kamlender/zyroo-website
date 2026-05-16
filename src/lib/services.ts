// ============================================
// ZYROO — Web Design Services Data
// ============================================

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  price: number;
  maxPrice?: number;
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
      'Ek page, ek goal — chahe product launch ho ya ad campaign. Fast, focused, aur conversion-ready.',
    price: 10000,
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
    deliveryDays: 5,
    category: 'Design',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    shortTitle: 'Portfolio',
    description:
      'Apna kaam dikhao properly. Photographers, designers, developers — sabke liye.',
    price: 25000,
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
    deliveryDays: 7,
    category: 'Design',
  },
  {
    id: 'small-business',
    title: 'Small Business Website',
    shortTitle: 'Small Business',
    description:
      'Chhota business ho ya startup — professional online presence banao without breaking the bank.',
    price: 50000,
    features: [
      'Up to 5 Pages',
      'Responsive Design',
      'Basic SEO Setup',
      'Contact Form',
      'Google Maps Integration',
      'Social Media Links',
    ],
    icon: '🏪',
    popular: false,
    gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    deliveryDays: 10,
    category: 'Development',
  },
  {
    id: 'business-website',
    title: 'Business Website',
    shortTitle: 'Business Site',
    description:
      'Multiple pages, proper branding, SEO setup — apne business ko online seriously le jaane ke liye.',
    price: 110000,
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
    deliveryDays: 14,
    category: 'Development',
  },
  {
    id: 'ecommerce-store',
    title: 'E-Commerce Store',
    shortTitle: 'E-Commerce',
    description:
      'Apni products online becho — payment gateway, stock management, orders sab built-in.',
    price: 250000,
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
    deliveryDays: 21,
    category: 'Development',
  },
  {
    id: 'web-application',
    title: 'Custom Web Application',
    shortTitle: 'Web App',
    description:
      'Kuch alag chahiye? Custom dashboard, booking system, ya koi specific tool — bana denge.',
    price: 500000,
    maxPrice: 1000000,
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
    deliveryDays: 30,
    category: 'Development',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    shortTitle: 'Redesign',
    description:
      'Purani site slow hai ya outdated lagti hai? Naya design, fast loading, mobile-friendly — done.',
    price: 20000,
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
    deliveryDays: 7,
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
