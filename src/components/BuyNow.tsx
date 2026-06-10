import { motion } from 'motion/react';
import productBottle from 'figma:asset/06c9cdb51a2c62414481126bc8ddf3c8e532ac26.png';
import { Button } from './ui/button';
import { ShoppingCart, CreditCard, Shield, Truck } from 'lucide-react';
import { useState } from 'react';
import { CheckoutDialog } from './CheckoutDialog';

export function BuyNow() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <>
    <section 
      id="buy"
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
            Get Your Marfliq Today
          </h2>
          <p 
            className="text-[#6B665D] max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Experience luxury marble care with free delivery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-lg blur-2xl opacity-30"
                style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C7A046 100%)' }}
              ></div>
              <img
                src={productBottle}
                alt="Marfliq Marble Shampoo"
                className="relative z-10 w-full max-w-sm drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="p-8 rounded-lg border-2 mb-6 bg-gradient-to-br from-[#D4AF37]/5 to-white"
              style={{ borderColor: '#D4AF37' }}
            >
              <h3 
                className="mb-4 text-[#4A3B1A]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Marfliq Marble Shampoo
              </h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span 
                  className="text-[#D4AF37]"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  ₹580
                </span>
                <span 
                  className="text-[#6B665D]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  / 1 Litre Bottle
                </span>
              </div>

              <div className="space-y-3 mb-8">
                <Button
                  onClick={() => setCheckoutOpen(true)}
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C7A046] hover:from-[#C7A046] hover:to-[#D4AF37] text-white py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  onClick={() => setCheckoutOpen(true)}
                  className="w-full bg-[#4A3B1A] hover:bg-[#5A4B2A] text-white py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Buy Instantly
                </Button>
              </div>

              <div className="space-y-3">
                <p 
                  className="text-center text-[#6B665D] mb-4"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Payment Options
                </p>
                <div className="flex justify-center gap-4 flex-wrap text-[#6B665D]">
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>UPI</span>
                  <span>•</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>Credit/Debit Cards</span>
                  <span>•</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>Net Banking</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-[#D4AF37]" />
                <p 
                  className="text-[#6B665D]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Secure Payment
                </p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 mx-auto mb-2 text-[#D4AF37]" />
                <p 
                  className="text-[#6B665D]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Fast Delivery
                </p>
              </div>
              <div className="text-center">
                <CreditCard className="w-8 h-8 mx-auto mb-2 text-[#D4AF37]" />
                <p 
                  className="text-[#6B665D]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Premium Quality
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </section>
    </>
  );
}
