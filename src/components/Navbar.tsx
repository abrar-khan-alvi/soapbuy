import { Facebook, Instagram, Youtube, Twitter, Search, User, ShoppingBag, Globe, ChevronDown, Menu, X, Package } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/category/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const categories = [
    { title: 'Bar Soaps', items: ['Brightening', 'Exfoliating', 'Anti Aging', 'Hair Care', 'Dry Skin', 'Eczema Relief', 'Sensitive Skin', 'Deep Cleansing', 'Acne Care'] },
    { title: 'Liquid Soaps', items: ['Hand Soaps', 'Body Wash', 'Face Cleansers', 'Foaming Soaps', 'Refills'] },
    { title: 'Bath Bombs', items: ['Floral', 'Citrus', 'Relaxing', 'Energizing', 'Kids Collection'] },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Header - Hidden on mobile */}
      <div className="hidden md:block border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-blue-600 hover:opacity-80"><Facebook size={16} /></a>
            <a href="#" className="text-pink-600 hover:opacity-80"><Instagram size={16} /></a>
            <a href="#" className="text-red-500 hover:opacity-80"><Youtube size={16} /></a>
            <a href="#" className="text-black hover:opacity-80"><Twitter size={16} /></a>
          </div>

          <div className="flex items-center space-x-6 text-[13px] font-medium text-gray-600">
            <Link to="/track-order" className="hover:text-yellow-600 transition-colors">Track Order</Link>
            <a href="#" className="hover:text-yellow-600 transition-colors">Branches</a>
            <a href="#" className="hover:text-yellow-600 transition-colors">Career</a>
            <a href="#" className="hover:text-yellow-600 transition-colors">Blog</a>
            <a href="#" className="hover:text-yellow-600 transition-colors">About Us</a>
            <Link to="/login" className="hover:text-yellow-600 transition-colors">Login</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-gray-700 hover:text-yellow-600 transition-colors p-2"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img src="/logo.png" alt="Global Nest Logo" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          {categories.slice(0, 2).map((cat, idx) => (
            <div key={idx} className="relative group/nav cursor-pointer py-2">
              <div className="flex items-center group-hover/nav:text-black">
                <span>{cat.title}</span>
                <ChevronDown size={14} className="ml-1 text-gray-400 group-hover/nav:text-black transition-transform group-hover/nav:rotate-180" />
              </div>
              <div className="absolute top-full left-0 right-0 h-0.5 bg-blue-500 scale-x-0 group-hover/nav:scale-x-100 transition-transform origin-left duration-300"></div>

              {/* Dropdown */}
              <div className="absolute top-[calc(100%+8px)] left-0 w-56 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 z-50 py-3 border border-gray-100">
                {cat.items.map((item, i) => (
                  <Link
                    key={i}
                    to={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-5 py-2.5 text-[13px] text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link to="/category/bath-bombs" className="hover:text-black border-b-2 border-transparent hover:border-blue-500 transition-all py-2">Bath Bombs</Link>
          <Link to="/category/gift-sets" className="hover:text-black border-b-2 border-transparent hover:border-blue-500 transition-all py-2">Gift Sets</Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-3 md:space-x-5">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="text-gray-700 hover:text-yellow-600 transition-colors p-1 hidden sm:block"
          >
            <Search size={20} />
          </button>
          <Link to="/login" className="text-gray-700 hover:text-yellow-600 transition-colors p-1">
            <User size={22} />
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-yellow-600 transition-colors p-1 relative">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white shadow-sm font-sans">
                {cartCount}
              </span>
            )}
          </Link>
          <button className="text-gray-700 hover:text-yellow-600 transition-colors p-1 hidden md:block">
            <Globe size={22} />
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[70] bg-white/95 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-300">
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-10 right-10 p-3 text-gray-400 hover:text-black transition-colors"
          >
            <X size={32} />
          </button>

          <div className="w-full max-w-2xl px-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                autoFocus
                type="text"
                placeholder="What are you looking for?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b-4 border-gray-100 text-3xl md:text-5xl font-serif py-6 focus:outline-none focus:border-yellow-400 transition-colors pr-16"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-yellow-600 transition-colors">
                <Search size={32} />
              </button>
            </form>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest w-full mb-2">Popular Searches</span>
              {['Lavender', 'Glow', 'Brightening', 'Bar Soaps', 'Gift Sets'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearchQuery(tag);
                    navigate(`/category/search?q=${tag}`);
                    setIsSearchOpen(false);
                  }}
                  className="px-5 py-2 bg-gray-50 hover:bg-yellow-50 text-gray-600 hover:text-yellow-700 rounded-full text-sm font-medium transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="absolute top-0 left-0 w-4/5 max-w-sm h-full bg-white shadow-2xl flex flex-col pt-20 px-6 animate-in slide-in-from-left duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col space-y-6">
              {categories.map((cat, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase">{cat.title}</h3>
                  <div className="flex flex-col space-y-3 pl-4 border-l border-gray-100">
                    {cat.items.slice(0, 4).map((item, i) => (
                      <Link
                        key={i}
                        to={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-700 hover:text-yellow-600 font-medium"
                      >
                        {item}
                      </Link>
                    ))}
                    <Link
                      to={`/category/${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-yellow-600 text-sm font-bold pt-1"
                    >
                      View All
                    </Link>
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-gray-100 space-y-4">
                <Link to="/track-order" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-gray-700 hover:text-yellow-600 font-medium">
                  <Package size={20} /> Track Your Order
                </Link>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-gray-700 hover:text-yellow-600 font-medium">
                  <User size={20} /> Login / Sign Up
                </Link>
                <div className="flex items-center gap-4 text-gray-400 pt-4">
                  <Facebook size={20} />
                  <Instagram size={20} />
                  <Youtube size={20} />
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
