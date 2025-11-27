import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Brand & Address */}
          <div>
            <h3 className="font-display text-2xl uppercase tracking-wider mb-6">Pizzeria da Massimo</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <a 
                href="https://maps.google.com/?q=Am+Marktplatz+8,85250+Altomünster" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors group"
              >
                <MapPin className="shrink-0 text-brand-red mt-0.5 group-hover:scale-110 transition-transform" size={18} />
                <span>
                  Am Marktplatz 8<br />
                  85250 Altomünster
                </span>
              </a>
              <a href="tel:082549981977" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Phone className="shrink-0 text-brand-red group-hover:scale-110 transition-transform" size={18} />
                <span>08254 - 99 81 977</span>
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-display text-lg uppercase tracking-wide mb-6 flex items-center gap-2">
              <Clock size={18} className="text-brand-red" />
              Öffnungszeiten
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Montag</span>
                <span className="text-brand-red font-medium">Ruhetag</span>
              </li>
              <li className="flex justify-between border-t border-gray-700/50 pt-2">
                <span>Di - So (Mittag)</span>
                <span>11:30 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Di - So (Abend)</span>
                <span>17:00 - 22:00</span>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-display text-lg uppercase tracking-wide mb-6">Folgen Sie uns</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <div className="flex flex-col gap-2 text-xs text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors">Allergeninformationen</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pizzeria da Massimo. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};