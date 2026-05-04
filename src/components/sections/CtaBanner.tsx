import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../../data/company';
import Button from '../ui/Button';

export default function CtaBanner() {
  return (
    <section className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -6, borderColor: 'rgba(0, 200, 150, 0.35)' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 text-center sm:flex-row sm:text-left"
      >
        <motion.div
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-primary/10 blur-3xl"
          animate={{ x: ['-40%', '240%'] }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
        />
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-primary">Готовы к следующему этапу?</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Запустим ваш проект вместе</h2>
        </div>
        <motion.a href={companyInfo.whatsAppHref} target="_blank" rel="noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Button type="button">
            Написать в WhatsApp
            <MessageCircle className="h-4 w-4" />
          </Button>
        </motion.a>
      </motion.div>
    </section>
  );
}
