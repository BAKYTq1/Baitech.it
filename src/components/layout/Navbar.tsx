import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { companyInfo } from '../../data/company';
import Button from '../ui/Button';

const navLinks = [
  { label: 'Услуги', href: '/services' },
  { label: 'Проекты', href: '/projects' },
  { label: 'О нас', href: '/about' },
  { label: 'Контакты', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#08080E]/85 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-14">
        <Link to="/" className="text-lg font-semibold text-white">
          BAITECH<span className="text-accent">.IT</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm transition ${
                location.pathname === link.href ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a href={companyInfo.whatsAppHref} target="_blank" rel="noreferrer">
            <Button type="button">Связаться с нами</Button>
          </a>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Открыть меню"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#08080E]/95 md:hidden"
          >
            <div className="space-y-3 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-3xl px-4 py-3 text-sm transition ${
                    location.pathname === link.href ? 'bg-primary/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href={companyInfo.whatsAppHref} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                <Button type="button" className="w-full">Связаться с нами</Button>
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
