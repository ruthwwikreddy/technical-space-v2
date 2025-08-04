import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Courses } from './pages/Courses';
import { AboutUs } from './pages/AboutUs';
import { Story } from './pages/Story';
import { ProjectShowcase } from './pages/ProjectShowcase';
import FAQs from './components/FAQs';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import { SpecialServices } from './components/SpecialServices';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <div id="story">
          <Story />
        </div>
        <div id="courses">
          <Courses />
        </div>
        <div id="services">
          <SpecialServices />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="partners">
          <Partners />
        </div>
        <div id="community">
          <ProjectShowcase />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="faqs">
          <FAQs />
        </div>

      </main>
      <Footer />
    </div>
  );
}