import { motion } from 'motion/react';
import lifestyleImage from 'figma:asset/c88df8551baafea8dfc99ba775a356de776d2e23.png';
import { Button } from './ui/button';

export function About() {
  return (
    <section 
      id="about"
      className="py-24"
      style={{ backgroundColor: '#FAF7F2' }}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div 
              className="absolute inset-0 border-4 rounded-lg translate-x-4 translate-y-4"
              style={{ borderColor: '#D4AF37' }}
            ></div>
            <img
              src={lifestyleImage}
              alt="Marfliq Marble Shampoo in use"
              className="relative z-10 w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 
              className="mb-6 text-[#4A3B1A]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              About the Product
            </h2>
            <p 
              className="mb-6 text-[#5A5142]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ideal for use on Diamond Polish and Silicate surfaces. Marfliq Marble Shampoo is 
              specially formulated to provide effortless shine and maintain the natural beauty 
              of your marble and tile surfaces. Experience spotless cleanliness with every use.
            </p>
            <div className="mb-8">
              <div 
                className="inline-block bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 px-6 py-4 rounded-lg border-2 mb-4"
                style={{ borderColor: '#D4AF37' }}
              >
                <p 
                  className="text-[#4A3B1A]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <span style={{ color: '#D4AF37' }}>Net Wt.</span> 1L | <span style={{ color: '#D4AF37' }}>₹580</span>
                </p>
              </div>
            </div>
            <Button
              className="bg-gradient-to-r from-[#D4AF37] to-[#C7A046] hover:from-[#C7A046] hover:to-[#D4AF37] text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Add to Cart
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
