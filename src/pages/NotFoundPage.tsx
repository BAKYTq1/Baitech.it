import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/seo/SEO';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Страница не найдена — BAITECH.IT"
        description="Страница не найдена. Вернитесь на главную страницу BAITECH.IT для новых проектов и услуг."
        keywords="404, страница не найдена, BAITECH.IT"
        url="https://baitech.it/404"
        noindex
      />
      <section className="flex min-h-[calc(100vh-96px)] items-center justify-center px-6 py-24 sm:px-10 lg:px-14">
        <motion.div
          className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-12 text-center shadow-soft"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-sm uppercase tracking-[0.28em] text-primary"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            404
          </motion.p>
          <h1 className="mt-6 text-5xl font-semibold text-white sm:text-6xl">Страница не найдена</h1>
          <p className="mt-6 max-w-xl text-slate-400">Кажется, вы попали на страницу, которая ещё не существует. Пожалуйста, вернитесь на главную.</p>
          <motion.div className="mt-10 inline-block" whileHover={{ x: -4 }} whileTap={{ scale: 0.96 }}>
            <Link to="/">
            <Button variant="outline">
              Вернуться на главную
              <ArrowLeft className="h-4 w-4" />
            </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
