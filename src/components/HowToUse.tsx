import { motion } from 'motion/react';
import { Droplet, Sparkles, Wind, Sun } from 'lucide-react';

const steps = [
  {
    icon: Droplet,
    step: 'Step 1',
    title: 'Dilute',
    description: 'Add 4–5 pumps in 5 liters of water',
  },
  {
    icon: Sparkles,
    step: 'Step 2',
    title: 'Apply',
    description: 'Apply with mop or cloth to the surface',
  },
  {
    icon: Wind,
    step: 'Step 3',
    title: 'Scrub',
    description: 'Gently scrub if needed for stubborn stains',
  },
  {
    icon: Sun,
    step: 'Step 4',
    title: 'Rinse & Dry',
    description: 'Rinse with clean water and air dry',
  },
];

export function HowToUse() {
  return (
    <section 
      id="how-to-use"
      className="py-24"
      style={{ backgroundColor: '#FAF7F2' }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="mb-4 text-[#4A3B1A]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Directions for Use
          </h2>
          <p 
            className="text-[#6B665D] max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Follow these simple steps for spotless, shining marble surfaces
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
                    style={{ 
                      background: 'linear-gradient(135deg, #D4AF37 0%, #C7A046 100%)',
                      boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)'
                    }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div 
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md"
                    style={{ 
                      background: '#4A3B1A',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
                <p 
                  className="mb-2"
                  style={{ 
                    fontFamily: 'Poppins, sans-serif',
                    color: '#D4AF37'
                  }}
                >
                  {step.step}
                </p>
                <h3 
                  className="mb-3 text-[#4A3B1A]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-[#6B665D]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
