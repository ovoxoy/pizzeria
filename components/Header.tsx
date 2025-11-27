import React, { useState, useEffect } from 'react';
import { Phone, Utensils } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm h-14' : 'bg-transparent h-20'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center w-full">
        <div className={`flex items-center gap-2 font-display uppercase tracking-wider font-semibold transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
          <Utensils size={20} className={scrolled ? 'text-brand-red' : 'text-white'} />
          <span className="whitespace-nowrap">Pizzeria da Massimo</span>
        </div>

        <a 
          href="tel:082549981977" 
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            scrolled 
              ? 'bg-brand-red text-white hover:bg-brand-darkRed' 
              : 'bg-white/20 backdrop-blur text-white hover:bg-white/30'
          }`}
        >
          <Phone size={16} />
          <span className="hidden sm:inline">08254 - 99 81 977</span>
          <span className="sm:hidden">Anrufen</span>
        </a>
      </div>
    </header>
  );
};