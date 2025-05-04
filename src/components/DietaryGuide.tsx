import React from 'react';
import { DietaryIcon } from '../types';

interface DietaryGuideProps {
  dietaryIcons: DietaryIcon[];
}

const DietaryGuide: React.FC<DietaryGuideProps> = ({ dietaryIcons }) => {
  return (
    <div className="bg-slate-100 py-4 px-6 rounded-lg mb-8">
      <h3 className="font-medium text-slate-700 mb-2">Dietary Guide</h3>
      <div className="flex flex-wrap gap-4">
        {dietaryIcons.map(icon => (
          <div key={icon.code} className="flex items-center">
            <span
              className="inline-block rounded-full text-xs font-bold px-2 py-1 text-white mr-2"
              style={{ backgroundColor: icon.color }}
            >
              {icon.code}
            </span>
            <span className="text-sm text-slate-600">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietaryGuide;