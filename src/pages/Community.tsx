import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { ProjectShowcase } from './ProjectShowcase';
import { Contact } from './Contact';
import { Footer } from '../components/Footer';

export default function Community() {
  const location = useLocation();

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black">
      <Header isCommunityPage={true} />
      <main className="pt-24">
        <div id="community-content">
          <ProjectShowcase />
        </div>
        <div id="contact" className="pt-16">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
