import React from 'react';
import { Link } from 'react-router-dom';

export default function VendorInventory() {
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
          {/* ACTIVE TAB: Inventory */}
          <Link className="flex items-center space-x-3 px-3 py-2 bg-primary-container text-on-primary-container rounded-xl scale-[0.98] transition-all font-bold" to="/vendor/inventory">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
            <span className="font-label-md text-label-md">Inventory</span>
          </Link>
          <Link className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant rounded-xl transition-colors" to="/vendor/listings">
            <span className="material-symbols-outlined">fastfood</span>
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
      <main className="md:ml-64 p-6 min-h-screen">
        {/* Header Area */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="font-headline-lg text-[32px] font-bold text-on-surface mb-1">Inventory Management</h2>
            <p className="font-body-md text-[16px] text-on-surface-variant opacity-80">Manage your stock levels and prepare items for rescue listings.</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
              <input 
                className="bg-surface-container-high border-none rounded-lg pl-10 pr-4 py-2 w-full md:w-64 text-on-surface focus:ring-2 focus:ring-primary placeholder:text-on-surface-variant/50 outline-none" 
                placeholder="Search inventory..." 
                type="text"
              />
            </div>
            <button className="flex items-center space-x-1 px-6 py-2 bg-tertiary-container text-on-tertiary-container font-label-md text-label-md rounded-full font-bold hover:brightness-110 transition-all shadow-md shadow-tertiary-container/10">
              <span className="material-symbols-outlined">add</span>
              <span>Add New Item</span>
            </button>
          </div>
        </header>

        {/* Metrics Bento Grid (High-end UI Pattern) */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface-container/60 backdrop-blur-md border border-[#537f61]/20 p-6 rounded-3xl flex flex-col justify-between border-l-4 border-l-primary hover:bg-surface-container transition-colors">
            <span className="text-on-surface-variant font-label-md text-[14px] font-semibold">Total Stock</span>
            <div className="flex items-end justify-between mt-4">
              <span className="font-display-lg text-[48px] font-bold text-primary leading-none">1,284</span>
              <span className="text-[#5ff077] text-[12px] font-medium flex items-center mb-1 bg-[#5ff077]/10 px-2 py-0.5 rounded-full">
                <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>+12%
              </span>
            </div>
          </div>
          <div className="bg-surface-container/60 backdrop-blur-md border border-[#537f61]/20 p-6 rounded-3xl flex flex-col justify-between border-l-4 border-l-tertiary hover:bg-surface-container transition-colors">
            <span className="text-on-surface-variant font-label-md text-[14px] font-semibold">Ready to List</span>
            <div className="flex items-end justify-between mt-4">
              <span className="font-display-lg text-[48px] font-bold text-tertiary leading-none">42</span>
              <span className="text-tertiary-fixed-dim text-[12px] font-medium mb-1 bg-tertiary-fixed-dim/10 px-2 py-0.5 rounded-full">High Priority</span>
            </div>
          </div>
          <div className="bg-surface-container/60 backdrop-blur-md border border-[#537f61]/20 p-6 rounded-3xl flex flex-col justify-between border-l-4 border-l-error hover:bg-surface-container transition-colors">
            <span className="text-on-surface-variant font-label-md text-[14px] font-semibold">Expiring Soon</span>
            <div className="flex items-end justify-between mt-4">
              <span className="font-display-lg text-[48px] font-bold text-error leading-none">12</span>
              <span className="text-error-dim text-[12px] font-medium mb-1 bg-error-dim/10 px-2 py-0.5 rounded-full">Next 24h</span>
            </div>
          </div>
          <div className="relative overflow-hidden bg-surface-container/60 backdrop-blur-md border border-[#537f61]/20 p-6 rounded-3xl group cursor-pointer border-l-4 border-l-secondary hover:bg-surface-container transition-colors">
            <div className="relative z-10">
              <span className="text-on-surface-variant font-label-md text-[14px] font-semibold">Inventory Health</span>
              <div className="mt-4 h-2 bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[85%] rounded-full"></div>
              </div>
              <p className="text-[12px] mt-2 text-on-surface-variant opacity-80">Excellent condition</p>
            </div>
          </div>
        </section>

        {/* Inventory Table Section */}
        <div className="bg-surface-container/60 backdrop-blur-md rounded-2xl overflow-hidden border border-[#255036]">
          <div className="p-6 flex items-center justify-between bg-surface-container-high/50 border-b border-[#255036]">
            <h3 className="font-headline-md text-[24px] font-bold text-on-surface">Items in Stock</h3>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-surface-variant rounded-lg transition-colors cursor-pointer text-on-surface-variant">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
              <button className="p-2 hover:bg-surface-variant rounded-lg transition-colors cursor-pointer text-on-surface-variant">
                <span className="material-symbols-outlined">sort</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-[#255036]">
                  <th className="px-6 py-4 font-label-md text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Item Name</th>
                  <th className="px-6 py-4 font-label-md text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 font-label-md text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Stock Level</th>
                  <th className="px-6 py-4 font-label-md text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">Last Updated</th>
                  <th className="px-6 py-4 font-label-md text-[12px] font-bold text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#255036]/50">
                {/* Row 1 */}
                <tr className="hover:bg-primary/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-variant flex-shrink-0">
                        <img alt="Bell Peppers" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNlykT06TD_bL4gF7JuKaXUBPvhpYQFyRtwUaDf0gDOsPG6ZhIf620vCVdGM3xk0K3fXZYm6OUBKey1W5vCEoEGa9vSWCcC0JI5L4o2ORp_GhFJyXiIsLgyLbjAiiSC_O7lVaUgMRgYA-56rIrFchBLnhNh51wNBy3TyZyuZc5Tt5gOlBS8RmA1_zYiErhJfb9pFnIW1RFtTth_6lgSuujIZqx8HdjLDVguZiYqDL99tgZS1NOxulpLhGMpQ5AOZ2gA9osnuKGnTK9" />
                      </div>
                      <div>
                        <span className="block font-label-md text-[14px] font-bold text-on-surface">Organic Bell Peppers</span>
                        <span className="text-[12px] font-medium text-on-surface-variant">SKU: VG-001</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[12px] font-bold">Vegetables</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-body-md text-[16px] text-primary font-bold">145 kg</span>
                      <div className="w-16 h-1.5 bg-surface-variant rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[70%] rounded-full"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-body-md text-[16px] text-on-surface-variant">Today, 09:45 AM</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all group-hover:scale-110 cursor-pointer">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-primary/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-variant flex-shrink-0">
                        <img alt="Oranges" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTBEgSY4s7sLwNn1zn0ri8-dwD1o6SABx-vNofQ7JRAucBqOLFERGM2o2i2asSDKTwcv7H6qgnXB4AeU-9BR0zSWk18U1OPnRCFHLTnIIHOfLbPw-jgMR43alPx9qGIfmUtAD_t1z2K4BCktBo5RwoYR8iIUe5MNOA5dfzKbtPJL0iMYImXfjt29Vvc2QJ8NeDtemYcx1mGzAZAZt848B7ZT5iemc7fG-4maT6PrlR4pKOjBAWqJ2fIJZJDhkeFU2zT-OLuvCl6-n-" />
                      </div>
                      <div>
                        <span className="block font-label-md text-[14px] font-bold text-on-surface">Navel Oranges</span>
                        <span className="text-[12px] font-medium text-on-surface-variant">SKU: FR-042</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-[12px] font-bold">Fruits</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-body-md text-[16px] text-error font-bold">12 kg</span>
                      <div className="w-16 h-1.5 bg-surface-variant rounded-full overflow-hidden">
                        <div className="bg-error h-full w-[15%] rounded-full"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-body-md text-[16px] text-on-surface-variant">Oct 24, 2023</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all group-hover:scale-110 cursor-pointer">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-primary/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-surface-variant flex-shrink-0">
                        <img alt="Sourdough" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq6R0xC6qbmFCf9MiQf_ymCIKXe0oldAISuRP9_B-Io5GmU_xO6fo8dk2b1p8EQ8xxBn4W1pGwSAegk-7rHvuNT6TAD8WkD_2KjetpKBM_srhqt21Y52K4q__cd3O2Wx7-D0ABINB7Dw4N9vNZiThZMC0CfJt3538ulmovXgYdWJZeACpDRwis_PNgQ2vkdNqqHJMUYHvTt9FCiTQI_l8hgUXbYyROCA6DnAhvAAiKVu5zxvcwXuCjThZCLkaLiEzg8HsvVIXNTFgw" />
                      </div>
                      <div>
                        <span className="block font-label-md text-[14px] font-bold text-on-surface">Artisan Sourdough</span>
                        <span className="text-[12px] font-medium text-on-surface-variant">SKU: BK-012</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-outline-variant text-on-surface rounded-full text-[12px] font-bold">Bakery</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className="font-body-md text-[16px] text-primary font-bold">48 units</span>
                      <div className="w-16 h-1.5 bg-surface-variant rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[85%] rounded-full"></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-body-md text-[16px] text-on-surface-variant">Today, 06:12 AM</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-all group-hover:scale-110 cursor-pointer">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-surface-container-low border-t border-[#255036] flex items-center justify-between">
            <p className="text-[12px] text-on-surface-variant">Showing 1 to 10 of 248 items</p>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-lg hover:bg-surface-variant text-on-surface-variant cursor-pointer">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="px-3 py-1 bg-primary text-on-primary-container font-bold rounded-lg text-[12px] cursor-pointer">1</button>
              <button className="px-3 py-1 hover:bg-surface-variant rounded-lg text-[12px] cursor-pointer transition-colors text-on-surface">2</button>
              <button className="px-3 py-1 hover:bg-surface-variant rounded-lg text-[12px] cursor-pointer transition-colors text-on-surface">3</button>
              <button className="p-2 rounded-lg hover:bg-surface-variant text-on-surface-variant cursor-pointer">
                <span className="material-symbols-outlined">chevron_right</span>
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
        <Link className="flex flex-col items-center space-y-1 text-primary" to="/vendor/inventory">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
          <span className="text-[10px] font-bold">Inventory</span>
        </Link>
        <div className="relative -top-6">
          <button className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform active:scale-95 cursor-pointer">
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
        </div>
        <Link className="flex flex-col items-center space-y-1 text-on-surface-variant hover:text-primary transition-colors" to="#">
          <span className="material-symbols-outlined">fastfood</span>
          <span className="text-[10px]">Listings</span>
        </Link>
        <Link className="flex flex-col items-center space-y-1 text-on-surface-variant hover:text-primary transition-colors" to="#">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px]">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
