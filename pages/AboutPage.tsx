import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import Tooltip from '../components/Tooltip';
import EnvelopeIcon from '../components/icons/EnvelopeIcon';
import AnimatedCounter from '../components/AnimatedCounter';
import waheedImg from '../images/waheed.jpg';
import jasimImg from '../images/jasim.jpg';
import naseemImg from '../images/Naseem.jpg';

const teamMembers = [
  {
    name: 'Waheed',
    role: 'Founder & CEO',
    imageUrl: waheedImg,
    linkedinUrl: 'https://www.linkedin.com/in/waheedbaloch58',
    bio: 'With over a decade of experience in tech leadership, Waheed founded ZTechie to bridge the gap between business needs and technological solutions. He is passionate about driving innovation and fostering a culture of excellence.',
    email: 'waheed@ztechie.com',
    expertise: ['Strategic Planning', 'Business Development', 'Cloud Architecture', 'Client Relations'],
  },
  {
    name: 'Mamoon Rasheed',
    role: 'Lead Developer',
    imageUrl: waheedImg,
    linkedinUrl: 'https://www.linkedin.com/in/mamoon-rasheed',
    bio: 'Mamoon is a full-stack wizard who architects and builds robust, scalable applications. He has a keen eye for detail and a love for clean, efficient code that powers our clients\' success.',
    email: 'mamoon@ztechie.com',
    expertise: ['Full-Stack Development', 'React & Node.js', 'E-commerce Platforms', 'AI Integration'],
  },
  {
    name: 'Jasim Murad',
    role: 'UI/UX Designer',
    imageUrl: jasimImg,
    linkedinUrl: 'https://www.linkedin.com/in/jasim-murad',
    bio: 'Jasim crafts intuitive and beautiful user experiences. He believes that great design is not just about aesthetics, but about creating seamless interactions that solve real user problems.',
    email: 'jasim@ztechie.com',
    expertise: ['User-Centered Design', 'Mobile-First Prototyping', 'Brand Identity', 'Figma & Adobe XD'],
  },
  {
    name: 'Ameer Jan',
    role: 'Project Manager',
    imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=400&auto=format&fit=crop',
    linkedinUrl: 'https://www.linkedin.com/in/ameer-jan',
    bio: 'Ameer ensures that projects are delivered on time and within budget. His exceptional organizational skills and clear communication keep our team and clients aligned and moving forward.',
    email: 'ameer@ztechie.com',
    expertise: ['Agile Methodologies', 'Scrum', 'Client Communication', 'Risk Management'],
  },
  {
    name: 'Naseem Jumma',
    role: 'Cyber Security Specialist',
    imageUrl: naseemImg,
    linkedinUrl: 'https://www.linkedin.com/in/naseem-jumma',
    bio: 'Naseem is our digital guardian, dedicated to protecting our clients\' assets from cyber threats. He implements cutting-edge security measures to ensure data integrity and peace of mind.',
    email: 'naseem@ztechie.com',
    expertise: ['Penetration Testing', 'Cloud Security', 'Threat Intelligence', 'Compliance'],
  },
];

const AboutPage: React.FC = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const handleToggleExpand = (name: string) => {
    setExpandedMember(prev => (prev === name ? null : name));
  };
  
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-brand-background dark:bg-dark-brand-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
            <div className="text-center">
                <h1 className="text-4xl font-extrabold text-brand-text-primary dark:text-dark-brand-text-primary sm:text-5xl">Who We Are</h1>
                <p className="mt-4 text-xl text-brand-text-secondary dark:text-dark-brand-text-secondary max-w-3xl mx-auto">
                    ZTechie is a next-generation technology company helping businesses transform digitally. We provide complete end-to-end tech solutions.
                </p>
            </div>
        </AnimatedSection>

        {/* What We Believe */}
        <AnimatedSection>
            <div className="mt-20 flex flex-col md:flex-row gap-16 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary">What We Believe</h2>
                    <p className="mt-4 text-brand-text-secondary dark:text-dark-brand-text-secondary">
                    Technology should be simple, affordable, and powerful enough to grow businesses. Our team combines industry expertise with innovation to build digital systems that create real results.
                    </p>
                    <div className="mt-8 space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-brand-primary">Our Mission</h3>
                            <p className="mt-2 text-brand-text-secondary dark:text-dark-brand-text-secondary">To make advanced technology accessible for every business and boost digital growth worldwide.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-brand-primary">Our Vision</h3>
                            <p className="mt-2 text-brand-text-secondary dark:text-dark-brand-text-secondary">To lead the way in delivering smart and automated technology solutions that power the future.</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img loading="lazy" className="rounded-lg shadow-2xl w-full" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop" alt="ZTechie Team" />
                </div>
            </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection>
            <div className="mt-24 bg-brand-white dark:bg-dark-brand-surface rounded-lg shadow-lg py-16 sm:py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="p-4">
                        <p className="text-4xl md:text-5xl font-extrabold text-brand-primary">
                        <AnimatedCounter end={50} />+
                        </p>
                        <p className="mt-2 text-lg text-brand-text-secondary dark:text-dark-brand-text-secondary">Projects Completed</p>
                    </div>
                    <div className="p-4">
                        <p className="text-4xl md:text-5xl font-extrabold text-brand-primary">
                        <AnimatedCounter end={99} />%
                        </p>
                        <p className="mt-2 text-lg text-brand-text-secondary dark:text-dark-brand-text-secondary">Client Satisfaction</p>
                    </div>
                    <div className="p-4">
                        <p className="text-4xl md:text-5xl font-extrabold text-brand-primary">
                        <AnimatedCounter end={5} />+
                        </p>
                        <p className="mt-2 text-lg text-brand-text-secondary dark:text-dark-brand-text-secondary">Years of Experience</p>
                    </div>
                    <div className="p-4">
                        <p className="text-4xl md:text-5xl font-extrabold text-brand-primary">
                        <AnimatedCounter end={24} />/7
                        </p>
                        <p className="mt-2 text-lg text-brand-text-secondary dark:text-dark-brand-text-secondary">Expert Support</p>
                    </div>
                </div>
            </div>
        </AnimatedSection>


        {/* Our Values */}
        <div className="mt-24">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center text-brand-text-primary dark:text-dark-brand-text-primary">🛠️ Our Values</h2>
          </AnimatedSection>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection>
                <ValueCard title="Innovation" description="We build for tomorrow, constantly exploring new technologies to give you a competitive edge." />
            </AnimatedSection>
            <AnimatedSection transitionDelay="delay-100">
                <ValueCard title="Trust" description="We build long-term relationships with our clients based on transparency and reliability." />
            </AnimatedSection>
            <AnimatedSection transitionDelay="delay-200">
                <ValueCard title="Quality" description="We are committed to world-class performance and excellence in every project we undertake." />
            </AnimatedSection>
            <AnimatedSection transitionDelay="delay-300">
                <ValueCard title="Support" description="Your success is our mission. We are always by your side to help you navigate the digital landscape." />
            </AnimatedSection>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mt-24">
            <AnimatedSection>
                <h2 className="text-3xl font-bold text-center text-brand-text-primary dark:text-dark-brand-text-primary">Meet Our Team</h2>
                <p className="mt-4 text-xl text-brand-text-secondary dark:text-dark-brand-text-secondary max-w-3xl mx-auto text-center">
                    The passionate experts behind ZTechie's success.
                </p>
            </AnimatedSection>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {teamMembers.map((member, index) => (
                    <AnimatedSection key={member.name} transitionDelay={`delay-${index * 100}`}>
                        <TeamMemberCard 
                            {...member} 
                            isExpanded={expandedMember === member.name}
                            onToggleExpand={() => handleToggleExpand(member.name)}
                        />
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

interface ValueCardProps {
    title: string;
    description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => (
    <div className="bg-brand-white dark:bg-dark-brand-surface p-6 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-2 h-full">
        <h3 className="text-xl font-semibold text-brand-primary mb-2">{title}</h3>
        <p className="text-brand-text-secondary dark:text-dark-brand-text-secondary">{description}</p>
    </div>
);

interface TeamMemberCardProps {
    name: string;
    role: string;
    imageUrl: string;
    linkedinUrl?: string;
    bio: string;
    email: string;
    expertise: string[];
    isExpanded: boolean;
    onToggleExpand: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imageUrl, linkedinUrl, bio, email, expertise, isExpanded, onToggleExpand }) => (
    <div
      className={`bg-brand-white dark:bg-dark-brand-surface rounded-lg shadow-lg text-center transition-all duration-300 ease-in-out transform hover:-translate-y-2 focus-within:ring-2 focus-within:ring-brand-primary ${isExpanded ? 'ring-2 ring-brand-primary' : ''}`}
    >
      <div
        className="p-6 cursor-pointer"
        onClick={onToggleExpand}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggleExpand()}
        aria-expanded={isExpanded}
        aria-controls={`bio-${name.replace(/\s+/g, '-')}`}
      >
        <img
          loading="lazy"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-brand-primary/20 pointer-events-none"
          src={imageUrl}
          alt={`Photo of ${name}`}
        />
        <h3 className="text-xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary">{name}</h3>
        <p className="text-brand-primary font-medium">{role}</p>
      </div>

      <div
        id={`bio-${name.replace(/\s+/g, '-')}`}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}
        aria-hidden={!isExpanded}
      >
        <div className="px-6 pb-6 text-left">
          <p className="text-sm text-brand-text-secondary dark:text-dark-brand-text-secondary border-t border-gray-200 dark:border-gray-700 pt-4">
            {bio}
          </p>
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-brand-primary uppercase tracking-wider">Key Expertise</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {expertise.map(skill => (
                <span key={skill} className="px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 dark:text-brand-accent dark:bg-brand-accent/10 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-center items-center space-x-4">
            {linkedinUrl && (
              <Tooltip text={`View ${name}'s LinkedIn Profile`}>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block text-brand-text-secondary dark:text-dark-brand-text-secondary hover:text-brand-primary dark:hover:text-brand-primary transition-colors"
                  aria-label={`LinkedIn profile for ${name}`}
                >
                  <LinkedInIcon />
                </a>
              </Tooltip>
            )}
            <Tooltip text={`Contact ${name}`}>
              <a
                href={`mailto:${email}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 text-brand-text-secondary dark:text-dark-brand-text-secondary hover:text-brand-primary dark:hover:text-brand-primary transition-colors"
                aria-label={`Email ${name}`}
              >
                <EnvelopeIcon />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
);


export default AboutPage;