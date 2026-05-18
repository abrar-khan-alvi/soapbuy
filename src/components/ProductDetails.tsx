import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingBag, ShieldCheck, Truck, RefreshCcw, ChevronLeft, ChevronRight, Plus, Minus, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export default function ProductDetails() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { addToCart } = useCart();

  const product = useMemo(() => {
    return PRODUCTS.find(p => p.id.toString() === productId?.toString()) || PRODUCTS[0];
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <AlertCircle size={64} className="text-gray-300 mb-4" />
        <h1 className="text-2xl font-serif font-bold mb-4">Product Not Found</h1>
        <Link to="/category/all" className="bg-yellow-500 text-white px-8 py-3 rounded-full font-bold">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-sm">
          <Link to="/" className="text-gray-500 hover:text-black">Home</Link>
          <span className="mx-2 text-gray-300">/</span>
          <Link to="/category/bar-soaps" className="text-gray-500 hover:text-black">{product.category}</Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="font-medium text-gray-900">{product.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 items-start">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/5] w-full bg-gray-50 rounded-2xl md:rounded-3xl overflow-hidden relative group">
              <img src={product.images[activeImg]} alt={product.title} className="w-full h-full object-cover" />
              <button 
                onClick={() => setActiveImg((prev) => (prev - 1 + product.images.length) % product.images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setActiveImg((prev) => (prev + 1) % product.images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {product.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-square bg-gray-50 rounded-xl overflow-hidden border-2 transition-all ${activeImg === i ? 'border-yellow-400 scale-95' : 'border-transparent hover:border-gray-200'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="mt-8 lg:mt-0">
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">{product.title}</h1>
              
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < 4.8 ? "currentColor" : "none"} className={i >= 4.8 ? "text-gray-200" : ""} />
                  ))}
                </div>
                <p className="text-sm text-gray-500 font-medium">{product.reviews} verified reviews</p>
                <div className="flex items-center text-[10px] sm:text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">
                  <ShieldCheck size={14} className="mr-1" />
                  IN STOCK
                </div>
              </div>

              <div className="mt-8 flex items-baseline gap-4">
                <span className="text-3xl md:text-4xl font-bold text-pink-500 font-serif">৳{product.price}</span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-400 line-through">৳{product.oldPrice}</span>
                )}
                <span className="hidden sm:inline-block bg-pink-50 text-pink-500 text-[10px] font-bold px-2 py-1 rounded tracking-wider">SAVE 50%</span>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-3">The Ritual</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{product.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <span className="text-yellow-500 mt-1 font-bold">✓</span>
                    <span className="text-sm text-gray-700 font-medium italic">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-6 border border-gray-100 rounded-3xl bg-white shadow-sm">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded-full bg-white px-2 py-1.5 w-full sm:w-auto justify-between sm:justify-start">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:text-yellow-500 transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-2 hover:text-yellow-500 transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>

                <button 
                  onClick={() => addToCart({ ...product, quantity })}
                  className="w-full sm:flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-yellow-100 uppercase tracking-widest text-sm"
                >
                  <ShoppingBag size={20} />
                  Add to Cart
                </button>
                
                <button className="hidden sm:flex p-4 border border-gray-200 rounded-full text-gray-400 hover:text-pink-500 hover:bg-pink-50 hover:border-pink-200 transition-all">
                  <Heart size={24} />
                </button>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center text-center">
                <Truck size={20} className="mb-2 text-gray-400" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">Express delivery</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center text-center">
                <RefreshCcw size={20} className="mb-2 text-gray-400" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">30-day returns</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center text-center col-span-2 sm:col-span-1">
                <ShieldCheck size={20} className="mb-2 text-gray-400" />
                <span className="text-[10px] font-bold text-gray-800 uppercase">Secure check-out</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="mt-24 border-t border-gray-100 pt-16">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-serif font-bold mb-6">Key Ingredients</h2>
              <div className="aspect-square rounded-3xl bg-gray-100 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Lavendar" />
              </div>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-8 italic">
                "{product.ingredients}"
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Lavender Oil</h4>
                  <p className="text-sm text-gray-500">Known for soothing properties and calming fragrance.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Shea Butter</h4>
                  <p className="text-sm text-gray-500">Rich in vitamins and fatty acids for deep skin nourishment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
