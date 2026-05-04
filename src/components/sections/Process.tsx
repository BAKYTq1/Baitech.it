import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const steps = [
  {
    label: 'Брифинг',
    description: 'Изучаем задачу, требования и бизнес-цели.',
  },
  {
    label: 'Дизайн',
    description: 'Создаём UI/UX прототип и согласуем с клиентом.',
  },
  {
    label: 'Разработка',
    description: 'Итеративная разработка с регулярными демо.',
  },
  {
    label: 'Запуск',
    description: 'Деплой, тестирование QA, передача и документация.',
  },
];

export default function Process() {
  return (
    <section className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Как мы работаем" description="Прозрачный процесс от идеи до запуска." />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
          <motion.div
            className="pointer-events-none absolute inset-x-0 top-20 h-px origin-left bg-primary/35"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 28, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8, borderColor: 'rgba(91, 107, 248, 0.42)' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-6"
              >
                <motion.div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-white/5 text-lg font-semibold text-white"
                  whileHover={{ scale: 1.12, backgroundColor: 'rgba(91, 107, 248, 0.18)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
                <h3 className="mb-3 text-xl font-semibold text-white">{step.label}</h3>
                <p className="text-slate-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
