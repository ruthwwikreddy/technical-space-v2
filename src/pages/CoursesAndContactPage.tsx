import { Header } from '../components/Header';
import { Courses } from './CoursesPage';
import { Contact } from './ContactPage';

export function CoursesAndContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="pt-20">
        <div id="courses">
          <Courses />
        </div>
        <div id="contact" className="py-20">
          <Contact />
        </div>
      </div>
    </div>
  );
}
