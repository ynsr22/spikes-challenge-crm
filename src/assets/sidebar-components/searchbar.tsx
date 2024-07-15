import React from 'react';
import { Loupe, CmdK } from '../../images/icone';

export const SearchBar: React.FC = () => (
  <div className="mb-4 pl-[28px] pr-[28px] relative">
    <img src={Loupe} alt="Search icon" className="absolute left-9 top-1/2 transform -translate-y-1/2 w-5 h-5" />
    <img src={CmdK} alt="Command + K" className="absolute right-9 top-1/2 transform -translate-y-1/2 w-10 h-10" />
    <input
      type="text"
      placeholder="Search"
      className="w-full p-2 font-inter font-[400] text-[16px] leading-[24px] pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);
