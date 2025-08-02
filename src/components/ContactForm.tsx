import React, { useState } from 'react';
import { Button } from './shared/Button';
import { useForm, ValidationError } from '@formspree/react';
import { Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [state, handleSubmit] = useForm('mblkaony');
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => {
    setFocused(field);
  };

  const handleBlur = () => {
    setFocused(null);
  };

  if (state.succeeded) {
    return (
      <div className="text-center p-8 bg-black/50 rounded-2xl border border-blue-900/50 shadow-2xl">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/20 rounded-full mb-4">
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-blue-300">Thank you for reaching out. I'll get back to you soon!</p>
        <Button 
          variant="secondary" 
          onClick={() => setFormData({ name: '', email: '', message: '' })}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => {
      const form = e.currentTarget;
      handleSubmit(e);
      if (state.succeeded) {
        form.reset();
      }
    }} className="space-y-6">
      <div className="relative">
        <label 
          htmlFor="name" 
          className={`form-label transition-all duration-300 ${focused === 'name' ? 'text-blue-500' : ''}`}
        >
          Your Name
        </label>
        <input 
          type="text" 
          id="name" 
          name="name"
          className="form-input" 
          placeholder="John Doe"
          required
          value={formData.name}
          onChange={handleChange}
          onFocus={() => handleFocus('name')}
          onBlur={handleBlur}
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-700 transition-all duration-300 ${focused === 'name' ? 'w-full' : 'w-0'}`}></div>
      </div>
      
      <div className="relative">
        <label 
          htmlFor="email" 
          className={`form-label transition-all duration-300 ${focused === 'email' ? 'text-blue-500' : ''}`}
        >
          Your Email
        </label>
        <input 
          type="email" 
          id="email" 
          name="email"
          className="form-input" 
          placeholder="you@example.com"
          required
          value={formData.email}
          onChange={handleChange}
          onFocus={() => handleFocus('email')}
          onBlur={handleBlur}
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-700 transition-all duration-300 ${focused === 'email' ? 'w-full' : 'w-0'}`}></div>
      </div>
      
      <div className="relative">
        <label 
          htmlFor="message" 
          className={`form-label transition-all duration-300 ${focused === 'message' ? 'text-blue-500' : ''}`}
        >
          Your Message
        </label>
        <textarea 
          id="message" 
          name="message"
          rows={4} 
          className="form-textarea" 
          placeholder="Tell us about your project..."
          required
          value={formData.message}
          onChange={handleChange}
          onFocus={() => handleFocus('message')}
          onBlur={handleBlur}
        ></textarea>
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-700 transition-all duration-300 ${focused === 'message' ? 'w-full' : 'w-0'}`}></div>
      </div>
      
      {state.errors && (
        <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-3 flex items-start">
          <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-blue-500 text-sm">There was an error submitting the form. Please try again.</p>
        </div>
      )}
      
      <button 
        type="submit"
        disabled={state.submitting}
        className="relative px-8 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed btn-hover holographic bg-gradient-to-r from-blue-700 to-blue-800 text-white w-full flex items-center justify-center"
      >
        {state.submitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : 'Send Message'}
      </button>
      
      <p className="text-[#CCCCCC] text-sm text-center">
        By submitting this form, you agree to our <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
      </p>
    </form>
  );
}