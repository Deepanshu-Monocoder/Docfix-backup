import { motion } from 'motion/react';
import { Sparkles, Leaf, Shield, Droplet } from 'lucide-react';
import { Card } from './ui/card';

const benefits = [
  {
    icon: Leaf,
    title: 'Natural Formula',
    description: 'Minimum natural force of finesse - gentle on surfaces, powerful on dirt',
  },
  {
    icon: Shield,
    title: 'No Harsh Chemicals',
    description: 'Safe formula without harsh chemicals, perfect for regular use',
  },
  {
    icon: Droplet,
    title: 'Daily Mopping',
    description: 'Good for entry day mopping - ideal for everyday cleaning needs',
  },
  {
    icon: Sparkles,
    title: 'Diamond Polish Compatible',
    description: 'Specially designed for Diamond Polish and Silicate surfaces',
  },
];

export function Benefits() {
  return (
    <section 
      id="benefits"
      className="py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(250, 247, 242, 0.95), rgba(250, 247, 242, 0.95)), url(https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1hcmJsZSUyMHRleHR1cmV8ZW58MXx8fHwxNzYyMTQzMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
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
            Key Benefits
          </h2>
          <p 
            className="text-[#6B665D] max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Discover why Marfliq is the preferred choice for luxury marble care
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-[#D4AF37] bg-white/80 backdrop-blur">
                <div className="flex flex-col items-center text-center">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg"
                    style={{ 
                      background: 'linear-gradient(135deg, #D4AF37 0%, #C7A046 100%)',
                      boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)'
                    }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 
                    className="mb-3 text-[#4A3B1A]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {benefit.title}
                  </h3>
                  <p 
                    className="text-[#6B665D]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
