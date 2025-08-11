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
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">Thank You for Registering!</h2>
        <p className="text-gray-300">
          We've received your registration. We'll be in touch with more details about the upcoming events.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">Ready to Elevate Your Career? Register Today!</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Your full name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Your phone number"
            />
            <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-400 text-sm mt-1" />
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
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="your.email@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
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
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="Your current qualification"
          />
          <ValidationError prefix="Qualification" field="qualification" errors={state.errors} className="text-red-400 text-sm mt-1" />
        </div>
        
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-1">
            Experience (Years) <span className="text-red-500">*</span>
          </label>
          <select
            id="experience"
            name="experience"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
          >
            <option value="">Select your experience level</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5+">5+ years</option>
          </select>
          <ValidationError prefix="Experience" field="experience" errors={state.errors} className="text-red-400 text-sm mt-1" />
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
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder={selectedEvent || 'Tell us about your interest in this event...'}
            defaultValue={selectedEvent ? `I'm interested in: ${selectedEvent}\n\n` : ''}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Submitting...' : 'Register Now'}
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
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Community</h1>
        <p className="text-[#CCCCCC] text-lg max-w-3xl mx-auto">
          Connect with fellow learners, share knowledge, and grow together in our vibrant tech community.
        </p>
      </div>

      {/* WhatsApp Community CTA */}
      <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl p-8 mb-16 border border-green-500/30">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">Want to grow with other founders?</h2>
            <p className="text-[#CCCCCC] mb-6">
              Join our WhatsApp community of 5,000+ tech enthusiasts. Get instant help, share resources, 
              and network with like-minded developers.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button variant="primary" className="bg-green-500 hover:bg-green-600 text-white">
                <MessageSquare className="w-5 h-5 mr-2" />
                Join WhatsApp Community
              </Button>
              <div className="flex items-center gap-2 text-green-400">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-blue-500/30"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-500 font-semibold text-sm">{event.type}</span>
                <div className="flex items-center gap-1 text-sm">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span className="text-white">{event.attendees}</span>
                </div>
              </div>
              
              <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-blue-500 transition-colors duration-300">
                {event.title}
              </h3>
              <p className="text-[#CCCCCC] text-sm mb-4">
                {event.description}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span className="text-white">{event.date}</span>
                </div>
                <span className="text-blue-500">{event.time}</span>
              </div>
              
              <Button 
                variant="secondary" 
                className="w-full mt-4"
                onClick={() => handleRegisterClick(event.title)}
              >
                Register Now
              </Button>
            </div>
          ))}
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