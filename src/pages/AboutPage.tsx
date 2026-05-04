import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';

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
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-primary">О компании</p>
              <h1 className="text-4xl font-semibold text-white sm:text-5xl">Мы — команда разработчиков из Бишкека</h1>
              <p className="mt-6 max-w-xl text-slate-400 sm:text-lg">
                Объединённые общей целью: делать качественный IT-продукт для бизнеса. Мы создаём решения, которые позволяют компаниям расти и автоматизировать процессы.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-white">Миссия</h2>
              <p className="mt-4 text-slate-300">Помогать бизнесу расти с помощью технологий.</p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="section-card rounded-[2rem] border border-white/10 p-8"
              >
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-4 text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'Проектов', value: '20+' },
              { label: 'Года', value: '3+' },
              { label: 'Специалистов', value: '10+' },
              { label: 'Стран клиентов', value: '5+' },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="rounded-3xl border border-white/10 bg-slate-950/80 p-7 text-center"
              >
                <p className="text-4xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
