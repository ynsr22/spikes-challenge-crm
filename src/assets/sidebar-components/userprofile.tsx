import React from 'react';
import { UserProfile } from '../types';

export const UserProfileWidget: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <div className="flex justify-center items-center mt-auto mb-[32px] cursor-pointer">
    <div className="w-[270px] h-[60px] p-2 rounded-[12px] bg-white transition-colors border border-r-[1px] border-[#DEDEE8] flex items-center">
      <img src={profile.avatar} alt="Profile" className="w-10 h-10" />
      <div className="ml-3 flex-grow">
        <div className="text-[14px] leading-[20px] font-[600] font-inter text-[#344054]">{profile.name}</div>
        <div className="text-[14px] font-inter font-[400] leading-[20px] text-[#475467]">{profile.email}</div>
      </div>
      <svg className="w-5 h-5 mr-[12px] text-[#475467]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
  </div>
);