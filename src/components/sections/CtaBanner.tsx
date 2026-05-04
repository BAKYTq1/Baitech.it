import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../../data/company';
import Button from '../ui/Button';

export default function CtaBanner() {
  return (
    <section className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 text-center sm:flex-row sm:text-left"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-primary">Готовы к следующему этапу?</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Запустим ваш проект вместе</h2>
        </div>
        <a href={companyInfo.whatsAppHref} target="_blank" rel="noreferrer">
          <Button type="button">
            Написать в WhatsApp
            <MessageCircle className="h-4 w-4" />
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
