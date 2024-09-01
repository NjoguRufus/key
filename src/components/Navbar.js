import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FaLeaf } from 'react-icons/fa';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const sections = ['home', 'products', 'about', 'contact'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (currentSection) {
          setActiveSection(currentSection);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const navLinks = [
      { href: '#home', text: 'Home' },
      { href: '#products', text: 'Products' },
      { href: '#about', text: 'About' },
      { href: '#contact', text: 'Contact' },
    ];
  
    return (
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 sticky top-0 z-50 transition-all duration-300 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wide flex items-center">
            <FaLeaf className="mr-2" />
            Key-Company
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link px-3 py-2 rounded-full text-base font-medium transition duration-300 hover:bg-green-500/30 ${
                      activeSection === link.href.slice(1) ? 'active' : ''
                    }`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link block px-3 py-2 rounded-full text-base font-medium transition duration-300 hover:bg-green-500/30 ${
                      activeSection === link.href.slice(1) ? 'active' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    );
  };
export default Navbar;
