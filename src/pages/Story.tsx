import React from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { StorySection } from '../components/story/StorySection';
import { ImpactSection } from '../components/story/ImpactSection';
import { TimelineCard } from '../components/story/TimelineCard';
import { Rocket, Lightbulb, Users, Code, Monitor, LineChart, BarChart3, Zap, BookOpen, GraduationCap } from 'lucide-react';

export function Story() {
  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h1>
        <p className="text-[#CCCCCC] text-lg max-w-3xl mx-auto">
          Technical Space began as a grassroots effort to bring real tech skills to ambitious students. From student bootcamps to live workshops, we've grown into a thriving learning platform with 5,000+ learners.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <StorySection />
        
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Journey</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-800/50 to-blue-900/20 h-full hidden md:block"></div>
            
            <TimelineCard
              year="2019"
              title="The Spark & Early Experiments"
              description="Idea born among a group of student developers who wanted to share practical knowledge beyond textbooks."
              icon={<Lightbulb className="text-white" />}
              isLeft={false}
            />
            
            <TimelineCard
              year="2020"
              title="Concept Solidification"
              description="Launched beta with 100 students, testing different learning formats and gathering feedback."
              icon={<Monitor className="text-white" />}
              isLeft={true}
            />
            
            <TimelineCard
              year="2021"
              title="Early Partner Work"
              description="First workshop cohort & speaker events with industry professionals sharing real-world insights."
              icon={<Code className="text-white" />}
              isLeft={false}
            />
            
            <TimelineCard
              year="2022"
              title="Strategic Pivot"
              description="Introduced DevOps & Data Engineering tracks based on industry demand and student feedback."
              icon={<Rocket className="text-white" />}
              isLeft={true}
            />
            
            <TimelineCard
              year="2023"
              title="Growth & Expansion"
              description="Hosted first virtual hackathon with 200+ participants and launched structured course programs."
              icon={<LineChart className="text-white" />}
              isLeft={false}
            />
            
            <TimelineCard
              year="2024"
              title="Building Channels"
              description="Launched mentorship & resume support programs, expanding beyond just technical skills."
              icon={<Users className="text-white" />}
              isLeft={true}
            />
            
            <TimelineCard
              year="2025"
              title="Platform Upgrade"
              description="Launched AI-powered course recommendations and personalized learning paths for students."
              icon={<BarChart3 className="text-white" />}
              isLeft={false}
            />
            
            <TimelineCard
              year="Future"
              title="The Vision Ahead"
              description="Continuing to democratize technical education and equip every student with practical skills, not just theory."
              icon={<Zap className="text-white" />}
              isLeft={true}
            />
          </div>
        </div>
        
        <ImpactSection />
      </div>
    </PageContainer>
  );
}