import { BookOpen, Users, Calendar } from 'lucide-react';
import { useEffect, useRef } from 'react';

// Desktop-specific Hero component
export function HeroDesktop() {
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
    <div className="min-h-screen relative overflow-hidden bg-black pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        >
          <source src="/videos/tech-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-1" />

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-32 z-10">
        <div className="text-center space-y-8 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 mb-6 leading-tight">
            Empowering Future Innovators<br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Through Real Tech Skills
            </span>
          </h1>
          
          <p className="text-[#CCCCCC] text-lg md:text-xl max-w-2xl mx-auto">
            Courses, mentorship, and real-world events to help you launch your career in tech.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button 
              onClick={handleExploreCourses}
              className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 transition-all duration-300 group-hover:scale-[1.05]" />
              <span className="relative text-white font-medium text-lg">Explore Courses</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={handleViewServices}
              className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300 border-2 border-blue-600 hover:border-blue-500"
            >
              <div className="absolute inset-0 bg-white/5 transition-all duration-300 group-hover:bg-white/10" />
              <span className="relative text-white font-medium text-lg">Services</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-24">
          {[
            { 
              icon: BookOpen, 
              title: 'Our Services', 
              description: 'Discover our range of technical solutions', 
              target: 'services',
              color: 'from-purple-700 to-purple-800',
              delay: '100ms'
            },
            { 
              icon: Users, 
              title: 'Our Courses', 
              description: 'Explore our comprehensive technical programs', 
              target: 'courses',
              color: 'from-blue-700 to-blue-800',
              delay: '200ms'
            },
            { 
              icon: Calendar, 
              title: 'Tech Events', 
              description: 'Participate in live events and networking', 
              target: 'community',
              color: 'from-cyan-700 to-cyan-800',
              delay: '300ms'
            }
          ].map(({ icon: Icon, title, description, target, color, delay }, index) => (
            <div 
              key={title}
              onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-black/40 backdrop-blur-lg rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-500 border border-white/10 overflow-hidden cursor-pointer"
              style={{
                animationDelay: delay,
                animation: 'fadeInUp 0.5s ease-out forwards'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative text-center">
                <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-r from-blue-800 to-blue-700 p-[1px] group-hover:scale-110 transition-transform duration-500 mx-auto">
                  <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-blue-500 transition-colors duration-300">{title}</h3>
                <p className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}