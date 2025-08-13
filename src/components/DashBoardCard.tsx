import type { DashBoardCardProps } from '@/types';
import React from 'react';

/**
 * DashBoardCard Component
 * 
 * A clean, reusable dashboard card component for displaying key metrics and statistics.
 * Data fetching should be handled externally using the useDashboardData hook.
 * 
 * @example
 * // keep rgba opacity at 0.2 for any iconBgColor
 * <DashBoardCard
 *   topLabel="Total Users"
 *   number={20}
 *   bottomLabel="Users registered"
 *   icon={<FaUser />}
 *   iconBgColor="bg-[rgba(59,130,246,0.2)]"
 *   iconColor="text-dprimary"
 *   showFCFA={true}
 *   iconColor = "text-white",
 *   numberColor = "text-black",
 * />
 */

const DashBoardCard: React.FC<DashBoardCardProps> = ({
  topLabel,
  number,
  bottomLabel,
  icon,
  iconBgColor = 'bg-yellow-400',
  iconColor = 'text-white',
  numberColor = 'text-black',
  fcfaColor = 'text-black',
  showFCFA = false,
  formatNumber = true
}) => {
  const formatDisplayNumber = (num: string | number): string => {
    if (!formatNumber) return num.toString();
    
    const numValue = typeof num === 'string' ? parseFloat(num) : num;
    if (isNaN(numValue)) return num.toString();
    
    return numValue.toLocaleString();
  };

  return (
    <div 
      className="w-full max-w-none sm:max-w-[344px] min-h-[110px] sm:h-[161px] bg-white rounded-[14px] p-3 sm:p-6 flex items-center justify-between transition-all duration-200 hover:shadow-lg"
      style={{
        boxShadow: '6px 6px 54px rgba(0, 0, 0, 0.09)'
      }}
    >
      <div className="flex flex-col justify-between h-full flex-1 min-w-0 pr-2 sm:pr-3">
        <div className="text-xs sm:text-sm text-dsecondary font-semibold mb-1 sm:mb-0 leading-tight">
          {topLabel}
        </div>

        <div className={`text-lg sm:text-3xl md:text-4xl font-bold ${numberColor} leading-tight mb-1 sm:mb-0 break-words`}>
          {formatDisplayNumber(number)}
          {showFCFA && (
            <span className={`text-xs sm:text-xl md:text-base ml-1 font-semibold ${fcfaColor}`}>
              FCFA
            </span>
          )}

        </div>
        
        <div className="text-xs sm:text-sm font-semibold text-dsecondary-50/50 leading-tight">
          {bottomLabel}
        </div>
      </div>
      
      <div className={`w-10 h-10 sm:w-14 sm:h-14 min-w-[2.5rem] min-h-[2.5rem] sm:min-w-14 sm:min-h-14 ${iconBgColor} rounded-2xl sm:rounded-3xl flex items-center justify-center self-start flex-shrink-0`}>
        <div className={`${iconColor} text-base sm:text-xl`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DashBoardCard;