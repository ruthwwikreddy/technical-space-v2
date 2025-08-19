import { Header } from './components/Header';
import Hero from './components/Hero';
import { Courses } from './pages/CoursesPage';
import { CourseDetail } from './pages/CourseDetailPage';
import { AboutUs } from './pages/AboutPage';
import { Story } from './pages/OurStoryPage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Community from './pages/CommunityPage';
import FAQs from './components/FAQs';
import { Contact } from './pages/ContactPage';
import Partners from './components/Partners';
import { SpecialServices } from './components/SpecialServices';

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
        <div id="courses">
          <Courses />
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
        <Route path="/courses/:courseId" element={
          <div className="min-h-screen bg-black">
            <Header />
            <CourseDetail />
          </div>
        } />
      </Routes>
    </Router>
  );
}