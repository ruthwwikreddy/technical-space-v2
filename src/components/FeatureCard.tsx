import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  target: string;
  index: number;
  gradientFrom?: string;
  gradientTo?: string;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  target,
  index,
  gradientFrom = 'from-blue-800',
  gradientTo = 'to-blue-700'
}: FeatureCardProps) => {
  return (
    <div 
      onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })}
      className="group relative bg-black/40 backdrop-blur-lg rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-500 border border-white/10 overflow-hidden cursor-pointer"
      style={{
        animationDelay: `${index * 200}ms`,
        animation: 'fadeInUp 0.5s ease-out forwards'
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom}/20 ${gradientTo}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative">
        <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientTo} p-[1px] group-hover:scale-110 transition-transform duration-500`}>
          <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
            <Icon className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
        <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-blue-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export const FeatureCardsGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-24">
      {children}
    </div>
  );
};