import React, { useState, useRef, useEffect } from 'react';
import { UserProfileWidgetProps, UserProfile } from '../types';
import { AddProfileModal } from './AddModal';

const ChevronIcon: React.FC<React.SVGProps<SVGSVGElement> & { direction: 'up' | 'down' }> = ({ direction, ...props }) => (
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
    <path d={direction === 'down' ? "M6 9l6 6 6-6" : "M18 15l-6-6-6 6"} />
  </svg>
);

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

interface UpdatedUserProfileWidgetProps extends UserProfileWidgetProps {
  onAddProfile: (profile: { firstName: string; lastName: string; email: string; password: string }) => void;
}

export const UserProfileWidget: React.FC<UpdatedUserProfileWidgetProps> = React.memo(
  ({ profiles, selectedProfileId, onProfileSelect, onAddProfile, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAddProfileModalOpen, setIsAddProfileModalOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedProfile = profiles.find(profile => profile.id === selectedProfileId) || profiles[0];

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleProfileSelect = (profile: UserProfile) => {
      onProfileSelect(profile.id);
      setIsOpen(false);
    };

    const handleAddProfile = () => {
      setIsAddProfileModalOpen(true);
      setIsOpen(false);
    };

    return (
      <>
        <div className={`relative flex justify-center items-center mt-auto mb-8 ${className}`} ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="w-[270px] h-[60px] p-2 rounded-[12px] bg-white hover:bg-gray-50 transition-colors border border-[#DEDEE8] flex items-center focus:outline-none"
          >
            <img src={selectedProfile.avatar} alt="" className="w-10 h-10 rounded-[4px]" aria-hidden="true" />
            <div className="ml-3 flex-grow text-left">
              <p className="text-sm leading-5 font-semibold text-[#344054]">{selectedProfile.name}</p>
              <p className="text-sm font-normal leading-5 text-[#475467]">{selectedProfile.email}</p>
            </div>
            <ChevronIcon direction={isOpen ? 'up' : 'down'} className="w-5 h-5 text-[#475467]" aria-hidden="true" />
          </button>

          {isOpen && (
            <div className="absolute bottom-full w-[270px] mb-2 bg-white border border-[#DEDEE8] rounded-[12px] shadow-lg overflow-hidden">
              {profiles.map((profile) => (
                <button
                  key={profile.id}
                  onClick={() => handleProfileSelect(profile)}
                  className="w-full p-2 hover:bg-gray-100 flex items-center"
                >
                  <img src={profile.avatar} alt="" className="w-8 h-8 rounded-[4px]" aria-hidden="true" />
                  <div className="ml-3 text-left">
                    <p className="text-sm font-semibold text-[#344054]">{profile.name}</p>
                    <p className="text-xs text-[#475467]">{profile.email}</p>
                  </div>
                </button>
              ))}
              <button
                onClick={handleAddProfile}
                className="w-full p-2 hover:bg-gray-50 flex items-center text-[#475467]"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <PlusIcon className="w-5 h-5" />
                </div>
                <span className="ml-3 text-sm font-semibold">Add Profile</span>
              </button>
            </div>
          )}
        </div>
        <AddProfileModal
          isOpen={isAddProfileModalOpen}
          onClose={() => setIsAddProfileModalOpen(false)}
          onAddProfile={onAddProfile}
        />
      </>
    );
  }
);

UserProfileWidget.displayName = 'UserProfileWidget';