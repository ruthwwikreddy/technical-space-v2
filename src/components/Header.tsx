import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationItem } from './NavigationItem';
import { Logo } from './Logo';
import { navItems } from '../config/navigation';
import { X, Menu } from 'lucide-react';

interface HeaderProps {
  isCommunityPage?: boolean;
}

export function Header({ isCommunityPage = false }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogoClick = () => {
    if (isCommunityPage) {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleJoinCommunity = () => {
    setIsMobileMenuOpen(false);
    if (isCommunityPage) {
      const communityContent = document.getElementById('community-content');
      if (communityContent) {
        communityContent.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/community');
    }
  };

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      const target = document.getElementById(href.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
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
      <nav className="px-4 sm:px-6 py-3 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <div onClick={handleLogoClick} className="cursor-pointer">
          <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isHashLink = item.href.startsWith('#');
            
            if (item.href === '/community' || item.href === '#home') {
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
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
    
        <div className="flex items-center space-x-3">
          <button 
            onClick={handleJoinCommunity}
            className="hidden sm:block bg-gradient-to-r from-blue-800 to-blue-700 text-white px-4 sm:px-5 py-2 rounded-xl text-sm font-medium hover:shadow-[0_0_20px_rgba(0,51,102,0.5)] transition-all duration-300 transform hover:scale-105"
            aria-label="Join Our Community - Open community section"
          >
            Join Community
          </button>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 shadow-xl animate-fadeIn"
            style={{
              zIndex: 1000,
              animation: 'slideDown 0.3s ease-out forwards'
            }}
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium ${
                    (item.href.startsWith('#') && activeSection === item.href.substring(1)) || 
                    (item.href === location.pathname)
                      ? 'text-white bg-blue-900/30'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleJoinCommunity}
                className="w-full mt-2 bg-gradient-to-r from-blue-800 to-blue-700 text-white px-4 py-3 rounded-lg text-base font-medium text-center hover:shadow-[0_0_20px_rgba(0,51,102,0.5)]"
              >
                Join Our Community
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ backdropFilter: 'blur(2px)' }}
        />
      )}
    </header>
  );
}