import { useState } from 'react';

export function useNewsletter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const subscribe = async (email: string) => {
    try {
      setLoading(true);
      setError(null);
      setIsSubscribed(false);

      // Validate email format
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Please enter a valid email address');
      }

      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send the email to your backend
      console.log('Subscribing email:', email);
      
      setIsSubscribed(true);
      return true;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading, error, isSubscribed };
}