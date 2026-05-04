import { Link } from 'react-router-dom';
import { companyInfo } from '../../data/company';

const services = [
  { label: 'Веб-разработка', href: '/services#web' },
  { label: 'Мобайл', href: '/services#mobile' },
  { label: 'Backend', href: '/services#backend' },
  { label: 'DevOps', href: '/services#devops' },
  { label: 'AI', href: '/services#ai' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080E] px-6 py-16 sm:px-10 lg:px-14">
      <div className="mx-auto grid max-w-7xl gap-10 xl:grid-cols-[1.8fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="text-2xl font-semibold text-white">BAITECH<span className="text-accent">.IT</span></div>
          <p className="max-w-md text-slate-400">Цифровые решения для вашего бизнеса — дизайн, разработка и поддержка с акцентом на результат.</p>
          <div className="space-x-3 text-slate-300">
            {companyInfo.socialLinks.map((social) => (
              <a key={social.label} href={social.href} className="hover:text-white">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.28em] text-primary">Услуги</h3>
          <ul className="space-y-3 text-slate-400">
            {services.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.28em] text-primary">Компания</h3>
          <ul className="space-y-3 text-slate-400">
            <li>
              <Link to="/about" className="hover:text-white">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white">
                Проекты
              </Link>
            </li>
            <li>
              <Link to="/technologies" className="hover:text-white">
                Технологии
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm uppercase tracking-[0.28em] text-primary">Контакты</h3>
          <div className="space-y-3 text-slate-400">
            <p>{companyInfo.email}</p>
            <p>{companyInfo.telegram}</p>
            <p>{companyInfo.instagram}</p>
            <p>{companyInfo.whatsApp}</p>
            <p>{companyInfo.address}</p>
          </div>
        </div>
      </div>
      <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
        © 2025 BAITECH.IT — All rights reserved.
      </div>
    </footer>
  );
}
