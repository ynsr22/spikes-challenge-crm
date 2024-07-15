import React from 'react';

// Import your SVG icons
import Logo from '../images/logo.svg';
import Home from "../images/home-line.svg";
import Clients from "../images/clients.svg";
import Stack from "../images/stack.svg";
import Deals from "../images/deals.svg";
import Inbound from "../images/inbound.svg";
import Outbound from "../images/outbound.svg";
import Ads from "../images/ads.svg";
import Notifications from "../images/notifications.svg";
import Settings from "../images/settings.svg";
import Crown from "../images/crown.svg";
import Photo from "../images/photo.svg";
import Loupe from "../images/loupe.svg";
import CmdK from "../images/commandk.svg";

interface NavItem {
  icon: string;
  label: string;
  href: string;
  badge?: number;
}

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: 'Home', href: '#' },
  { icon: Clients, label: 'Clients', href: '#' },
  { icon: Stack, label: 'Leads', href: '#' },
  { icon: Deals, label: 'Deals', href: '#' },
];

const listItems: NavItem[] = [
  { icon: Inbound, label: 'Inbound', href: '#' },
  { icon: Outbound, label: 'Outbound', href: '#' },
  { icon: Ads, label: 'Ads', href: '#' },
];

const bottomNavItems: NavItem[] = [
  { icon: Notifications, label: 'Notifications', href: '#', badge: 3 },
  { icon: Settings, label: 'Settings', href: '#' },
];

const userProfile: UserProfile = {
  name: 'Arthur Bossuyt',
  email: 'Arthur@squared.studio',
  avatar: Photo,
};

const NavLink: React.FC<NavItem> = ({ icon, label, href, badge }) => (
    <li className="hover:bg-white transition-colors rounded-md -ml-4 mr-6 pl-4">
        <a href={href} className="flex items-center p-2 w-full">
            <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
            <span className="ml-3">{label}</span>
            {badge && (
                <span className="ml-[8px] mt-[3px] w-[30px] h-[16px] bg-[#101828] text-white font-[600] text-[10px] leading-[10px] rounded-[4px] text-center flex items-center justify-center">
                    {badge}
                </span>
            )}
        </a>
    </li>
);
  

const Sidebar: React.FC = () => {
  return (
    <div className="w-[326px] flex flex-col">
        
        <div className="flex items-center justify-between mb-4 pl-[28px] pt-[32px]">
  <button className="w-[32px] h-[32px]">
    <img src={Logo} alt="Logo" className="w-full h-full" />
  </button>
</div>
      
<div className="mb-4 pl-[28px] pr-[28px] relative">
  <img src={Loupe} alt="Search icon" className="absolute left-9 top-1/2 transform -translate-y-1/2 w-5 h-5" />
  <img src={CmdK} alt="Command + K" className="absolute right-9 top-1/2 transform -translate-y-1/2 w-10 h-10" />
  <input
    type="text"
    placeholder="Search"
    className="w-full p-2 font-inter font-[400] text-[16px] leading-[24px] pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
      
      <nav className="mb-4 flex-grow">
      <h3 className="mb-2 font-inter font-[600] text-[14px] leading-[24px] pl-[32px] text-[#A0A2A6]">Navigation</h3>
        <ul className="space-y-2 font-inter pl-[40px] text-[#344054] font-[600] text-[16px] leading-[24px]">
          {navItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </ul>
      </nav>
      
      <div className="mb-4">
        <h3 className="mb-2 font-inter font-[600] text-[14px] leading-[24px] text-[#A0A2A6] pl-[32px]">Your Lists</h3>
        <ul className="space-y-2 font-inter pl-[40px] text-[#344054] font-[600] text-[16px] leading-[24px]">
          {listItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </ul>
      </div>
      
      <div className="mb-4">
        <ul className="space-y-2 font-inter pl-[40px] text-[#344054] font-[600] text-[16px] leading-[24px]">
          {bottomNavItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </ul>
      </div>
      
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
<div className="flex justify-center items-center mt-auto mb-[32px] cursor-pointer">
        <div className="w-[270px] h-[60px] p-2 rounded-[12px] bg-white  transition-colors border border-r-[1px] border-[#DEDEE8] flex items-center">
          <img src={userProfile.avatar} alt="Profile" className="w-10 h-10" />
          <div className="ml-3 flex-grow">
            <div className="text-[14px] leading-[20px] font-[600] font-inter text-[#344054]">{userProfile.name}</div>
            <div className="text-[14px] font-inter font-[400] leading-[20px] text-[#475467]">{userProfile.email}</div>
          </div>
          <svg className="w-5 h-5 mr-[12px] text-[#475467]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;