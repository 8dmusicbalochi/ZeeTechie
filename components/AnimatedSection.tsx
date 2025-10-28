import React, { useState, useEffect, useRef } from 'react';

// A self-contained Intersection Observer hook to avoid creating new directories.
const useIntersectionObserver = (options: IntersectionObserverInit): [React.RefObject<any>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger the animation only once
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      options
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, ref]);

  return [ref, isIntersecting];
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  transitionDelay?: string; // e.g., 'delay-100', 'delay-300'
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', transitionDelay = 'delay-0' }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${transitionDelay} ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
