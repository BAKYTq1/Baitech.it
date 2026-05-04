import { motion } from 'framer-motion';
import type { ServiceItem } from '../../types';
import { services } from '../../data/services';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';

export default function Services() {
  return (
    <section className="relative border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Наши услуги" description="Современные сервисы для цифровой трансформации круглосуточно." />
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
                <h3 className="mb-3 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mb-6 text-slate-400">{service.description}</p>
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
