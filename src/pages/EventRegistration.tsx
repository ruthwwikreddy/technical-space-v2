import { useState, useRef } from 'react';
import { PageContainer } from '../components/shared/PageContainer';
import { Users, Calendar, MessageSquare, MessageCircle, Trophy } from 'lucide-react';
import { Button } from '../components/shared/Button';
import { useForm, ValidationError } from '@formspree/react';

// Event Registration Form Component
function EventRegistrationForm({ selectedEvent = '' }: { selectedEvent?: string }) {
  const [state, handleSubmit] = useForm("xrgwqyqy");
  
  if (state.succeeded) {
    return (
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/10">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Thank You for Registering!</h2>
        <p className="text-sm sm:text-base text-gray-300">
          We've received your registration. We'll be in touch with more details about the upcoming events.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 sm:p-6 md:p-8 border border-white/10">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Ready to Elevate Your Career? Register Today!</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Your full name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs sm:text-sm mt-1" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              inputMode="tel"
              className="w-full px-4 py-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Your phone number"
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-400 text-xs sm:text-sm mt-1" />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              inputMode="email"
              className="w-full px-4 py-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="your.email@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs sm:text-sm mt-1" />
          </div>
        </div>
        
        <div>
          <label htmlFor="qualification" className="block text-sm font-medium text-gray-300 mb-1">
            Professional Qualification <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            required
            className="w-full px-4 py-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Your current qualification"
          />
          <ValidationError prefix="Qualification" field="qualification" errors={state.errors} className="text-red-400 text-xs sm:text-sm mt-1" />
        </div>
        
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-1">
            Experience (Years) <span className="text-red-500">*</span>
          </label>
          <select
            id="experience"
            name="experience"
            required
            className="w-full px-4 py-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
          >
            <option value="">Select your experience level</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5+">5+ years</option>
          </select>
          <ValidationError prefix="Experience" field="experience" errors={state.errors} className="text-red-400 text-xs sm:text-sm mt-1" />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 text-sm sm:text-base rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder={selectedEvent || 'Tell us about your interest in this event...'}
            defaultValue={selectedEvent ? `I'm interested in: ${selectedEvent}\n\n` : ''}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs sm:text-sm mt-1" />
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full px-6 py-3.5 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
          >
            {state.submitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : 'Register Now'}
          </button>
        </div>
      </form>
    </div>
  );
}

export function EventRegistration() {
  const [selectedEvent, setSelectedEvent] = useState('');
  const registrationFormRef = useRef<HTMLDivElement>(null);
  
  const handleRegisterClick = (eventTitle: string) => {
    setSelectedEvent(eventTitle);
    registrationFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Career AMA',
      date: 'Jan 15, 2025',
      time: '7:00 PM IST',
      attendees: 150,
      type: 'AMA Session',
      description: 'Ask Me Anything with senior developers from top tech companies'
    },
    {
      id: 2,
      title: 'Hackathon: Build a Job Board',
      date: 'Jan 20-22, 2025',
      time: '48 Hours',
      attendees: 80,
      type: 'Hackathon',
      description: 'Build a job board application using modern tech stack'
    },
    {
      id: 3,
      title: 'Resume Review Workshop',
      date: 'Jan 25, 2025',
      time: '6:00 PM IST',
      attendees: 100,
      type: 'Workshop',
      description: 'Get your resume reviewed by HR professionals'
    }
  ];

  return (
    <PageContainer>
      <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
          Join Our Community
        </h1>
        <p className="text-sm sm:text-base text-[#CCCCCC] max-w-3xl mx-auto">
          Connect with fellow learners, share knowledge, and grow together in our vibrant tech community.
        </p>
      </div>

      {/* WhatsApp Community CTA */}
      <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl p-5 sm:p-6 md:p-8 mb-10 sm:mb-14 md:mb-16 mx-4 sm:mx-0 border border-green-500/30">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
              Want to grow with other founders?
            </h2>
            <p className="text-xs sm:text-sm text-[#CCCCCC] mb-4 sm:mb-6">
              Join our WhatsApp community of 5,000+ tech enthusiasts. Get instant help, share resources, 
              and network with like-minded developers.
            </p>
            <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Button 
                variant="primary" 
                className="w-full xs:w-auto px-4 sm:px-5 py-2.5 text-sm sm:text-base bg-green-500 hover:bg-green-600 text-white active:scale-[0.98] transition-transform"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 flex-shrink-0" />
                Join WhatsApp Community
              </Button>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-green-400">
                <Users className="w-5 h-5" />
                <span>5,000+ members</span>
              </div>
            </div>
          </div>
          <div className="lg:w-80 h-48 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center">
            <MessageSquare className="w-16 h-16 text-green-400" />
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
          <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <div className="text-3xl font-bold text-white mb-2">5,000+</div>
          <div className="text-[#CCCCCC]">Active Members</div>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
          <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <div className="text-3xl font-bold text-white mb-2">50+</div>
          <div className="text-[#CCCCCC]">Events This Year</div>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
          <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <div className="text-3xl font-bold text-white mb-2">1,200+</div>
          <div className="text-[#CCCCCC]">Discussions</div>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10">
          <Trophy className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <div className="text-3xl font-bold text-white mb-2">200+</div>
          <div className="text-[#CCCCCC]">Success Stories</div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Upcoming Events</h2>
        <div className="px-4 sm:px-6 mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className="group bg-white/5 backdrop-blur-lg rounded-xl p-5 sm:p-6 md:p-7 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    {event.type === 'AMA Session' && <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />}
                    {event.type === 'Hackathon' && <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />}
                    {event.type === 'Workshop' && <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />}
                  </div>
                  <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-900/20 text-blue-300 whitespace-nowrap">
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{event.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-5">{event.description}</p>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-400 mb-5 sm:mb-6 gap-2">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{event.date} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{event.attendees}+ attending</span>
                  </div>
                </div>
                
                <Button 
                  variant="secondary" 
                  className="w-full py-2.5 text-sm sm:text-base group-hover:bg-blue-500/10 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors"
                  onClick={() => handleRegisterClick(event.title)}
                >
                  Register Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-800/10 to-blue-700/10 rounded-xl p-8 border border-blue-800/20">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Join the Community?</h2>
        <p className="text-[#CCCCCC] mb-6">
          Connect with fellow developers, share your knowledge, and accelerate your learning journey.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" className="bg-green-500 hover:bg-green-600 text-white">
            <MessageSquare className="w-5 h-5 mr-2" />
            Join WhatsApp Group
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Courses
          </Button>
        </div>
      </div>
      
      {/* Registration Form Section */}
      <div ref={registrationFormRef} className="mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Register for Upcoming Events
          </h2>
          <EventRegistrationForm selectedEvent={selectedEvent} />
        </div>
      </div>
    </PageContainer>
  );
}