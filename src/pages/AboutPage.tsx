import { PageContainer } from '../components/shared/PageContainer';
import { Target, Award, Users2, BookOpen, GraduationCap, Globe2 } from 'lucide-react';

const aboutItems = [
  {
    icon: Users2,
    title: 'Our Mission',
    description: 'Empowering individuals with cutting-edge technical education to build the next generation of tech leaders.'
  },
  {
    icon: Target,
    title: 'Our Vision',
    description: 'To be the premier destination for technical education, fostering innovation and excellence in the tech industry.'
  },
  {
    icon: Award,
    title: 'Our Values',
    description: 'Excellence, Innovation, Integrity, and Community drive everything we do.'
  },
  {
    icon: BookOpen,
    title: 'Expert Faculty',
    description: 'Learn from industry professionals with years of hands-on experience.'
  },
  {
    icon: GraduationCap,
    title: 'Hands-on Learning',
    description: 'Practical, project-based curriculum designed for real-world application.'
  },
  {
    icon: Globe2,
    title: 'Global Community',
    description: 'Join a diverse network of tech professionals and learners worldwide.'
  }
];

const aboutList = aboutItems.map(({ icon: Icon, title, description }, index) => (
  <div 
    key={title}
    className="group relative bg-black/40 backdrop-blur-lg rounded-xl p-6 md:p-8 hover:transform hover:-translate-y-2 transition-all duration-500 border border-white/10 overflow-hidden cursor-pointer w-full max-w-md mx-auto"
    style={{
      animationDelay: `${index * 200}ms`,
      animation: 'fadeInUp 0.5s ease-out forwards'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative flex flex-col items-center text-center">
      <div className="w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 rounded-xl bg-gradient-to-r from-blue-800 to-blue-700 p-[1px] group-hover:scale-110 transition-transform duration-500">
        <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
          <Icon className="w-8 h-8 text-white transform group-hover:scale-110 transition-transform duration-500" />
        </div>
      </div>
      <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-blue-500 transition-colors duration-300">{title}</h3>
      <p className="text-[#CCCCCC] group-hover:text-white transition-colors duration-300">{description}</p>
    </div>
  </div>
));

export function AboutUs() {
  return (
    <PageContainer>
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          About Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300">
          We are dedicated to providing high-quality technical education that bridges the gap between learning and real-world application.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6">
        {aboutList}
      </div>
    </PageContainer>
  );
}
