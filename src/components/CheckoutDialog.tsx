import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Minus, Plus, ShoppingBag, CreditCard, CheckCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CheckoutDialog({ open, onOpenChange }: CheckoutDialogProps) {
  const [step, setStep] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    state: '',
    pincode: ''
  });

  const productPrice = 580;
  const totalPrice = productPrice * quantity;

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, Math.min(10, prev + delta)));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateStep1 = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      toast.error('Please enter a valid phone number');
      return false;
    }
    if (!formData.address.trim()) {
      toast.error('Please enter your address');
      return false;
    }
    if (!formData.state.trim()) {
      toast.error('Please enter your state');
      return false;
    }
    if (!formData.pincode.trim() || formData.pincode.length !== 6) {
      toast.error('Please enter a valid 6-digit pincode');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handlePayment = () => {
    // Here you would integrate with a payment gateway
    toast.success('Order placed successfully! We will contact you soon.');
    onOpenChange(false);
    // Reset form
    setTimeout(() => {
      setStep(1);
      setQuantity(1);
      setFormData({ name: '', phone: '', address: '', state: '', pincode: '' });
    }, 300);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-[#FAF7F2] border-[#D4AF37]">
        <DialogHeader>
          <DialogTitle 
            className="text-[#4A3B1A]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {step === 1 ? 'Order Details' : 'Payment'}
          </DialogTitle>
          <DialogDescription className="text-[#6B665D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {step === 1 ? 'Enter your details to complete your order' : 'Review your order and confirm'}
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 py-4"
            >
              {/* Product Info */}
              <div className="bg-white rounded-lg p-4 border border-[#F5EDE1]">
                <h3 
                  className="text-[#4A3B1A] mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Marfliq Marble Shampoo
                </h3>
                <p className="text-[#6B665D] mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
                  1L Premium Marble & Tile Cleaner
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center justify-between">
                  <Label className="text-[#4A3B1A]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Quantity
                  </Label>
                  <div className="flex items-center gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(-1)}
                      className="h-8 w-8 rounded-full border-[#D4AF37] text-[#4A3B1A] hover:bg-[#D4AF37] hover:text-white"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span 
                      className="text-[#4A3B1A] min-w-[2rem] text-center"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}
                    >
                      {quantity}
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(1)}
                      className="h-8 w-8 rounded-full border-[#D4AF37] text-[#4A3B1A] hover:bg-[#D4AF37] hover:text-white"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-4 pt-4 border-t border-[#F5EDE1] flex justify-between items-center">
                  <span className="text-[#6B665D]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Total Amount
                  </span>
                  <span 
                    className="text-[#D4AF37]"
                    style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: '700' }}
                  >
                    ₹{totalPrice}
                  </span>
                </div>
              </div>

              {/* Customer Details Form */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-[#4A3B1A] mb-2 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="border-[#D4AF37] focus:ring-[#D4AF37] bg-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#4A3B1A] mb-2 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className="border-[#D4AF37] focus:ring-[#D4AF37] bg-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-[#4A3B1A] mb-2 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Delivery Address *
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House no., Street, Area"
                    className="border-[#D4AF37] focus:ring-[#D4AF37] bg-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="state" className="text-[#4A3B1A] mb-2 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      State *
                    </Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Enter state"
                      className="border-[#D4AF37] focus:ring-[#D4AF37] bg-white"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    />
                  </div>

                  <div>
                    <Label htmlFor="pincode" className="text-[#4A3B1A] mb-2 block" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Pincode *
                    </Label>
                    <Input
                      id="pincode"
                      name="pincode"
                      type="text"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="6-digit pincode"
                      maxLength={6}
                      className="border-[#D4AF37] focus:ring-[#D4AF37] bg-white"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    />
                  </div>
                </div>
              </div>

              <Button
                onClick={handleNext}
                className="w-full bg-[#D4AF37] hover:bg-[#C7A046] text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Continue to Payment
                <CreditCard className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 py-4"
            >
              {/* Order Summary */}
              <div className="bg-white rounded-lg p-6 border border-[#F5EDE1]">
                <h3 
                  className="text-[#4A3B1A] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Order Summary
                </h3>
                
                <div className="space-y-2 mb-4 text-[#6B665D]" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
                  <div className="flex justify-between">
                    <span>Product</span>
                    <span>Marfliq Marble Shampoo (1L)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quantity</span>
                    <span>{quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price per unit</span>
                    <span>₹{productPrice}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F5EDE1] mb-4">
                  <h4 className="text-[#4A3B1A] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Delivery Details
                  </h4>
                  <div className="text-[#6B665D] space-y-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
                    <p>{formData.name}</p>
                    <p>{formData.phone}</p>
                    <p>{formData.address}</p>
                    <p>{formData.state}, {formData.pincode}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F5EDE1] flex justify-between items-center">
                  <span 
                    className="text-[#4A3B1A]"
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}
                  >
                    Total Amount
                  </span>
                  <span 
                    className="text-[#D4AF37]"
                    style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', fontWeight: '700' }}
                  >
                    ₹{totalPrice}
                  </span>
                </div>
              </div>

              {/* Payment Note */}
              <div className="bg-[#FFF9E6] border border-[#D4AF37] rounded-lg p-4">
                <p className="text-[#4A3B1A] text-center" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem' }}>
                  <CheckCircle className="inline-block w-4 h-4 mr-2 text-[#D4AF37]" />
                  You will receive a call from our team to confirm your order and arrange payment.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1 border-[#D4AF37] text-[#4A3B1A] hover:bg-[#F5EDE1]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Back
                </Button>
                <Button
                  onClick={handlePayment}
                  className="flex-1 bg-[#D4AF37] hover:bg-[#C7A046] text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Confirm Order
                  <ShoppingBag className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step Indicator */}
        <div className="flex justify-center gap-2 mt-2">
          <div className={`h-2 w-2 rounded-full transition-colors ${step === 1 ? 'bg-[#D4AF37]' : 'bg-[#F5EDE1]'}`} />
          <div className={`h-2 w-2 rounded-full transition-colors ${step === 2 ? 'bg-[#D4AF37]' : 'bg-[#F5EDE1]'}`} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
