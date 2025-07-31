import { useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function useContact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjkooedg';

  const submitContact = async (data: ContactForm) => {
    try {
      setLoading(true);
      setError(null);
      setIsSuccess(false);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }
      
      setIsSuccess(true);
      return true;
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An error occurred while sending your message.';
      setError(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submitContact, loading, error, isSuccess };
}