import { motion } from 'motion/react';
import productBottle from 'figma:asset/06c9cdb51a2c62414481126bc8ddf3c8e532ac26.png';
import { Button } from './ui/button';

export function Hero() {
  const scrollToBuy = () => {
    const element = document.getElementById('buy');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(250, 247, 242, 0.4), rgba(215, 175, 70, 0.15)), url(https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1hcmJsZSUyMHRleHR1cmV8ZW58MXx8fHwxNzYyMTQzMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-6 pt-48 pb-32">
        {/* Mobile Layout - Centered with bottle above button */}
        <div className="lg:hidden flex flex-col items-center justify-center gap-1">
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-3xl"></div>
              <img
                src={productBottle}
                alt="Marfliq Marble Shampoo Bottle"
                className="relative z-10 w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 
              className="mb-2 text-2xl sm:text-3xl text-[#4A3B1A] whitespace-nowrap"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Marfliq Marble Shampoo
            </h1>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={scrollToBuy}
              className="bg-gradient-to-r from-[#D4AF37] to-[#C7A046] hover:from-[#C7A046] hover:to-[#D4AF37] text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Buy Now – ₹580
            </Button>
            <p 
              className="mt-4 text-lg text-[#5A5142] max-w-2xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Effortless Shine for Your Marble
            </p>
            <p 
              className="mt-6 text-[#6B665D] italic"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Because your marble deserves royal care.
            </p>
          </motion.div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:flex items-center justify-center gap-6">
          <motion.div 
            className="flex-1 text-center flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="mb-6 text-[#4A3B1A] whitespace-nowrap"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.5rem', lineHeight: '1.2' }}
            >
              Marfliq Marble Shampoo
            </h1>
            <Button
              onClick={scrollToBuy}
              className="bg-gradient-to-r from-[#D4AF37] to-[#C7A046] hover:from-[#C7A046] hover:to-[#D4AF37] text-white px-9 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.125rem' }}
            >
              Buy Now – ₹580
            </Button>
            <p 
              className="mt-4 text-[#5A5142] max-w-2xl"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.35rem' }}
            >
              Effortless Shine for Your Marble
            </p>
            <p 
              className="mt-6 text-[#6B665D] italic"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.125rem' }}
            >
              Because your marble deserves royal care.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-3xl"></div>
              <img
                src={productBottle}
                alt="Marfliq Marble Shampoo Bottle"
                className="relative z-10 w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
