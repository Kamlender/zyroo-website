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
      'One page, one goal — whether it\'s a product launch or an ad campaign. Fast, focused, and conversion-ready.',
    price: 5000,
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
    id: 'portfolio-website',
    title: 'Portfolio Website',
    shortTitle: 'Portfolio',
    description:
      'Showcase your work the right way. Perfect for photographers, designers, and developers.',
    price: 20000,
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
    deliveryDays: 4,
    category: 'Design',
  },
  {
    id: 'small-business',
    title: 'Small Business Website',
    shortTitle: 'Small Business',
    description:
      'Small business or startup — build a professional online presence without breaking the bank.',
    price: 40000,
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
    deliveryDays: 5,
    category: 'Development',
  },
  {
    id: 'business-website',
    title: 'Business Website',
    shortTitle: 'Business Site',
    description:
      'Multiple pages, proper branding, SEO setup — everything you need to take your business online seriously.',
    price: 50000,
    features: [
      'Up to 7 Pages',
      'CMS Integration',
      'SEO Setup',
      'Google Analytics',
      'Email Integration',
      'Fully Responsive',
    ],
    icon: '🏢',
    popular: false,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    deliveryDays: 7,
    category: 'Development',
  },
  {
    id: 'ecommerce-store',
    title: 'E-Commerce Store',
    shortTitle: 'E-Commerce',
    description:
      'Sell your products online — payment gateway, stock management, and order tracking all built-in.',
    price: 60000,
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
    deliveryDays: 10,
    category: 'Development',
  },

  {
    id: 'website-redesign',
    title: 'Website Redesign',
    shortTitle: 'Redesign',
    description:
      'Is your site slow or looking outdated? Fresh design, fast loading, mobile-friendly — done.',
    price: 10000,
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
    deliveryDays: 4,
    category: 'Design',
  },
  {
    id: '3d-web-design',
    title: '3D Web Design',
    shortTitle: '3D Design',
    description:
      'Take your website to the next level — with immersive 3D visuals, glassmorphism, and smooth animations.',
    price: 30000,
    features: [
      '3D Three.js Visuals',
      'Glassmorphism UI',
      'Smooth Animations',
      'Interactive Elements',
      'Mobile Optimized',
    ],
    icon: '🧊',
    popular: false,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    deliveryDays: 5,
    category: 'Design',
  },
  {
    id: 'hospital-website',
    title: 'Hospital Website',
    shortTitle: 'Hospital',
    description:
      'Take your hospital online — departments, doctors, appointment booking, and patient portal all in one place.',
    price: 50000,
    features: [
      'Doctor Profiles & Departments',
      'Online Appointment Booking',
      'Patient Portal',
      'Emergency Contact Section',
      'Mobile Responsive',
      'SEO Optimized',
    ],
    icon: '🏥',
    popular: false,
    gradient: 'linear-gradient(135deg, #00b4d8 0%, #0077b6 100%)',
    deliveryDays: 8,
    category: 'Development',
  },
  {
    id: 'clinic-website',
    title: 'Clinic Website',
    shortTitle: 'Clinic',
    description:
      'Professional website for your clinic or private practice — build patient trust and grow your online presence.',
    price: 20000,
    features: [
      'Doctor Bio & Services',
      'Appointment Form',
      'Location & Timings',
      'Patient Testimonials',
      'Mobile Responsive',
    ],
    icon: '🩺',
    popular: false,
    gradient: 'linear-gradient(135deg, #2ec4b6 0%, #20a4f3 100%)',
    deliveryDays: 4,
    category: 'Design',
  },
  {
    id: 'school-college-website',
    title: 'School & College Website',
    shortTitle: 'School/College',
    description:
      'Professional website for your school or college — admissions, results, events, and faculty info all in one place.',
    price: 20000,
    features: [
      'Admission Portal',
      'Faculty Profiles',
      'Events & Notices Board',
      'Photo Gallery',
      'Results Section',
      'Mobile Responsive',
    ],
    icon: '🎓',
    popular: false,
    gradient: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    deliveryDays: 5,
    category: 'Development',
  },
  {
    id: 'gym-fitness-website',
    title: 'Gym & Fitness Website',
    shortTitle: 'Gym & Fitness',
    description:
      'Get your gym or fitness studio online — class schedules, trainer profiles, membership plans, and online bookings.',
    price: 20000,
    features: [
      'Class Schedule & Timetable',
      'Trainer Profiles',
      'Membership Plans Display',
      'Online Booking / Enquiry Form',
      'Photo & Video Gallery',
      'Mobile Responsive',
    ],
    icon: '💪',
    popular: false,
    gradient: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
    deliveryDays: 5,
    category: 'Development',
  },
  {
    id: 'ngo-website',
    title: 'NGO / Non-Profit Website',
    shortTitle: 'NGO',
    description:
      'Build trust and reach more donors — showcase your cause, accept donations, and share your impact stories online.',
    price: 25000,
    features: [
      'Cause & Mission Pages',
      'Donation / Payment Integration',
      'Volunteer Registration Form',
      'Photo & Video Gallery',
      'Event & News Section',
      'Mobile Responsive',
    ],
    icon: '🤝',
    popular: false,
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    deliveryDays: 5,
    category: 'Development',
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((s) => s.id === id);
};

export const formatPrice = (price: number): string => {
  if (price >= 1000000) {
    const val = price / 1000000;
    const formatted = val % 1 === 0 ? val.toString() : val.toFixed(1);
    return `₹${formatted}m`;
  }
  if (price >= 1000) {
    const val = price / 1000;
    const formatted = val % 1 === 0 ? val.toString() : val.toFixed(1);
    return `₹${formatted}k`;
  }
  return `₹${price}`;
};

// Convert INR to USD (approximate rate)
const INR_TO_USD = 85;

export const formatPriceUSD = (priceINR: number): string => {
  const usd = Math.round(priceINR / INR_TO_USD);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(usd);
};
