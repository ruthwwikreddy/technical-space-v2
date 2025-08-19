import { BookOpen, Database, Cloud, Code, Users, BarChart3, CheckCircle, Server, Settings, ClipboardList } from 'lucide-react';

interface CourseDetailProps {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
  level: string;
  curriculum: string[];
  careerOutcomes: string[];
  prerequisites: string[];
  highlights: string[];
}

export const courseDetails: Record<string, Omit<CourseDetailProps, 'id'>> = {
  'software-engineer': {
    title: 'Software Engineer',
    description: 'Master programming and build scalable applications with modern frameworks.',
    icon: Code,
    duration: '6 months',
    level: 'Beginner to Advanced',
    prerequisites: ['Basic computer knowledge', 'Logical thinking', 'No prior programming experience required'],
    highlights: [
      'Hands-on coding projects',
      'Real-world applications',
      'Mentorship from industry experts',
      'Career support and guidance'
    ],
    curriculum: [
      'Programming Fundamentals with Python/Java',
      'Data Structures & Algorithms',
      'Web Development (React/Node.js)',
      'Database Design & Implementation',
      'System Design & Architecture',
      'Agile Development Methodologies',
      'Version Control with Git',
      'Testing & Debugging',
      'Deployment & DevOps Basics'
    ],
    careerOutcomes: [
      'Full Stack Developer',
      'Backend Engineer',
      'Frontend Developer',
      'Software Architect',
      'Mobile App Developer'
    ]
  },
  'data-engineer': {
    title: 'Data Engineer',
    description: 'Build ETL pipelines and manage big data with Hadoop, Spark, and cloud tools.',
    icon: Database,
    duration: '5 months',
    level: 'Intermediate',
    prerequisites: ['Basic SQL knowledge', 'Python fundamentals', 'Understanding of databases'],
    highlights: [
      'Hands-on with big data tools',
      'Real-world data pipeline projects',
      'Cloud platform experience',
      'Industry-relevant case studies'
    ],
    curriculum: [
      'SQL & NoSQL Databases',
      'Big Data Technologies (Hadoop, Spark)',
      'ETL Pipeline Development',
      'Data Warehousing',
      'Cloud Data Solutions (AWS/GCP/Azure)',
      'Data Modeling',
      'Stream Processing',
      'Data Quality & Governance'
    ],
    careerOutcomes: [
      'Data Engineer',
      'ETL Developer',
      'Big Data Engineer',
      'Data Warehouse Engineer',
      'Data Architect'
    ]
  },
  'devops-engineer': {
    title: 'DevOps Engineer',
    description: 'Automate deployments with Docker, Kubernetes, and CI/CD pipelines.',
    icon: Cloud,
    duration: '4 months',
    level: 'Intermediate',
    prerequisites: ['Linux basics', 'Networking fundamentals', 'Scripting knowledge'],
    highlights: [
      'Hands-on with cloud platforms',
      'Real-world CI/CD implementation',
      'Infrastructure as Code',
      'Monitoring and logging'
    ],
    curriculum: [
      'Containerization with Docker',
      'Orchestration with Kubernetes',
      'CI/CD Pipelines',
      'Infrastructure as Code (Terraform)',
      'Cloud Platforms (AWS/Azure/GCP)',
      'Monitoring & Logging',
      'Security Best Practices',
      'Scripting & Automation'
    ],
    careerOutcomes: [
      'DevOps Engineer',
      'Site Reliability Engineer',
      'Cloud Engineer',
      'Platform Engineer',
      'Release Manager'
    ]
  },
  'test-engineer': {
    title: 'Test Engineer (Manual and Automation)',
    description: 'Learn manual and automated testing techniques using Selenium, JMeter, and other tools.',
    icon: CheckCircle,
    duration: '4 months',
    level: 'Beginner to Intermediate',
    prerequisites: ['Basic programming knowledge', 'Understanding of SDLC', 'Attention to detail'],
    highlights: [
      'Real-world testing scenarios',
      'Hands-on with automation tools',
      'Performance testing experience',
      'Agile testing methodologies'
    ],
    curriculum: [
      'Manual Testing Fundamentals',
      'Test Automation with Selenium',
      'API Testing',
      'Performance Testing with JMeter',
      'Mobile Testing',
      'Test Management Tools',
      'CI/CD for Testing',
      'Security Testing Basics'
    ],
    careerOutcomes: [
      'QA Engineer',
      'Test Automation Engineer',
      'SDET (Software Development Engineer in Test)',
      'QA Lead',
      'Performance Test Engineer'
    ]
  },
  'cloud-architect': {
    title: 'Cloud Architect (AWS/Azure/GCP)',
    description: 'Design and deploy cloud solutions on AWS, Azure, and GCP.',
    icon: Server,
    duration: '6 months',
    level: 'Advanced',
    prerequisites: ['Networking basics', 'Linux/Windows administration', 'Basic cloud concepts'],
    highlights: [
      'Multi-cloud architecture',
      'Real-world case studies',
      'Hands-on labs',
      'Best practices and patterns'
    ],
    curriculum: [
      'Cloud Computing Fundamentals',
      'AWS/Azure/GCP Core Services',
      'Cloud Security',
      'Networking in the Cloud',
      'Serverless Architecture',
      'Containers & Orchestration',
      'Cloud Migration Strategies',
      'Cost Optimization'
    ],
    careerOutcomes: [
      'Cloud Architect',
      'Cloud Consultant',
      'Solutions Architect',
      'Cloud Security Architect',
      'DevOps Architect'
    ]
  },
  'business-analyst': {
    title: 'Business Analyst (IT)',
    description: 'Analyze data and model business processes with JIRA and SQL.',
    icon: BarChart3,
    duration: '4 months',
    level: 'Beginner to Intermediate',
    prerequisites: ['Basic business knowledge', 'Analytical thinking', 'Communication skills'],
    highlights: [
      'Real business cases',
      'Requirements gathering techniques',
      'Data analysis skills',
      'Agile methodologies'
    ],
    curriculum: [
      'Business Analysis Fundamentals',
      'Requirements Elicitation',
      'Process Modeling',
      'Data Analysis with SQL',
      'Agile & Scrum',
      'JIRA & Confluence',
      'Stakeholder Management',
      'Documentation & Presentation'
    ],
    careerOutcomes: [
      'Business Analyst',
      'Product Owner',
      'Systems Analyst',
      'Business Intelligence Analyst',
      'Project Coordinator'
    ]
  },
  'it-project-manager': {
    title: 'IT Project Manager',
    description: 'Lead projects using agile methodologies.',
    icon: ClipboardList,
    duration: '5 months',
    level: 'Intermediate',
    prerequisites: ['Basic IT knowledge', 'Teamwork experience', 'Organizational skills'],
    highlights: [
      'Real project simulations',
      'Agile/Scrum certification prep',
      'Risk management',
      'Stakeholder communication'
    ],
    curriculum: [
      'Project Management Fundamentals',
      'Agile & Scrum Methodologies',
      'Risk Management',
      'Budgeting & Resource Allocation',
      'Team Leadership',
      'Project Management Tools (JIRA, MS Project)',
      'Quality Management',
      'Stakeholder Communication'
    ],
    careerOutcomes: [
      'Project Manager',
      'Scrum Master',
      'Program Manager',
      'Delivery Manager',
      'Product Manager'
    ]
  },
  'oracle-modules': {
    title: 'Oracle Modules',
    description: 'Learn Oracle applications and database management.',
    icon: Settings,
    duration: '5 months',
    level: 'Intermediate',
    prerequisites: ['Database concepts', 'Basic SQL knowledge', 'Business process understanding'],
    highlights: [
      'Hands-on with Oracle applications',
      'Real-world implementation cases',
      'Database administration',
      'Integration techniques'
    ],
    curriculum: [
      'Oracle Database Administration',
      'PL/SQL Programming',
      'Oracle Financials',
      'Oracle SCM',
      'Oracle HCM',
      'Oracle Cloud',
      'Performance Tuning',
      'Backup & Recovery'
    ],
    careerOutcomes: [
      'Oracle Consultant',
      'Oracle DBA',
      'Oracle Developer',
      'ERP Functional Consultant',
      'Technical Consultant'
    ]
  },
  'sap-modules': {
    title: 'SAP Modules',
    description: 'Master SAP ERP for finance, HR, and logistics.',
    icon: Users,
    duration: '6 months',
    level: 'Intermediate',
    prerequisites: ['Business process knowledge', 'Basic IT skills', 'Analytical thinking'],
    highlights: [
      'Hands-on with SAP ERP',
      'Industry best practices',
      'End-to-end process knowledge',
      'Integration scenarios'
    ],
    curriculum: [
      'SAP Navigation & Basics',
      'FI (Financial Accounting)',
      'CO (Controlling)',
      'MM (Materials Management)',
      'SD (Sales & Distribution)',
      'PP (Production Planning)',
      'WM (Warehouse Management)',
      'SAP HANA Basics'
    ],
    careerOutcomes: [
      'SAP Consultant',
      'SAP Functional Analyst',
      'SAP Business Analyst',
      'SAP Project Manager',
      'SAP Support Specialist'
    ]
  },
  'salesforce-modules': {
    title: 'Salesforce Modules',
    description: 'Become a Salesforce CRM expert.',
    icon: BookOpen,
    duration: '4 months',
    level: 'Beginner to Intermediate',
    prerequisites: ['Basic computer skills', 'Understanding of CRM concepts'],
    highlights: [
      'Hands-on with Salesforce platform',
      'Real-world business scenarios',
      'Administration & configuration',
      'Lightning experience'
    ],
    curriculum: [
      'Salesforce Basics & Navigation',
      'Sales & Service Cloud',
      'Lightning Experience',
      'Process Automation',
      'Reports & Dashboards',
      'Data Management',
      'Security & Access',
      'AppExchange & Integration'
    ],
    careerOutcomes: [
      'Salesforce Administrator',
      'Salesforce Developer',
      'Salesforce Consultant',
      'Business Analyst',
      'CRM Manager'
    ]
  }
};

export function getCourseDetails(courseId: string): CourseDetailProps | null {
  const details = courseDetails[courseId];
  if (!details) return null;
  
  return {
    id: courseId,
    ...details
  };
}