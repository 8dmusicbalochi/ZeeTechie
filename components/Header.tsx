import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Tooltip from './Tooltip';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClass = "px-4 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkClass = "bg-brand-primary text-white";

  return (
    <header className="bg-brand-white dark:bg-dark-brand-surface sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-brand-text-primary dark:text-dark-brand-text-primary">Z<span className="text-brand-accent">Techie</span></h1>
            </NavLink>
          </div>

          {/* Navigation and Contact on the right for desktop */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `${linkClass} ${isActive ? activeLinkClass : 'text-brand-text-secondary dark:text-dark-brand-text-secondary hover:text-brand-text-primary dark:hover:text-dark-brand-text-primary'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center">
             <Tooltip text={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}>
                <button
                    onClick={toggleTheme}
                    type="button"
                    className="ml-4 p-2 rounded-full text-brand-text-secondary dark:text-dark-brand-text-secondary hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? <MoonIcon /> : <SunIcon />}
                </button>
            </Tooltip>
             {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden ml-2">
                <Tooltip text={isOpen ? 'Close menu' : 'Open menu'}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-brand-text-secondary dark:text-dark-brand-text-secondary hover:text-brand-text-primary dark:hover:text-dark-brand-text-primary hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                    )}
                </button>
                </Tooltip>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClass : 'text-brand-text-secondary dark:text-dark-brand-text-secondary hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-brand-text-primary dark:hover:text-dark-brand-text-primary'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;