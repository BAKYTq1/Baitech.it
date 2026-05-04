import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const navLinks = [
  { label: 'Услуги', href: '/services' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Технологии', href: '/technologies' },
  { label: 'О нас', href: '/about' },
  { label: 'Контакты', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-white/10 bg-[#08080E]/85 backdrop-blur-2xl"
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-14">
        <Link to="/" className="text-lg font-semibold text-white">
          BAITECH<span className="text-accent">.IT</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              <Link
              to={link.href}
              className={`text-sm transition ${
                location.pathname === link.href ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Link to="/contact">
            <Button type="button">Наши контакты</Button>
          </Link>
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
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                >
                  <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-3xl px-4 py-3 text-sm transition ${
                    location.pathname === link.href ? 'bg-primary/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)}>
                <Button type="button" className="w-full">Наши контакты</Button>
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
