import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import { projects } from '../data/projects';
import type { ProjectCategory } from '../types';

const tabs: ProjectCategory[] = ['Все', 'Веб', 'Мобайл', 'AI', 'DevOps'];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('Все');

  const filteredProjects = useMemo(
    () => (activeTab === 'Все' ? projects : projects.filter((project) => project.category === activeTab)),
    [activeTab],
  );

  return (
    <>
      <SEO
        title="Проекты — BAITECH.IT"
        description="Портфолио реализованных IT-проектов: CRM, маркетплейсы, мобильные приложения, SaaS-платформы."
        keywords="портфолио, IT проекты, CRM, маркетплейс, мобильные приложения"
        url="https://baitech.it/projects"
      />
      <section className="bg-[#08080E] px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-primary">Проекты</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Портфолио BAITECH.IT</h1>
            <p className="mt-6 text-slate-400 sm:text-lg">Реализованные решения по направлениям Веб, Мобайл, AI и DevOps.</p>
          </div>
          <div className="mb-10 flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full border px-5 py-2 text-sm transition ${
                  activeTab === tab
                    ? 'border-primary bg-primary/15 text-white '
                    : 'border-white/10 text-slate-400 hover:border-primary hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className="section-card rounded-[2rem] border border-white/10 p-8"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">{project.category}</span>
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300">{project.status}</span>
                </div>
                <h2 className="mb-4 text-2xl font-semibold text-white">{project.title}</h2>
                <p className="mb-6 text-slate-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((label) => (
                    <span key={label} className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300">
                      {label}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
