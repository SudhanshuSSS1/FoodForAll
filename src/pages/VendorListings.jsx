import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function VendorListings() {
  const [listings, setListings] = useState([]);
  const { authFetch, user } = useAuth();

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const res = await authFetch('/vendor/listings');
      if (res.ok) setListings(await res.json());
    } catch (err) {
      console.error(err);
    }
  };

  const activeCount = listings.filter(l => l.status === 'active').length;
  const claimedCount = listings.filter(l => l.status === 'claimed').length;
  const expiredCount = listings.filter(l => l.status === 'expired').length;

  return (
    <div className="bg-surface text-on-surface min-h-screen font-body pt-16">
      {/* SideNavBar Anchor */}
      <aside className="hidden md:flex flex-col h-[calc(100vh-64px)] w-64 fixed left-0 top-16 bg-surface-container shadow-md p-6 space-y-2 z-40 border-r border-outline-variant/30">
        <div className="flex items-center space-x-3 p-3 mb-12">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden shrink-0">
            <img 
              alt="Vendor Profile" 
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBv0x1LbNvQagcyPehvn07wIA1CN-tWiFmDzRSsdENduD20xArhhA_gauUkgPrC3f54nwV2L6OjGBhV6lLMI-7-VxlduoKmHRsEL_VuYnbNEINfh-cYbt2CL6Qk2a4CZBuPKl4MU7PmCliGifLbceyilN6LSUNnd2WomQRh4H4zJhEdI_dF_XVlfpD4ZfLqisN7584I_Q0vfeMcF6EN8I1WGeryVij10fZu9nGMsxDofNVXZ7_s7RAOQFhDQ11Y2R_O171HKrUvtp" 
            />
          </div>
          <div>
            <p className="font-label-md text-[14px] font-semibold text-on-surface">{user?.shopName || 'Green Grocers'}</p>
            <p className="text-[10px] uppercase tracking-wider text-primary font-bold">Verified Vendor</p>
          </div>
        </div>
        
        <nav className="flex-1 space-y-1">
          <Link className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant rounded-xl transition-colors" to="/vendor/dashboard">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </Link>
          <Link className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant rounded-xl transition-colors" to="/vendor/inventory">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-label-md text-label-md">Inventory</span>
          </Link>
          {/* Active State: Listings */}
          <Link className="flex items-center space-x-3 px-3 py-2 bg-primary-container text-on-primary-container rounded-xl scale-[0.98] transition-all font-bold" to="/vendor/listings">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>fastfood</span>
            <span className="font-label-md text-label-md">Listings</span>
          </Link>
          <Link className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant rounded-xl transition-colors" to="/vendor/analytics">
            <span className="material-symbols-outlined">leaderboard</span>
            <span className="font-label-md text-label-md">Analytics</span>
          </Link>
          <Link className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant rounded-xl transition-colors" to="/vendor/messages">
            <span className="material-symbols-outlined">mail</span>
            <span className="font-label-md text-label-md">Messages</span>
          </Link>
        </nav>
        
        <button className="w-full py-3 bg-primary text-on-primary-container font-label-md text-label-md rounded-full font-bold active:scale-95 transition-transform hover:brightness-110">
          Post New Item
        </button>
      </aside>

      {/* Main Content Canvas */}
      <main className="md:ml-64 p-6 max-w-7xl mx-auto min-h-screen">
        {/* Header Section */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-headline-lg text-[32px] font-bold text-primary mb-2">Manage Listings</h2>
            <p className="font-body-md text-[16px] text-on-surface-variant max-w-2xl mt-1">
              Overview of your surplus food contributions. Keep your inventory fresh to ensure timely rescue and maximize community impact.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-surface-container p-1 rounded-full flex gap-1">
              <button className="bg-primary text-on-primary font-bold px-6 py-2 rounded-full shadow-sm transition-all">Listings</button>
              <button className="text-on-surface-variant hover:text-on-surface font-bold px-6 py-2 rounded-full transition-all">History</button>
            </div>
          </div>
        </header>

        {/* Stats Overview Bento (Briefly) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface-container/60 backdrop-blur-md border border-outline/20 p-6 rounded-3xl border-l-4 border-l-primary hover:bg-surface-container transition-colors">
            <p className="font-label-md text-[14px] text-on-surface-variant">Active Rescues</p>
            <p className="font-headline-md text-[24px] font-bold text-primary mt-2">{activeCount} Items</p>
          </div>
          <div className="bg-surface-container/60 backdrop-blur-md border border-outline/20 p-6 rounded-3xl border-l-4 border-l-tertiary hover:bg-surface-container transition-colors">
            <p className="font-label-md text-[14px] text-on-surface-variant">Claimed Total</p>
            <p className="font-headline-md text-[24px] font-bold text-tertiary mt-2">{claimedCount} Items</p>
          </div>
          <div className="bg-surface-container/60 backdrop-blur-md border border-outline/20 p-6 rounded-3xl border-l-4 border-l-secondary hover:bg-surface-container transition-colors">
            <p className="font-label-md text-[14px] text-on-surface-variant">Total Listings</p>
            <p className="font-headline-md text-[24px] font-bold text-secondary mt-2">{listings.length}</p>
          </div>
          <div className="bg-surface-container/60 backdrop-blur-md border border-outline/20 p-6 rounded-3xl border-l-4 border-l-error hover:bg-surface-container transition-colors">
            <p className="font-label-md text-[14px] text-on-surface-variant">Expired</p>
            <p className="font-headline-md text-[24px] font-bold text-error mt-2">{expiredCount} Items</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-outline-variant mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide gap-2">
          <button className="px-6 py-3 font-bold text-[14px] text-primary border-b-2 border-primary active:scale-95 transition-all">All ({listings.length})</button>
          <button className="px-6 py-3 font-bold text-[14px] text-on-surface-variant hover:text-on-surface transition-all">Active ({activeCount})</button>
          <button className="px-6 py-3 font-bold text-[14px] text-on-surface-variant hover:text-on-surface transition-all">Claimed ({claimedCount})</button>
        </div>

        {/* Listings Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map(listing => (
            <div key={listing.id} className="bg-surface-container/60 backdrop-blur-md border border-outline/20 rounded-3xl overflow-hidden flex flex-col hover:border-primary/40 transition-all group">
              <div className="relative h-48 overflow-hidden bg-surface-variant flex items-center justify-center">
                {listing.imageUrl ? (
                  <img alt={listing.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={listing.imageUrl} />
                ) : (
                  <span className="material-symbols-outlined text-[48px] text-primary/30">fastfood</span>
                )}
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[12px] font-bold flex items-center gap-1 shadow-md ${listing.status === 'active' ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high text-on-surface-variant'}`}>
                  <span className="material-symbols-outlined text-[14px]">info</span>
                  <span className="capitalize">{listing.status}</span>
                </div>
                <div className="absolute bottom-3 left-3 bg-primary/90 text-on-primary-container px-3 py-1 rounded-full text-[12px] font-bold backdrop-blur-md shadow-md capitalize">
                  {listing.inventoryItem?.category || 'General'}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline-md text-[20px] font-bold text-primary">{listing.title}</h3>
                  <span className="text-tertiary-fixed font-bold text-[20px]">{listing.price === 0 ? 'Free' : `$${listing.price}`}</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant font-label-md text-[14px] mb-6 flex-grow">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">inventory</span>
                    {listing.inventoryItem?.quantity || 1} Units
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                    {new Date(listing.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-surface-variant text-on-surface py-2 rounded-full font-bold hover:bg-outline-variant transition-colors flex items-center justify-center gap-1 cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                    Edit
                  </button>
                  <button className="flex-1 bg-error-container text-on-error-container py-2 rounded-full font-bold hover:opacity-80 transition-opacity flex items-center justify-center gap-1 cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                    Close
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* New Listing CTA */}
          <button className="border-2 border-dashed border-outline-variant rounded-3xl flex flex-col items-center justify-center p-12 hover:border-primary/60 hover:bg-surface-container-low transition-all group cursor-pointer min-h-[350px]">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-[48px]">add_circle</span>
            </div>
            <h3 className="font-headline-md text-[20px] font-bold text-on-surface mb-2">Create New Listing</h3>
            <p className="font-body-md text-[14px] text-on-surface-variant text-center max-w-[200px]">
              Quickly add surplus food to the rescue network.
            </p>
          </button>
        </div>
      </main>

      {/* Mobile Navigation Shell */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-low border-t border-outline-variant/50 px-6 py-3 flex justify-around items-center z-50">
        <Link className="flex flex-col items-center space-y-1 text-on-surface-variant hover:text-primary transition-colors" to="/vendor/dashboard">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px]">Home</span>
        </Link>
        <Link className="flex flex-col items-center space-y-1 text-on-surface-variant hover:text-primary transition-colors" to="/vendor/inventory">
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="text-[10px]">Inventory</span>
        </Link>
        <div className="relative -top-6">
          <Link to="/vendor/listings" className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform active:scale-95 cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>fastfood</span>
          </Link>
        </div>
        <Link className="flex flex-col items-center space-y-1 text-primary" to="/vendor/listings">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>fastfood</span>
          <span className="text-[10px] font-bold">Listings</span>
        </Link>
        <Link className="flex flex-col items-center space-y-1 text-on-surface-variant hover:text-primary transition-colors" to="#">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px]">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
