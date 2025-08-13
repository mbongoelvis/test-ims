import React from 'react';
import type { ScreenHeaderProps } from '@/types';


const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, subtitle, className, buttons }) => {
  return (
    <div className={`flex justify-between items-start ${className || ''}`}>
      <div>
        <h1 className="font-bold text-2xl text-dsecondary">
          {title}
        </h1>
        {subtitle && (
          <p className="font-medium text-sm text-dsecondary-50/50">
            {subtitle}
          </p>
        )}
      </div>
      {buttons && (
        <div className="flex gap-2">{buttons}</div>
      )}
    </div>
  );
};

export default ScreenHeader;
