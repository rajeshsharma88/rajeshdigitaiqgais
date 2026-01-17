import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-brand-900">
        <Routes>
          <Route path="/admin" element={<Dashboard />} />
          
          {/* Public Routes */}
          <Route
            path="*"
            element={
              <>
                <Navigation />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/programs/:id" element={<CourseDetail />} />
                    <Route path="/admissions" element={<Admissions />} />
                    <Route path="/about" element={<About />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;