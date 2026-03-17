import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import PageLoader from './components/PageLoader';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(function () {
    setIsTransitioning(true);
    const timer = setTimeout(function () {
      setIsTransitioning(false);
    }, 300);

    return function () {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <>
      <PageLoader />

      <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
        <ScrollToTop />
        <Navbar />

        <main
          className={[
            'flex-1 overflow-x-clip transition-all duration-500 ease-out',
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          ].join(' ')}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
