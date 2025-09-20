import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer as UIFooter } from '@voilajsx/uikit/footer';
import type { NavigationItem } from '@voilajsx/uikit';

// Footer navigation
const footerNavigation: NavigationItem[] = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'services', label: 'Services', href: '/services' },
  { key: 'portfolio', label: 'Portfolio', href: '/portfolio' },
  { key: 'solutions', label: 'Solutions', href: '/solutions' },
  { key: 'contact', label: 'Contact', href: '/contact' },
  { key: 'privacy', label: 'Privacy Policy', href: '/privacy' },
  { key: 'terms', label: 'Terms of Service', href: '/terms' },
];

// Configurable Footer Component using UIKit sections
export const Footer: React.FC = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (href: string) => {
    navigate(href);
  };

  return (
    <UIFooter tone="subtle" size="xl">
      <div className="flex flex-col space-y-6">
        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-6">
          {footerNavigation.map((item) => (
            <button
              key={item.key}
              onClick={() => item.href && handleNavigation(item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
        
        {/* Branding Section */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center font-bold text-2xl mt-4">
           Voilacode Technologies
          </div>

          {/* Company Info */}
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Custom Software Development • AI Solutions • Web & Mobile Apps
            </p>
            <p className="text-sm text-muted-foreground">
              2nd Floor, Oyster Uptown, Hitech City, Hyderabad - 500081, India
            </p>
            <p className="text-sm text-muted-foreground">
              Email: founder@voilacode.com • Phone: +91 7032309797
            </p>
          </div>

          {/* GDPR Compliance */}
          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground mb-3">
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and improve our services. By continuing to use our website, you consent to our use of cookies in accordance with our Privacy Policy. You can manage your cookie preferences at any time.
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">
              © 2025 Voilacode Technologies • All Rights Reserved • Built with Innovation & Excellence
            </p>
          </div>
        </div>
      </div>
    </UIFooter>
  );
};