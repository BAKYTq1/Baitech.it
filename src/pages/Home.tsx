import CtaBanner from '../components/sections/CtaBanner';
import Hero from '../components/sections/Hero';
import Process from '../components/sections/Process';
import Services from '../components/sections/Services';
import WhyUs from '../components/sections/WhyUs';
import SEO from '../components/seo/SEO';
import { companyInfo } from '../data/company';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'BAITECH.IT',
  url: 'https://baitech.it/',
  logo: 'https://baitech.it/favicon.svg',
  image: 'https://baitech.it/og-image.svg',
  description:
    'IT-компания полного цикла в Бишкеке: веб-разработка, мобильные приложения, DevOps и AI-автоматизация для бизнеса.',
  email: companyInfo.email,
  telephone: companyInfo.whatsApp,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Бишкек',
    addressCountry: 'KG',
  },
  areaServed: ['Кыргызстан', 'Бишкек'],
  sameAs: companyInfo.socialLinks.map((link) => link.href),
};

export default function Home() {
  return (
    <>
      <SEO
        title="BAITECH.IT — IT-компания полного цикла в Бишкеке"
        description="Разрабатываем веб-приложения, мобильные решения и системы автоматизации для бизнеса. Надёжный IT-партнёр в Кыргызстане."
        keywords="IT компания Бишкек, разработка сайтов Кыргызстан, мобильные приложения, веб-разработка"
        url="https://baitech.it/"
        structuredData={organizationSchema}
      />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <CtaBanner />
    </>
  );
}
