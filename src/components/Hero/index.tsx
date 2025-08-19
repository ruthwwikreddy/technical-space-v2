import React, { useState, useEffect } from 'react';
import { HeroMobile } from '../HeroMobile';
import { HeroDesktop } from '../Hero-Desktop';

// Main Hero component that conditionally renders mobile or desktop version
const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen is mobile size on mount and on resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return isMobile ? <HeroMobile /> : <HeroDesktop />;
};

export default Hero;