import { useParams, useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/shared/PageContainer';
import { getCourseDetails } from '../components/CourseDetails';

export function CourseDetail() {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  
  const course = courseId ? getCourseDetails(courseId) : null;
  
  if (!course) {
    return (
      <PageContainer>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-white mb-4">Course Not Found</h2>
          <button 
            onClick={() => navigate('/courses')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Courses
          </button>
        </div>
      </PageContainer>
    );
  }

  const Icon = course.icon;

  return (
    <PageContainer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Course Header */}
        <div className="bg-white/5 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-xl bg-blue-600/20 flex items-center justify-center">
                <Icon className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{course.title}</h1>
              <p className="text-lg text-gray-300 mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="bg-white/5 px-4 py-2 rounded-lg">
                  <span className="text-gray-400">Duration:</span>{' '}
                  <span className="text-white">{course.duration}</span>
                </div>
                <div className="bg-white/5 px-4 py-2 rounded-lg">
                  <span className="text-gray-400">Level:</span>{' '}
                  <span className="text-white">{course.level}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Course */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">About This Course</h2>
              <div className="bg-white/5 rounded-xl p-6">
                <p className="text-gray-300 mb-4">
                  Our {course.title} program is designed to provide you with comprehensive knowledge and hands-on experience in the field. 
                  You'll learn from industry experts and work on real-world projects to build a strong portfolio.
                </p>
                <p className="text-gray-300">
                  By the end of this course, you'll have the skills and confidence to pursue a successful career in {course.title}.
                </p>
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Curriculum</h2>
              <div className="bg-white/5 rounded-xl overflow-hidden">
                <ul className="divide-y divide-white/10">
                  {course.curriculum.map((item: string, index: number) => (
                    <li key={index} className="p-4 hover:bg-white/5 transition-colors">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600/20 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-blue-400 text-sm font-medium">{index + 1}</span>
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Career Outcomes */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Career Outcomes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.careerOutcomes.map((outcome: string, index: number) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 flex items-center">
                    <svg className="h-5 w-5 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{outcome}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 rounded-xl p-6 sticky top-8">
              <h3 className="text-xl font-bold text-white mb-6">Course Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Start Date</h4>
                  <p className="text-white">Rolling Admissions</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Duration</h4>
                  <p className="text-white">{course.duration}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Format</h4>
                  <p className="text-white">Online & In-person</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-1">Prerequisites</h4>
                  <p className="text-white">Basic computer literacy</p>
                </div>
                <button 
                  onClick={() => window.location.href = '/#/contact'}
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <section className="bg-white/5 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Have Questions About {course.title}?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Interested in learning more about this course? Contact our team and we'll get back to you with more information.
          </p>
          <button 
            onClick={() => navigate('/#/contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center"
          >
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </section>
      </div>
    </PageContainer>
  );
}