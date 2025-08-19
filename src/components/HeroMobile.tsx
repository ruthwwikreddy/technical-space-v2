import { BookOpen, Users, Calendar } from 'lucide-react';
import { useEffect, useRef } from 'react';

// Mobile-specific Hero component
export const HeroMobile = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleExploreCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video plays if autoplay fails
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Auto-play was prevented:', error);
          // Fallback: try to play on user interaction
          const handleUserInteraction = () => {
            video.play().catch(console.log);
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
          };
          
          document.addEventListener('click', handleUserInteraction);
          document.addEventListener('touchstart', handleUserInteraction);
        });
      }
    }
  }, []);

  return (
    <div className="min-h-[85vh] sm:min-h-[90vh] md:min-h-screen relative overflow-hidden bg-black pt-16 sm:pt-20">
      {/* Video Background - Lazy load for mobile */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-30">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          aria-label="Background video showing technology animations"
        >
          <source src="/videos/tech-background.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900/20 via-black via-purple-900/10 to-blue-800/20" />
        </video>
      </div>
      
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-1" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 lg:pb-32 z-10 h-full flex flex-col justify-center">
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 animate-fadeIn">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 leading-tight">
            <span className="block">Empowering Future</span>
            <span className="block bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Tech Innovators
            </span>
          </h1>
          
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-4">
            Master in-demand skills through project-based learning and real-world mentorship
          </p>

          <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 md:pt-8">
            <button 
              onClick={handleExploreCourses}
              className="group relative w-full xs:w-auto px-5 py-3.5 sm:px-6 sm:py-4 rounded-full overflow-hidden transition-all duration-300 text-sm sm:text-base"
              aria-label="Explore our courses"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transition-all duration-300 group-hover:scale-[1.03] group-active:scale-95" />
              <span className="relative text-white font-medium">Explore Courses</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={handleViewServices}
              className="group relative w-full xs:w-auto px-5 py-3.5 sm:px-6 sm:py-4 rounded-full overflow-hidden transition-all duration-300 text-sm sm:text-base border-2 border-blue-600 hover:border-blue-500"
              aria-label="View our services"
            >
              <div className="absolute inset-0 bg-white/5 transition-all duration-300 group-hover:bg-white/10 group-active:bg-white/5" />
              <span className="relative text-white font-medium text-lg">View Our Services</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-3 sm:px-4">
          {[
            { 
              icon: BookOpen, 
              title: 'Expert-Led Courses', 
              desc: 'Learn from industry professionals with real-world experience', 
              target: 'courses',
              color: 'from-blue-700 to-blue-800'
            },
            { 
              icon: Users, 
              title: 'Project-Based Learning', 
              desc: 'Build real projects that showcase your skills to employers', 
              target: 'courses',
              color: 'from-purple-700 to-purple-800'
            },
            { 
              icon: Calendar, 
              title: 'Tech Events', 
              desc: 'Participate in live events and networking opportunities', 
              target: 'community',
              color: 'from-cyan-700 to-cyan-800'
            }
          ].map(({ icon: Icon, title, desc, target, color }, index) => (
            <div 
              key={title}
              onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-black/40 backdrop-blur-lg rounded-xl p-5 sm:p-6 md:p-7 hover:transform hover:-translate-y-1 sm:hover:-translate-y-1.5 transition-all duration-300 border border-white/10 overflow-hidden cursor-pointer active:scale-[0.98] sm:active:scale-100"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.5s ease-out forwards',
                animationFillMode: 'both'
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${color}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 rounded-xl bg-gradient-to-r ${color} p-[1px] group-hover:scale-105 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-xl bg-black/90 flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-blue-500 transition-colors duration-300">{title}</h3>
                <p className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}