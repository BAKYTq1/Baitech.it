import { motion } from 'framer-motion';
import { CheckCircle2, CloudCog, MonitorSmartphone, Server, Smartphone } from 'lucide-react';
import { stackGroups } from '../../data/stack';
import SectionHeader from '../ui/SectionHeader';

const icons = {
  Frontend: MonitorSmartphone,
  Backend: Server,
  Mobile: Smartphone,
  DevOps: CloudCog,
};

export default function TechStack() {
  return (
    <section className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Технологии" description="Мы строим надёжные решения на современных технологиях." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stackGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -7, borderColor: 'rgba(91, 107, 248, 0.42)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="section-card rounded-[2rem] border border-white/10 p-8"
            >
              <div className="mb-5 flex items-start gap-3">
                {(() => {
                  const Icon = icons[group.technicalTitle as keyof typeof icons] ?? CheckCircle2;
                  return <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />;
                })()}
                <div>
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-primary">{group.technicalTitle}</p>
                </div>
              </div>
              <p className="mb-6 text-sm leading-6 text-slate-400">{group.description}</p>
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-slate-500">Используем</p>
              <ul className="space-y-3 text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
