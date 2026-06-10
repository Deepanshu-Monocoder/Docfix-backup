import { Menu, X, Home, Info, Sparkles, BookOpen, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className="absolute top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Desktop Version - Original Design */}
        <div className="hidden md:block container mx-auto px-6 py-6">
          {/* Logo centered at top */}
          <div className="flex justify-center mb-6">
            <motion.div 
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('hero')}
            >
              <span className="text-[#C7A046]" style={{ fontFamily: 'Times New Roman, serif', fontSize: '3rem', fontWeight: '700', letterSpacing: '0.05em', textShadow: '-0.5px -0.5px 0 rgba(74, 59, 26, 0.3), 0.5px -0.5px 0 rgba(74, 59, 26, 0.3), -0.5px 0.5px 0 rgba(74, 59, 26, 0.3), 0.5px 0.5px 0 rgba(74, 59, 26, 0.3), 0 0 15px rgba(212, 175, 55, 0.3)' }}>
                MARFLIQ
              </span>
            </motion.div>
          </div>

          {/* Navigation below logo */}
          <div className="flex items-center justify-center">
            <nav className="flex items-center gap-3">
              <motion.button 
                onClick={() => scrollToSection('hero')}
                className="bg-white/95 backdrop-blur-md rounded-full p-3 text-[#C7A046] hover:text-[#C7A046] hover:bg-white transition-all shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Home"
                style={{
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Home className="w-5 h-5" />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('about')}
                className="bg-white/95 backdrop-blur-md rounded-full p-3 text-[#4A3B1A] hover:text-[#C7A046] hover:bg-white transition-all shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="About"
              >
                <Info className="w-5 h-5" />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('benefits')}
                className="bg-white/95 backdrop-blur-md rounded-full p-3 text-[#4A3B1A] hover:text-[#C7A046] hover:bg-white transition-all shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Benefits"
              >
                <Sparkles className="w-5 h-5" />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('how-to-use')}
                className="bg-white/95 backdrop-blur-md rounded-full p-3 text-[#4A3B1A] hover:text-[#C7A046] hover:bg-white transition-all shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="How to Use"
              >
                <BookOpen className="w-5 h-5" />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('buy')}
                className="bg-[#D4AF37] backdrop-blur-md rounded-full p-3 text-white hover:bg-[#C7A046] transition-all shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title="Buy Now"
              >
                <ShoppingBag className="w-5 h-5" />
              </motion.button>
            </nav>
          </div>
        </div>

        {/* Mobile Version - Logo with Navigation Below */}
        <div className="md:hidden px-3 py-4">
          {/* Logo centered at top */}
          <div className="flex justify-center mb-3">
            <motion.div 
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('hero')}
            >
              <span 
                className="text-[#C7A046]" 
                style={{ 
                  fontFamily: 'Times New Roman, serif', 
                  fontSize: '2.1rem',
                  fontWeight: '700', 
                  letterSpacing: '0.05em', 
                  textShadow: '-0.5px -0.5px 0 rgba(74, 59, 26, 0.3), 0.5px -0.5px 0 rgba(74, 59, 26, 0.3), -0.5px 0.5px 0 rgba(74, 59, 26, 0.3), 0.5px 0.5px 0 rgba(74, 59, 26, 0.3), 0 0 15px rgba(212, 175, 55, 0.3)' 
                }}
              >
                MARFLIQ
              </span>
            </motion.div>
          </div>

          {/* Navigation icons below logo */}
          <div className="flex justify-center">
            <nav className="flex items-center gap-2">
              <motion.button 
                onClick={() => scrollToSection('hero')}
                className="bg-white/95 backdrop-blur-md rounded-full p-2.5 text-[#C7A046] hover:text-[#C7A046] hover:bg-white transition-all shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Home"
                style={{
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.4), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Home className="w-4 h-4" />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('about')}
                className="bg-white/95 backdrop-blur-md rounded-full p-2.5 text-[#4A3B1A] hover:text-[#C7A046] hover:bg-white transition-all shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="About"
              >
                <Info className="w-4 h-4" />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('benefits')}
                className="bg-white/95 backdrop-blur-md rounded-full p-2.5 text-[#4A3B1A] hover:text-[#C7A046] hover:bg-white transition-all shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Benefits"
              >
                <Sparkles className="w-4 h-4" />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('how-to-use')}
                className="bg-white/95 backdrop-blur-md rounded-full p-2.5 text-[#4A3B1A] hover:text-[#C7A046] hover:bg-white transition-all shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="How to Use"
              >
                <BookOpen className="w-4 h-4" />
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('buy')}
                className="bg-[#D4AF37] backdrop-blur-md rounded-full p-2.5 text-white hover:bg-[#C7A046] transition-all shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Buy Now"
              >
                <ShoppingBag className="w-4 h-4" />
              </motion.button>
            </nav>
          </div>
        </div>
      </motion.header>
    </>
  );
}
