import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const values = [
  {
    title: 'Качество',
    description: 'Тщательная проверка каждой задачи, от кода до дизайна.',
  },
  {
    title: 'Прозрачность',
    description: 'Чёткое планирование, отчётность и коммуникация на каждом этапе.',
  },
  {
    title: 'Партнёрство',
    description: 'Работаем с клиентом как с частью команды, а не как с подрядчиком.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="О компании — BAITECH.IT"
        description="BAITECH.IT — команда опытных разработчиков из Бишкека. Узнайте о нашей миссии, ценностях и подходе к работе."
        keywords="о компании, BAITECH.IT, миссия, ценности, команда"
        url="https://baitech.it/about"
      />
      <section className="bg-[#08080E] px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-primary">О компании</p>
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">Мы — команда разработчиков из Бишкека</h1>
              <p className="mt-6 max-w-xl text-slate-400 sm:text-lg">
                Объединённые общей целью: делать качественный IT-продукт для бизнеса. Мы создаём решения, которые позволяют компаниям расти и автоматизировать процессы.
              </p>
            </motion.div>
            <motion.div
              className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft"
              initial={{ opacity: 0, x: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ y: -8, borderColor: 'rgba(0, 200, 150, 0.35)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-2xl font-semibold text-white">Миссия</h2>
              <p className="mt-4 text-slate-300">Помогать бизнесу расти с помощью технологий.</p>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -7, borderColor: 'rgba(91, 107, 248, 0.42)' }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="section-card rounded-[2rem] border border-white/10 p-8"
              >
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-4 text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'Проектов', value: 20, suffix: '+' },
              { label: 'Года', value: 3, suffix: '+' },
              { label: 'Специалистов', value: 10, suffix: '+' },
              { label: 'Стран клиентов', value: 5, suffix: '+' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8, scale: 1.03, borderColor: 'rgba(0, 200, 150, 0.38)' }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-3xl border border-white/10 bg-slate-950/80 p-7 text-center"
              >
                <p className="text-4xl font-semibold text-white">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
