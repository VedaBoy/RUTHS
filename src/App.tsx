import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import { menuSections } from './data/menuData';

function App() {
  const [activeSection, setActiveSection] = useState<'food' | 'beverages'>('food');
  const [currentSection, setCurrentSection] = useState(menuSections.find(section => section.id === activeSection));
  const [isLoading, setIsLoading] = useState(false);

  // Update current section when active section changes
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate a loading delay for a smoother transition
    const timer = setTimeout(() => {
      setCurrentSection(menuSections.find(section => section.id === activeSection));
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="px-4 max-w-7xl mx-auto">
        {/* Menu Section */}
        <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {currentSection && (
            <MenuSection 
              section={currentSection} 
            />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;