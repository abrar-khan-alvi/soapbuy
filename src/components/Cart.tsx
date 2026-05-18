import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  const shipping = 60;
  const total = cartTotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={40} className="text-gray-300" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-bold transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <ul className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-6 flex flex-col sm:flex-row sm:items-center">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden mb-4 sm:mb-0">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="sm:ml-6 flex-1 flex flex-col">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            <Link to={`/product/${item.id}`} className="hover:text-yellow-600">
                              {item.title}
                            </Link>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                        </div>
                        <p className="text-lg font-bold text-gray-900">৳{item.price * item.quantity}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-10 text-center font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium"
                        >
                          <Trash2 size={18} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Link to="/" className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-700">
                <ArrowLeft size={16} className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-4">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-32">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium text-gray-900">৳{cartTotal}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Shipping Estimate</span>
                  <span className="font-medium text-gray-900">৳{shipping}</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <span className="text-base font-bold text-gray-900">Order Total</span>
                  <span className="text-xl font-bold text-gray-900">৳{total}</span>
                </div>
              </div>

              <Link 
                to="/checkout"
                className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-full font-bold flex items-center justify-center transition-all shadow-lg shadow-yellow-100"
              >
                PROCEED TO CHECKOUT
              </Link>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-400">
                  Secure Checkout with 100% Data Protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
