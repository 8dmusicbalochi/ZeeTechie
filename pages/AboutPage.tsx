import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const teamMembers = [
  {
    name: 'Waheed',
    role: 'Founder & CEO',
    imageUrl: 'https://picsum.photos/seed/waheed/400/400',
  },
  {
    name: 'Mamoon Rasheed',
    role: 'Lead Developer',
    imageUrl: 'https://picsum.photos/seed/mamoon/400/400',
  },
  {
    name: 'Jasim Murad',
    role: 'UI/UX Designer',
    imageUrl: 'https://picsum.photos/seed/jasim/400/400',
  },
  {
    name: 'Ameer Jan',
    role: 'Project Manager',
    imageUrl: 'https://picsum.photos/seed/ameer/400/400',
  },
  {
    name: 'Naseem Jumma',
    role: 'IT Support Specialist',
    imageUrl: 'https://picsum.photos/seed/naseem/400/400',
  },
];

const AboutPage: React.FC = () => {
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
                    <img loading="lazy" className="rounded-lg shadow-2xl w-full" src="https://picsum.photos/600/400?grayscale&blur=2" alt="ZTechie Team" />
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
                        <TeamMemberCard name={member.name} role={member.role} imageUrl={member.imageUrl} />
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
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, imageUrl }) => (
    <div className="bg-brand-white dark:bg-dark-brand-surface p-6 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-2 h-full">
        <img
            loading="lazy"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-brand-primary/20"
            src={imageUrl}
            alt={`Photo of ${name}`}
        />
        <h3 className="text-xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary">{name}</h3>
        <p className="text-brand-primary font-medium">{role}</p>
    </div>
);


export default AboutPage;