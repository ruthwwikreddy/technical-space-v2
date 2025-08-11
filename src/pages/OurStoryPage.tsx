import { PageContainer } from '../components/shared/PageContainer';
import { StorySection } from '../components/story/StorySection';
import { ImpactSection } from '../components/story/ImpactSection';

export function Story() {
  return (
    <PageContainer>
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h1>
        <p className="text-[#CCCCCC] text-lg max-w-3xl mx-auto">
          Technical Space started as a student initiative, growing from bootcamps to a leading learning platform with 5,000+ students mastering tech skills.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <StorySection />
        <ImpactSection />
      </div>
    </PageContainer>
  );
}