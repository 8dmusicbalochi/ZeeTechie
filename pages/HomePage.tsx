import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';
import CodeBracketIcon from '../components/icons/CodeBracketIcon';
import CloudIcon from '../components/icons/CloudIcon';
import CpuChipIcon from '../components/icons/CpuChipIcon';
import WrenchScrewdriverIcon from '../components/icons/WrenchScrewdriverIcon';
import AnimatedSection from '../components/AnimatedSection';
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon';
import ChevronRightIcon from '../components/icons/ChevronRightIcon';
import Tooltip from '../components/Tooltip';

const testimonials = [
  {
    quote: "ZTechie transformed our business with an automated online system — our sales increased by 60% within 3 months!",
    author: "John Doe",
    title: "CEO, Local Business",
    avatarUrl: 'https://picsum.photos/seed/johndoe/100/100',
  },
  {
    quote: "The team's expertise in cloud infrastructure is unmatched. They migrated our systems seamlessly with zero downtime.",
    author: "Jane Smith",
    title: "CTO, Tech Startup",
    avatarUrl: 'https://picsum.photos/seed/janesmith/100/100',
  },
  {
    quote: "Their AI chatbot has revolutionized our customer support, handling over 70% of inquiries and freeing up our team for complex issues.",
    author: "Sam Wilson",
    title: "Head of Support, SaaS Co.",
    avatarUrl: 'https://picsum.photos/seed/samwilson/100/100',
  },
];

const HomePage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (window.pageYOffset < window.innerHeight) {
      setOffsetY(window.pageYOffset);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const sliderInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(sliderInterval);
  }, [currentIndex]);


  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-white dark:bg-dark-brand-surface text-brand-text-primary dark:text-dark-brand-text-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center py-20 md:py-28">
            <div className="text-center md:text-left">
                <AnimatedSection>
                    <div style={{ transform: `translateY(${offsetY * 0.4}px)` }}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                            Empowering Your Business with <span className="text-brand-primary">Smart Technology</span>
                        </h1>
                    </div>
                </AnimatedSection>
                <AnimatedSection transitionDelay="delay-100">
                    <div style={{ transform: `translateY(${offsetY * 0.4}px)` }}>
                        <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-brand-text-secondary dark:text-dark-brand-text-secondary">
                            From web development to AI-powered automation, we provide end-to-end tech solutions that drive growth and efficiency.
                        </p>
                    </div>
                </AnimatedSection>
                <AnimatedSection transitionDelay="delay-200">
                    <div style={{ transform: `translateY(${offsetY * 0.4}px)` }}>
                        <div className="mt-8 flex justify-center md:justify-start gap-4">
                            <NavLink
                            to="/contact"
                            className="px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all transform hover:scale-105"
                            >
                            Get a Free Quote
                            </NavLink>
                            <NavLink
                            to="/services"
                            className="px-8 py-3 border border-brand-dark dark:border-dark-brand-text-secondary text-brand-dark dark:text-dark-brand-text-primary font-semibold rounded-lg shadow-md hover:bg-brand-dark hover:text-white dark:hover:bg-dark-brand-text-primary dark:hover:text-dark-brand-surface transition-all transform hover:scale-105"
                            >
                            Our Services
                            </NavLink>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            <AnimatedSection transitionDelay="delay-300">
                <div style={{ transform: `translateY(${offsetY * 0.2}px)` }}>
                    <div className="flex justify-center items-center mt-12 md:mt-0">
                    <img 
                        src="https://picsum.photos/seed/ztechie-hero/800/600" 
                        alt="A representation of modern technology and smart solutions" 
                        className="rounded-xl shadow-2xl w-full max-w-lg"
                    />
                    </div>
                </div>
            </AnimatedSection>
            </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-background dark:bg-dark-brand-background py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24 bg-brand-white dark:bg-dark-brand-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-brand-text-primary dark:text-dark-brand-text-primary sm:text-4xl">What We Do</h2>
              <p className="mt-4 text-xl text-brand-text-secondary dark:text-dark-brand-text-secondary max-w-2xl mx-auto">
                We offer a complete suite of services to meet your technology needs.
              </p>
            </div>
          </AnimatedSection>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection>
                <ServiceCard
                icon={<CodeBracketIcon />}
                title="Web Development"
                description="Modern, responsive websites built for performance and user experience."
                />
            </AnimatedSection>
            <AnimatedSection transitionDelay="delay-100">
                <ServiceCard
                icon={<CloudIcon />}
                title="Hosting & Cloud"
                description="Secure, scalable, and reliable cloud solutions to keep you online."
                />
            </AnimatedSection>
            <AnimatedSection transitionDelay="delay-200">
                <ServiceCard
                icon={<CpuChipIcon />}
                title="AI & Automation"
                description="Intelligent systems to automate tasks and boost business efficiency."
                />
            </AnimatedSection>
            <AnimatedSection transitionDelay="delay-300">
                <ServiceCard
                icon={<WrenchScrewdriverIcon />}
                title="IT Support"
                description="Expert tech support to ensure your operations run without a hitch."
                />
            </AnimatedSection>
          </div>
          <div className="text-center mt-12">
            <NavLink to="/services" className="text-brand-primary font-semibold hover:underline text-lg">
                Explore All Services &rarr;
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonial Slider Section */}
      <section className="py-16 sm:py-24 bg-brand-background dark:bg-dark-brand-background overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
                <h2 className="text-3xl font-extrabold text-brand-text-primary dark:text-dark-brand-text-primary sm:text-4xl">Featured Success Stories</h2>
                <div className="mt-12 relative h-80 md:h-72">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`absolute w-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <blockquote className="text-xl md:text-2xl font-medium text-brand-text-primary dark:text-dark-brand-text-primary">
                                <p>"{testimonial.quote}"</p>
                            </blockquote>
                            <cite className="mt-6 block">
                                <img
                                    loading="lazy"
                                    src={testimonial.avatarUrl}
                                    alt={`Avatar of ${testimonial.author}`}
                                    className="w-16 h-16 rounded-full mx-auto mb-4 ring-4 ring-brand-primary"
                                />
                                <span className="font-semibold text-brand-text-primary dark:text-dark-brand-text-primary">{testimonial.author}</span>
                                <span className="block text-brand-text-secondary dark:text-dark-brand-text-secondary">{testimonial.title}</span>
                            </cite>
                        </div>
                    ))}
                </div>

                {/* Slider Controls */}
                <div className="flex items-center justify-center mt-8">
                    <Tooltip text="Previous">
                      <button onClick={prevSlide} className="p-2 rounded-full text-brand-text-secondary dark:text-dark-brand-text-secondary hover:bg-white dark:hover:bg-dark-brand-surface hover:text-brand-text-primary dark:hover:text-dark-brand-text-primary transition-colors" aria-label="Previous testimonial">
                          <ChevronLeftIcon />
                      </button>
                    </Tooltip>
                    
                    <div className="flex justify-center space-x-3 mx-4">
                        {testimonials.map((_, slideIndex) => (
                            <button
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-brand-primary' : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500'}`}
                                aria-label={`Go to testimonial ${slideIndex + 1}`}
                            ></button>
                        ))}
                    </div>
                    
                    <Tooltip text="Next">
                      <button onClick={nextSlide} className="p-2 rounded-full text-brand-text-secondary dark:text-dark-brand-text-secondary hover:bg-white dark:hover:bg-dark-brand-surface hover:text-brand-text-primary dark:hover:text-dark-brand-text-primary transition-colors" aria-label="Next testimonial">
                          <ChevronRightIcon />
                      </button>
                    </Tooltip>
                </div>
            </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-white dark:bg-dark-brand-surface overflow-hidden">
        <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-brand-text-primary dark:text-dark-brand-text-primary sm:text-4xl">
                Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-lg text-brand-text-secondary dark:text-dark-brand-text-secondary">
                Let's build something amazing together. Contact us for a free consultation and see how ZTechie can help you achieve your goals.
            </p>
            <div className="mt-8">
                <NavLink
                to="/contact"
                className="inline-block px-12 py-4 bg-brand-primary text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-transform transform hover:scale-105"
                >
                Contact Us Today
                </NavLink>
            </div>
            </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="bg-brand-white dark:bg-dark-brand-surface p-8 rounded-lg text-center transform transition-transform hover:-translate-y-2 shadow-lg h-full">
        <div className="flex justify-center items-center h-12 w-12 rounded-full bg-brand-primary mx-auto text-white">
            {icon}
        </div>
        <h3 className="mt-6 text-xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary">{title}</h3>
        <p className="mt-2 text-brand-text-secondary dark:text-dark-brand-text-secondary">{description}</p>
    </div>
);

export default HomePage;