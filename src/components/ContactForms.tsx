import React, { useState } from 'react';
import { Button } from './shared/Button';
import { Loader2, BookOpen, Wrench, MessageSquare } from 'lucide-react';

interface FormField {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  required: boolean;
}

interface FormConfig {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  fields: FormField[];
  formspreeId: string;
}

const formConfigs: Record<string, FormConfig> = {
  courses: {
    id: 'courses',
    title: 'Course Inquiry',
    description: 'Interested in our courses? Fill out this form and we\'ll help you find the right program.',
    icon: <BookOpen className="w-5 h-5" />,
    formspreeId: 'mblkaony', // Replace with your actual Formspree form ID for courses
    fields: [
      {
        name: 'name',
        type: 'text',
        label: 'Your Name',
        placeholder: 'John Doe',
        required: true
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'you@example.com',
        required: true
      },
      {
        name: 'phone',
        type: 'tel',
        label: 'Phone Number',
        placeholder: '+1 (555) 123-4567',
        required: true
      },
      {
        name: 'course',
        type: 'select',
        label: 'Course Interest',
        placeholder: 'Select a course',
        required: true
      },
      {
        name: 'message',
        type: 'textarea',
        label: 'Your Message',
        placeholder: 'Tell us about your learning goals and any questions you have...',
        required: false
      }
    ]
  },
  services: {
    id: 'services',
    title: 'Services Inquiry',
    description: 'Need help with a project? Let us know how we can assist you with our services.',
    icon: <Wrench className="w-5 h-5" />,
    formspreeId: 'mblkaony', // Replace with your actual Formspree form ID for services
    fields: [
      {
        name: 'name',
        type: 'text',
        label: 'Your Name',
        placeholder: 'John Doe',
        required: true
      },
      {
        name: 'company',
        type: 'text',
        label: 'Company Name',
        placeholder: 'Your Company',
        required: true
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'you@example.com',
        required: true
      },
      {
        name: 'service',
        type: 'select',
        label: 'Service Needed',
        placeholder: 'Select a service',
        required: true
      },
      {
        name: 'message',
        type: 'textarea',
        label: 'Project Details',
        placeholder: 'Tell us about your project and how we can help...',
        required: true
      }
    ]
  },
  contact: {
    id: 'contact',
    title: 'General Inquiry',
    description: 'Have a question? Send us a message and we\'ll get back to you as soon as possible.',
    icon: <MessageSquare className="w-5 h-5" />,
    formspreeId: 'mblkaony', // Replace with your actual Formspree form ID for general contact
    fields: [
      {
        name: 'name',
        type: 'text',
        label: 'Your Name',
        placeholder: 'John Doe',
        required: true
      },
      {
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'you@example.com',
        required: true
      },
      {
        name: 'subject',
        type: 'text',
        label: 'Subject',
        placeholder: 'How can we help you?',
        required: true
      },
      {
        name: 'message',
        type: 'textarea',
        label: 'Your Message',
        placeholder: 'Tell us how we can help...',
        required: true
      }
    ]
  }
};

export function ContactForms() {
  const [activeTab, setActiveTab] = useState<string>('courses');
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const currentForm = formConfigs[activeTab as keyof typeof formConfigs];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would use the formspreeId from currentForm
      // and submit to the appropriate Formspree endpoint
      const response = await fetch(`https://formspree.io/f/${currentForm.formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New ${currentForm.title} Submission`,
          _format: 'plain',
          _next: window.location.href
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({});
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({});
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl group hover:transform hover:-translate-y-2 transition-all duration-500">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-800 to-blue-700 rounded-full mb-6 p-[1px]">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-blue-300 mb-6 max-w-md mx-auto">Thank you for your inquiry. We'll get back to you soon!</p>
        <Button 
          variant="secondary" 
          onClick={resetForm}
          className="w-full sm:w-auto bg-gradient-to-r from-blue-800 to-blue-700 hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden shadow-2xl group hover:transform hover:-translate-y-2 transition-all duration-500">
      {/* Form Tabs */}
      <div className="flex flex-wrap border-b border-white/10">
        {Object.values(formConfigs).map((form) => (
          <button
            key={form.id}
            type="button"
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 ${activeTab === form.id ? 'text-blue-400 border-b-2 border-blue-500 bg-gradient-to-r from-blue-900/20 to-blue-800/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
            onClick={() => {
              setActiveTab(form.id);
              resetForm();
            }}
          >
            {form.icon}
            <span className="hidden sm:inline">{form.title}</span>
          </button>
        ))}
      </div>

      {/* Form Content */}
      <div className="p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">{currentForm.title}</h2>
          <p className="text-gray-400">{currentForm.description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {currentForm.fields.map((field) => (
            <div key={field.name} className="relative">
              <label 
                htmlFor={field.name}
                className={`block text-sm font-medium mb-2 transition-colors ${focusedField === field.name ? 'text-blue-400' : 'text-gray-300'}`}
              >
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-500/30 focus:border-blue-500/50"
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                />
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none hover:border-blue-500/30 focus:border-blue-500/50"
                  required={field.required}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField(null)}
                >
                  <option value="" disabled>{field.placeholder}</option>
                  {field.name === 'course' ? (
                    <>
                      <option value="Web Development">Web Development</option>
                      <option value="Data Science">Data Science</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Mobile Development">Mobile Development</option>
                      <option value="Cloud Computing">Cloud Computing</option>
                    </>
                  ) : field.name === 'service' ? (
                    <>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="DevOps & Cloud">DevOps & Cloud</option>
                      <option value="Consulting">Consulting</option>
                    </>
                  ) : null}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-500/30 focus:border-blue-500/50"
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField(null)}
                />
              )}
            </div>
          ))}

          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                `Send ${currentForm.title} Message`
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}