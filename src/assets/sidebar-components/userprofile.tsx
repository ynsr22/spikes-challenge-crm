import React from 'react';
import { UserProfileWidgetProps } from '../types';

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const UserProfileWidget: React.FC<UserProfileWidgetProps> = React.memo(
  ({ profile, onProfileClick, className = '' }) => (
    <div className={`flex justify-center items-center mt-auto mb-8 ${className}`}>
      <button
        onClick={onProfileClick}
        className="w-[270px] h-[60px] p-2 rounded-[12px] bg-white hover:bg-gray-50 transition-colors border border-[#DEDEE8] flex items-center focus:outline-none"
      >
        <img src={profile.avatar} alt="" className="w-10 h-10" aria-hidden="true" />
        <div className="ml-3 flex-grow text-left">
          <p className="text-sm leading-5 font-semibold text-[#344054]">{profile.name}</p>
          <p className="text-sm font-normal leading-5 text-[#475467]">{profile.email}</p>
        </div>
        <ChevronDownIcon className="w-5 h-5 text-[#475467]" aria-hidden="true" />
      </button>
    </div>
  )
);

UserProfileWidget.displayName = 'UserProfileWidget';