import React, { useState, useEffect } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export function HomeSections() {
  return (
    <div className="w-full">
      <Hero />
      <MediaLogos />
      <ShopByCategory />
      <FeaturedProducts />
      <PersonalizedTreatments />
      <Features />
      <Collections />
      <CurrentOffer />
      <StoreInfo />
      <UniverseSection />
    </div>
  );
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bg: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=2000',
      title: 'Awarded for Innovation.\nRecognized for Excellence.',
      badge1: 'Best Soap\nBrand in Bangladesh\n2026',
      badge2: 'Most Innovative\nSoap Brand\n2025'
    },
    {
      bg: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=2000',
      title: 'Pure Organic Ingredients.\nHandcrafted With Care.',
      badge1: '100% Natural\nIngredients\nCertified',
      badge2: 'Eco Friendly\nPackaging\n2025'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] bg-[#f8f5f0] overflow-hidden flex items-center group">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div className="absolute inset-0 z-0">
            <img 
              src={slide.bg} 
              className="w-full h-full object-cover opacity-60"
              alt="Soap Background"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center w-full">
            <div className="max-w-3xl transition-all duration-1000 transform" style={{ transform: index === currentSlide ? 'translateY(0)' : 'translateY(20px)' }}>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl text-gray-900 leading-tight mb-6 md:mb-8 whitespace-pre-line">
                {slide.title}
              </h1>
              
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-16 mt-8 md:mt-12">
                <div className="text-center relative p-4">
                  <div className="absolute -inset-2 sm:-inset-4 border border-dashed border-gray-400 rounded-full opacity-50 animate-[spin_20s_linear_infinite]"></div>
                  <p className="font-serif whitespace-pre-line text-xs sm:text-sm md:text-base">{slide.badge1}</p>
                </div>
                <div className="text-center relative p-4">
                   <div className="absolute -inset-2 sm:-inset-4 border border-dashed border-gray-400 rounded-full opacity-50 animate-[spin_20s_linear_infinite_reverse]"></div>
                  <p className="font-serif whitespace-pre-line text-xs sm:text-sm md:text-base">{slide.badge2}</p>
                </div>
              </div>

              <div className="mt-10 md:mt-16 flex flex-col sm:flex-row justify-center gap-4 px-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-bold transition-colors w-full sm:w-auto">Shop Now</button>
                <button className="bg-white/80 hover:bg-white text-gray-900 px-8 py-3 rounded-full font-bold transition-colors border border-gray-200 w-full sm:w-auto">Our Story</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Controls */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/50 hover:bg-white rounded-full flex items-center justify-center text-gray-800 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/50 hover:bg-white rounded-full flex items-center justify-center text-gray-800 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? 'bg-yellow-500' : 'bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </section>
  );
}

function MediaLogos() {
  const logos = ['BUSINESS INSIDER', 'yahoo! finance', 'AP', 'NBC', 'FOX NEWS', 'abc', 'IBT'];
  
  return (
    <section className="py-12 md:py-20 bg-white text-center">
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-12 text-gray-800 flex items-center justify-center gap-3 sm:gap-6 px-4">
        <span className="text-gray-300 transform scale-x-[-1] hidden sm:inline">🌿</span>
        As Seen on Leading Global Media
        <span className="text-gray-300 hidden sm:inline">🌿</span>
      </h2>
      
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 px-6">
        {logos.map((logo, i) => (
          <div key={i} className="text-base sm:text-xl md:text-2xl font-bold text-gray-800 opacity-60 hover:opacity-100 transition-opacity">
            {logo}
          </div>
        ))}
      </div>
      
      <p className="text-gray-400 mt-8 md:mt-12 text-sm md:text-lg font-serif italic px-6">
        PureBar recognized across 700+ global media outlets
      </p>
    </section>
  );
}

function ShopByCategory() {
  const categories = [
    { title: 'Bar Soaps', items: '13 items', color: 'bg-[#fff9df]', img: PRODUCTS[0].img },
    { title: 'Liquid Soaps', items: '50 items', color: 'bg-[#f0f9ff]', img: PRODUCTS[4].img },
    { title: 'Bath Bombs', items: '19 items', color: 'bg-[#fdf2f8]', img: PRODUCTS[6].img },
    { title: 'Gift Sets', items: '13 items', color: 'bg-[#f0fdf4]', img: PRODUCTS[7].img },
    { title: 'Hand Soaps', items: '24 items', color: 'bg-[#fef2f2]', img: 'https://images.unsplash.com/photo-1556228578-0d8566270cd1?auto=format&fit=crop&q=80&w=400' },
    { title: 'Body Wash', items: '32 items', color: 'bg-[#fff7ed]', img: 'https://images.unsplash.com/photo-1601612776361-124b8f5a6534?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Shop By Category</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Discover our handcrafted collections categorized for your specific skin needs and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <Link key={i} to={`/category/${cat.title.toLowerCase().replace(/\s+/g, '-')}`} className="group cursor-pointer">
              <div className={`relative aspect-square rounded-3xl ${cat.color} p-4 md:p-6 mb-4 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-gray-200 group-hover:-translate-y-2 flex flex-col items-center justify-center`}>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/40 to-transparent"></div>
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3" 
                />
                
                {/* View collection link appearing on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] md:text-xs font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    VIEW COLLECTION
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg md:text-xl text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">{cat.title}</h3>
                <p className="text-xs md:text-sm text-gray-400 font-medium tracking-wide uppercase">{cat.items}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Mobile scroll hint indicator (only visible on mobile if needed, but grid is better) */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-yellow-600 transition-colors group">
            BROWSE ALL CATEGORIES
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  const tabs = ['All', 'Lavender', 'Citrus', 'Oatmeal', 'Rose', 'Mint', 'Unscented', 'Charcoal', 'Eucalyptus'];
  const { addToCart } = useCart();
  
  // Use first 8 products for featured
  const products = PRODUCTS.slice(0, 8);

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-10">Featured Products</h2>
        
        {/* Tabs - Horizontal Scroll on Mobile */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-4 hide-scrollbar sm:justify-center">
          {tabs.map((tab, i) => (
            <button key={i} className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium border whitespace-nowrap transition-colors ${i === 0 ? 'bg-pink-500 text-white border-pink-500' : 'bg-transparent text-gray-600 border-gray-200 hover:border-gray-400'}`}>
              {tab}
            </button>
          ))}
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, i) => (
            <div key={p.id} className="group flex flex-col relative bg-white border border-gray-50 rounded-2xl p-3 sm:p-0">
              <Link to={`/product/${p.id}`} className="absolute inset-0 z-0"></Link>
              <div className="bg-[#f9f9f9] rounded-2xl p-4 sm:p-6 aspect-square relative mb-4 flex items-center justify-center z-10 pointer-events-none">
                {p.discount && <div className="absolute top-4 left-4 bg-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">{p.discount}</div>}
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-1 flex flex-col px-2 sm:px-4 pb-4 relative z-10">
                <div className="flex items-center gap-2 mb-1.5 pointer-events-none">
                  {p.oldPrice && <span className="text-gray-400 line-through text-xs sm:text-sm">৳{p.oldPrice}</span>}
                  <span className="text-pink-500 font-bold text-base sm:text-lg">৳{p.price}</span>
                </div>
                <h3 className="font-medium text-gray-800 text-sm leading-tight line-clamp-2 mb-3 pointer-events-none">{p.title}</h3>
                
                <div className="flex items-center justify-between mt-auto gap-2">
                  <button 
                    onClick={() => addToCart(p)}
                    className="flex-1 bg-yellow-100 text-yellow-800 font-bold text-xs px-4 py-2.5 rounded-lg hover:bg-yellow-500 hover:text-white transition-all relative z-20"
                  >
                    ADD TO CART
                  </button>
                  <button className="p-2.5 border border-gray-100 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all relative z-20">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/category/all" className="px-8 py-2.5 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 inline-block">See All</Link>
        </div>
      </div>
    </section>
  );
}

function PersonalizedTreatments() {
  const { addToCart } = useCart();
  
  // Use products from Gift Sets category
  const deployments = PRODUCTS.filter(p => p.category === 'Gift Sets');

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Spa Soap Sets</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {deployments.map((t) => (
            <div key={t.id} className="group p-4 rounded-2xl bg-[#fcfcfc] border border-gray-100 hover:shadow-lg transition-all duration-300 relative flex flex-col">
              <Link to={`/product/${t.id}`} className="absolute inset-0 z-0"></Link>
              <div className="rounded-xl overflow-hidden mb-4 aspect-[4/3] relative z-10 pointer-events-none">
                <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-medium text-gray-800 text-sm h-10 mb-2 relative z-10 pointer-events-none">{t.title}</h3>
              <div className="text-pink-500 font-medium mb-3 relative z-10 pointer-events-none">৳{t.price}</div>
              <div className="flex items-center justify-between mb-4 relative z-10 pointer-events-none">
                <div className="flex text-yellow-400">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
                <span className="text-xs text-gray-400">{t.reviews} Reviews</span>
              </div>
              <div className="flex flex-col gap-2 relative z-10 mt-auto">
                <button 
                  onClick={() => addToCart(t)}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-xs py-2.5 rounded-full shadow-md transition-all relative z-20"
                >
                  ADD TO CART
                </button>
                <div className="flex gap-2">
                  <Link to={`/product/${t.id}`} className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full text-[10px] font-bold hover:bg-gray-50 flex-1 justify-center relative z-20 uppercase tracking-widest text-gray-500">
                    Details <ArrowUpRight size={14} />
                  </Link>
                  <button className="p-2 border border-gray-200 rounded-full text-gray-400 hover:text-red-500 hover:border-red-200 transition-colors relative z-20">
                    <Heart size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { title: 'Personalized', desc: 'Tailored skincare treatments based on individual needs.', icon: '👩🏻‍🦰' },
    { title: 'Functional', desc: 'Solutions designed to deliver visible and lasting results.', icon: '🧬' },
    { title: 'Safe', desc: 'All products and services are rigorously tested for safety.', icon: '🧪' },
    { title: 'Effective', desc: 'Proven results through advanced technology and expertise', icon: '✨' },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl mb-16">Personalization in Action</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center max-w-xs mx-auto">
              <div className="text-6xl mb-6 opacity-80">{f.icon}</div>
              <h3 className="font-serif text-xl mb-3">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Collections() {
  const { addToCart } = useCart();
  
  // Pick some interesting products for collections
  const collections = [
    { title: 'Best of Bar Soaps', tag: 'New Collection', bg: 'bg-pink-500', products: PRODUCTS.filter(p => p.category === 'Bar Soaps').slice(0, 3) },
    { title: 'Liquid Luxury', tag: 'Best Seller', bg: 'bg-pink-500', products: PRODUCTS.filter(p => p.category === 'Liquid Soaps').slice(0, 3) },
    { title: 'Bath Rituals', tag: 'Daily Use', bg: 'bg-pink-500', products: PRODUCTS.filter(p => p.category === 'Bath Bombs').slice(0, 3) },
  ];

  // For visual simplicity, let's just stick to the original map but use real product IDs
  const displayCollections = [
    { ...PRODUCTS[3], tag: 'New Collection', bg: 'bg-pink-500' }, // Oatmeal
    { ...PRODUCTS[2], tag: 'Best Seller', bg: 'bg-pink-500' },   // Charcoal
    { ...PRODUCTS[0], tag: 'Daily Use', bg: 'bg-pink-500' },     // Lavender
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex gap-6 overflow-x-auto hide-scrollbar snap-x pb-8">
            {displayCollections.map((c) => (
              <div key={c.id} className="min-w-[300px] md:min-w-[380px] flex-shrink-0 snap-center">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-6 group cursor-pointer shadow-sm">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <Link to={`/product/${c.id}`} className="absolute inset-0 z-10" />
                  <div className={`absolute top-6 right-6 ${c.bg} text-white text-[10px] font-bold px-3 py-1 rounded-full z-20`}>
                    {c.tag}
                  </div>
                  
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(c);
                      }}
                      className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold shadow-2xl hover:bg-yellow-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
                    >
                      QUICK ADD TO CART
                    </button>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold h-12 mb-4 group-hover:text-pink-500 transition-colors uppercase tracking-tight">{c.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900 font-serif">৳{c.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2.5 border border-gray-100 rounded-full text-gray-400 hover:text-pink-500 hover:bg-pink-50 transition-all">
                      <Heart size={20} />
                    </button>
                    <Link to={`/product/${c.id}`} className="p-2.5 border border-gray-100 rounded-full text-gray-400 hover:text-yellow-600 hover:bg-yellow-50 transition-all">
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight size={24} />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          {[1,2,3,4,5,6,7].map(n => <div key={n} className="w-2 h-2 rounded-full bg-gray-200"></div>)}
        </div>
      </div>
    </section>
  );
}

function CurrentOffer() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-8 md:mb-12">Current Offers</h2>
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-[#fbf9f4] relative min-h-[300px] md:min-h-[400px] flex items-center group">
          <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1516062423079-f0521ce84457?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-5 md:opacity-10 group-hover:scale-105 transition-transform duration-1000" alt="Pattern" />
          </div>
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center p-6 sm:p-12 gap-8 md:gap-24">
            <div className="text-center md:text-left">
              <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">LIMITED TIME EVENT</span>
              <h3 className="font-serif text-[#d32f2f] text-4xl sm:text-6xl md:text-8xl font-black mb-4 drop-shadow-sm leading-tight">ঈদ ধামাকা</h3>
              <p className="text-xl sm:text-3xl md:text-5xl font-extrabold text-gray-800 flex items-center justify-center md:justify-start gap-4">
                ৭০% ছাড় <span className="text-sm font-normal text-gray-400 line-through">৳২০০০</span>
              </p>
              <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all shadow-lg w-full md:w-auto">
                CLAIM OFFER
              </button>
            </div>
            <div className="flex gap-4 md:gap-8 relative">
               <div className="bg-white p-2 rounded-2xl shadow-xl rotate-[-8deg] transform hover:rotate-0 transition-transform duration-500 w-32 sm:w-40 md:w-48 lg:w-56">
                 <img src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=400" className="w-full aspect-[3/4] object-cover rounded-xl" alt="Offer 1" />
                 <div className="mt-2 text-center text-[10px] font-bold text-red-500 uppercase">Save 70%</div>
               </div>
               <div className="bg-white p-2 rounded-2xl shadow-xl rotate-[8deg] transform hover:rotate-0 transition-transform duration-500 w-32 sm:w-40 md:w-48 lg:w-56 mt-6 md:mt-12">
                 <img src="https://images.unsplash.com/photo-1611078440078-d56ee2864115?auto=format&fit=crop&q=80&w=400" className="w-full aspect-[3/4] object-cover rounded-xl" alt="Offer 2" />
                 <div className="mt-2 text-center text-[10px] font-bold text-red-500 uppercase">Flash Sale</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreInfo() {
  const infos = [
    { title: 'Free Delivery', desc: 'Free Delivery for orders over BDT 5000.', icon: '📦' },
    { title: '24/7 Online Support', desc: '24 hours a day, 7 days a week.', icon: '📞' },
    { title: 'Flexible Payment', desc: 'Multiple Credit/Debit Card & Mobile Banking Options.', icon: '💳' },
  ];
  const stats = [
    { value: '500000+', label: 'Customers' },
    { value: '20', label: 'Branches' },
    { value: '83%', label: 'Women' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-24">
          {infos.map((info, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-5xl mb-6">{info.icon}</div>
              <h3 className="font-serif text-2xl mb-3">{info.title}</h3>
              <p className="text-gray-500 text-sm">{info.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center pt-16 border-t border-gray-100">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="font-serif text-5xl md:text-6xl text-gray-500 mb-4">{stat.value}</div>
              <p className="text-gray-500 text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UniverseSection() {
  const steps = [
    { title: 'Near You, For You', desc: 'Explore our 20+ branches across Bangladesh—your soap journey starts close to home.', btn: 'Explore Branches', img: 'https://images.unsplash.com/photo-1556228578-0d8566270cd1?auto=format&fit=crop&q=80&w=600' },
    { title: 'Moments That Inspire', desc: 'Celebrate milestones, campaigns and the journey of impact with PureBar Soap.', btn: 'News & Events', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600' },
    { title: 'Glow With Knowledge', desc: 'Discover expert cleansing tips, myths and seasonal guides tailored to you.', btn: 'Read Our Blog', img: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&q=80&w=600' },
    { title: 'Grow With Purpose', desc: 'Join a women-led revolution in organic soaps, innovation and leadership.', btn: 'Career', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="py-20 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl mb-4">Step Into the PureBar Universe</h2>
        <p className="text-gray-500 mb-16">Explore how we empower beauty, elevate careers and build trust across Bangladesh</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <h3 className="font-medium text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed flex-1">{step.desc}</p>
              <button className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                {step.btn} <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSections;
