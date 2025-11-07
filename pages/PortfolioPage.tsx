import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

export const portfolioItems = [
  {
    title: 'E-commerce Platform',
    client: 'Fashion Retailer',
    category: 'Web Development & Design',
    description: 'Built a scalable e-commerce site with custom inventory management, payment gateway integration, and a user-friendly admin dashboard. The platform was optimized for performance and SEO, resulting in a significant increase in online sales and a smoother checkout process for customers.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    results: '40% increase in sales, 25% faster checkout process.',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop',
    demoUrl: '#',
    galleryImages: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9e?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561715276-a2d02e2426e8?q=80&w=1470&auto=format&fit=crop'
    ]
  },
  {
    title: 'AI Customer Support Bot',
    client: 'SaaS Company',
    category: 'AI & Automation',
    description: 'Developed an AI-powered chatbot to handle customer queries 24/7, reducing support ticket volume. The bot was trained on company-specific data to provide accurate answers and could escalate complex issues to human agents seamlessly.',
    technologies: ['Python', 'Dialogflow', 'Firebase'],
    results: 'Reduced support tickets by 60%, improved customer satisfaction.',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1470&auto=format&fit=crop',
    demoUrl: '#',
    galleryImages: [
      'https://images.unsplash.com/photo-1558137623-ce93347b3722?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop'
    ]
  },
  {
    title: 'Corporate Website Redesign',
    client: 'Financial Services',
    category: 'Web Development & Design',
    description: 'A complete redesign focusing on modern UX/UI and mobile-first principles to improve lead generation. The new site features a clean, professional design, clear calls-to-action, and a resource center with valuable content for visitors.',
    technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
    results: '50% more leads generated through the new contact forms.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1470&auto=format&fit=crop',
    demoUrl: '#',
    galleryImages: [
      'https://images.unsplash.com/photo-1559028006-44a36b17a126?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop'
    ]
  },
   {
    title: 'Cloud Infrastructure Migration',
    client: 'Tech Startup',
    category: 'Website Hosting & Cloud Solutions',
    description: 'Migrated entire on-premise infrastructure to a secure and scalable cloud environment on AWS. This involved setting up virtual private clouds, configuring auto-scaling groups, and implementing a robust CI/CD pipeline for automated deployments.',
    technologies: ['AWS', 'Docker', 'Terraform', 'CI/CD'],
    results: 'Improved uptime to 99.99% and reduced operational costs by 30%.',
    imageUrl: 'https://images.unsplash.com/photo-1590955979927-a31677947614?q=80&w=1471&auto=format&fit=crop',
    galleryImages: []
  },
  {
    title: 'Data Analytics Dashboard',
    client: 'Marketing Agency',
    category: 'Web Development & Design',
    description: 'A real-time analytics dashboard for visualizing campaign performance, built with React. The dashboard integrates with various ad platforms and provides customizable widgets for tracking key metrics, helping the agency make data-driven decisions.',
    technologies: ['React', 'D3.js', 'Node.js'],
    results: 'Provided key insights that led to a 15% improvement in ad spend efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
    demoUrl: '#',
    galleryImages: [
      'https://images.unsplash.com/photo-1611926653458-09292215EA9d?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1470&auto=format&fit=crop'
    ]
  },
  {
    title: 'Telemedicine & Patient Portal',
    client: 'Regional Health Clinic',
    category: 'Web Development & Design',
    description: 'A secure web application for virtual doctor consultations, appointment scheduling, and patient record management to improve healthcare accessibility. The platform is HIPAA compliant and ensures the privacy and security of patient data.',
    technologies: ['React Native', 'WebRTC', 'Node.js', 'PostgreSQL'],
    results: 'Increased patient engagement by 50% and reduced administrative overhead for appointment booking.',
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d27929?q=80&w=1470&auto=format&fit=crop',
    galleryImages: []
  },
  {
    title: 'Cloud-Based POS System',
    client: 'Boutique Cafe Chain',
    category: 'Web Development & Design',
    description: 'A custom point-of-sale system with real-time sales tracking, inventory management, and customer loyalty features, accessible from any device. The system also provides detailed reports to help the business owner track performance.',
    technologies: ['React', 'Electron', 'SQLite', 'Stripe'],
    results: 'Streamlined the checkout process, reducing transaction times by 30% and providing valuable sales analytics.',
    imageUrl: 'https://images.unsplash.com/photo-1570857502809-08184874388e?q=80&w=1470&auto=format&fit=crop',
    galleryImages: []
  },
  {
    title: 'Donor Management Platform',
    client: 'Global Relief NGO',
    category: 'Web Development & Design',
    description: 'A comprehensive platform for managing donor relationships, tracking fundraising campaigns, and automating donation receipts for a non-profit organization. The platform makes it easy for donors to contribute and for the NGO to manage its fundraising efforts.',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
    results: 'Boosted online donations by 25% through a more intuitive user experience and simplified donation process.',
    imageUrl: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=1470&auto=format&fit=crop',
    galleryImages: []
  },
  {
    title: 'Managed IT Services',
    client: 'Corporate Law Firm',
    category: 'IT Support & Consultancy',
    description: 'Provided comprehensive IT support, including network security, hardware maintenance, and 24/7 helpdesk services, ensuring uninterrupted business operations. We act as the firm\'s outsourced IT department, handling all their technology needs.',
    technologies: ['Active Directory', 'Cybersecurity', 'Network Monitoring'],
    results: 'Achieved 99.9% system uptime and resolved 95% of support tickets within the first hour.',
    imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1470&auto=format&fit=crop',
    galleryImages: []
  },
  {
    title: 'Healthcare Analytics Platform',
    client: 'Metropolis Hospital Group',
    category: 'AI & Automation',
    description: 'Developed an AI-driven platform to analyze patient data, predict disease outbreaks in the region, and optimize hospital resource allocation. The platform uses machine learning models to identify patterns and provide actionable insights to healthcare administrators.',
    technologies: ['Python', 'TensorFlow', 'React', 'Tableau'],
    results: 'Improved patient outcome predictions by 20% and optimized bed allocation, leading to a 15% reduction in operational costs.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop',
    galleryImages: []
  },
  {
    title: 'Enterprise Retail POS',
    client: 'National Supermarket Chain',
    category: 'Web Development & Design',
    description: 'Engineered a robust, multi-location POS and inventory management system designed for high-volume retail, with centralized reporting and analytics. The system supports thousands of transactions per day and integrates with the company\'s existing ERP.',
    technologies: ['Vue.js', '.NET Core', 'SQL Server', 'Azure'],
    results: 'Unified inventory across 50+ stores, reduced checkout errors by 90%, and provided C-level executives with real-time sales data.',
    imageUrl: 'https://images.unsplash.com/photo-1580913428023-02c695666d61?q=80&w=1383&auto=format&fit=crop',
    galleryImages: []
  },
  {
    title: 'Volunteer Coordination App',
    client: 'Hope Foundation NGO',
    category: 'Web Development & Design',
    description: 'Created a mobile-first web app to streamline volunteer recruitment, scheduling, and communication for large-scale events and disaster relief efforts. The app includes features like event calendars, push notifications, and skill-based volunteer matching.',
    technologies: ['Flutter', 'Firebase', 'Google Maps API'],
    results: 'Increased volunteer sign-ups by 40% and reduced administrative time for event organization by over 20 hours per week.',
    imageUrl: 'https://images.unsplash.com/photo-1593113589674-c76b9f825faf?q=80&w=1470&auto=format&fit=crop',
    galleryImages: []
  }
];

export const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text

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
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: string]: boolean }>({});

  const toggleDescription = (title: string) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

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
                            <p className={`mt-2 text-brand-text-secondary dark:text-dark-brand-text-secondary ${!expandedDescriptions[item.title] ? 'line-clamp-2' : ''}`}>
                                {item.description}
                            </p>
                            <button onClick={() => toggleDescription(item.title)} className="text-sm font-semibold text-brand-primary hover:underline mt-2">
                                {expandedDescriptions[item.title] ? 'Show Less' : 'Read More'}
                            </button>
                            
                            <p className="mt-4 text-lg font-semibold text-brand-text-primary dark:text-dark-brand-text-primary">🧩 Technologies Used</p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {item.technologies.map(tech => (
                                    <span key={tech} className="px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 dark:text-brand-accent dark:bg-brand-accent/10 rounded-full">{tech}</span>
                                ))}
                            </div>

                            <p className="mt-4 text-lg font-semibold text-brand-text-primary dark:text-dark-brand-text-primary">📈 Results</p>
                            <p className="mt-2 text-brand-text-secondary dark:text-dark-brand-text-secondary">{item.results}</p>
                        </div>
                        <div className="mt-8">
                           <NavLink to={`/portfolio/${slugify(item.title)}`} className="inline-flex items-center justify-center w-full px-6 py-3 font-semibold text-center text-white rounded-lg shadow-md bg-brand-primary hover:opacity-90 transition-all transform hover:scale-105">
                                View Case Study &rarr;
                            </NavLink>
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