import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, LineChart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../../data/company';
import AnimatedCounter from '../ui/AnimatedCounter';
import Button from '../ui/Button';

const stats = [
  { label: 'Проектов', value: 20, suffix: '+' },
  { label: 'Года', value: 3, suffix: '+' },
  { label: 'Клиенты довольны', value: 100, suffix: '%' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(91,107,248,0.18),transparent_28%)] px-6 pb-16 pt-24 sm:px-10 lg:px-14">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/5 px-4 py-2 text-sm text-primary"
          >
            <motion.span
              className="inline-flex h-2 w-2 rounded-full bg-accent"
              animate={{ scale: [1, 1.55, 1], opacity: [1, 0.55, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
            🟢 Открыты к новым проектам
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-semibold leading-tight text-white sm:text-5xl xl:text-6xl"
          >
            Цифровые решения<br />для вашего бизнеса
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg"
          >
            BAITECH.IT — IT-компания полного цикла. Разрабатываем веб-приложения, мобильные решения и системы автоматизации. От идеи до запуска.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href={companyInfo.whatsAppHref} target="_blank" rel="noreferrer">
              <Button type="button" className="w-full sm:w-auto">
                Написать в WhatsApp
                <MessageCircle className="h-4 w-4" />
              </Button>
            </a>
            <Link to="/projects">
              <Button variant="outline" className="w-full sm:w-auto">
                Смотреть работы
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-slate-950/80 p-5"
              >
                <p className="text-3xl font-semibold text-white">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft"
        >
          <div className="space-y-6">
            <motion.div
              className="flex items-center gap-4 rounded-3xl border border-accent/15 bg-white/5 p-5"
              whileHover={{ x: 6, borderColor: 'rgba(0, 200, 150, 0.45)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <Briefcase className="h-6 w-6 text-accent" />
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Клиентам</p>
                <p className="text-lg font-semibold text-white">Персональный IT-партнёр с полным циклом</p>
              </div>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                className="rounded-3xl border border-white/10 bg-slate-900/80 p-5"
                whileHover={{ y: -4, borderColor: 'rgba(91, 107, 248, 0.45)' }}
              >
                <p className="text-sm text-slate-400">Проекты</p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  <AnimatedCounter value={20} suffix="+" />
                </p>
              </motion.div>
              <motion.div
                className="rounded-3xl border border-white/10 bg-slate-900/80 p-5"
                whileHover={{ y: -4, borderColor: 'rgba(91, 107, 248, 0.45)' }}
              >
                <p className="text-sm text-slate-400">Сроки</p>
                <p className="mt-2 text-2xl font-semibold text-white">Стабильно</p>
              </motion.div>
            </div>
            <motion.div
              className="rounded-3xl border border-white/10 bg-slate-900/80 p-5"
              whileHover={{ y: -4, borderColor: 'rgba(0, 200, 150, 0.38)' }}
            >
              <p className="text-sm text-slate-400">Результат</p>
              <div className="mt-3 flex items-center gap-3 text-white">
                <LineChart className="h-5 w-5 text-accent" />
                <p>
                  <AnimatedCounter value={100} suffix="%" /> клиентов довольны качеством и поддержкой
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
