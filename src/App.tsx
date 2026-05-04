import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageTransition from './components/ui/PageTransition';
import ScrollProgress from './components/ui/ScrollProgress';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import TechnologiesPage from './pages/TechnologiesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#08080E] text-slate-100">
        <BrowserRouter>
          <ScrollProgress />
          <Navbar />
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/technologies" element={<TechnologiesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PageTransition>
          <Footer />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
