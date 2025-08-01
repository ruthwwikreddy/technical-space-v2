import { useState } from "react";
import { 
  Maximize,
  X
} from "lucide-react";
import { motion } from "framer-motion";

// Get all images from the public/eventpics directory
const eventImages = Array(9).fill("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%23333'/%3E%3C/svg%3E");

const Gallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const openFullscreen = (image: string) => {
    setActiveImage(image);
    setIsFullscreen(true);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-20 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Event Gallery
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore moments from our memorable events
          </p>
        </div>


        <motion.div variants={itemVariants} className="relative w-full overflow-x-hidden py-4">
          <div className="animate-marquee whitespace-nowrap inline-flex items-center">
            {[...eventImages, ...eventImages].map((image, index) => (
              <div 
                key={`${image}-${index}`} 
                className="inline-block mx-4 w-80 h-64"
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative overflow-hidden rounded-xl h-full cursor-pointer group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all"
                  onClick={() => openFullscreen(image)}
                >
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <Maximize className="w-10 h-10 text-white/80" />
                  </div>
                  <img 
                    src={image} 
                    alt={`Event image ${index + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: inline-flex;
              animation: marquee 30s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `
        }} />
      </motion.div>

      {/* Fullscreen Modal */}
      {isFullscreen && activeImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div 
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center cursor-pointer hover:bg-black/80 transition-colors"
            onClick={closeFullscreen}
          >
            <X className="w-6 h-6 text-white/80" />
          </div>
          <div className="max-w-7xl max-h-[90vh] overflow-hidden">
            <img 
              src={activeImage} 
              alt="Event"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
