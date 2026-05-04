import CtaBanner from '../components/sections/CtaBanner';
import Hero from '../components/sections/Hero';
import Process from '../components/sections/Process';
import Services from '../components/sections/Services';
import TechStack from '../components/sections/TechStack';
import WhyUs from '../components/sections/WhyUs';
import SEO from '../components/seo/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="BAITECH.IT — IT-компания полного цикла в Бишкеке"
        description="Разрабатываем веб-приложения, мобильные решения и системы автоматизации для бизнеса. Надёжный IT-партнёр в Кыргызстане."
        keywords="IT компания Бишкек, разработка сайтов Кыргызстан, мобильные приложения, веб-разработка"
        url="https://baitech.it/"
      />
      <Hero />
      <Services />
      <TechStack />
      <WhyUs />
      <Process />
      <CtaBanner />
    </>
  );
}
