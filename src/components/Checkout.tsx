import { useState } from 'react';
import { ArrowLeft, CreditCard, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [isOrdered, setIsOrdered] = useState(false);

  const subtotal = cartTotal;
  const shipping = 60;
  const total = subtotal + shipping;

  const handleOrder = () => {
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 animate-bounce">
          <CheckCircle2 size={48} className="text-green-500" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4 text-center">Thank You for Your Order!</h1>
        <p className="text-gray-500 text-lg mb-8 text-center max-w-md">
          Your order <span className="font-bold text-gray-900">#PB-9942</span> has been placed successfully. We'll send you a confirmation email shortly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link to="/" className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-bold transition-all text-center">
            Continue Shopping
          </Link>
          <Link to="/track-order" className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-bold transition-all text-center shadow-lg shadow-yellow-100">
            Track Order
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/cart" className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-3xl font-serif font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          {/* Checkout Steps */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {/* Shipping Address */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <Truck size={20} />
                  </div>
                  <h2 className="text-xl font-serif font-bold">Shipping Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:outline-none" placeholder="John Doe" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:outline-none" placeholder="123 Soap Lane" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:outline-none" placeholder="Dhaka" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:outline-none" placeholder="1200" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:outline-none" placeholder="+880 1XXX-XXXXXX" />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600">
                    <CreditCard size={20} />
                  </div>
                  <h2 className="text-xl font-serif font-bold">Payment Method</h2>
                </div>
                
                <div className="space-y-4">
                  <label className="flex items-center p-4 border border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors">
                    <input type="radio" name="payment" className="w-5 h-5 text-yellow-500 focus:ring-yellow-500 border-gray-300" defaultChecked />
                    <span className="ml-4 font-medium text-gray-900">Cash on Delivery</span>
                  </label>
                  <label className="flex items-center p-4 border border-gray-200 rounded-2xl cursor-not-allowed opacity-60">
                    <input type="radio" name="payment" className="w-5 h-5 text-yellow-500 focus:ring-yellow-500 border-gray-300" disabled />
                    <span className="ml-4 font-medium text-gray-900">Credit / Debit Card (Coming Soon)</span>
                  </label>
                  <label className="flex items-center p-4 border border-gray-200 rounded-2xl cursor-not-allowed opacity-60">
                    <input type="radio" name="payment" className="w-5 h-5 text-yellow-500 focus:ring-yellow-500 border-gray-300" disabled />
                    <span className="ml-4 font-medium text-gray-900">bKash / Nagad (Coming Soon)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="mt-12 lg:mt-0 lg:col-span-4">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-32">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-6 font-serif">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                      <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-bold text-gray-900 mt-1">৳{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium text-gray-900">৳{subtotal}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium text-gray-900">৳{shipping}</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <span className="text-base font-bold text-gray-900 font-serif">Total Amount</span>
                  <span className="text-2xl font-bold text-pink-500 font-serif">৳{total}</span>
                </div>
              </div>

              <button 
                onClick={handleOrder}
                className="mt-8 w-full bg-gray-900 hover:bg-black text-white py-4 rounded-full font-bold flex items-center justify-center transition-all shadow-lg"
              >
                PLACE ORDER NOW
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
                <ShieldCheck size={14} className="text-green-500" />
                <span>Secure payment with 100% protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
