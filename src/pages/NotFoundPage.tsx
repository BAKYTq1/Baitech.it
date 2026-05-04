import { Link } from 'react-router-dom';
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
      />
      <section className="flex min-h-[calc(100vh-96px)] items-center justify-center px-6 py-24 sm:px-10 lg:px-14">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-12 text-center shadow-soft">
          <p className="text-sm uppercase tracking-[0.28em] text-primary">404</p>
          <h1 className="mt-6 text-5xl font-semibold text-white sm:text-6xl">Страница не найдена</h1>
          <p className="mt-6 max-w-xl text-slate-400">Кажется, вы попали на страницу, которая ещё не существует. Пожалуйста, вернитесь на главную.</p>
          <Link to="/" className="mt-10 inline-block">
            <Button variant="outline">
              Вернуться на главную
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
