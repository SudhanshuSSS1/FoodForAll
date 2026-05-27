import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function VendorDashboard() {
  const [pricingType, setPricingType] = useState('free'); // 'free' or 'low-cost'
  const [category, setCategory] = useState('');
  
  // Camera State
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [photoDataUri, setPhotoDataUri] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access the camera. Please ensure camera permissions are granted.");
      setIsCameraOpen(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
    setIsCameraOpen(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUri = canvas.toDataURL('image/jpeg');
      setPhotoDataUri(dataUri);
      stopCamera();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Surplus published successfully!');
  };

  return (
    <>
      <div className="flex pt-16 bg-[#fbf9f5] min-h-screen">
      {/* SideNavBar */}
      <aside className="h-[calc(100vh-64px)] w-64 fixed left-0 top-16 bg-surface-container flex-col p-6 space-y-2 shadow-md hidden lg:flex border-r border-outline-variant/20 z-40">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-primary-fixed overflow-hidden">
            <img 
              alt="Vendor Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvRUtZObzwKPYvw55WhNhxw2UDBA945JbCQYNw0T6b5dITJXhWUEf2J_9zwPBe9Hz0ZTAJONiEvJU7aRDHECNcwkabHWz0PzkXTChKrr9O9k2WTh5ovjnB_44mhSkk07LIUWbd46FlCRx1h82q61LO1_26E1u8gzQBRvIYzRaoVHZ7VSzgsx1gAd-Y-Cb8IAfIJ5IfoTTxLh0o5QuEnN7SvcXGnEUSrU3pNHE6N7-HOwpZsG7fm5n-cw3pJb4kjsNaF3-EZBdJ85_J"
            />
          </div>
          <div>
            <h3 className="font-headline text-[18px] font-bold text-primary">Green Grocers</h3>
            <p className="font-label text-[12px] text-on-surface-variant">Verified Vendor</p>
          </div>
        </div>
        <nav className="flex-grow space-y-1">
          <a className="flex items-center space-x-3 p-3 bg-primary-container text-on-primary-container rounded-xl transition-all scale-[0.98]" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label text-label-md">Dashboard</span>
          </a>
          <Link className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded-xl transition-colors" to="/vendor/inventory">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="font-label text-label-md">Inventory</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded-xl transition-colors" to="/vendor/listings">
            <span className="material-symbols-outlined">fastfood</span>
            <span className="font-label text-label-md">Listings</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded-xl transition-colors" to="/vendor/analytics">
            <span className="material-symbols-outlined">leaderboard</span>
            <span className="font-label text-label-md">Analytics</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-variant hover:text-on-surface rounded-xl transition-colors" to="/vendor/messages">
            <span className="material-symbols-outlined">mail</span>
            <span className="font-label text-label-md">Messages</span>
          </Link>
        </nav>
        <button className="mt-auto w-full bg-secondary-container text-on-secondary-container py-3 rounded-xl font-label text-label-md flex items-center justify-center space-x-1 hover:opacity-90 transition-opacity active:scale-[0.98]">
          <span className="material-symbols-outlined">add_circle</span>
          <span>Post New Item</span>
        </button>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-grow lg:ml-64 p-6 lg:p-12 pb-24 md:pb-12 min-h-screen text-[#1b1c1a]">
        <div className="max-w-[1000px] mx-auto space-y-8">
          
          {/* Welcome Section */}
          <header>
            <h1 className="font-headline text-headline-lg text-[#1b1c1a]">Vendor Dashboard</h1>
            <p className="font-body text-body-md text-[#1b1c1a]/70">Good morning, Green Grocers. Let's make sure no good food goes to waste today.</p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Quick List Form (Bento Style) */}
            <section className="md:col-span-5 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(62,123,68,0.08)] p-6">
              <div className="flex items-center space-x-2 mb-6">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <h2 className="font-headline text-[24px] font-semibold text-[#1b1c1a]">Quick List Surplus</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="font-label text-label-md text-[#1b1c1a]/70">Item Name</label>
                  <input required className="w-full bg-[#fbf9f5] border border-outline-variant/20 rounded-lg focus:ring-2 focus:ring-primary h-12 px-4 font-body outline-none" placeholder="e.g., Organic Bananas (Bunch)" type="text" />
                </div>
                <div className="space-y-1">
                  <label className="font-label text-label-md text-[#1b1c1a]/70">Category</label>
                  <div className="relative">
                    <select required value={category} onChange={(e) => setCategory(e.target.value)} className="w-full bg-[#fbf9f5] border border-outline-variant/20 rounded-lg focus:ring-2 focus:ring-primary h-12 pl-4 pr-10 font-body outline-none appearance-none cursor-pointer text-[#1b1c1a]">
                      <option value="" disabled>Select a category...</option>
                      <option value="bakery">Bakery</option>
                      <option value="produce">Produce</option>
                      <option value="ready-meals">Ready Meals</option>
                      <option value="dairy">Dairy</option>
                      <option value="pantry">Pantry Items</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#1b1c1a]/50 pointer-events-none">expand_more</span>
                  </div>
                  {category === 'other' && (
                    <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      <input required className="w-full bg-[#fbf9f5] border border-outline-variant/20 rounded-lg focus:ring-2 focus:ring-primary h-12 px-4 font-body outline-none" placeholder="Please specify category..." type="text" />
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="font-label text-label-md text-[#1b1c1a]/70">Item Image</label>
                  {photoDataUri ? (
                    <div className="relative rounded-lg overflow-hidden border-2 border-primary/50 w-full h-48 group">
                      <img src={photoDataUri} alt="Captured surplus" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button 
                          type="button" 
                          onClick={() => setPhotoDataUri(null)} 
                          className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white py-2 px-4 rounded-full font-label text-sm flex items-center space-x-2 transition-colors cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                          <span>Remove Photo</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-4">
                      <label className="flex-1 cursor-pointer border-2 border-dashed border-outline-variant/30 rounded-lg py-6 px-4 flex flex-col items-center justify-center text-[#1b1c1a]/60 hover:bg-[#1b1c1a]/5 hover:text-primary hover:border-primary/50 transition-colors">
                        <span className="material-symbols-outlined text-[28px] mb-2">upload_file</span>
                        <span className="font-label text-label-md">Upload Photo</span>
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            const reader = new FileReader();
                            reader.onload = (e) => setPhotoDataUri(e.target.result);
                            reader.readAsDataURL(e.target.files[0]);
                          }
                        }}/>
                      </label>
                      <button 
                        type="button"
                        onClick={startCamera}
                        className="flex-1 cursor-pointer border-2 border-dashed border-outline-variant/30 rounded-lg py-6 px-4 flex flex-col items-center justify-center text-[#1b1c1a]/60 hover:bg-[#1b1c1a]/5 hover:text-primary hover:border-primary/50 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[28px] mb-2">photo_camera</span>
                        <span className="font-label text-label-md">Take Photo</span>
                      </button>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-label text-label-md text-[#1b1c1a]/70">Quantity</label>
                    <input required className="w-full bg-[#fbf9f5] border border-outline-variant/20 rounded-lg focus:ring-2 focus:ring-primary h-12 px-4 font-body outline-none" placeholder="5kg / 3 units" type="text" />
                  </div>
                  <div className="space-y-1">
                    <label className="font-label text-label-md text-[#1b1c1a]/70">Expiry Time</label>
                    <input required className="w-full bg-[#fbf9f5] border border-outline-variant/20 rounded-lg focus:ring-2 focus:ring-primary h-12 px-4 font-body outline-none" type="time" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="font-label text-label-md text-[#1b1c1a]/70">Pricing</label>
                  <div className="flex space-x-2">
                    <button 
                      type="button"
                      onClick={() => setPricingType('free')}
                      className={`flex-1 py-3 px-4 rounded-lg font-label text-label-md flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                        pricingType === 'free'
                          ? 'border-2 border-primary bg-primary-container/10 text-primary font-bold'
                          : 'border-2 border-transparent bg-[#fbf9f5] text-[#1b1c1a]/70 hover:bg-[#fbf9f5]/80'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">volunteer_activism</span>
                      <span>Free</span>
                    </button>
                    <button 
                      type="button"
                      onClick={() => setPricingType('low-cost')}
                      className={`flex-1 py-3 px-4 rounded-lg font-label text-label-md flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                        pricingType === 'low-cost'
                          ? 'border-2 border-primary bg-primary-container/10 text-primary font-bold'
                          : 'border-2 border-transparent bg-[#fbf9f5] text-[#1b1c1a]/70 hover:bg-[#fbf9f5]/80'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px]">payments</span>
                      <span>Low Cost</span>
                    </button>
                  </div>
                  {pricingType === 'low-cost' && (
                    <div className="mt-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                      <label className="font-label text-label-md text-[#1b1c1a]/70">Set Price ($)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1b1c1a]/50 font-body font-bold">$</span>
                        <input required type="number" step="0.01" min="0" className="w-full bg-[#fbf9f5] border border-outline-variant/20 rounded-lg focus:ring-2 focus:ring-primary h-12 pl-8 pr-4 font-body outline-none" placeholder="e.g. 2.50" />
                      </div>
                    </div>
                  )}
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary text-on-primary py-4 rounded-full font-label text-[16px] font-bold flex items-center justify-center space-x-2 mt-6 hover:bg-primary-fixed-dim hover:scale-[0.98] transition-all shadow-md shadow-primary/20"
                >
                  <span>Publish Surplus</span>
                  <span className="material-symbols-outlined">rocket_launch</span>
                </button>
              </form>
            </section>
            
            {/* Impact Visualization (Organic Shape) */}
            <section className="md:col-span-7 bg-primary-container text-on-primary-container rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between shadow-[0px_4px_20px_rgba(62,123,68,0.15)]">
              <div className="relative z-10">
                <h2 className="font-headline text-[24px] font-bold mb-1">Today's Impact</h2>
                <p className="font-body opacity-90 max-w-[280px]">You have rescued 42 meals for your local community today.</p>
              </div>
              
              <div className="relative h-40 mt-6">
                {/* Circular Progress Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-on-primary-container/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative z-10 text-center text-on-primary-container">
                    <span className="block font-display text-[56px] leading-none font-bold">84%</span>
                    <span className="font-label text-sm uppercase tracking-wider opacity-80">Daily Goal</span>
                  </div>
                </div>
                {/* Blob Decoration */}
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl"></div>
              </div>
              
              <div className="mt-8 flex justify-between items-end relative z-10">
                <div className="flex space-x-3">
                  <div className="bg-on-primary-container/10 p-3 rounded-xl backdrop-blur-md border border-on-primary-container/10">
                    <p className="font-label text-[12px] opacity-70">CO2 Saved</p>
                    <p className="font-headline text-[20px] font-bold">12.4kg</p>
                  </div>
                  <div className="bg-on-primary-container/10 p-3 rounded-xl backdrop-blur-md border border-on-primary-container/10">
                    <p className="font-label text-[12px] opacity-70">Lives Touched</p>
                    <p className="font-headline text-[20px] font-bold">18</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[64px] opacity-20">compost</span>
              </div>
            </section>
          </div>
          
          {/* Active Listings Table */}
          <section className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(62,123,68,0.08)] overflow-hidden border border-outline-variant/10">
            <div className="p-6 flex justify-between items-center border-b border-[#fbf9f5]">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary">list_alt</span>
                <h2 className="font-headline text-[24px] font-semibold text-[#1b1c1a]">Active Listings</h2>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 rounded-full hover:bg-[#fbf9f5] transition-colors cursor-pointer text-[#1b1c1a]/70">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                <button className="text-primary font-label text-label-md font-bold hover:underline cursor-pointer">View All</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#fbf9f5]">
                  <tr>
                    <th className="px-6 py-4 font-label text-label-md text-[#1b1c1a]/70 font-semibold uppercase tracking-wider text-xs">Item Detail</th>
                    <th className="px-6 py-4 font-label text-label-md text-[#1b1c1a]/70 font-semibold uppercase tracking-wider text-xs">Quantity</th>
                    <th className="px-6 py-4 font-label text-label-md text-[#1b1c1a]/70 font-semibold uppercase tracking-wider text-xs">Expires In</th>
                    <th className="px-6 py-4 font-label text-label-md text-[#1b1c1a]/70 font-semibold uppercase tracking-wider text-xs">Status</th>
                    <th className="px-6 py-4 font-label text-label-md text-[#1b1c1a]/70 font-semibold uppercase tracking-wider text-xs text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#fbf9f5]">
                  {/* Row 1 */}
                  <tr className="hover:bg-[#fbf9f5]/50 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
                          <img alt="Fresh Greens" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqv9w21iobp7ZMuztv-7OstJ2KMZ3q1wu_c1B4GX1ofUW3kp57T7bRPCNa8T0cINgTuQZdXiOTloiUBdhfQeYoZwaTcdWpYIp-JUkENxiTwlDr_PPChYo74jkAawZosGy6kmCaSnqnJck_3jdq5dxOnws7nTEloSsnxcOlBMn8uTXRUwp1rNiqc1T1oS0-sv-KtffZkI4ErJFbC8w7r4Qtic8BT_rwcVeNYnINqFHmQGM5lfzOKoayoYbrVK9Wl7HzRvtyXDvicWXw" />
                        </div>
                        <div>
                          <p className="font-label font-bold text-[#1b1c1a]">Fresh Kale Mix</p>
                          <p className="font-caption text-[#1b1c1a]/60">Listed 2h ago</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-body text-[#1b1c1a] whitespace-nowrap">12 Bags</td>
                    <td className="px-6 py-4 font-body text-[#1b1c1a] whitespace-nowrap">45m</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-primary-container/20 text-primary-container font-label text-[12px] font-bold rounded-full">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span>Available</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="material-symbols-outlined text-[#1b1c1a]/50 hover:text-primary cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">more_vert</button>
                    </td>
                  </tr>
                  
                  {/* Row 2 */}
                  <tr className="hover:bg-[#fbf9f5]/50 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
                          <img alt="Orange Slices" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBZyHDEoIIrJzDoGKKDhK0AyACdU_cy6A9nrHN1RBuZvreOJ3HH7TRTvlpg7FmF_zrpI-HjexXsYYUeajiepDRUlDl9CFZBLwSm-bexuMtv1-QmIvNhWX7G5dz9M2tVJAMV5RLA49AfnPx4GUSQnQjLyqPRxy-XVljJ44eysX_NCwqvhxBT-kYvf2ifEgKK5EIgX2WdduZHJZzYSRreHue0B72jMtZusGHgTeqMpbNFdT75Z5U24UJkkSOFG3zVpvpB30mS0bvr40n" />
                        </div>
                        <div>
                          <p className="font-label font-bold text-[#1b1c1a]">Sunkist Oranges</p>
                          <p className="font-caption text-[#1b1c1a]/60">Listed 4h ago</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-body text-[#1b1c1a] whitespace-nowrap">4 Boxes</td>
                    <td className="px-6 py-4 font-body text-[#1b1c1a]/50 whitespace-nowrap">Expired</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-secondary-container/20 text-on-secondary-container font-label text-[12px] font-bold rounded-full">
                        <span>Claimed</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="material-symbols-outlined text-[#1b1c1a]/50 hover:text-primary cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">more_vert</button>
                    </td>
                  </tr>
                  
                  {/* Row 3 */}
                  <tr className="hover:bg-[#fbf9f5]/50 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden shrink-0">
                          <img alt="Sourdough Bread" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRTuOn3AjmH2T1y2WkZjzwYeWCQKj-w7E2VcZBtiIImzqAnLZWIq5qa6fQxswa0SPDZMDaRxsRfx5nbM0js8Lq67MxUHaZzJunQpgz-PyUiyMo0bNFXEaNi3aYoIpZdj6Vuyv6ICofP_wDNBc67hpHC9yosHpQ5ut2UyEkJG20Au9ygjcS6l93rpse4TGAEMu6ml7mkEMRLuQtFe08LJjzVsW_JFS-h7DqS2PyjnJ3qbYS7BabwC7SlEL0Bwx8syn0EXC7XWIIHQQb" />
                        </div>
                        <div>
                          <p className="font-label font-bold text-[#1b1c1a]">Daily Sourdough</p>
                          <p className="font-caption text-[#1b1c1a]/60">Listed 15m ago</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-body text-[#1b1c1a] whitespace-nowrap">8 Loaves</td>
                    <td className="px-6 py-4 font-body text-[#1b1c1a] whitespace-nowrap">6h</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-primary-container/20 text-primary-container font-label text-[12px] font-bold rounded-full">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span>Available</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="material-symbols-outlined text-[#1b1c1a]/50 hover:text-primary cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">more_vert</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface shadow-[0px_-4px_20px_rgba(62,123,68,0.08)] px-6 py-3 flex justify-around items-center z-50 border-t border-outline-variant/20">
        <button className="flex flex-col items-center p-2 text-primary cursor-pointer">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="text-[10px] font-label mt-1">Home</span>
        </button>
        <Link className="flex flex-col items-center p-2 text-on-surface-variant hover:text-primary cursor-pointer transition-colors" to="/vendor/inventory">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="text-[10px] font-label mt-1">Inventory</span>
        </Link>
        <button className="flex flex-col items-center -mt-10 bg-secondary-container text-on-secondary-container p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity cursor-pointer active:scale-95 border-4 border-surface">
          <span className="material-symbols-outlined text-[28px]">add</span>
        </button>
        <Link className="flex flex-col items-center p-2 text-on-surface-variant hover:text-primary cursor-pointer transition-colors" to="/vendor/analytics">
          <span className="material-symbols-outlined">leaderboard</span>
          <span className="text-[10px] font-label mt-1">Analytics</span>
        </Link>
        <Link className="flex flex-col items-center p-2 text-on-surface-variant hover:text-primary cursor-pointer transition-colors" to="/vendor/listings">
          <span className="material-symbols-outlined">fastfood</span>
          <span className="text-[10px] font-label mt-1">Listings</span>
        </Link>
      </nav>
    </div>

      {/* Camera Modal */}
      {isCameraOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-[#1b1c1a] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="p-4 flex justify-between items-center border-b border-white/10">
              <h3 className="font-headline text-white font-bold text-lg flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary">camera</span>
                <span>Take Photo</span>
              </h3>
              <button 
                onClick={stopCamera}
                className="text-white/60 hover:text-white transition-colors cursor-pointer p-2 rounded-full hover:bg-white/10"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="relative bg-black aspect-[4/3] flex items-center justify-center">
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                className="w-full h-full object-cover"
              />
              <canvas ref={canvasRef} className="hidden" />
              
              {/* Camera Framing Guidelines */}
              <div className="absolute inset-0 pointer-events-none border-[1px] border-white/20 m-8 rounded-lg">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary -mt-[1px] -ml-[1px] rounded-tl"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary -mt-[1px] -mr-[1px] rounded-tr"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary -mb-[1px] -ml-[1px] rounded-bl"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary -mb-[1px] -mr-[1px] rounded-br"></div>
              </div>
            </div>
            
            <div className="p-6 flex justify-center bg-[#1b1c1a]">
              <button 
                onClick={capturePhoto}
                className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-white rounded-full group-hover:bg-primary transition-colors"></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
