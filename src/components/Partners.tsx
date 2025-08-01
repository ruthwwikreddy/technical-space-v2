import { Card } from "./shared/Card";
import { motion } from "framer-motion";

const partners = [
  { image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Crect width='100%25' height='100%25' fill='%23222'/%3E%3C/svg%3E" },
  { image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Crect width='100%25' height='100%25' fill='%23222'/%3E%3C/svg%3E" },
  { image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Crect width='100%25' height='100%25' fill='%23222'/%3E%3C/svg%3E" },
  { image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Crect width='100%25' height='100%25' fill='%23222'/%3E%3C/svg%3E" },
  { image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Crect width='100%25' height='100%25' fill='%23222'/%3E%3C/svg%3E" },
  { image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Crect width='100%25' height='100%25' fill='%23222'/%3E%3C/svg%3E" },
  { image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Crect width='100%25' height='100%25' fill='%23222'/%3E%3C/svg%3E" },
  { image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 50'%3E%3Crect width='100%25' height='100%25' fill='%23222'/%3E%3C/svg%3E" }
];

const Partners = () => {
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
        
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`partner-${index}`} 
                className="inline-block mx-4 w-40 h-24"
              >
                <Card className="h-full flex items-center justify-center bg-black/30 border border-blue-800/30 hover:border-blue-500/50 transition-colors p-4">
                  <img
                    src={partner.image}
                    alt="Partner logo"
                    className="max-h-16 max-w-full object-contain"
                  />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;
