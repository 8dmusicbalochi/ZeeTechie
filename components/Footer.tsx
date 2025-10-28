import React from 'react';
import { NavLink } from 'react-router-dom';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';
import GitHubIcon from './icons/GitHubIcon';
import Tooltip from './Tooltip';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-white dark:bg-dark-brand-surface border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary">Z<span className="text-brand-accent">Techie</span></h3>
            <p className="mt-2 text-sm text-brand-text-secondary dark:text-dark-brand-text-secondary">Empowering Your Business with Smart Technology.</p>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <Tooltip text="Follow us on LinkedIn">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary dark:text-dark-brand-text-secondary hover:text-brand-primary dark:hover:text-brand-primary transition-colors">
                  <LinkedInIcon />
                </a>
              </Tooltip>
              <Tooltip text="Follow us on Twitter">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary dark:text-dark-brand-text-secondary hover:text-brand-primary dark:hover:text-brand-primary transition-colors">
                  <TwitterIcon />
                </a>
              </Tooltip>
              <Tooltip text="Check our GitHub">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-brand-text-secondary dark:text-dark-brand-text-secondary hover:text-brand-primary dark:hover:text-brand-primary transition-colors">
                  <GitHubIcon />
                </a>
              </Tooltip>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-brand-text-primary dark:text-dark-brand-text-primary">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              <li><NavLink to="/about" className="text-sm text-brand-text-secondary dark:text-dark-brand-text-secondary hover:text-brand-primary dark:hover:text-brand-primary">About Us</NavLink></li>
              <li><NavLink to="/services" className="text-sm text-brand-text-secondary dark:text-dark-brand-text-secondary hover:text-brand-primary dark:hover:text-brand-primary">Services</NavLink></li>
              <li><NavLink to="/pricing" className="text-sm text-brand-text-secondary dark:text-dark-brand-text-secondary hover:text-brand-primary dark:hover:text-brand-primary">Pricing</NavLink></li>
              <li><NavLink to="/contact" className="text-sm text-brand-text-secondary dark:text-dark-brand-text-secondary hover:text-brand-primary dark:hover:text-brand-primary">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-brand-text-primary dark:text-dark-brand-text-primary">Contact</h4>
            <ul className="mt-2 space-y-1 text-sm text-brand-text-secondary dark:text-dark-brand-text-secondary">
              <li><a href="mailto:info@ztechie.com" className="hover:text-brand-primary dark:hover:text-brand-primary">Email: info@ztechie.com</a></li>
              <li><a href="tel:+923222040775" className="hover:text-brand-primary dark:hover:text-brand-primary">Call: +92 3222040775</a></li>
              <li>Pakistan & Oman</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} ZTechie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;