import TechStack from '../components/sections/TechStack';
import SEO from '../components/seo/SEO';

export default function TechnologiesPage() {
  return (
    <>
      <SEO
        title="Технологии — BAITECH.IT"
        description="Технологии BAITECH.IT: frontend, backend, mobile и DevOps-инструменты для разработки надёжных цифровых продуктов."
        keywords="технологии, React, TypeScript, Node.js, Python, Flutter, DevOps, BAITECH.IT"
        url="https://baitech.it/technologies"
      />
      <section className="bg-[#08080E] px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-primary">Технологии</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Стек для быстрых и надёжных продуктов</h1>
            <p className="mt-6 text-slate-400 sm:text-lg">
              Подбираем инструменты под задачу: от интерфейсов и мобильных приложений до backend-сервисов и инфраструктуры.
            </p>
          </div>
        </div>
      </section>
      <TechStack />
    </>
  );
}
