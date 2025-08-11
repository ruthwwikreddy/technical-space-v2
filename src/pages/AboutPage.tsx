import { PageContainer } from '../components/shared/PageContainer';
import { Button } from '../components/shared/Button';
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
    className="group relative bg-black/40 backdrop-blur-lg rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-500 border border-white/10 overflow-hidden cursor-pointer"
    style={{
      animationDelay: `${index * 200}ms`,
      animation: 'fadeInUp 0.5s ease-out forwards'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative">
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

export function AboutUs() {
  return (
    <PageContainer>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About Us</h1>
        <p className="text-[#CCCCCC] max-w-2xl mx-auto">
          We are a team of passionate technologists and educators committed to delivering high-quality technical education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {aboutList}
      </div>

      <div className="text-center">
        <Button 
          variant="primary"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get in Touch
        </Button>
      </div>
    </PageContainer>
  );
}
