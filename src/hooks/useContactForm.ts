import { useState } from 'react';
import emailjs from 'emailjs-com';
import type { ContactFormData } from '../types';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const sendContactForm = async (values: ContactFormData) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...values }, PUBLIC_KEY);
      setSuccess('Заявка отправлена. Мы свяжемся с вами в ближайшее время.');
      return true;
    } catch {
      setError('Не удалось отправить заявку. Попробуйте позже.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    sendContactForm,
  };
}
