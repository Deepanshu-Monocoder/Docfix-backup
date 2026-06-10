import { motion } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: '#f7f4ef',
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      {/* Subtle marble texture overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1hcmJsZSUyMHRleHR1cmV8ZW58MXx8fHwxNzYyMTQzMjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Logo Animation */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1 
            className="text-[#4A3B1A] mb-3"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '4rem',
              lineHeight: '1.2',
              letterSpacing: '0.02em',
            }}
          >
            Marfliq
          </h1>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ 
              duration: 1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8,
              delay: 1,
            }}
            className="mt-4 text-[#6B665D] tracking-widest uppercase"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '0.875rem',
              letterSpacing: '0.15em',
            }}
          >
            Luxury Marble Care
          </motion.p>
        </motion.div>
        
        {/* Subtle shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 2,
            delay: 0.3,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.div>
  );
}
