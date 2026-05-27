import React from 'react';
import { Link } from 'react-router-dom';

export default function VendorAnalytics() {
  return (
    <div className="bg-[#001206] text-[#ccfcd8] min-h-screen font-body pt-16">
      {/* SideNavBar Anchor */}
      <aside className="hidden md:flex flex-col h-[calc(100vh-64px)] w-64 fixed left-0 top-16 bg-[#001f0e] shadow-md p-6 space-y-2 z-40 border-r border-[#255036]/30">
        <div className="flex items-center space-x-3 p-3 mb-12">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden shrink-0">
            <img 
              alt="Vendor Profile" 
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMBv0x1LbNvQagcyPehvn07wIA1CN-tWiFmDzRSsdENduD20xArhhA_gauUkgPrC3f54nwV2L6OjGBhV6lLMI-7-VxlduoKmHRsEL_VuYnbNEINfh-cYbt2CL6Qk2a4CZBuPKl4MU7PmCliGifLbceyilN6LSUNnd2WomQRh4H4zJhEdI_dF_XVlfpD4ZfLqisN7584I_Q0vfeMcF6EN8I1WGeryVij10fZu9nGMsxDofNVXZ7_s7RAOQFhDQ11Y2R_O171HKrUvtp" 
            />
          </div>
          <div>
            <p className="font-label-md text-[14px] font-semibold text-on-surface">Green Grocers</p>
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
          <Link className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant rounded-xl transition-colors" to="/vendor/listings">
            <span className="material-symbols-outlined">fastfood</span>
            <span className="font-label-md text-label-md">Listings</span>
          </Link>
          {/* Active State: Analytics */}
          <Link className="flex items-center space-x-3 px-3 py-2 bg-primary-container text-on-primary-container rounded-xl scale-[0.98] transition-all font-bold" to="/vendor/analytics">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>leaderboard</span>
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

      {/* Main Content Area */}
      <main className="md:ml-64 p-6 max-w-7xl mx-auto min-h-screen">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-primary font-bold text-[14px] mb-1">Vendor Performance</p>
            <h2 className="font-headline-lg text-[32px] font-bold text-on-surface">Analytics Overview</h2>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2 rounded-lg border border-[#537f61]/40 text-on-surface-variant font-bold text-[14px] hover:bg-surface-variant transition-colors flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              Last 7 Days
            </button>
            <button className="px-6 py-2 rounded-lg bg-surface-container-high border border-primary/20 text-primary font-bold text-[14px] hover:brightness-125 transition-colors flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Export Report
            </button>
          </div>
        </header>

        {/* Summary Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Total Meals Rescued */}
          <div className="bg-[#002d16]/40 backdrop-blur-md border border-[#6eff84]/10 p-6 rounded-3xl flex flex-col justify-between overflow-hidden relative group hover:bg-[#002d16]/60 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <span className="material-symbols-outlined text-[64px] text-primary">restaurant</span>
            </div>
            <div className="relative z-10">
              <p className="font-label-md text-[14px] font-semibold text-on-surface-variant">Total Meals Rescued</p>
              <h3 className="font-display-lg text-[48px] font-bold text-primary mt-2 leading-none">1,284</h3>
            </div>
            <div className="mt-6 flex items-center gap-1 text-primary text-[12px] font-medium bg-primary/10 w-fit px-2 py-1 rounded-full">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
              <span>12% from last week</span>
            </div>
          </div>
          
          {/* Card 2: CO2 Offset */}
          <div className="bg-[#002d16]/40 backdrop-blur-md border border-[#6eff84]/10 p-6 rounded-3xl flex flex-col justify-between overflow-hidden relative group hover:bg-[#002d16]/60 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <span className="material-symbols-outlined text-[64px] text-tertiary">eco</span>
            </div>
            <div className="relative z-10">
              <p className="font-label-md text-[14px] font-semibold text-on-surface-variant">CO2 Offset (kg)</p>
              <h3 className="font-display-lg text-[48px] font-bold text-tertiary mt-2 leading-none">342.5</h3>
            </div>
            <div className="mt-6 flex items-center gap-1 text-tertiary text-[12px] font-medium bg-tertiary/10 w-fit px-2 py-1 rounded-full">
              <span className="material-symbols-outlined text-[16px]">forest</span>
              <span>Equivalent to 15 trees</span>
            </div>
          </div>
          
          {/* Card 3: Revenue */}
          <div className="bg-[#002d16]/40 backdrop-blur-md border border-[#6eff84]/10 p-6 rounded-3xl flex flex-col justify-between overflow-hidden relative group hover:bg-[#002d16]/60 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
              <span className="material-symbols-outlined text-[64px] text-error">payments</span>
            </div>
            <div className="relative z-10">
              <p className="font-label-md text-[14px] font-semibold text-on-surface-variant">Revenue Earned</p>
              <h3 className="font-display-lg text-[48px] font-bold text-error mt-2 leading-none">$4,120</h3>
            </div>
            <div className="mt-6 flex items-center gap-1 text-error text-[12px] font-medium bg-error/10 w-fit px-2 py-1 rounded-full">
              <span className="material-symbols-outlined text-[16px]">show_chart</span>
              <span>8.4% increase</span>
            </div>
          </div>
        </div>

        {/* Charts and Lists Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Rescue Trends Chart Area */}
          <div className="lg:col-span-8 bg-[#002d16]/40 backdrop-blur-md border border-[#6eff84]/10 rounded-3xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h4 className="font-headline-md text-[24px] font-bold text-on-surface">Rescue Trends</h4>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(110,255,132,0.6)]"></div>
                  <span className="text-[12px] font-medium text-on-surface-variant">Meals Rescued</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-error shadow-[0_0_8px_rgba(255,115,81,0.6)]"></div>
                  <span className="text-[12px] font-medium text-on-surface-variant">Revenue ($)</span>
                </div>
              </div>
            </div>
            
            {/* Mockup Chart Area */}
            <div className="h-[300px] w-full relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between opacity-10">
                <div className="border-t border-on-surface w-full"></div>
                <div className="border-t border-on-surface w-full"></div>
                <div className="border-t border-on-surface w-full"></div>
                <div className="border-t border-on-surface w-full"></div>
              </div>
              
              {/* Decorative Chart SVG */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                {/* Rescue Line (Green) */}
                <path d="M0,250 L100,180 L200,210 L300,100 L400,150 L500,80 L600,120 L700,50 L800,90" fill="none" stroke="#6eff84" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="drop-shadow-[0_4px_6px_rgba(110,255,132,0.3)]"></path>
                {/* Revenue Line (Orange/Error) */}
                <path d="M0,280 L100,240 L200,260 L300,180 L400,220 L500,140 L600,190 L700,110 L800,150" fill="none" stroke="#ff7351" strokeDasharray="8 8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="drop-shadow-[0_4px_6px_rgba(255,115,81,0.3)]"></path>
              </svg>
              
              {/* X-Axis Labels */}
              <div className="absolute -bottom-8 w-full flex justify-between text-[12px] font-medium text-on-surface-variant">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
          
          {/* Top Performing Items List */}
          <div className="lg:col-span-4 bg-[#002d16]/40 backdrop-blur-md border border-[#6eff84]/10 rounded-3xl p-8 flex flex-col h-full">
            <h4 className="font-headline-md text-[24px] font-bold text-on-surface mb-8">Top Items</h4>
            <div className="space-y-6 flex-grow">
              {/* Item 1 */}
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    alt="Organic Veggie Box"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDUpXDYqHJWOYUNlv8-pJO93iMyRuVSzgvxtY5iegrJe8obYZrPqzC8MlfrL7CW8pX2rTAXi1H6x4-137YKmigLVorPiKIq_xFrLvW2KdV6mAg8qfbfolMdvoytxUcZ7kSfw1EoLTy68i2ud8RLluSRCoewtspiVqmf5ZYu7o693huNUTj1ULscJcL6vxD0eucXHqNVpPRxygWawwPtLXiZ7FoduZlqSV4K4_vv_Y04TX6MXTo0T98bHIRsGPud2XHxpsDlmbLlb0Q"
                  />
                </div>
                <div className="flex-grow">
                  <p className="font-label-md text-[14px] font-bold text-on-surface group-hover:text-primary transition-colors">Organic Veggie Box</p>
                  <p className="text-[12px] font-medium text-primary/80 mt-0.5">342 Sold</p>
                </div>
                <div className="text-right">
                  <p className="font-label-md text-[14px] font-bold text-on-surface">$1,420</p>
                  <div className="flex items-center justify-end text-[10px] text-primary font-bold mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">arrow_drop_up</span>
                    5%
                  </div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    alt="Artisan Bakery Bundle"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAQLW_Bn5T1vh_AkoFWtRbZVEGlUvKu1dF0x1tHpCwdx1VbmVwuZjCefMBFkMoMEPQvs8BiKY1HPh5-zoBV8bOhCUySv6Y9DOgqBqt_5PQROAfoHa9nnzFWC7M_63fKZbrt6V5-EjqJzw2C_RAeQt5k-QaggUI2cHU2JKmU4DZPqtaAv8yyozhQrWliw7pxhjiBMgSwr3fN3Gd2krmfjOcziHbHeRUkNyzoPG5neLVr-LUoP723awl37Qu3jyYMpS-ZmInHL9NdmqS"
                  />
                </div>
                <div className="flex-grow">
                  <p className="font-label-md text-[14px] font-bold text-on-surface group-hover:text-primary transition-colors">Artisan Bakery Bundle</p>
                  <p className="text-[12px] font-medium text-primary/80 mt-0.5">289 Sold</p>
                </div>
                <div className="text-right">
                  <p className="font-label-md text-[14px] font-bold text-on-surface">$980</p>
                  <div className="flex items-center justify-end text-[10px] text-primary font-bold mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">arrow_drop_up</span>
                    12%
                  </div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    alt="Tropical Fruit Pack"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU5DFq6cUAAxoIKLHpQybYAyO48clKpFBBTDHHA1er6qIJWA-sf3d6PfqKSg1N7LlLr0oeR1zq2ymR3-htz_q_iLGHr52MF9ad_qWue5B2wDOUit4oKVx4u0UsNajZDggMtGiz9QbHRFdaBq_il_0KsFWIN8Co3iFNpVgKZ8gC5jfCx81imWt_ck4tvMZaniif2Taq95K_mOjclq3Naqy62ZihVI_ttTnPGN3Ld_VlIvBnsBTRHXxZ6eAGd8fwZcNhbh_bTBgJVavt"
                  />
                </div>
                <div className="flex-grow">
                  <p className="font-label-md text-[14px] font-bold text-on-surface group-hover:text-primary transition-colors">Tropical Fruit Pack</p>
                  <p className="text-[12px] font-medium text-primary/80 mt-0.5">156 Sold</p>
                </div>
                <div className="text-right">
                  <p className="font-label-md text-[14px] font-bold text-on-surface">$640</p>
                  <div className="flex items-center justify-end text-[10px] text-error font-bold mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span>
                    2%
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-8 w-full py-3 border-t border-[#6eff84]/20 text-[12px] font-medium text-on-surface-variant hover:text-primary transition-colors text-center cursor-pointer">
              View All Performance
            </button>
          </div>
        </div>
      </main>

      {/* Mobile Navigation Shell */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#001809] border-t border-[#255036]/50 px-6 py-3 flex justify-around items-center z-50">
        <Link className="flex flex-col items-center space-y-1 text-on-surface-variant hover:text-primary transition-colors" to="/vendor/dashboard">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px]">Home</span>
        </Link>
        <Link className="flex flex-col items-center space-y-1 text-on-surface-variant hover:text-primary transition-colors" to="/vendor/inventory">
          <span className="material-symbols-outlined">inventory_2</span>
          <span className="text-[10px]">Inventory</span>
        </Link>
        <div className="relative -top-6">
          <button className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform active:scale-95 cursor-pointer">
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
        </div>
        <Link className="flex flex-col items-center space-y-1 text-on-surface-variant hover:text-primary transition-colors" to="/vendor/listings">
          <span className="material-symbols-outlined">fastfood</span>
          <span className="text-[10px]">Listings</span>
        </Link>
        <Link className="flex flex-col items-center space-y-1 text-primary" to="/vendor/analytics">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>leaderboard</span>
          <span className="text-[10px] font-bold">Analytics</span>
        </Link>
      </nav>
    </div>
  );
}
