import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, MessageCircle, PhoneCall, Send } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { companyInfo } from '../data/company';

const contacts = [
  {
    label: 'WhatsApp',
    value: companyInfo.whatsApp,
    href: companyInfo.whatsAppHref,
    icon: PhoneCall,
  },
  {
    label: 'Telegram',
    value: companyInfo.telegram,
    href: companyInfo.telegramHref,
    icon: Send,
  },
  {
    label: 'Instagram',
    value: companyInfo.instagram,
    href: companyInfo.instagramHref,
    icon: Instagram,
  },
  {
    label: 'Gmail',
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    icon: Mail,
  },
  {
    label: 'Город',
    value: companyInfo.address,
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Наши контакты — BAITECH.IT"
        description="Контакты BAITECH.IT: WhatsApp, Telegram, Instagram, Gmail и город Бишкек."
        keywords="контакты BAITECH.IT, WhatsApp, Telegram, Instagram, Gmail, Бишкек"
        url="https://baitech.it/contact"
      />
      <section className="bg-[#08080E] px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-primary">Контакты</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Наши контакты</h1>
            <p className="mt-6 text-slate-400 sm:text-lg">
              Напишите нам удобным способом. Быстрее всего отвечаем в WhatsApp и Telegram.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              const content = (
                <motion.div
                  className="section-card flex h-full items-center gap-4 rounded-[2rem] border border-white/10 p-6 transition hover:border-primary/40"
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  whileHover={{ y: -6, scale: 1.02, borderColor: 'rgba(91, 107, 248, 0.45)' }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <motion.div
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-primary/10 text-primary"
                    whileHover={{ rotate: 6, scale: 1.08 }}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{contact.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white">{contact.value}</p>
                  </div>
                </motion.div>
              );

              return contact.href ? (
                <a key={contact.label} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={contact.label}>{content}</div>
              );
            })}
          </div>

          <a
            href={companyInfo.whatsAppHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Написать в WhatsApp
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
