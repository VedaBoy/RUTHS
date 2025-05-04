import React from 'react';
import { MenuItem } from '../types';

const MenuItemCard: React.FC<{
  item: MenuItem;
}> = ({ item }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image Container with Overlay */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Price Badge */}
        <div className="absolute top-0 right-0 bg-[#D4AF37] text-white font-semibold py-1 px-3 rounded-bl-lg shadow-md z-10">
        ₹{item.price.toFixed(2)}

        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">{item.name}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow">{item.description}</p>
      </div>
    </div>
  );
};

export default MenuItemCard;