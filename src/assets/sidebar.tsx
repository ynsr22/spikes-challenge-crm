// Core React import
import React from 'react';

// Components
import { SearchBar } from './sidebar-components/searchbar';
import { NavSection } from './sidebar-components/navsection';
import { DealsWidget } from './sidebar-components/deals';
import { UserProfileWidget } from './sidebar-components/userprofile';

// Sidebar components
import { navItems, listItems, bottomNavItems, userProfile } from './constants';

// Icons
import {
  Logo,
} from '../images/icone';

const Sidebar: React.FC = () => {
  return (
    <div className="w-[326px] flex flex-col">
      <div className="flex items-center justify-between mb-4 pl-[28px] pt-[32px]">
        <button className="w-[32px] h-[32px]">
          <img src={Logo} alt="Logo" className="w-full h-full" />
        </button>
      </div>
      
      <SearchBar />
      
      <NavSection title="Navigation" items={navItems} />
      <NavSection title="Your Lists" items={listItems} />
      <NavSection title="" items={bottomNavItems} />
      
      <DealsWidget dealsLeft={5} totalLeads={25} />
      <UserProfileWidget profile={userProfile} />
    </div>
  );
};

export default Sidebar;