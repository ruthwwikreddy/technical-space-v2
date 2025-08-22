import { Header } from './components/Header';
import Hero from './components/Hero';
import { CourseDetail } from './pages/CourseDetailPage';
import { AboutUs } from './pages/AboutPage';
import { Story } from './pages/OurStoryPage';
import { Contact } from './pages/ContactPage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Community from './pages/CommunityPage';
import FAQs from './components/FAQs';
import Partners from './components/Partners';
import { SpecialServices } from './components/SpecialServices';
import { CoursesAndContactPage } from './pages/CoursesAndContactPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';

function MainContent() {
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
        <div id="services">
          <SpecialServices />
        </div>
        <div id="partners">
          <Partners />
        </div>
        <div id="faqs">
          <FAQs />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/community" element={<Community />} />
        <Route path="/courses" element={<CoursesAndContactPage />} />
        <Route path="/courses/:courseId" element={
          <div className="min-h-screen bg-black">
            <Header />
            <CourseDetail />
          </div>
        } />
        <Route path="/services/:serviceId" element={
          <div className="min-h-screen bg-black">
            <ServiceDetailPage />
          </div>
        } />
      </Routes>
    </Router>
  );
}