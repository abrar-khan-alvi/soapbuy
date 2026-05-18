/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import CategoryPage from './components/CategoryPage';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Auth from './components/Auth';
import Checkout from './components/Checkout';
import TrackOrder from './components/TrackOrder';

import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/track-order" element={<TrackOrder />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}
