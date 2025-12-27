
import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Lazy load 3D scene to keep initial load fast
const ThreeScene = lazy(() => import('./components/ThreeScene'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      
      <main>
        {/* Hero Section Container */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background 3D Layer - Now with pointer events enabled for interaction */}
          <div className="absolute inset-0 z-0">
            <Suspense fallback={<div className="w-full h-full bg-[#050505] animate-pulse" />}>
              <ThreeScene />
            </Suspense>
          </div>
          
          {/* Foreground Text Layer - pointer-events-none ensures user can click objects through text space */}
          <div className="relative z-10 w-full pointer-events-none">
            <Hero />
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-30">
            <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-white" />
          </div>
        </section>

        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
