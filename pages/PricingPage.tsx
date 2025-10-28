import React from 'react';
import CheckIcon from '../components/icons/CheckIcon';
import { NavLink } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const PricingPage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-brand-background dark:bg-dark-brand-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
            <div className="text-center">
            <h1 className="text-4xl font-extrabold text-brand-text-primary dark:text-dark-brand-text-primary sm:text-5xl">Choose a plan that fits your business</h1>
            <p className="mt-4 text-xl text-brand-text-secondary dark:text-dark-brand-text-secondary">
                Transparent pricing for businesses of all sizes. No hidden fees.
            </p>
            </div>
        </AnimatedSection>
        
        <div className="mt-16 grid grid-cols-1 gap-8 md:max-w-2xl md:mx-auto lg:max-w-7xl lg:grid-cols-3 lg:mx-0">
          <AnimatedSection>
            <PricingCard
                plan="Starter"
                price="$199"
                bestFor="New Businesses"
                features={[
                "Basic 5-page website",
                "Mobile-responsive design",
                "1 year of web hosting",
                "Basic IT support (Email)",
                ]}
            />
          </AnimatedSection>
          <AnimatedSection transitionDelay='delay-100'>
            <PricingCard
                plan="Growth"
                price="$499"
                bestFor="Growing Companies"
                features={[
                "Advanced multi-page website",
                "E-commerce integration",
                "AI chatbot setup",
                "Enhanced security features",
                "Priority IT support"
                ]}
                highlighted
            />
          </AnimatedSection>
          <AnimatedSection transitionDelay='delay-200'>
            <PricingCard
                plan="Enterprise"
                price="Custom Quote"
                bestFor="Large Corporations"
                features={[
                "Full custom solutions",
                "Advanced AI & automation",
                "Dedicated cloud server",
                "24/7 priority support",
                "Ongoing maintenance contract"
                ]}
            />
          </AnimatedSection>
        </div>
        <div className="text-center mt-12">
            <p className="text-brand-text-secondary dark:text-dark-brand-text-secondary">📌 We also provide custom packages based on your requirements. <NavLink to="/contact" className="text-brand-primary font-semibold hover:underline">Contact us</NavLink> for a free consultation.</p>
        </div>
      </div>
    </div>
  );
};


interface PricingCardProps {
  plan: string;
  price: string;
  bestFor: string;
  features: string[];
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, bestFor, features, highlighted = false }) => {
  const cardClasses = highlighted ? 'bg-brand-primary text-white dark:bg-brand-primary' : 'bg-brand-white dark:bg-dark-brand-surface text-brand-text-primary dark:text-dark-brand-text-primary shadow-xl';
  const buttonClasses = highlighted ? 'bg-brand-white text-brand-primary font-bold hover:bg-gray-100' : 'bg-brand-primary text-white hover:opacity-90';

  return (
    <div className={`rounded-lg p-8 flex flex-col h-full ${cardClasses} ${highlighted ? 'lg:transform lg:scale-105 shadow-2xl' : ''}`}>
      {highlighted && <span className="text-center text-sm font-bold uppercase tracking-wider mb-4 bg-white text-brand-primary dark:bg-dark-brand-surface dark:text-brand-primary rounded-full py-1">Most Popular</span>}
      <h3 className="text-2xl font-bold text-center">{plan}</h3>
      <p className={`text-center mt-2 ${highlighted ? 'text-gray-100 dark:text-gray-200' : 'text-brand-text-secondary dark:text-dark-brand-text-secondary'}`}>{bestFor}</p>
      <div className="mt-6 text-center">
        <span className="text-4xl font-extrabold">{price}</span>
        {price.startsWith('$') && <span className={`ml-1 text-lg ${highlighted ? 'text-gray-100 dark:text-gray-200' : 'text-brand-text-secondary dark:text-dark-brand-text-secondary'}`}>/ starting</span>}
      </div>
      <ul className="mt-8 space-y-4 flex-grow">
        {features.map(feature => (
          <li key={feature} className="flex items-start">
            <span className={`flex-shrink-0 mt-1 mr-3 ${highlighted ? 'text-white' : 'text-brand-primary'}`}><CheckIcon /></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <NavLink to="/contact" className={`block w-full text-center mt-8 py-3 px-6 rounded-lg font-semibold transition-colors ${buttonClasses}`}>
        Get Started
      </NavLink>
    </div>
  );
};

export default PricingPage;