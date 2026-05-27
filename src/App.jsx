import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VendorRegistration from './pages/VendorRegistration';
import UserRegistration from './pages/UserRegistration';
import Login from './pages/Login';
import VendorDashboard from './pages/VendorDashboard';
import VendorInventory from './pages/VendorInventory';
import VendorListings from './pages/VendorListings';
import VendorAnalytics from './pages/VendorAnalytics';
import VendorMessages from './pages/VendorMessages';
import ItemDetails from './pages/ItemDetails';
import FindFood from './pages/FindFood';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface font-body text-on-surface select-none overflow-x-hidden">
        {/* Top Navigation */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<VendorRegistration />} />
          <Route path="/signup" element={<UserRegistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vendor/dashboard" element={<VendorDashboard />} />
          <Route path="/vendor/inventory" element={<VendorInventory />} />
          <Route path="/vendor/listings" element={<VendorListings />} />
          <Route path="/vendor/analytics" element={<VendorAnalytics />} />
          <Route path="/vendor/messages" element={<VendorMessages />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          <Route path="/find-food" element={<FindFood />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
