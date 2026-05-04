import SEO from '../components/seo/SEO';
import Services from '../components/sections/Services';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Услуги — BAITECH.IT"
        description="Веб-разработка, мобильные приложения, DevOps, AI-автоматизация и UI/UX дизайн для вашего бизнеса."
        keywords="веб разработка, мобильные приложения, DevOps, AI, дизайн"
        url="https://baitech.it/services"
      />
      <section className="relative bg-[#08080E] px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-primary">Услуги</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Услуги, которые помогают бизнесу расти</h1>
            <p className="mt-6 text-slate-400 sm:text-lg">Мы создаём комплексные IT-решения для любых задач — от интерфейсов до инфраструктуры.</p>
          </div>
          <Services />
        </div>
      </section>
    </>
  );
}
