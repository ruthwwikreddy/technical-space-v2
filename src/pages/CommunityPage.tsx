import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { EventRegistration } from './EventRegistration';
import { Contact } from './ContactPage';
import { Footer } from '../components/Footer';
import Gallery from '../components/Gallery';

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
          <EventRegistration />
          <div className="py-10">
            <div id="gallery">
              <Gallery />
            </div>
          </div>
        </div>
        <div id="contact" className="pt-16">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
