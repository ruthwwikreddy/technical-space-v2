import React, { useState } from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { Card } from '../components/shared/Card';
import { Button } from '../components/shared/Button';
import { BookOpen, Database, Cloud, Code, Users, BarChart3, CheckCircle, Server, Settings, ClipboardList } from 'lucide-react';

const courseList = [
  {
    icon: Code,
    title: 'Software Engineer',
    description: 'Gain expertise in programming languages, software development, and system design. Learn to build scalable applications using industry-relevant tools and frameworks while mastering best coding practices.'
  },
  {
    icon: Database,
    title: 'Data Engineer',
    description: 'Master data processing, ETL pipelines, and database management. Work with Big Data tools like Hadoop, Spark, and cloud-based services to structure and manage large-scale data efficiently.'
  },
  {
    icon: Cloud,
    title: 'DevOps Engineer',
    description: 'Develop skills in CI/CD pipelines, cloud automation, and containerization. Gain expertise in tools like Docker, Kubernetes, Terraform, and Jenkins for seamless deployment and infrastructure management.'
  },
  {
    icon: BarChart3,
    title: 'Business Analyst (IT)',
    description: 'Develop analytical skills, business process modeling, and data-driven decision-making. Learn industry tools like JIRA, SQL, and visualization platforms to bridge business and technology needs.'
  },
  {
    icon: CheckCircle,
    title: 'Test Engineer (Manual and Automation)',
    description: 'Understand software testing methodologies, automation frameworks, and defect tracking. Learn manual and automated testing techniques using Selenium, JMeter, and other tools to ensure software quality.'
  },
  {
    icon: Server,
    title: 'Cloud Architect (AWS/Azure/GCP)',
    description: 'Design and implement scalable cloud infrastructures. Learn cloud computing fundamentals, virtualization, and multi-cloud deployment strategies using AWS, Azure, and Google Cloud Platform.'
  },
  {
    icon: ClipboardList,
    title: 'IT Project Manager',
    description: 'Master project planning, agile methodologies, and risk management. Develop leadership skills, stakeholder communication, and efficient workflow management for successful IT project execution.'
  },
  {
    icon: Settings,
    title: 'Oracle Modules',
    description: 'Gain proficiency in Oracle applications, database management, and cloud solutions. Learn Oracle ERP, PL/SQL, and database administration for enterprise systems.'
  },
  {
    icon: Users,
    title: 'SAP Modules',
    description: 'Understand SAP ERP systems, finance, HR, and logistics modules. Gain expertise in SAP implementation, customization, and integration for business operations.'
  },
  {
    icon: BookOpen,
    title: 'Salesforce Modules',
    description: 'Master Salesforce CRM, automation, and cloud-based solutions. Learn to optimize customer relationship management through Salesforce administration and development.'
  }
];

export function AboutUs() {
  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore Our Courses</h1>
        <p className="text-[#CCCCCC] text-lg max-w-3xl mx-auto">
          Choose from our comprehensive range of tech courses designed to accelerate your career in the digital world.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {courseList.map((course) => (
          <Card
            key={course.title}
            icon={course.icon}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>

      <div className="text-center">
        <Button 
          variant="primary"
          onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join Our Community
        </Button>
      </div>
    </PageContainer>
  );
}