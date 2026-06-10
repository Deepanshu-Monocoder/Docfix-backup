import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { HowToUse } from './components/HowToUse';
import { Testimonials } from './components/Testimonials';
import { BuyNow } from './components/BuyNow';
import { Footer } from './components/Footer';
import { FloatingCart } from './components/FloatingCart';
import { Preloader } from './components/Preloader';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure minimum display time for preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3100); // 3.1 seconds total (animation + fade out)

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <HowToUse />
        <Testimonials />
        <BuyNow />
      </main>
      <Footer />
      <FloatingCart />
      <Toaster position="top-center" />
    </div>
  );
}
