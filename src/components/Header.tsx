import React from 'react';
import { Coffee, UtensilsCrossed } from 'lucide-react';

const Header: React.FC<{
  activeSection: 'food' | 'beverages';
  setActiveSection: (section: 'food' | 'beverages') => void;
}> = ({ activeSection, setActiveSection }) => {
  return (
    <header className="relative">
      {/* Hero Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg')] bg-cover bg-center opacity-40"></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center text-white">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 tracking-wider">
          Ruth's Café
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 italic">
          Where every flavor tells a story
        </p>
        
        {/* Menu Navigation */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
          <button
            onClick={() => setActiveSection('food')}
            className={`flex items-center gap-2 px-8 py-3 rounded-full text-lg font-medium transition duration-300 ${
              activeSection === 'food'
                ? 'bg-[#D4AF37] text-slate-900 shadow-lg'
                : 'bg-transparent border border-white/40 hover:bg-white/10'
            }`}
          >
            <UtensilsCrossed size={20} />
            <span>Food Menu</span>
          </button>
          
          <button
            onClick={() => setActiveSection('beverages')}
            className={`flex items-center gap-2 px-8 py-3 rounded-full text-lg font-medium transition duration-300 ${
              activeSection === 'beverages'
                ? 'bg-[#D4AF37] text-slate-900 shadow-lg'
                : 'bg-transparent border border-white/40 hover:bg-white/10'
            }`}
          >
            <Coffee size={20} />
            <span>Beverages</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;