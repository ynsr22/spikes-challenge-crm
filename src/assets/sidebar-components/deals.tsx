import React from 'react';
import { Deals, Crown } from '../../images/icone';

export const DealsWidget: React.FC = () => (
  <div className="flex justify-center">
    <div className="mb-4 p-4 w-[270px] h-[171px] bg-[#FFFFFF] border border-r-[1px] border-[#DEDEE8] rounded-[12px]">
      <div className="flex items-center mb-2">
        <img src={Deals} alt="Deals icon" className="w-[15px] h-[15px]" />
        <div className="ml-2 font-inter font-[600] text-[14px] leading-[24px] text-[#344054]">Deals</div>
      </div>
      <div className="mt-[20px] w-full bg-[#D9D9D9] rounded-full h-1.5 mb-2">
        <div className="bg-black h-1.5 rounded-full" style={{ width: '83.33%' }}></div>
      </div>
      <div className="mb-2 font-inter leading-[24px] font-[400] text-[12px] text-[#344054]">5 Deals left from 30 Leads</div>
      <button className="w-full mt-[20px] p-2 bg-[#101828] border border-r-[1px] border-[#101828] shadow-custom-combined text-white font-[600] font-inter text-[16px] leading-[24px] rounded-[8px] hover:bg-black transition-colors flex items-center justify-center">
        <img src={Crown} alt="Crown icon" className="w-5 h-5 mr-2" />
        Upgrade to pro
      </button>
    </div>
  </div>
);