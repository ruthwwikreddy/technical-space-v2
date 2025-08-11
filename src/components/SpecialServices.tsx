import { motion } from 'framer-motion';
import { PageContainer } from './shared/PageContainer';
import { Button } from './shared/Button';
import { Palette, Users, BarChart3, Wifi, Code, Smartphone } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: Palette,
    title: 'Web Designing',
    description: 'Designing Digital Experiences That Work, Wow, and Win.'
  },
  {
    number: '02',
    icon: Users,
    title: 'IT Staffing',
    description: 'Staff Smarter. Scale Faster.'
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Data Analytics & Information Management',
    description: 'Turning Big Data Into Big Decisions.'
  },
  {
    number: '04',
    icon: Wifi,
    title: 'Internet of things',
    description: 'Connecting Devices. Creating Value.'
  },
  {
    number: '05',
    icon: Code,
    title: 'Application Development',
    description: 'From Code to Cloud, We\'ve Got You Covered.'
  },
  {
    number: '06',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Get Your Brand on Mobile Today with Our App Development Services.'
  }
];

const serviceList = services.map(({ number, icon: Icon, title, description }, index) => (
  <div 
    key={title}
    className="group relative bg-black/40 backdrop-blur-lg rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-500 border border-white/10 overflow-hidden cursor-pointer"
    style={{
      animationDelay: `${index * 200}ms`,
      animation: 'fadeInUp 0.5s ease-out forwards'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative">
      {/* Service Number */}
      <div className="text-blue-800 font-bold text-4xl mb-4 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
        {number}
      </div>
      
      <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-r from-blue-800 to-blue-700 p-[1px] group-hover:scale-110 transition-transform duration-500">
        <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
          <Icon className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-500" />
        </div>
      </div>
      <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-blue-500 transition-colors duration-300">{title}</h3>
      <p className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">{description}</p>
    </div>
  </div>
));

export const SpecialServices = () => {
  return (
    <PageContainer>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Services</h1>
        <p className="text-[#CCCCCC] max-w-2xl mx-auto">
          Comprehensive technology solutions to drive your business forward.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {serviceList}
      </div>

      <div className="text-center">
        <Button 
          variant="primary"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Us
        </Button>
      </div>
    </PageContainer>
  );
};
