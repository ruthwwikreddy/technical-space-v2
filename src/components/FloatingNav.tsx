import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Partners', href: '#partners' },
  { label: 'Our Story', href: '#story' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('');
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      document.querySelectorAll<HTMLElement>('section[id]').forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(`#${sectionId}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div ref={ref} className="h-1" /> {/* Observer element */}
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={!inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-black/60 backdrop-blur-lg rounded-full px-6 py-2.5 shadow-xl border border-white/10">
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.href === activeSection && (
                    <motion.span 
                      layoutId="nav-underline"
                      className="absolute left-0 top-0 w-full h-full bg-white/10 rounded-full"
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.6
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </>
  );
}