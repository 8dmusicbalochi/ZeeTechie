import React from 'react';
import CheckIcon from '../components/icons/CheckIcon';
import CodeBracketIcon from '../components/icons/CodeBracketIcon';
import CloudIcon from '../components/icons/CloudIcon';
import CpuChipIcon from '../components/icons/CpuChipIcon';
import WrenchScrewdriverIcon from '../components/icons/WrenchScrewdriverIcon';
import AnimatedSection from '../components/AnimatedSection';

const services = [
  {
    icon: <CodeBracketIcon className="w-10 h-10" />,
    title: 'Web Development & Design',
    description: 'We create modern, responsive websites that work beautifully on every device.',
    features: [
      'Business websites',
      'Personal & portfolio sites',
      'E-commerce & payment integration',
      'Admin dashboards',
      'SEO & speed optimization'
      ],
    imageUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop'
  },
  {
    icon: <CloudIcon className="w-10 h-10" />,
    title: 'Website Hosting & Cloud Solutions',
    description: 'Trusted, fast, and secure online infrastructure.',
    features: [
      'Domain setup & SSL security',
      'Cloud server configuration',
      'Daily backups & data protection',
      'Professional email hosting'
      ],
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop'
  },
  {
    icon: <CpuChipIcon className="w-10 h-10" />,
    title: 'AI & Automation',
    description: 'Boost efficiency with intelligent automation.',
    features: [
      'AI chatbots for 24/7 customer support',
      'Smart workflows to reduce manual work',
      'Predictive analytics for business insights',
      'Custom AI tools designed for your business'
     ],
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1470&auto=format&fit=crop'
  },
  {
    icon: <WrenchScrewdriverIcon className="w-10 h-10" />,
    title: 'IT Support & Consultancy',
    description: 'Reliable tech support to keep operations running smoothly.',
    features: [
      'Remote & on-site troubleshooting',
      'Hardware & network setup',
      'Security monitoring',
      'Long-term maintenance contracts'
    ],
     imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c7da?q=80&w=1470&auto=format&fit=crop'
   }
];

const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text

const ServicesPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-brand-background dark:bg-dark-brand-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
            <div className="text-center">
            <h1 className="text-4xl font-extrabold text-brand-text-primary dark:text-dark-brand-text-primary sm:text-5xl">Our Services</h1>
            <p className="mt-4 text-xl text-brand-text-secondary dark:text-dark-brand-text-secondary">
                Comprehensive technology solutions to power your business growth.
            </p>
            </div>
        </AnimatedSection>

        <div className="mt-16 space-y-16">
          {services.map((service, index) => (
            <AnimatedSection key={service.title}>
                <div id={slugify(service.title)} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 scroll-mt-24`}>
                <div className="md:w-1/2 bg-brand-white dark:bg-dark-brand-surface p-8 rounded-lg shadow-lg">
                    <div className="flex items-center gap-5 mb-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-brand-background dark:bg-gray-700 text-brand-primary">
                          {service.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary">{service.title}</h2>
                    </div>
                    <p className="text-brand-text-secondary dark:text-dark-brand-text-secondary mb-6">{service.description}</p>
                    <ul className="space-y-3">
                    {service.features.map(feature => (
                        <li key={feature} className="flex items-start">
                        <span className="flex-shrink-0 text-brand-primary mt-1 mr-2"><CheckIcon /></span>

                        <span className="text-brand-text-primary dark:text-dark-brand-text-primary">{feature}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="md:w-1/2">
                    <img loading="lazy" src={service.imageUrl} alt={service.title} className="rounded-lg shadow-2xl" />
                </div>
                </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;