import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header as UIHeader, HeaderLogo, HeaderNav } from '@voilajsx/uikit/header';
import type { NavigationItem } from '@voilajsx/uikit';
import {
  Home,
  Info,
  Settings,
  Briefcase,
  Lightbulb,
  Mail
} from 'lucide-react';

// Navigation configuration
const navigationItems: NavigationItem[] = [
  { key: 'home', label: 'Home', href: '/', icon: Home },
  { key: 'about', label: 'About', href: '/about', icon: Info },
  { key: 'services', label: 'Services', href: '/services', icon: Settings },
  { key: 'portfolio', label: 'Portfolio', href: '/portfolio', icon: Briefcase },
  { key: 'solutions', label: 'Solutions', href: '/solutions', icon: Lightbulb },
  { key: 'contact', label: 'Contact', href: '/contact', icon: Mail },
];

// Logo component
const Logo: React.FC = () => (
  <img
    src="/voilacode-logo.png"
    alt="Voilacode Technologies"
    className="h-10 object-contain"
  />
);


// Configurable Header Component using UIKit sections
export const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleNavigation = (href: string) => {
    navigate(href);
  };

  return (
    <UIHeader tone="brand" size="xl" position="sticky">
      <HeaderLogo>
        <Logo />
      </HeaderLogo>
      
      <HeaderNav
        navigation={navigationItems}
        currentPath={location.pathname}
        onNavigate={handleNavigation}
      />
    </UIHeader>
  );
};