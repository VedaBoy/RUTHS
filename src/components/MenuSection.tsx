import React, { useState, useRef } from 'react';
import { MenuSection as MenuSectionType, DietaryIcon } from '../types';
import MenuItemCard from './MenuItemCard';
import CategoryHeader from './CategoryHeader';
import { Search } from 'lucide-react';

interface MenuSectionProps {
  section: MenuSectionType;
  dietaryIcons: DietaryIcon[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ section, dietaryIcons }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  // Filter items based on search term and active category
  const filteredCategories = section.categories.map(category => {
    // If search term is provided, filter items by name, description, or dietary info
    const filteredItems = category.items.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // If no category is selected or this is the selected category, show the item
      const matchesCategory = !activeCategory || activeCategory === category.id;
      
      return matchesSearch && matchesCategory;
    });
    
    return { ...category, items: filteredItems };
  }).filter(category => category.items.length > 0);

  return (
    <div className="py-8 container mx-auto px-4">
      {/* Search and Category Navigation */}
      <div className="sticky top-0 z-30 pt-4 pb-6 bg-white shadow-sm">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder={`Search ${section.name} Menu...`}
            className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-amber-400 focus:border-amber-400 text-sm"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Categories Navigation */}
        <div className="overflow-x-auto" ref={categoriesRef}>
          <div className="flex space-x-2 min-w-max px-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeCategory === null
                  ? 'bg-[#7D2E46] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Categories
            </button>
            
            {section.categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  scrollToCategory(category.id);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-[#7D2E46] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Menu Content */}
      {filteredCategories.length > 0 ? (
        filteredCategories.map(category => (
          <div key={category.id} id={`category-${category.id}`}>
            <CategoryHeader title={category.name} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {category.items.map(item => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  dietaryIcons={dietaryIcons}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl text-slate-600">No items found matching your search.</h3>
          <button 
            onClick={() => {
              setSearchTerm('');
              setActiveCategory(null);
            }}
            className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuSection;