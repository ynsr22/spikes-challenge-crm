import { NavItem, UserProfile } from './types';
import { Home, Clients, Stack, Deals, Inbound, Outbound, Ads, Notifications, Settings, Photo } from '../images/icone';

export const navItems: NavItem[] = [
  { icon: Home, label: 'Home', href: '#' },
  { icon: Clients, label: 'Clients', href: '#' },
  { icon: Stack, label: 'Leads', href: '#' },
  { icon: Deals, label: 'Deals', href: '#' },
];

export const listItems: NavItem[] = [
  { icon: Inbound, label: 'Inbound', href: '#' },
  { icon: Outbound, label: 'Outbound', href: '#' },
  { icon: Ads, label: 'Ads', href: '#' },
];

export const bottomNavItems: NavItem[] = [
  { icon: Notifications, label: 'Notifications', href: '#', badge: 3 },
  { icon: Settings, label: 'Settings', href: '#' },
];

export const userProfiles: UserProfile[] = [
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
    // Add more profiles as needed
  ];