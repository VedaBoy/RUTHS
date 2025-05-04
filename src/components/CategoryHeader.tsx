import React from 'react';

interface CategoryHeaderProps {
  title: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title }) => {
  return (
    <div className="relative py-4 my-8">
      {/* Watercolor Background */}
      <div className="absolute inset-0 opacity-15 bg-gradient-to-r from-emerald-200 via-teal-100 to-yellow-100 rounded-lg"></div>
      
      <h2 className="relative font-serif text-2xl md:text-3xl text-center font-bold text-slate-800">
        {title}
      </h2>
    </div>
  );
};

export default CategoryHeader;