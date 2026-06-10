import { ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { CheckoutDialog } from './CheckoutDialog';

export function FloatingCart() {
  const [cartCount, setCartCount] = useState(0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setCheckoutOpen(true)}
        className="fixed bottom-6 right-6 bg-[#D4AF37] text-white rounded-full p-4 shadow-xl hover:bg-[#C7A046] transition-all z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        title="Shopping Cart"
        style={{
          boxShadow: '0 4px 20px rgba(212, 175, 55, 0.4)'
        }}
      >
        <ShoppingCart className="w-6 h-6" />
        {cartCount > 0 && (
          <motion.span
            className="absolute -top-2 -right-2 bg-[#4A3B1A] text-white rounded-full w-6 h-6 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.75rem',
              fontWeight: '600'
            }}
          >
            {cartCount}
          </motion.span>
        )}
      </motion.button>

      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </>
  );
}
