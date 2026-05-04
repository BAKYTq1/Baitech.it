import { motion } from 'framer-motion';
import { stackGroups } from '../../data/stack';
import SectionHeader from '../ui/SectionHeader';

export default function TechStack() {
  return (
    <section className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Технологии" description="Мы строим надёжные решения на современных технологиях." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stackGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="section-card rounded-[2rem] border border-white/10 p-8"
            >
              <h3 className="mb-6 text-xl font-semibold text-white">{group.title}</h3>
              <ul className="space-y-3 text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary" />
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
