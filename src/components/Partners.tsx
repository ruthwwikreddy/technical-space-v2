import { Card } from "./shared/Card";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X } from 'lucide-react';
import { getAssetPath } from '../utils/assets';

const partners = [
  { 
    name: 'AI OpenSec',
    image: getAssetPath('assets/partners/aiopensec.jpg'),
    website: 'https://aiopensec.com/'
  },
  { 
    name: 'AZ Dev Reskill',
    image: getAssetPath('assets/partners/azdev.reskilll.svg'),
    website: 'https://azdev.reskilll.com/'
  },
  { 
    name: 'Appy Systems',
    image: getAssetPath('assets/partners/logo.webp'),
    website: 'https://appysystems.com/'
  },
  { 
    name: 'CK Care Shop',
    image: getAssetPath('assets/partners/ckccaresshop.avif'),
    website: 'https://ckcareshop.com/'
  },
  { 
    name: 'LSA Recruitment',
    image: getAssetPath('assets/partners/lsa-recruitment.webp'),
    website: 'https://lsarecruit.co.uk/'
  },
  { 
    name: 'Possobuild',
    image: getAssetPath('assets/partners/possobuild_white.png'),
    website: 'https://possobuild.ai/'
  },
  { 
    name: 'Reskill',
    image: getAssetPath('assets/partners/reskill_white.png'),
    website: 'https://reskilll.com/'
  },
  { 
    name: 'The Youth Talks',
    image: getAssetPath('assets/partners/youth-talks.png'),
    website: 'https://theyouthtalks.com/'
  },
  { 
    name: 'Technical Space',
    image: getAssetPath('assets/partners/logo.webp'),
    website: '/'
  }
];

interface Partner {
  name: string;
  image: string;
  website: string;
}

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 1;
  let animationFrameId: number;
  let scrollPosition = 0;

  const closeModal = () => setSelectedPartner(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (selectedPartner) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [selectedPartner]);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollContentRef.current;
    
    if (!container || !scrollContent) return;

    // Duplicate the partners for seamless scrolling
    const totalWidth = scrollContent.scrollWidth / 2;
    
    const scroll = () => {
      if (!container || !scrollContent) return;
      
      scrollPosition += scrollSpeed;
      
      // Reset scroll position to create infinite loop
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      
      container.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    // Start the animation
    animationFrameId = requestAnimationFrame(scroll);
    
    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };
    
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate the partners array for seamless scrolling
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2 text-white">
            Our Partners
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Proud to work with organizations that share our vision.
          </p>
        </motion.div>
        
        <div 
          ref={containerRef}
          className="w-full overflow-x-hidden py-4 cursor-grab active:cursor-grabbing"
        >
          <div 
            ref={scrollContentRef}
            className="flex flex-nowrap gap-8 w-max"
          >
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={`partner-${index}-${partner.name}`} 
                className="flex-shrink-0 w-40 h-24"
              >
                <div 
                  className="h-full cursor-pointer"
                  onClick={() => setSelectedPartner(partner)}
                >
                  <Card className="h-full flex items-center justify-center bg-black/30 border border-blue-800/30 hover:border-blue-500/50 transition-all hover:scale-105 p-4">
                    <img
                      src={partner.image}
                      alt={`${partner.name} logo`}
                      className="max-h-16 max-w-full object-contain transition-all duration-300"
                      title={`Click to view ${partner.name}`}
                      draggable={false}
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Smooth scrolling for the container */
        .smooth-scroll {
          scroll-behavior: smooth;
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <motion.div 
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full relative border border-blue-900/50"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex items-center justify-center p-4 bg-gray-800/50 rounded-lg">
                  <img
                    src={selectedPartner.image}
                    alt={`${selectedPartner.name} logo`}
                    className="max-h-48 max-w-full object-contain"
                    draggable={false}
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedPartner.name}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Visit our partner's website to learn more about their services and offerings.
                  </p>
                  <a
                    href={selectedPartner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Website
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Partners;
