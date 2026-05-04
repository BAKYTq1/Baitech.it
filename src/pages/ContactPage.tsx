import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ChevronRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Toast from '../components/ui/Toast';
import { useContactForm } from '../hooks/useContactForm';
import { companyInfo } from '../data/company';
import type { ContactFormData } from '../types';

const services = ['Веб-разработка', 'Мобайл', 'Backend', 'DevOps', 'AI', 'Дизайн', 'Другое'];
const budgets = ['До $1000', '$1000–5000', '$5000–15000', '$15000+', 'Обсудим'];

export default function ContactPage() {
  const { loading, error, success, sendContactForm } = useContactForm();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: services[0],
    budget: budgets[0],
    message: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendContactForm(formData);
  };

  return (
    <>
      <SEO
        title="Контакты — BAITECH.IT"
        description="Свяжитесь с нами для обсуждения вашего проекта. Бесплатная консультация. Email, Telegram, WhatsApp."
        keywords="контакты, BAITECH.IT, связаться, email, Telegram, WhatsApp"
        url="https://baitech.it/contact"
      />
      <section className="bg-[#08080E] px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-soft">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-primary">Контакты</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Свяжитесь с командой BAITECH.IT</h1>
            <p className="mt-6 text-slate-400 sm:text-lg">
              Оставьте заявку на проект, и мы подготовим предложение в течение рабочего дня.
            </p>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block space-y-2 text-sm text-slate-300">
                  Имя*
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-primary"
                  />
                </label>
                <label className="block space-y-2 text-sm text-slate-300">
                  Email*
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-primary"
                  />
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block space-y-2 text-sm text-slate-300">
                  Компания
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-primary"
                  />
                </label>
                <label className="block space-y-2 text-sm text-slate-300">
                  Услуга
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-primary"
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block space-y-2 text-sm text-slate-300">
                Бюджет
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-primary"
                >
                  {budgets.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block space-y-2 text-sm text-slate-300">
                Описание проекта*
                <textarea
                  required
                  name="message"
                  rows={5}
                  minLength={10}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white outline-none transition focus:border-primary"
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Отправка...' : 'Отправить заявку'}
                <Send className="h-4 w-4" />
              </button>
            </form>
            {success ? <Toast type="success" message={success} /> : null}
            {error ? <Toast type="error" message={error} /> : null}
          </div>

          <div className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 shadow-soft">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-primary">Контактная информация</p>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a className="hover:text-white" href={`mailto:${companyInfo.email}`}>
                    {companyInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a className="hover:text-white" href="https://t.me/baitech_it">
                    Telegram: {companyInfo.telegram}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{companyInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <ChevronRight className="h-5 w-5 text-primary" />
                  <span>{companyInfo.workHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
