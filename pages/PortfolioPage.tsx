import React, { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const portfolioItems = [
  {
    title: 'E-commerce Platform',
    client: 'Fashion Retailer',
    category: 'Web Development & Design',
    description: 'Built a scalable e-commerce site with custom inventory management, increasing online sales by 40%.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    results: '40% increase in sales, 25% faster checkout process.',
    imageUrl: 'https://picsum.photos/seed/ecommerce/600/400'
  },
  {
    title: 'AI Customer Support Bot',
    client: 'SaaS Company',
    category: 'AI & Automation',
    description: 'Developed an AI-powered chatbot to handle customer queries 24/7, reducing support ticket volume.',
    technologies: ['Python', 'Dialogflow', 'Firebase'],
    results: 'Reduced support tickets by 60%, improved customer satisfaction.',
    imageUrl: 'https://picsum.photos/seed/aibot/600/400'
  },
  {
    title: 'Corporate Website Redesign',
    client: 'Financial Services',
    category: 'Web Development & Design',
    description: 'A complete redesign focusing on modern UX/UI and mobile-first principles to improve lead generation.',
    technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
    results: '50% more leads generated through the new contact forms.',
    imageUrl: 'https://picsum.photos/seed/corpweb/600/400'
  },
   {
    title: 'Cloud Infrastructure Migration',
    client: 'Tech Startup',
    category: 'Website Hosting & Cloud Solutions',
    description: 'Migrated entire on-premise infrastructure to a secure and scalable cloud environment on AWS.',
    technologies: ['AWS', 'Docker', 'Terraform', 'CI/CD'],
    results: 'Improved uptime to 99.99% and reduced operational costs by 30%.',
    imageUrl: 'https://picsum.photos/seed/cloud/600/400'
  },
  {
    title: 'Data Analytics Dashboard',
    client: 'Marketing Agency',
    category: 'Web Development & Design',
    description: 'A real-time analytics dashboard for visualizing campaign performance, built with React.',
    technologies: ['React', 'D3.js', 'Node.js'],
    results: 'Provided key insights that led to a 15% improvement in ad spend efficiency.',
    imageUrl: 'https://picsum.photos/seed/dashboard/600/400'
  },
  {
    title: 'Telemedicine & Patient Portal',
    client: 'Regional Health Clinic',
    category: 'Web Development & Design',
    description: 'A secure web application for virtual doctor consultations, appointment scheduling, and patient record management to improve healthcare accessibility.',
    technologies: ['React Native', 'WebRTC', 'Node.js', 'PostgreSQL'],
    results: 'Increased patient engagement by 50% and reduced administrative overhead for appointment booking.',
    imageUrl: 'https://picsum.photos/seed/telemed/600/400'
  },
  {
    title: 'Cloud-Based POS System',
    client: 'Boutique Cafe Chain',
    category: 'Web Development & Design',
    description: 'A custom point-of-sale system with real-time sales tracking, inventory management, and customer loyalty features, accessible from any device.',
    technologies: ['React', 'Electron', 'SQLite', 'Stripe'],
    results: 'Streamlined the checkout process, reducing transaction times by 30% and providing valuable sales analytics.',
    imageUrl: 'https://picsum.photos/seed/pos/600/400'
  },
  {
    title: 'Donor Management Platform',
    client: 'Global Relief NGO',
    category: 'Web Development & Design',
    description: 'A comprehensive platform for managing donor relationships, tracking fundraising campaigns, and automating donation receipts for a non-profit organization.',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
    results: 'Boosted online donations by 25% through a more intuitive user experience and simplified donation process.',
    imageUrl: 'https://picsum.photos/seed/ngo/600/400'
  },
  {
    title: 'Managed IT Services',
    client: 'Corporate Law Firm',
    category: 'IT Support & Consultancy',
    description: 'Provided comprehensive IT support, including network security, hardware maintenance, and 24/7 helpdesk services, ensuring uninterrupted business operations.',
    technologies: ['Active Directory', 'Cybersecurity', 'Network Monitoring'],
    results: 'Achieved 99.9% system uptime and resolved 95% of support tickets within the first hour.',
    imageUrl: 'https://picsum.photos/seed/itsupport/600/400'
  },
  {
    title: 'Healthcare Analytics Platform',
    client: 'Metropolis Hospital Group',
    category: 'AI & Automation',
    description: 'Developed an AI-driven platform to analyze patient data, predict disease outbreaks in the region, and optimize hospital resource allocation.',
    technologies: ['Python', 'TensorFlow', 'React', 'Tableau'],
    results: 'Improved patient outcome predictions by 20% and optimized bed allocation, leading to a 15% reduction in operational costs.',
    imageUrl: 'https://picsum.photos/seed/health-analytics/600/400'
  },
  {
    title: 'Enterprise Retail POS',
    client: 'National Supermarket Chain',
    category: 'Web Development & Design',
    description: 'Engineered a robust, multi-location POS and inventory management system designed for high-volume retail, with centralized reporting and analytics.',
    technologies: ['Vue.js', '.NET Core', 'SQL Server', 'Azure'],
    results: 'Unified inventory across 50+ stores, reduced checkout errors by 90%, and provided C-level executives with real-time sales data.',
    imageUrl: 'https://picsum.photos/seed/enterprise-pos/600/400'
  },
  {
    title: 'Volunteer Coordination App',
    client: 'Hope Foundation NGO',
    category: 'Web Development & Design',
    description: 'Created a mobile-first web app to streamline volunteer recruitment, scheduling, and communication for large-scale events and disaster relief efforts.',
    technologies: ['Flutter', 'Firebase', 'Google Maps API'],
    results: 'Increased volunteer sign-ups by 40% and reduced administrative time for event organization by over 20 hours per week.',
    imageUrl: 'https://picsum.photos/seed/volunteer-app/600/400'
  }
];

const categories = [
    'All',
    'Web Development & Design',
    'Website Hosting & Cloud Solutions',
    'AI & Automation',
    'IT Support & Consultancy'
];


const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredItems(portfolioItems);
    } else {
      const newFilteredItems = portfolioItems.filter(item =>
        item.category === activeFilter
      );
      setFilteredItems(newFilteredItems);
    }
  }, [activeFilter]);


  return (
    <div className="py-16 sm:py-24 bg-brand-background dark:bg-dark-brand-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
            <div className="text-center">
            <h1 className="text-4xl font-extrabold text-brand-text-primary dark:text-dark-brand-text-primary sm:text-5xl">Our Work</h1>
            <p className="mt-4 text-xl text-brand-text-secondary dark:text-dark-brand-text-secondary">
                Here are a few projects we're proud of. Filter by service to see more.
            </p>
            </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="flex justify-center flex-wrap gap-3 my-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 text-sm font-medium rounded-full shadow-sm transition-all duration-200 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary ${
                  activeFilter === category
                    ? 'bg-brand-primary text-white scale-105 shadow-lg'
                    : 'bg-brand-white dark:bg-dark-brand-surface text-brand-text-primary dark:text-dark-brand-text-primary hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
          {filteredItems.map((item) => (
            <AnimatedSection key={`${activeFilter}-${item.title}`}>
                <div className="bg-brand-white dark:bg-dark-brand-surface rounded-lg shadow-lg flex flex-col h-full transition-transform transform hover:scale-105 overflow-hidden group">
                    <img
                        src={item.imageUrl}
                        alt={`Screenshot of the ${item.title} project`}
                        className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="p-8 flex-grow flex flex-col">
                        <div className="flex-grow">
                            <h3 className="text-sm font-semibold text-brand-primary uppercase tracking-wider">{item.client} / {item.category}</h3>
                            <p className="mt-4 text-2xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary">{item.title}</p>
                            <p className="mt-4 text-lg font-semibold text-brand-text-primary dark:text-dark-brand-text-primary">📌 Description</p>
                            <p className="mt-2 text-brand-text-secondary dark:text-dark-brand-text-secondary">{item.description}</p>
                            
                            <p className="mt-4 text-lg font-semibold text-brand-text-primary dark:text-dark-brand-text-primary">🧩 Technologies Used</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {item.technologies.map(tech => (
                                    <span key={tech} className="px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 dark:text-brand-accent dark:bg-brand-accent/10 rounded-full">{tech}</span>
                                ))}
                            </div>

                            <p className="mt-4 text-lg font-semibold text-brand-text-primary dark:text-dark-brand-text-primary">📈 Results</p>
                            <p className="mt-2 text-brand-text-secondary dark:text-dark-brand-text-secondary">{item.results}</p>
                        </div>
                        <div className="mt-6">
                            <span className="text-green-500 font-bold">✅ Project Completed</span>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
          ))}
        </div>
        {filteredItems.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-16">
              <p className="text-xl text-brand-text-secondary dark:text-dark-brand-text-secondary">No projects found for this service.</p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;