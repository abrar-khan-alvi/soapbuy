import { useState } from 'react';
import { Package, Search, Truck, CheckCircle2, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [trackingData, setTrackingData] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) return;

    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      if (orderId.toUpperCase() === 'PB-9942') {
        setTrackingData({
          id: 'PB-9942',
          status: 'In Transit',
          lastUpdate: '2 hours ago',
          location: 'Dhaka Distribution Center',
          estimatedDelivery: 'May 20, 2026',
          steps: [
            { title: 'Order Placed', time: 'May 18, 04:02 AM', completed: true },
            { title: 'Processing', time: 'May 18, 10:30 AM', completed: true },
            { title: 'Shipped', time: 'May 19, 08:15 AM', completed: true },
            { title: 'In Transit', time: 'May 19, 02:00 PM', completed: false, current: true },
            { title: 'Delivered', time: 'Pending', completed: false }
          ]
        });
      } else {
        setTrackingData('not_found');
      }
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Track Your Order</h1>
          <p className="text-gray-500">Enter your order ID to see the real-time status of your Global Nest shipment.</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-gray-100 border border-gray-100 mb-8">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Package className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Ex: PB-9942"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-yellow-500 transition-all font-mono uppercase"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-yellow-100 disabled:opacity-70"
            >
              {isSearching ? 'SEARCHING...' : (
                <>
                  <Search size={20} />
                  TRACK ORDER
                </>
              )}
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-400 text-center">Your order ID can be found in your confirmation email.</p>
        </div>

        {/* Results */}
        {trackingData === 'not_found' && (
          <div className="bg-red-50 border border-red-100 p-6 rounded-3xl text-center animate-in fade-in zoom-in duration-300">
            <p className="text-red-600 font-medium">Order ID not found. Please check and try again.</p>
          </div>
        )}

        {trackingData && trackingData !== 'not_found' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
            {/* Status Card */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-pink-500 p-6 text-white flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-80">Order Status</p>
                  <h2 className="text-2xl font-serif font-bold">{trackingData.status}</h2>
                </div>
                <Truck size={40} className="opacity-50" />
              </div>
              
              <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Estimated Delivery</p>
                    <p className="text-lg font-bold text-gray-900">{trackingData.estimatedDelivery}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Current Location</p>
                    <p className="text-lg font-bold text-gray-900">{trackingData.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="font-serif text-xl font-bold mb-8">Shipping Journey</h3>
              <div className="relative space-y-8">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gray-100"></div>

                {trackingData.steps.map((step: any, idx: number) => (
                  <div key={idx} className="relative flex items-start gap-6">
                    <div className={`z-10 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${step.completed ? 'bg-green-500 text-white' : step.current ? 'bg-blue-500 text-white animate-pulse' : 'bg-gray-200 text-gray-400'}`}>
                      {step.completed ? <CheckCircle2 size={16} /> : <div className="w-2 h-2 bg-current rounded-full" />}
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className={`font-bold ${step.current ? 'text-blue-600' : 'text-gray-900'}`}>{step.title}</h4>
                        <span className="text-xs font-medium text-gray-400">{step.time}</span>
                      </div>
                      {step.current && <p className="text-xs text-blue-500 font-medium">Coming to you soon via Express Delivery</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Link */}
            <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm font-bold text-yellow-800">Need help with your order?</p>
                <p className="text-xs text-yellow-600">Our customer support is available 24/7</p>
              </div>
              <button className="flex items-center gap-2 text-yellow-800 font-bold text-sm bg-white px-4 py-2 rounded-xl shadow-sm hover:shadow-md transition-all">
                Contact Support <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
