import { PageContainer } from '../components/shared/PageContainer';
import { BookOpen, Database, Cloud, Code, Users, BarChart3, CheckCircle, Server, Settings, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';

type Course = {
  id: string;
  icon: any;
  title: string;
  description: string;
  category: string;
};

export function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    { id: 'All', name: 'All' },
    { id: 'Engineering', name: 'Engineering' },
    { id: 'Cloud', name: 'Cloud' },
    { id: 'Testing', name: 'Testing' },
    { id: 'Business', name: 'Business' },
    { id: 'ERP', name: 'ERP' }
  ];

  const courses: Course[] = [
    {
      id: 'software-engineer',
      icon: Code,
      title: 'Software Engineer',
      description: 'Master programming and build scalable applications with modern frameworks.',
      category: 'Engineering'
    },
    {
      id: 'data-engineer',
      icon: Database,
      title: 'Data Engineer',
      description: 'Build ETL pipelines and manage big data with Hadoop, Spark, and cloud tools.',
      category: 'Engineering'
    },
    {
      id: 'devops-engineer',
      icon: Cloud,
      title: 'DevOps Engineer',
      description: 'Automate deployments with Docker, Kubernetes, and CI/CD pipelines.',
      category: 'Cloud'
    },
    {
      id: 'test-engineer',
      icon: CheckCircle,
      title: 'Test Engineer (Manual and Automation)',
      description: 'Learn manual and automated testing techniques using Selenium, JMeter, and other tools.',
      category: 'Testing'
    },
    {
      id: 'cloud-architect',
      icon: Server,
      title: 'Cloud Architect (AWS/Azure/GCP)',
      description: 'Design and deploy cloud solutions on AWS, Azure, and GCP.',
      category: 'Cloud'
    },
    {
      id: 'business-analyst',
      icon: BarChart3,
      title: 'Business Analyst (IT)',
      description: 'Analyze data and model business processes with JIRA and SQL.',
      category: 'Business'
    },
    {
      id: 'it-project-manager',
      icon: ClipboardList,
      title: 'IT Project Manager',
      description: 'Lead projects using agile methodologies.',
      category: 'Business'
    },
    {
      id: 'oracle-modules',
      icon: Settings,
      title: 'Oracle Modules',
      description: 'Learn Oracle applications and database management.',
      category: 'ERP'
    },
    {
      id: 'sap-modules',
      icon: Users,
      title: 'SAP Modules',
      description: 'Master SAP ERP for finance, HR, and logistics.',
      category: 'ERP'
    },
    {
      id: 'salesforce-modules',
      icon: BookOpen,
      title: 'Salesforce Modules',
      description: 'Become a Salesforce CRM expert.',
      category: 'ERP'
    }
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = activeFilter === 'All' || course.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  return (
    <PageContainer>
      <div className="text-center mb-8 sm:mb-12 px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          Our Courses
        </h1>
        <p className="text-[#CCCCCC] text-sm sm:text-base max-w-2xl mx-auto">
          Accelerate your tech career with our expert-led courses. Tap any course to learn more.
        </p>
      </div>

      {/* Search and Filter (Mobile First) */}
      <div className="mb-8 px-4 sm:px-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder-[#666] focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-[#666]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4 overflow-x-auto pb-2 -mx-2 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === category.id
                  ? 'bg-blue-700 text-white'
                  : 'bg-white/5 text-[#CCCCCC] hover:bg-white/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 pb-16">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(({ id, icon: Icon, title, description }) => (
            <Link 
              key={id}
              to={`/courses/${id}`}
              className="group relative bg-black/40 backdrop-blur-lg rounded-xl p-6 sm:p-8 hover:transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 border border-white/10 overflow-hidden block"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400 mb-4">{description}</p>
              <div className="text-blue-400 group-hover:text-blue-300 font-medium flex items-center transition-colors">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium text-white mb-2">No courses found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </PageContainer>
  );
}