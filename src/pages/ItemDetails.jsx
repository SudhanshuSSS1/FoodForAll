import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const imgRef = useRef(null);

  // Simple parallax on image
  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const speed = 0.05;
      const rect = imgRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        imgRef.current.style.transform = `translateY(${(window.scrollY - rect.top) * speed}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClaim = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleReturnHome = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div className="font-body text-body-md bg-surface text-on-surface min-h-screen">
      
      {/* 
        Main layout container. We add pt-24 here because our global Navbar is fixed top-0 h-16,
        so we need padding to avoid content hiding behind the navbar.
      */}
      <main className="max-w-7xl mx-auto px-6 py-12 pt-24">
        
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-2 text-on-surface-variant font-label text-label-md">
          <Link to="/" className="hover:text-primary transition-colors">Find Food</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <Link to="#" className="hover:text-primary transition-colors">Bakery</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface font-bold">6-Pack Fresh Bagels</span>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Image Gallery & Description */}
          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-surface-container shadow-[0px_4px_20px_rgba(62,123,68,0.08)]">
              <img 
                ref={imgRef}
                className="w-full h-full object-cover transition-transform duration-75 ease-linear scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSHMPUPAlqSUQ6yQ2xJxc_UQKd7WGdqZrc1kXDiMX0yY5KQFDI819S8Dvx34jas6QD10wrZBzbwOB4jLjtSrdKVH30Se7_fzhkkYgI84MKI35AiDnMr58-8TikQSuh4UhqiFYETe_w0FbTn92I0-Iua14wghV0pX0PUEtAVykPy0XZv7RZSwS-xsODIZ2fb9rAum7QKfPQDWf0tQdh1Z_BfxQ4Uau7EItoiZpzPlrBdjHNZ8Au88FbXJvzndfs1vA8Ug7tILbUt84H"
                alt="Fresh Bagels"
              />
            </div>
            
            <div className="bg-surface-container-lowest p-6 md:p-12 rounded-2xl shadow-[0px_4px_20px_rgba(62,123,68,0.08)] space-y-6">
              <div>
                <h1 className="font-headline text-[32px] text-on-surface mb-2 font-bold">6-Pack Fresh Bagels</h1>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>store</span>
                  <span className="font-label text-label-md text-primary font-bold">Daily Crust Bakery</span>
                  <span className="text-outline-variant mx-1">•</span>
                  <span className="bg-tertiary-container/10 text-tertiary font-label text-[12px] px-3 py-1 rounded-full font-bold">Bakery</span>
                </div>
                <p className="text-on-surface-variant font-body text-[18px] leading-relaxed">
                  These artisanal bagels are baked fresh every morning using locally sourced organic flour. They are boiled and stone-baked for the perfect chewy texture and golden crust.
                </p>
              </div>
              
              <div className="p-5 bg-surface-container-low rounded-xl border-l-4 border-secondary-container">
                <h3 className="font-label text-label-md text-on-secondary-fixed-variant font-bold flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[20px]">info</span>
                  Why it's listed
                </h3>
                <p className="text-on-surface-variant font-body text-[16px]">
                  End of day surplus. These bagels were baked this morning and are perfectly fresh, but we clear our shelves every evening to make room for tomorrow's batch.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Claim Action & Details */}
          <aside className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-[0px_12px_32px_rgba(0,0,0,0.05)] border border-white/10">
              <div className="mb-8 flex justify-between items-center">
                <div className="space-y-1">
                  <p className="font-label text-[12px] text-on-surface-variant uppercase tracking-wider font-bold">Status</p>
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                    </span>
                    Available Now
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-label text-[12px] text-on-surface-variant uppercase tracking-wider font-bold">Quantity</p>
                  <p className="font-headline text-[24px] text-on-surface font-bold">1 Pack</p>
                </div>
              </div>
              
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-container/20 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-primary">schedule</span>
                  </div>
                  <div>
                    <p className="font-label text-label-md text-on-surface font-bold">Pickup Window</p>
                    <p className="text-on-surface-variant font-body">Today, 6:00 PM - 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-container/20 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <p className="font-label text-label-md text-on-surface font-bold">Location</p>
                    <p className="text-on-surface-variant font-body">42nd Baker St, Community Plaza</p>
                  </div>
                </div>
              </div>
              
              <button 
                className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-xl font-headline text-[20px] font-bold hover:shadow-xl hover:shadow-secondary-container/20 active:scale-95 transition-all duration-200 cursor-pointer" 
                onClick={handleClaim}
              >
                Claim Item
              </button>
              <p className="text-center mt-4 font-caption text-[12px] text-on-surface-variant">
                By claiming, you agree to pick up within the designated window.
              </p>
            </div>
            
            {/* Map Section */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(62,123,68,0.08)]">
              <div className="p-4 border-b border-outline-variant/10 flex justify-between items-center">
                <span className="font-label text-label-md font-bold">Store Location</span>
                <Link to="#" className="text-primary font-label text-label-md font-bold hover:underline">Get Directions</Link>
              </div>
              <div className="h-48 w-full bg-surface-container-high relative">
                <img 
                  className="w-full h-full object-cover grayscale-[20%]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLO8hiC_srJwCuX1pALuZypeJuTt94EmYYSkJ6XuJ8la0K16O-dpgASC1oJcuzKp01ZoGY8YKL371EeBCFz_n8_rfmRboJNHhYIZrxoOm0copTbOnYpaV7bLj21740MTfoGk98Byx0PDWGzKNvFS5_B4A6j5zCvDv3Ik7yaCxsaHnY--qA_eZ3R7hu3gfvrDtqGflowjJPjkGDWBQFi5SX1P-5TKlHT11GiuE9PxTi7giI2vqDVC4PcLUkILg0Y10sGW-Ul2DK9F12" 
                  alt="Map Location"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary text-on-primary p-2 rounded-full shadow-lg">
                    <span className="material-symbols-outlined">storefront</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Items Section */}
        <section className="mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h2 className="font-headline text-[32px] font-bold text-on-surface mb-1">More from Daily Crust</h2>
              <p className="text-on-surface-variant font-body">Explore other available surplus items at this location.</p>
            </div>
            <button className="flex items-center gap-2 text-primary font-label text-label-md font-bold hover:gap-3 transition-all cursor-pointer">
              View Store <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Related Card 1 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(62,123,68,0.08)] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoqAtGDoLp8nF6P7_qBZlAdaQM59I9dtuqqVcobdd0Cw-Km0ALJAe9CsEnuCk1iQRosi4S1sWLEgVZqZajI9HomQtsmD0bJ0Ci1ZykeUE7jt-Id3vSA1R286yj25vZWRbGyaE-sKGhFhdU077h_l9oMX8-kC-9eAbmjrrZqYIho5XsMoJVxC6uJVetTFFCopBgx0Hu1VPFmzwBt7w2IeMNPyzSFZ_zPtketRldxZdlr9RbHaxMNRYHyciWHqVeWLTMB8-UvTiKq2_H" alt="Sourdough" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline text-[20px] font-bold text-on-surface">Artisan Sourdough</h3>
                  <span className="text-primary font-bold">2 left</span>
                </div>
                <p className="text-on-surface-variant font-body text-[14px] line-clamp-2">Large loaves baked with 24-hour fermented dough. Hearty and delicious.</p>
                <button className="w-full border-2 border-primary text-primary py-2.5 rounded-full font-label text-label-md font-bold hover:bg-primary hover:text-on-primary transition-colors cursor-pointer">Details</button>
              </div>
            </div>
            
            {/* Related Card 2 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(62,123,68,0.08)] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoqpJKtE-3pp7oEbqQz8_xz5K0oggzFK4EhAJoSMpZZlr1sUoa1x1QgC0nCUMlXvt7pr4VsXZoMyKR2mfmh7kQ4ki1iDWh1Pc7ckckIHa47X8YUAfszrkP0-WlC8J5nEZtxOj41Mr6N9So5XcYcEHRwSPk-vRQebTGKRmNGmAy4U7gynmbEztl9FBkQK1hd0LnmUWV6wqq7ePwzNLHmDk3706GfXRwYzr_sCaH6LkkVmTCYCNF06JpSbNiegCQSrAd3f0Qpf8ohwQC" alt="Pastry Box" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline text-[20px] font-bold text-on-surface">Pastry Box</h3>
                  <span className="text-primary font-bold">1 left</span>
                </div>
                <p className="text-on-surface-variant font-body text-[14px] line-clamp-2">Assorted morning pastries including croissants and danishes.</p>
                <button className="w-full border-2 border-primary text-primary py-2.5 rounded-full font-label text-label-md font-bold hover:bg-primary hover:text-on-primary transition-colors cursor-pointer">Details</button>
              </div>
            </div>
            
            {/* Related Card 3 */}
            <div className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(62,123,68,0.08)] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwyZ9WPVWWTOo2-fWHbw_cEw8mrLIUZgAVj6_OGZPnJu64wPg-PJfiyVJBPcbPsTBiWy8yADV0CKvTTxlIRMocdspVEYZY4XYQpCNBAFEK2fMd7iw9B4cBdl4-vXKLzL1tk_lzRJU_xc43_rnDSSQ4zmTZi7n4an0B-e0wPrBqXC0jAr7z8t10Ozvlv12MB3ciGchy9GD9nJpmWn3hDMFP63vkawtwigvHdS2m7n4C0CAny6I-CqsZ-R4BBlEf-8dKo52qdCExXmB0" alt="Organic Coffee" />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline text-[20px] font-bold text-on-surface">Organic Coffee</h3>
                  <span className="text-primary font-bold">5 left</span>
                </div>
                <p className="text-on-surface-variant font-body text-[14px] line-clamp-2">250g bags of whole bean coffee, slightly past peak roast but excellent.</p>
                <button className="w-full border-2 border-primary text-primary py-2.5 rounded-full font-label text-label-md font-bold hover:bg-primary hover:text-on-primary transition-colors cursor-pointer">Details</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Success Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
          <div className="relative bg-surface rounded-3xl p-8 md:p-12 max-w-lg w-full text-center shadow-2xl animate-[zoomIn_0.3s_ease-out]">
            <div className="w-24 h-24 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-container/20">
              <span className="material-symbols-outlined text-[48px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h2 className="font-headline text-[32px] font-bold mb-3 text-on-surface">Claimed Successfully!</h2>
            <p className="text-on-surface-variant mb-8 font-body text-[16px] leading-relaxed">
              The bagels have been reserved for you. Please head to Daily Crust Bakery during the pickup window.
            </p>
            
            <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-5 mb-8 text-left space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant font-label text-label-md uppercase tracking-wide">Claim ID:</span>
                <span className="font-bold text-primary text-[18px]">#FFA-29401</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-on-surface-variant font-label text-label-md uppercase tracking-wide">Pickup:</span>
                <span className="font-bold text-on-surface">6:00 PM - 8:00 PM</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <button 
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline text-[18px] font-bold hover:bg-primary-fixed-dim hover:shadow-lg active:scale-95 transition-all cursor-pointer" 
                onClick={closeModal}
              >
                Go to My Claims
              </button>
              <button 
                className="w-full text-primary font-label text-[16px] font-bold hover:underline py-2 cursor-pointer transition-all" 
                onClick={handleReturnHome}
              >
                Return Home
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}} />
    </div>
  );
}
