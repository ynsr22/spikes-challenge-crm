// Core React import
import React, { useState } from 'react';

// Components
import { SearchBar } from './sidebar-components/searchbar';
import { NavSection } from './sidebar-components/navsection';
import { DealsWidget } from './sidebar-components/deals';
import { UserProfileWidget } from './sidebar-components/userprofile';

import { UserProfile } from './types';

// Sidebar components
import { navItems, listItems, bottomNavItems } from './constants';

// Icons
import {
  Logo,
  Photo,
} from '../images/icone';

const Sidebar: React.FC = () => {
    const [profiles, setProfiles] = useState<UserProfile[]>([
        // Your initial profiles here
        {
            id: '1',
            name: 'Arthur Bossuyt',
            email: 'Arthur@squared.studio',
            avatar: Photo,
        },
        {
          id: '2',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: Photo,
        },
      ]);
      const [selectedProfileId, setSelectedProfileId] = useState(profiles[0].id);
    
      const handleAddProfile = (newProfileData: { firstName: string; lastName: string; email: string; password: string }) => {
        const newProfile: UserProfile = {
          id: String(profiles.length + 1),
          name: `${newProfileData.firstName} ${newProfileData.lastName}`,
          email: newProfileData.email,
          avatar: Photo, // Using a default avatar image
        };
        setProfiles([...profiles, newProfile]);
        setSelectedProfileId(newProfile.id); // Optionally select the new profile
      };    

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
      
      <UserProfileWidget
        profiles={profiles}
        selectedProfileId={selectedProfileId}
        onProfileSelect={setSelectedProfileId}
        onAddProfile={handleAddProfile}
      />
    </div>
  );
};

export default Sidebar;