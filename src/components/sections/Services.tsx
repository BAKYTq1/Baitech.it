import { motion } from 'framer-motion';
import type { ServiceItem } from '../../types';
import { services } from '../../data/services';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';

export default function Services() {
  return (
    <section className="relative border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Наши услуги" description="Помогаем бизнесу продавать, обслуживать клиентов и работать быстрее через цифровые продукты." />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service: ServiceItem) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
                className="section-card rounded-[2rem] border border-white/10 p-8"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-primary">{service.technicalTitle}</p>
                <h3 className="mb-3 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mb-4 text-slate-400">{service.description}</p>
                <div className="mb-6 rounded-3xl border border-accent/15 bg-accent/5 p-4 text-sm leading-6 text-slate-300">
                  <span className="font-semibold text-white">Что получает бизнес: </span>
                  {service.outcome}
                </div>
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-slate-500">Технологии</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
