import { motion } from 'framer-motion';
import { ShieldCheck, Eye, CalendarCheck, LifeBuoy } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const items = [
  {
    icon: ShieldCheck,
    title: 'Полный цикл',
    description: 'Дизайн, разработка, деплой и поддержка под одной крышей.',
  },
  {
    icon: Eye,
    title: 'Прозрачность',
    description: 'Доступ к задачам и статусу проекта 24/7.',
  },
  {
    icon: CalendarCheck,
    title: 'Сроки',
    description: 'Фиксированный дедлайн прописан в договоре.',
  },
  {
    icon: LifeBuoy,
    title: 'Поддержка',
    description: '6 месяцев бесплатной поддержки после сдачи.',
  },
];

export default function WhyUs() {
  return (
    <section className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Почему BAITECH.IT" description="Надёжность, скорость и комфорт для бизнеса." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -7, borderColor: 'rgba(0, 200, 150, 0.35)' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="section-card rounded-[2rem] border border-white/10 p-8"
              >
                <motion.div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary"
                  whileHover={{ rotate: -6, scale: 1.08 }}
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
