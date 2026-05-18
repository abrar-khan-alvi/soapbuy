import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#f0f3f4] pt-16 pb-8 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Contact */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="Global Nest Logo" className="h-12 w-auto" />
          </div>
          <h4 className="font-bold text-lg mb-4 text-black">Contact</h4>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Level 4, Mirpur DOHS Cultural Centre,<br />
            Road No-09, Mirpur DOHS, Pallabi, Dhaka-1216
          </p>
          <button className="flex items-center space-x-2 text-green-600 bg-white px-4 py-2 rounded-full border border-green-200 text-sm font-medium hover:bg-green-50">
            <span className="text-lg">✆</span>
            <span>09613 100 101</span>
          </button>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-black">About Us</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-black">About Global Nest</Link></li>
            <li><a href="#" className="hover:text-black">Contact Us</a></li>
            <li><a href="#" className="hover:text-black">Career</a></li>
            <li><a href="#" className="hover:text-black">News & Events</a></li>
            <li><a href="#" className="hover:text-black">Branches</a></li>
            <li><a href="#" className="hover:text-black">FAQ</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-black">DermaScan</a></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-black">Become a Distributor</h4>
          <ul className="space-y-3 text-sm text-gray-500 mb-8">
            <li><a href="#" className="hover:text-black">International</a></li>
            <li><a href="#" className="hover:text-black">Local</a></li>
            <li><a href="#" className="hover:text-black">Franchise</a></li>
            <li><a href="#" className="hover:text-black">Gift Voucher 250tk</a></li>
            <li><a href="#" className="hover:text-black">Corporate Privileges</a></li>
          </ul>

          <h4 className="font-bold text-lg mb-4 text-black">My Account</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><Link to="/login" className="hover:text-black">Login</Link></li>
            <li><a href="#" className="hover:text-black">Order History</a></li>
            <li><a href="#" className="hover:text-black">My wishlist</a></li>
            <li><Link to="/track-order" className="hover:text-black">Track Order</Link></li>
          </ul>
        </div>

        {/* Apps & Updates */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-black">Download Global Nest App Now!</h4>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#" className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2">
              <span className="text-xl">▶</span>
              <div className="text-left">
                <p className="text-[10px] leading-none text-gray-300">GET IT ON</p>
                <p className="text-sm font-semibold leading-none">Google Play</p>
              </div>
            </a>
            <a href="#" className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2">
              <span className="text-xl"></span>
              <div className="text-left">
                <p className="text-[10px] leading-none text-gray-300">Download on the</p>
                <p className="text-sm font-semibold leading-none">App Store</p>
              </div>
            </a>
          </div>

          <h4 className="font-bold text-lg mb-4 text-black">Get Updates!</h4>
          <p className="text-sm text-gray-500 mb-4">
            Enter your email below to be the first to know about new collections and product launches!
          </p>
          {isSubscribed ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-md text-sm font-medium animate-in zoom-in duration-300">
              ✓ Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex bg-white rounded-md overflow-hidden border border-gray-200">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 flex-1 text-sm outline-none w-full"
              />
              <button type="submit" className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>


      <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-200">
        Copyright 2026 © Global Nest Organic Soaps.
      </div>
    </footer>
  );
}
