import React from 'react';
import { Link } from 'react-router-dom';

export default function VendorListings() {
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
          <div className="bg-surface-container/60 backdrop-blur-md border border-[#537f61]/20 p-6 rounded-3xl border-l-4 border-l-primary hover:bg-surface-container transition-colors">
            <p className="font-label-md text-[14px] text-on-surface-variant">Active Rescues</p>
            <p className="font-headline-md text-[24px] font-bold text-primary mt-2">12 Items</p>
          </div>
          <div className="bg-surface-container/60 backdrop-blur-md border border-[#537f61]/20 p-6 rounded-3xl border-l-4 border-l-tertiary hover:bg-surface-container transition-colors">
            <p className="font-label-md text-[14px] text-on-surface-variant">Claimed Today</p>
            <p className="font-headline-md text-[24px] font-bold text-tertiary mt-2">240kg</p>
          </div>
          <div className="bg-surface-container/60 backdrop-blur-md border border-[#537f61]/20 p-6 rounded-3xl border-l-4 border-l-secondary hover:bg-surface-container transition-colors">
            <p className="font-label-md text-[14px] text-on-surface-variant">Est. Impact</p>
            <p className="font-headline-md text-[24px] font-bold text-secondary mt-2">$1,240</p>
          </div>
          <div className="bg-surface-container/60 backdrop-blur-md border border-[#537f61]/20 p-6 rounded-3xl border-l-4 border-l-error hover:bg-surface-container transition-colors">
            <p className="font-label-md text-[14px] text-on-surface-variant">Expiring Soon</p>
            <p className="font-headline-md text-[24px] font-bold text-error mt-2">3 Items</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex border-b border-[#255036] mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide gap-2">
          <button className="px-6 py-3 font-bold text-[14px] text-primary border-b-2 border-primary active:scale-95 transition-all">Active (12)</button>
          <button className="px-6 py-3 font-bold text-[14px] text-on-surface-variant hover:text-on-surface transition-all">Scheduled (4)</button>
          <button className="px-6 py-3 font-bold text-[14px] text-on-surface-variant hover:text-on-surface transition-all">Expired (8)</button>
          <button className="px-6 py-3 font-bold text-[14px] text-on-surface-variant hover:text-on-surface transition-all">Claimed (45)</button>
        </div>

        {/* Listings Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Listing Card 1: Urgent */}
          <div className="bg-surface-container/60 backdrop-blur-md border border-[#537f61]/20 rounded-3xl overflow-hidden flex flex-col hover:border-primary/40 transition-all group">
            <div className="relative h-48 overflow-hidden">
              <img 
                alt="Organic Sourdough" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSf6XfzFwpBbKYZe94aF6JzJUVBRy8hKsZxS7_00s9MOzfpk1veJVVWrY7-RZmY7uwa3Dse-YH0R4ZuiCuYBcVLs7Pu_eAMSkSD_WM-2vyozQltw3Z9S4gJ-WxblkioL1g-M0zIsnkmkoYBp3GxCknTjqhe7sIiBmFF-FG9vPvvr6vQJgapPwV_jgADoLHQ6e3MCb4yXuZF1hbM1lOKvKdduYAA-nff0YcO6OQh6OSft92euf_hsIQnjEy3Qmh_aNUqnAo43p2nRM_" 
              />
              <div className="absolute top-3 right-3 bg-error text-white px-3 py-1 rounded-full text-[12px] font-bold flex items-center gap-1 shadow-md">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                Expiring: 42m
              </div>
              <div className="absolute bottom-3 left-3 bg-primary/90 text-on-primary-container px-3 py-1 rounded-full text-[12px] font-bold backdrop-blur-md shadow-md">
                Bakery
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-[20px] font-bold text-primary">Organic Sourdough</h3>
                <span className="text-tertiary-fixed font-bold text-[20px]">Free</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant font-label-md text-[14px] mb-6 flex-grow">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">inventory</span>
                  15 Loaves
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  0.2 miles
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

          {/* Listing Card 2: Normal */}
          <div className="bg-surface-container/60 backdrop-blur-md border border-[#537f61]/20 rounded-3xl overflow-hidden flex flex-col hover:border-primary/40 transition-all group">
            <div className="relative h-48 overflow-hidden">
              <img 
                alt="Assorted Tropical Fruits" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcJs9Ccx6OwU47NMgVoSXnH50LpkoDPV0KjYgyCV86UaXeqNBGpuF9NfnMCcbD2LzDXyb3cCNvyKG6G5IRIj6liC1g4QljtU8PRnLz6W-JkgONfJPgp2cWIZZIFjbna096Cph6XvHLiROCEy9VJzydodAS3Vw3Q58tb0k1LDIyZ7CBnC95hroIRtJ1M2EoekH6j8q5EeBsq12Bi11YFO0XOE56toouDtZC1o0-32poU7pMfEfd_HDM_XVSdvtZfFdV2CLfKLtdN2OB" 
              />
              <div className="absolute top-3 right-3 bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-[12px] font-bold flex items-center gap-1 shadow-md">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                Expiring: 4h 15m
              </div>
              <div className="absolute bottom-3 left-3 bg-primary/90 text-on-primary-container px-3 py-1 rounded-full text-[12px] font-bold backdrop-blur-md shadow-md">
                Produce
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-md text-[20px] font-bold text-primary">Tropical Fruit Box</h3>
                <span className="text-on-surface font-bold text-[20px]">$2.50</span>
              </div>
              <div className="flex items-center gap-3 text-on-surface-variant font-label-md text-[14px] mb-6 flex-grow">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">inventory</span>
                  4 Units
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">scale</span>
                  ~8kg Total
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

          {/* Listing Card 3: New Listing CTA */}
          <button className="border-2 border-dashed border-[#255036] rounded-3xl flex flex-col items-center justify-center p-12 hover:border-primary/60 hover:bg-surface-container-low transition-all group cursor-pointer min-h-[350px]">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-[48px]">add_circle</span>
            </div>
            <h3 className="font-headline-md text-[20px] font-bold text-on-surface mb-2">Create New Listing</h3>
            <p className="font-body-md text-[14px] text-on-surface-variant text-center max-w-[200px]">
              Quickly add surplus food to the rescue network.
            </p>
          </button>

          {/* Listing Card 4: Detailed Info Layout */}
          <div className="bg-surface-container/60 backdrop-blur-md border border-[#537f61]/20 rounded-3xl overflow-hidden flex flex-col hover:border-primary/40 transition-all group col-span-1 lg:col-span-2">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <img 
                  alt="Salad Bowl" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA66Y3VggwjAcfXFeI0qErz_DzIjLnmy_CgoxVty5HSvPV4vzopoLaxkJkxpCfbks9wweqgupXKZ2TSPKmFWb7YTqfkGoW1_YGBpb5SXfYY983KIqQb51vnOS2CkOBMd4yh_YAhufOIhccQ8M5v-GFCcqhGhxLCHrMaoCC3JWe9jEuNBFE8Hpg_pPaK43cjeA_s9gMZUG1kwaBRJKyGeFixt72hsRz9ORy2j6U6NfT-hvyYYGz9a9yqC8V0o-XXt3znTaPAB_OPR0xR" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden"></div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full font-bold text-[10px]">RESCUE READY</span>
                  <span className="text-on-surface-variant text-[12px] font-bold">• Ready in 15m</span>
                </div>
                <h3 className="font-headline-md text-[24px] font-bold text-primary mb-3">Premium Salad Bowls</h3>
                <p className="font-body-md text-[16px] text-on-surface-variant mb-6">
                  Assorted daily salads including Caesar, Mediterranean, and Quinoa bowls. Perfectly fresh, packaged for easy transport.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="font-bold text-on-surface-variant uppercase text-[10px] tracking-widest mb-1">Quantity</p>
                    <p className="font-headline-md text-[20px] font-bold text-on-surface">8 Bowls</p>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface-variant uppercase text-[10px] tracking-widest mb-1">Price</p>
                    <p className="font-headline-md text-[20px] font-bold text-tertiary-fixed">Free</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="bg-primary text-on-primary font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(110,255,132,0.3)] transition-all cursor-pointer">
                    <span className="material-symbols-outlined">edit</span>
                    Quick Edit
                  </button>
                  <button className="p-3 rounded-full border border-outline-variant text-on-surface-variant hover:text-error hover:border-error transition-all cursor-pointer">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Listing Card 5: Expiring Soon Small Card */}
          <div className="bg-surface-container/60 backdrop-blur-md border border-[#537f61]/20 rounded-3xl p-6 flex flex-col justify-between border-l-8 border-l-error">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="bg-error/10 text-error p-3 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined">warning</span>
                </div>
                <span className="text-error font-bold text-[14px]">EXPIRING</span>
              </div>
              <h3 className="font-headline-md text-[20px] font-bold text-on-surface mb-2">Daily Pastry Mix</h3>
              <p className="text-on-surface-variant text-[14px]">Expiring in 18 minutes. Boost listing?</p>
            </div>
            <div className="mt-8">
              <button className="w-full bg-error-container text-on-error-container py-3 rounded-full font-bold hover:bg-error-container/80 transition-colors cursor-pointer">
                Close Listing Now
              </button>
            </div>
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
