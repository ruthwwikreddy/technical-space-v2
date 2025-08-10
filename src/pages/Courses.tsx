import { PageContainer } from '../components/shared/PageContainer';
import { BookOpen, Database, Cloud, Code, Users, BarChart3, CheckCircle, Server, Settings, ClipboardList } from 'lucide-react';

const courses = [
  {
    icon: Code,
    title: 'Software Engineer',
    description: 'Master programming and build scalable applications with modern frameworks.'
  },
  {
    icon: Database,
    title: 'Data Engineer',
    description: 'Build ETL pipelines and manage big data with Hadoop, Spark, and cloud tools.'
  },
  {
    icon: Cloud,
    title: 'DevOps Engineer',
    description: 'Automate deployments with Docker, Kubernetes, and CI/CD pipelines.'
  },
  {
    icon: CheckCircle,
    title: 'Test Engineer (Manual and Automation)',
    description: 'Learn manual and automated testing techniques using Selenium, JMeter, and other tools.'
  },
  {
    icon: Server,
    title: 'Cloud Architect (AWS/Azure/GCP)',
    description: 'Design and deploy cloud solutions on AWS, Azure, and GCP.'
  },
  {
    icon: BarChart3,
    title: 'Business Analyst (IT)',
    description: 'Analyze data and model business processes with JIRA and SQL.'
  },
  {
    icon: ClipboardList,
    title: 'IT Project Manager',
    description: 'Lead projects using agile methodologies.'
  },
  {
    icon: Settings,
    title: 'Oracle Modules',
    description: 'Learn Oracle applications and database management.'
  },
  {
    icon: Users,
    title: 'SAP Modules',
    description: 'Master SAP ERP for finance, HR, and logistics.'
  },
  {
    icon: BookOpen,
    title: 'Salesforce Modules',
    description: 'Become a Salesforce CRM expert.'
  }
];

const courseList = courses.map(({ icon: Icon, title, description }, index) => (
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

export function Courses() {
  console.log('Courses component is rendering');
  
  return (
    <PageContainer>
      <div className="bg-red-500">
        {/* Temporary debug background */}
      </div>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Courses</h1>
        <p className="text-[#CCCCCC] max-w-2xl mx-auto">
          Accelerate your tech career with our expert-led courses.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {courseList}
      </div>

    </PageContainer>
  );
}