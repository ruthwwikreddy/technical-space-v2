import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationItem } from './NavigationItem';
import { Logo } from './Logo';
import { navItems, isActive } from '../config/navigation';
import { Menu, X } from 'lucide-react';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
          {navItems.map((item) => (
            <NavigationItem 
              key={item.path} 
              item={item}
              isActive={isActive(location.pathname, item)}
              onClick={closeMobileMenu}
            />
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-50 p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <div onClick={handleLogoClick} className="cursor-pointer">
                <Logo />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div 
                  key={item.path} 
                  onClick={() => {
                    closeMobileMenu();
                    if (item.type === 'page') {
                      navigate(item.path);
                    } else if (item.type === 'section' && item.pagePath) {
                      navigate(item.pagePath);
                      // Small delay to ensure the page has loaded before scrolling
                      setTimeout(() => {
                        const element = document.getElementById(item.sectionId || '');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className={`px-4 py-3 rounded-lg text-lg font-medium transition-colors cursor-pointer ${
                    isActive(location.pathname, item)
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </nav>
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