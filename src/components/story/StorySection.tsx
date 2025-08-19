import { StoryCard } from './StoryCard';
import { Lightbulb, Target, Rocket } from 'lucide-react';

export function StorySection() {
  return (
    <div className="space-y-12">
      <StoryCard
        icon={Lightbulb}
        title="The Vision"
        content="Democratize technical education for everyone."
      />
      
      <StoryCard
        icon={Target}
        title="The Mission"
        content="Equip every student with practical skills, not just theory."
      />
      
      <StoryCard
        icon={Rocket}
        title="The Impact"
        content="From 100 beta students to 5,000+ active learners, we've created a community where knowledge sharing and practical learning drive real career growth."
      />
    </div>
  );
}