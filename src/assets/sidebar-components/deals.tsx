import React from 'react';
import { Deals, Crown } from '../../images/icone';
import { DealsWidgetProps } from '../types';
import { ProgressBar } from './deals-components/progressbar';

export const DealsWidget: React.FC<DealsWidgetProps> = React.memo(({ dealsLeft, totalLeads, className = '' }) => {
  const percentage = ((totalLeads - dealsLeft) / totalLeads) * 100;

  return (
    <div className={`flex justify-center ${className}`}>
      <div className="mb-4 p-4 w-[270px] bg-[#FFFFFF] border border-r-[1px] border-[#DEDEE8] rounded-[12px]">
        <div className="flex items-center mb-2">
          <img src={Deals} alt="" className="w-[15px] h-[15px]" aria-hidden="true" />
          <h2 className="ml-2 font-inter font-[600] text-[14px] leading-[24px] text-[#344054]">Deals</h2>
        </div>
        <ProgressBar percentage={percentage} className="mt-[20px] mb-2" />
        <p className="mb-2 font-inter leading-[24px] font-[400] text-[12px] text-[#344054]">
          {dealsLeft} Deals left from {totalLeads} Leads
        </p>
        <button 
          className="w-full mt-[20px] p-2 bg-[#101828] border border-r-[1px] border-[#101828] shadow-custom-combined text-white font-[600] font-inter text-[16px] leading-[24px] rounded-[8px] hover:bg-black transition-colors flex items-center justify-center"
          onClick={() => console.log('Upgrade to pro clicked')}
        >
          <img src={Crown} alt="" className="w-5 h-5 mr-2" aria-hidden="true" />
          Upgrade to pro
        </button>
      </div>
    </div>
  );
});

DealsWidget.displayName = 'DealsWidget';