import { PageContainer } from './shared/PageContainer';
import { Button } from './shared/Button';
import { Palette, Users, BarChart3, Wifi, Code, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'web-designing',
    icon: Palette,
    title: 'Web Designing',
    description: 'Designing Digital Experiences That Work, Wow, and Win.'
  },
  {
    id: 'it-staffing',
    icon: Users,
    title: 'IT Staffing',
    description: 'Staff Smarter. Scale Faster.'
  },
  {
    id: 'data-analytics',
    icon: BarChart3,
    title: 'Data Analytics & Information Management',
    description: 'Turning Big Data Into Big Decisions.'
  },
  {
    id: 'iot',
    icon: Wifi,
    title: 'Internet of things',
    description: 'Connecting Devices. Creating Value.'
  },
  {
    id: 'app-development',
    icon: Code,
    title: 'Application Development',
    description: 'From Code to Cloud, We have Got You Covered.'
  },
  {
    id: 'mobile-app',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Get Your Brand on Mobile Today with Our App Development Services.'
  }
];

export const SpecialServices = () => {
  return (
    <PageContainer>
      <div className="text-center mb-8 md:mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Services</h1>
        <p className="text-[#CCCCCC] max-w-2xl mx-auto text-sm sm:text-base">
          Comprehensive technology solutions to drive your business forward.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6">
        {services.map(({ id, icon: Icon, title, description }) => (
          <div 
            key={id}
            className="group relative bg-black/40 backdrop-blur-lg rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-500 border border-white/10 overflow-hidden cursor-pointer mx-auto w-full max-w-md sm:max-w-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 rounded-xl bg-gradient-to-r from-blue-800 to-blue-700 p-[1px] group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white transform group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <h3 className="text-white font-semibold text-lg md:text-xl mb-2 md:mb-3 group-hover:text-blue-500 transition-colors duration-300">{title}</h3>
              <p className="text-[#CCCCCC] text-sm md:text-base group-hover:text-white transition-colors duration-300 mb-4">{description}</p>
              <Button variant="secondary" className="relative z-10 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 text-sm md:text-base">
                <Link to={`/services/${id}`} className="text-white flex items-center">
                  Learn More
                  <span className="ml-2 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};