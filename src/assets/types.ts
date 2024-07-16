export interface NavItem {
    icon: string;
    label: string;
    href: string;
    badge?: number;
  }
  
  export interface UserProfile {
    id: string;
    name: string;
    email: string;
    avatar: string;
  }
  
 export interface NavSectionProps {
    title: string;
    items: NavItem[];
    className?: string;
  }

  export interface NavLinkProps extends NavItem {
    className?: string;
  }

export interface ProgressBarProps {
    percentage: number;
    className?: string;
}

export interface DealsWidgetProps {
    dealsLeft: number;
    totalLeads: number;
    className?: string;
  }


  export interface UserProfileWidgetProps {
    profiles: UserProfile[];
    selectedProfileId: string;
    onProfileSelect: (profileId: string) => void;
    className?: string;
  }