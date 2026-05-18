import { useState, useEffect } from 'react';
import { Star, Heart, Search, LayoutGrid, List } from 'lucide-react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [priceRange, setPriceRange] = useState(5000);
  const [activeCategory, setActiveCategory] = useState(categorySlug?.replace('-', ' ') || 'All');
  const { addToCart } = useCart();

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setSearchQuery(q);
  }, [searchParams]);
  
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = p.price <= priceRange;
    const matchesCategory = activeCategory === 'All' || 
                          p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
                          activeCategory.toLowerCase().includes(p.category.toLowerCase());
    return matchesSearch && matchesPrice && matchesCategory;
  });

  const sortedProducts = [...filteredProducts]
    .sort((a, b) => {
      if (sortBy === 'price-low') return (a.price || 0) - (b.price || 0);
      if (sortBy === 'price-high') return (b.price || 0) - (a.price || 0);
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      return 0;
    });

  const categories = [
    { name: 'All', count: PRODUCTS.length },
    { name: 'Bar Soaps', count: PRODUCTS.filter(p => p.category === 'Bar Soaps').length },
    { name: 'Liquid Soaps', count: PRODUCTS.filter(p => p.category === 'Liquid Soaps').length },
    { name: 'Bath Bombs', count: PRODUCTS.filter(p => p.category === 'Bath Bombs').length },
    { name: 'Gift Sets', count: PRODUCTS.filter(p => p.category === 'Gift Sets').length },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb wrapper */}
      <div className="w-full bg-[#fafafa] border-b border-gray-100 py-4 mb-4 sm:mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-xs sm:text-sm">
          <Link to="/" className="text-gray-500 hover:text-black transition-colors uppercase tracking-widest text-[10px]">Home</Link>
          <span className="mx-3 text-gray-300">/</span>
          <span className="font-bold text-gray-900 uppercase tracking-widest text-[10px]">{activeCategory}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0 animate-in fade-in slide-in-from-left duration-500">
          <div className="bg-gray-50/50 rounded-3xl p-8 border border-gray-100 sticky top-32">
            <div className="mb-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-900 font-serif text-lg tracking-tight">Price Range</h3>
                <span className="text-pink-500 font-bold font-serif">৳{priceRange}</span>
              </div>
              <div className="px-1">
                <input 
                  type="range" 
                  min="0" 
                  max="5000" 
                  step="100"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500" 
                />
                <div className="flex justify-between mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                  <span>৳0</span>
                  <span>৳5000</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-6 font-serif text-lg tracking-tight">Categories</h3>
              <ul className="space-y-1">
                {categories.map((cat, i) => (
                  <li 
                    key={i} 
                    onClick={() => setActiveCategory(cat.name)}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer group ${activeCategory === cat.name ? 'bg-pink-50 text-pink-600 font-bold' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
                  >
                    <span className="text-sm tracking-tight">{cat.name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activeCategory === cat.name ? 'bg-pink-100' : 'bg-gray-100 text-gray-400'}`}>
                      {cat.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Top bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-6 pb-6 border-b border-gray-100">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-3">
                {activeCategory}
                <span className="text-sm font-sans font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-full">{sortedProducts.length} Results</span>
              </h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search in category..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500 w-full sm:w-64 transition-all"
                />
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
              </div>

              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-4 pr-10 py-2.5 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-pink-500 cursor-pointer font-medium text-gray-700"
              >
                <option value="newest">Latest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Best Rated</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom duration-700">
              {sortedProducts.map((p) => (
                <div key={p.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-pink-100/50 transition-all duration-500">
                  <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    {p.discount && (
                      <div className="absolute top-4 left-4 bg-pink-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full z-10 shadow-lg shadow-pink-500/20">
                        {p.discount}
                      </div>
                    )}
                    <Link to={`/product/${p.id}`} className="absolute inset-0 z-10" />
                    
                    {/* Hover actions */}
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                      {!p.soldOut && (
                        <button 
                          onClick={() => addToCart(p)}
                          className="flex-1 bg-white text-gray-900 py-2.5 rounded-xl text-xs font-bold hover:bg-yellow-500 hover:text-white transition-all text-center shadow-lg"
                        >
                          QUICK ADD
                        </button>
                      )}
                      <button className="p-2.5 bg-white text-gray-400 rounded-xl hover:text-pink-500 transition-colors shadow-lg">
                        <Heart size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest">{p.category}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-pink-500 transition-colors line-clamp-2 mb-4 leading-snug">{p.title}</h3>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-gray-900">৳{p.price}</span>
                        {p.oldPrice && (
                          <span className="text-sm text-gray-400 line-through">৳{p.oldPrice}</span>
                        )}
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} fill={i < p.rating ? "currentColor" : "none"} className={i >= p.rating ? "text-gray-200" : ""} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center flex flex-col items-center animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <Search size={40} className="text-gray-200" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 max-w-xs mx-auto">Try adjusting your filters or search terms to find what you're looking for.</p>
              <button 
                onClick={() => {
                  setActiveCategory('All');
                  setPriceRange(5000);
                  setSearchQuery('');
                }}
                className="mt-8 text-pink-500 font-bold border-b-2 border-pink-500 pb-1 hover:text-pink-600 hover:border-pink-600 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
