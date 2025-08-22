import React from 'react';
import { NavItem } from '../config/navigation';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationItemProps {
  item: NavItem;
  isActive: boolean;
  onClick?: () => void;
}

export function NavigationItem({ item, isActive, onClick }: NavigationItemProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
    }

    if (item.type === 'page') {
      // Navigate to the page
      navigate(item.path);
    } else if (item.type === 'section') {
      // If we're not on the correct page, navigate there first
      if (location.pathname !== item.pagePath) {
        navigate(item.path);
      } else {
        // If we're already on the correct page, just scroll to the section
        const element = document.getElementById(item.sectionId!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <a
      href={item.path}
      onClick={handleClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
        isActive 
          ? 'text-white' 
          : 'text-[#CCCCCC] hover:text-white'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.label}
      
      {/* Active indicator */}
      {isActive && (
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-800 to-blue-700 opacity-10"></span>
      )}
      
      {/* Hover effect */}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-800 to-blue-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </a>
  );
}