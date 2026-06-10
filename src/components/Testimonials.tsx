import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'Absolutely amazing! My marble floors have never looked this good. The shine is incredible and it smells wonderful.',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    comment: 'I was skeptical at first, but Marfliq exceeded my expectations. Best marble cleaner I have ever used!',
  },
  {
    name: 'Anjali Mehta',
    location: 'Bangalore',
    rating: 5,
    comment: 'The lemon scent is so refreshing, and the results are outstanding. My guests always compliment the shine of my floors.',
  },
];

export function Testimonials() {
  return (
    <section 
      className="py-24"
      style={{
        backgroundImage: `linear-gradient(rgba(245, 237, 225, 0.95), rgba(245, 237, 225, 0.95)), url(https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1hcmJsZSUyMHRleHR1cmV8ZW58MXx8fHwxNzYyMTQzMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
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
            Customer Love
          </h2>
          <p 
            className="text-[#6B665D] max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            See what our customers are saying about Marfliq
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="p-8 h-full flex flex-col bg-white/90 backdrop-blur border-2 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl"
                style={{
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.1)'
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p 
                  className="mb-6 flex-grow text-[#5A5142] italic"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  "{testimonial.comment}"
                </p>
                <div 
                  className="pt-4 border-t-2"
                  style={{ borderColor: '#D4AF37' }}
                >
                  <p 
                    className="text-[#4A3B1A]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {testimonial.name}
                  </p>
                  <p 
                    className="text-[#6B665D]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {testimonial.location}
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
