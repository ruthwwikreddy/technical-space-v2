import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '../components/shared/Button';

type Service = {
  id: string;
  icon: any;
  title: string;
  description: string;
  details: string;
  features: string[];
};

const services: Service[] = [
  {
    id: 'web-designing',
    icon: 'Palette',
    title: 'Web Designing',
    description: 'Designing Digital Experiences That Work, Wow, and Win.',
    details: 'Our web design services create stunning, responsive websites that engage users and drive conversions. We combine aesthetics with functionality to deliver exceptional digital experiences.',
    features: [
      'Responsive Design',
      'UI/UX Design',
      'E-commerce Solutions',
      'Website Redesign',
      'Brand Identity Integration'
    ]
  },
  {
    id: 'it-staffing',
    icon: 'Users',
    title: 'IT Staffing',
    description: 'Staff Smarter. Scale Faster.',
    details: 'Find the right tech talent for your projects with our comprehensive IT staffing solutions. We connect you with skilled professionals who match your technical requirements and company culture.',
    features: [
      'Permanent Staffing',
      'Contract Hiring',
      'Talent Assessment',
      'Technical Screening',
      'On-demand IT Professionals'
    ]
  },
  {
    id: 'data-analytics',
    icon: 'BarChart3',
    title: 'Data Analytics & Information Management',
    description: 'Turning Big Data Into Big Decisions.',
    details: 'Unlock the power of your data with our analytics and information management services. We help you make data-driven decisions that propel your business forward.',
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Predictive Analytics',
      'Data Warehousing',
      'Data Governance'
    ]
  },
  {
    id: 'iot',
    icon: 'Wifi',
    title: 'Internet of Things',
    description: 'Connecting Devices. Creating Value.',
    details: 'Leverage the power of IoT to transform your business operations. Our solutions connect devices and systems to create intelligent, data-driven ecosystems.',
    features: [
      'IoT Strategy & Consulting',
      'Device Management',
      'Edge Computing',
      'IoT Security',
      'Integration Services'
    ]
  },
  {
    id: 'app-development',
    icon: 'Code',
    title: 'Application Development',
    description: 'From Code to Cloud, We have Got You Covered.',
    details: 'Custom application development services that bring your ideas to life. We build scalable, secure, and high-performance applications tailored to your business needs.',
    features: [
      'Custom Software Development',
      'Enterprise Applications',
      'API Development',
      'Cloud Migration',
      'Legacy System Modernization'
    ]
  },
  {
    id: 'mobile-app',
    icon: 'Smartphone',
    title: 'Mobile App Development',
    description: 'Get Your Brand on Mobile Today with Our App Development Services.',
    details: 'Create engaging mobile experiences with our expert app development services. We build native and cross-platform apps that deliver exceptional user experiences.',
    features: [
      'iOS & Android Development',
      'Cross-Platform Apps',
      'UI/UX Design',
      'App Maintenance',
      'App Store Optimization'
    ]
  }
];

export function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p>The service you're looking for doesn't exist or has been moved.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-6">
        <Header />
      </div>
      <div className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              {service.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-4">
            <div className="lg:col-span-2">
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800 h-full">
                <h2 className="text-2xl font-bold mb-6">Service Overview</h2>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {service.details}
                </p>
                
                <h3 className="text-xl font-semibold mb-6 mt-10">Key Features</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 backdrop-blur-lg rounded-2xl p-8 border border-blue-800/30">
                <h3 className="text-xl font-semibold mb-6">Get Started</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Ready to leverage our {service.title} services? Get in touch with our experts today.
                </p>
                <Button 
                  variant="primary" 
                  className="w-full justify-center py-3 text-lg"
                  onClick={() => window.location.href = '/#/contact'}
                >
                  Contact Us
                </Button>
              </div>

              <div className="mt-8 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800">
                <h3 className="text-xl font-semibold mb-6">Other Services</h3>
                <ul className="space-y-4">
                  {services
                    .filter(s => s.id !== service.id)
                    .slice(0, 3)
                    .map((s) => (
                      <li key={s.id}>
                        <a 
                          href={`/services/${s.id}`}
                          className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-lg"
                        >
                          <span className="mr-3">→</span>
                          {s.title}
                        </a>
                      </li>
                    ))}
                </ul>
                <a 
                  href="/#services" 
                  className="inline-block mt-6 text-base text-gray-400 hover:text-white transition-colors"
                >
                  View all services →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
