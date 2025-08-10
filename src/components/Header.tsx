import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationItem } from './NavigationItem';
import { Logo } from './Logo';
import { navItems } from '../config/navigation';

interface HeaderProps {
  isCommunityPage?: boolean;
}

export function Header({ isCommunityPage = false }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (isCommunityPage) {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleJoinCommunity = () => {
    if (isCommunityPage) {
      const communityContent = document.getElementById('community-content');
      if (communityContent) {
        communityContent.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/community');
    }
  };

  return (
    <header 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-7xl rounded-2xl ${
        isScrolled 
          ? 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="px-6 py-3 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <div onClick={handleLogoClick} className="cursor-pointer">
          <Logo />
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isHashLink = item.href.startsWith('#');
            
            if (item.href === '/community' || item.href === '#home') {
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.href === '#home' && isCommunityPage) {
                      navigate('/');
                    } else if (item.href === '/community' && !isCommunityPage) {
                      navigate('/community');
                    } else {
                      const target = document.getElementById(item.href.substring(1));
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === '/community' 
                      ? 'text-white bg-blue-900/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            }
            
            return (
              <NavigationItem
                key={item.label}
                href={item.href}
                isActive={isHashLink ? activeSection === item.href.substring(1) : false}
              >
                {item.label}
              </NavigationItem>
            );
          })}
        </div>
    
        <button 
          onClick={handleJoinCommunity}
          className="bg-gradient-to-r from-blue-800 to-blue-700 text-white px-5 py-2 rounded-xl text-sm font-medium hover:shadow-[0_0_20px_rgba(0,51,102,0.5)] transition-all duration-300 transform hover:scale-105"
          aria-label="Join Our Community - Open community section"
        >
          Join Our Community
        </button>
      </nav>
    </header>
  );
}