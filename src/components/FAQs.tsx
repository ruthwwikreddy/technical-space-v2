import React, { useState } from 'react';

// FAQ type
type FAQ = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

const faqsData: FAQ[] = [
    {
      id: 'how-join',
      question: 'How do I join a course?',
      answer: 'Simply browse our course catalog, select the course that fits your goals, and click "Enroll Now". You can also contact us for personalized recommendations based on your current skill level and career objectives.'
    },
    {
      id: 'recorded',
      question: 'Are sessions recorded?',
      answer: 'Yes! All live sessions are recorded and available for replay. You can access them anytime during your course duration and even after completion for future reference.'
    },
    {
      id: 'students-only',
      question: 'Is this for college students only?',
      answer: 'No, our courses are open to everyone! While we have many college students, we also welcome working professionals, career changers, and anyone passionate about learning tech skills.'
    },
    {
      id: 'certificates',
      question: 'Do I get certificates?',
      answer: 'Yes! Upon successful completion of any course, you\'ll receive a certificate that you can add to your resume and LinkedIn profile. Our certificates are recognized by many employers in the tech industry.'
    },
    {
      id: 'access-projects',
      question: 'Can I access projects later?',
      answer: 'Absolutely! All course materials, including project files, code repositories, and resources, remain accessible to you even after course completion. You can use them for your portfolio and future reference.'
    },
    {
      id: 'tools-needed',
      question: 'What tools do I need before starting?',
      answer: (
        <div className="space-y-2">
          <p>For most courses, you\'ll need:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>A computer (Windows, Mac, or Linux)</li>
            <li>Stable internet connection</li>
            <li>Basic programming knowledge (for intermediate courses)</li>
            <li>Free development tools (we\'ll guide you through installation)</li>
          </ul>
          <p>Don\'t worry if you\'re a complete beginner - we have courses designed specifically for you!</p>
        </div>
      )
    },
    {
      id: 'mentorship',
      question: 'Do you offer 1-on-1 mentorship?',
      answer: 'Yes! We offer personalized 1-on-1 mentorship sessions with industry professionals. These sessions can cover career guidance, technical questions, resume reviews, and interview preparation.'
    },
    {
      id: 'community-access',
      question: 'How do I join the WhatsApp community?',
      answer: 'After enrolling in any course, you\'ll receive an invitation link to join our exclusive WhatsApp community. It\'s a great place to network, ask questions, and share resources with fellow learners.'
    },
    {
      id: 'refund-policy',
      question: 'What\'s your refund policy?',
      answer: 'We offer a 7-day money-back guarantee for all courses. If you\'re not satisfied with the course content or teaching style, you can request a full refund within the first week.'
    }
  ];
  
  const FAQs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <section id="faqs" className="section-padding bg-[#050505] text-white">
        <div className="container max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-heading-2 font-bold text-white mb-4 glow-text">
              FAQs
            </h2>
            <p className="text-lg text-blue-100/70 max-w-3xl mx-auto">
              Answers to common questions about Technical Space and our learning platform
            </p>
            <div className="w-40 h-1 bg-gradient-to-r from-blue-500 to-blue-300 glow-line mx-auto mt-8 rounded-full"></div>
          </div>
          
          {/* FAQs Collapsible Sections */}
          <div className="bg-gradient-to-br from-blue-950/30 to-black/50 border border-blue-500/20 rounded-xl p-6 md:p-8 shadow-lg shadow-blue-500/10">
            {faqsData.map((faq, index) => (
              <div key={faq.id} className="mb-4">
                <div 
                  className={`cursor-pointer text-white hover:text-blue-300 transition-colors font-medium flex justify-between items-center p-4 rounded-lg border border-transparent hover:border-blue-500/50 ${openIndex === index ? 'bg-gradient-to-r from-blue-900/30 to-blue-900/10 border-blue-500/30' : 'hover:bg-blue-950/20'}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''} text-blue-300`}>
                    ▼
                  </span>
                </div>
                {openIndex === index && (
                  <div className="text-blue-100/70 pt-2 transition-all duration-300 ease-in-out transform opacity-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-blue-100/70 mb-6">Still have questions? We're here to help!</p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-[#003366] text-white rounded-lg font-medium hover:bg-[#003366]/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQs;