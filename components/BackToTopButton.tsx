import React, { useState, useEffect } from 'react';
import ArrowUpIcon from './icons/ArrowUpIcon';
import Tooltip from './Tooltip';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Tooltip text="Back to top">
        <button
          onClick={scrollToTop}
          type="button"
          className={`
            inline-block bg-brand-primary text-white rounded-full p-3 shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-background dark:focus:ring-offset-dark-brand-background focus:ring-brand-primary
            transition-all duration-300 ease-in-out
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}
          `}
          aria-label="Go to top"
        >
          <ArrowUpIcon />
        </button>
      </Tooltip>
    </div>
  );
};

export default BackToTopButton;