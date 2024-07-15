import React from 'react';
import { NavSectionProps, NavLinkProps } from '../types';

const NavLink: React.FC<NavLinkProps> = React.memo(({ icon, label, href, badge, className = '' }) => (
  <li className={`hover:bg-white transition-colors rounded-md -ml-4 mr-6 pl-4 ${className}`}>
    <a href={href} className="flex items-center p-2 w-full">
      <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
      <span className="ml-3">{label}</span>
      {badge != null && (
        <span className="ml-[8px] mt-[3px] w-[30px] h-[16px] bg-[#101828] text-white font-[600] text-[10px] leading-[10px] rounded-[4px] text-center flex items-center justify-center">
          {badge}
        </span>
      )}
    </a>
  </li>
));

export const NavSection: React.FC<NavSectionProps> = React.memo(({ title, items, className = '' }) => (
  <nav className={`mb-4 ${className}`}>
    {title && <h3 className="mb-2 font-inter font-[600] text-[14px] leading-[24px] pl-[32px] text-[#A0A2A6]">{title}</h3>}
    <ul className="space-y-2 font-inter pl-[40px] text-[#344054] font-[600] text-[16px] leading-[24px]">
      {items.map((item) => (
        <NavLink key={item.label} {...item} />
      ))}
    </ul>
  </nav>
));

NavSection.displayName = 'NavSection';
NavLink.displayName = 'NavLink';