import { PageContainer } from '../components/shared/PageContainer';
import { Code, Database, Cloud, BarChart, Briefcase, Wrench, Server, Layers, Users } from 'lucide-react';
import { Button } from '../components/shared/Button';

type Course = {
  id: number;
  title: string;
  description: string;
  icon: any;
};

export function Courses() {
  const courses: Course[] = [
    {
      id: 1,
      title: 'Software Engineer',
      description: 'Gain expertise in programming languages, software development, and system design. Learn to build scalable applications using industry-relevant tools and frameworks while mastering best coding practices.',
      icon: Code
    },
    {
      id: 2,
      title: 'Data Engineer',
      description: 'Master data processing, ETL pipelines, and database management. Work with Big Data tools like Hadoop, Spark, and cloud-based services to structure and manage large-scale data efficiently.',
      icon: Database
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      description: 'Develop skills in CI/CD pipelines, cloud automation, and containerization. Gain expertise in tools like Docker, Kubernetes, Terraform, and Jenkins for seamless deployment and infrastructure management.',
      icon: Cloud
    },
    {
      id: 4,
      title: 'Business Analyst (IT)',
      description: 'Develop analytical skills, business process modeling, and data-driven decision-making. Learn industry tools like JIRA, SQL, and visualization platforms to bridge business and technology needs.',
      icon: BarChart
    },
    {
      id: 5,
      title: 'Test Engineer (Manual and Automation)',
      description: 'Understand software testing methodologies, automation frameworks, and defect tracking. Learn manual and automated testing techniques using Selenium, JMeter, and other tools to ensure software quality.',
      icon: Wrench
    },
    {
      id: 6,
      title: 'Cloud Architect (AWS/Azure/GCP)',
      description: 'Design and implement scalable cloud infrastructures. Learn cloud computing fundamentals, virtualization, and multi-cloud deployment strategies using AWS, Azure, and Google Cloud Platform.',
      icon: Cloud
    },
    {
      id: 7,
      title: 'IT Project Manager',
      description: 'Master project planning, agile methodologies, and risk management. Develop leadership skills, stakeholder communication, and efficient workflow management for successful IT project execution.',
      icon: Briefcase
    },
    {
      id: 8,
      title: 'Oracle Modules',
      description: 'Gain proficiency in Oracle applications, database management, and cloud solutions. Learn Oracle ERP, PL/SQL, and database administration for enterprise systems.',
      icon: Server
    },
    {
      id: 9,
      title: 'SAP Modules',
      description: 'Understand SAP ERP systems, finance, HR, and logistics modules. Gain expertise in SAP implementation, customization, and integration for business operations.',
      icon: Layers
    },
    {
      id: 10,
      title: 'Salesforce Modules',
      description: 'Master Salesforce CRM, automation, and cloud-based solutions. Learn to optimize customer relationship management through Salesforce administration and development.',
      icon: Users
    }
  ];

  return (
    <PageContainer id="courses">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Career Tracks</span>
        </h1>
        <p className="text-[#CCCCCC] text-lg max-w-3xl mx-auto">
          Comprehensive learning paths designed to take you from beginner to job-ready. 
          Hands-on projects, expert mentorship, and career support included.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
        {courses.map((course) => {
          const Icon = course.icon;
          
          return (
            <div
              key={course.id}
              className="group bg-gradient-to-br from-white/5 to-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-sm">
                  {course.description}
                </p>
                
                <div className="pt-4 border-t border-white/5">
                  <Button 
                    variant="secondary" 
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8 border border-blue-800/30">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to start your learning journey?</h2>
        <p className="text-[#CCCCCC] mb-6 max-w-2xl mx-auto">
          Join our community of learners and take the first step towards mastering new skills. 
          Our expert mentors are here to guide you every step of the way.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="primary"
            className="px-8 py-3 text-base"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Today
          </Button>
          <Button 
            variant="secondary"
            className="px-8 py-3 text-base"
            onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hear from Our Students
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
