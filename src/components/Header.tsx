import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800">Beauty Automation</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              {t('header.services')}
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              {t('header.benefits')}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              {t('header.pricing')}
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              {t('header.testimonials')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              {t('header.contact')}
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105"
            >
              {t('header.consultation')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <div className="pb-4 border-b border-gray-200">
                <LanguageSelector />
              </div>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-pink-500 transition-colors text-left"
              >
                {t('header.services')}
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-gray-700 hover:text-pink-500 transition-colors text-left"
              >
                {t('header.benefits')}
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-700 hover:text-pink-500 transition-colors text-left"
              >
                {t('header.pricing')}
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-pink-500 transition-colors text-left"
              >
                {t('header.testimonials')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-pink-500 transition-colors text-left"
              >
                {t('header.contact')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                {t('header.consultation')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;