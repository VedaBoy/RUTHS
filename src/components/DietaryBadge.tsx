import React, { useState } from 'react';
import { DietaryIcon } from '../types';

interface DietaryBadgeProps {
  icon: DietaryIcon;
}

const DietaryBadge: React.FC<DietaryBadgeProps> = ({ icon }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <span
        className="inline-block rounded-full text-xs font-bold px-2 py-1 text-white"
        style={{ backgroundColor: icon.color }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {icon.code}
      </span>
      
      {showTooltip && (
        <div className="absolute z-10 -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs rounded py-1 px-2 min-w-max opacity-95">
          {icon.name}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-solid border-t-slate-800 border-t-4 border-x-transparent border-x-4 border-b-0"></div>
        </div>
      )}
    </div>
  );
};

export default DietaryBadge;