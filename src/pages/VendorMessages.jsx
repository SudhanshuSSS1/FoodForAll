import React from 'react';
import { Link } from 'react-router-dom';

export default function VendorMessages() {
  return (
    <div className="bg-surface text-on-surface h-screen font-body overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col h-[calc(100vh-64px)] w-64 fixed left-0 top-16 bg-surface-container shadow-md p-6 space-y-2 z-50 border-r border-outline-variant/30">
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
          <Link className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant rounded-xl transition-colors" to="/vendor/analytics">
            <span className="material-symbols-outlined">leaderboard</span>
            <span className="font-label-md text-label-md">Analytics</span>
          </Link>
          {/* Active State: Messages */}
          <Link className="flex items-center space-x-3 px-3 py-2 bg-primary-container text-on-primary-container rounded-xl scale-[0.98] transition-all font-bold" to="/vendor/messages">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
            <span className="font-label-md text-label-md">Messages</span>
          </Link>
        </nav>
        
        <button className="w-full py-3 bg-primary text-on-primary-container font-label-md text-label-md rounded-full font-bold active:scale-95 transition-transform hover:brightness-110">
          Post New Item
        </button>
      </aside>

      {/* Main Content Canvas */}
      <main className="md:ml-64 h-[calc(100vh-64px)] mt-16 flex flex-row">
        {/* Conversation List Sidebar */}
        <section className="w-80 md:w-96 border-r border-outline-variant/50 flex flex-col bg-surface-container-low">
          <div className="p-6 space-y-3">
            <h2 className="font-headline-md text-[24px] font-bold text-primary-dim">Conversations</h2>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]">search</span>
              <input className="w-full bg-surface-variant border-none rounded-lg pl-10 py-2 text-[16px] focus:ring-2 focus:ring-primary-dim text-on-surface outline-none" placeholder="Search chats..." type="text"/>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#255036] [&::-webkit-scrollbar-thumb]:rounded-full">
            {/* Thread 1 (Active) */}
            <div className="p-6 flex items-start gap-3 cursor-pointer bg-surface-container-high border-l-4 border-primary transition-all">
              <div className="relative flex-shrink-0">
                <img className="w-12 h-12 rounded-full border-2 border-primary-dim object-cover" alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeFz2QXQgTV1jqHVJaCB6dJjoZ1hpMPCD964C-LlQltCYTdOb5awpuqpt8j09Hh81QX0kClXvHxqRTZwTGGvPj2CXgfDjmKsfvVJFx86OMi33rN4fc14pXnekFzjOev_abKXMN2wDQHCtGqMJO61ieBAwcnToAzpD-_kEt7wtmlGfGoHz5oBNoCEy57fkufkrOxgD8WzUrOoCjDfFQPTa0nhz0ow4dSce0uU1mqvLm9f7ux8rcmY2r79Aeir_Tbvg8ducmtTHno_SP"/>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-surface-container-high"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-md text-[14px] text-on-surface font-bold truncate">Sarah Jenkins</span>
                  <span className="font-caption text-[12px] text-primary-dim">12:45 PM</span>
                </div>
                <p className="font-body-md text-[16px] text-on-surface-variant truncate">Is the sourdough bread still available for pickup tonight?</p>
              </div>
            </div>
            
            {/* Thread 2 */}
            <div className="p-6 flex items-start gap-3 cursor-pointer hover:bg-surface-variant transition-all border-l-4 border-transparent">
              <div className="relative flex-shrink-0">
                <img className="w-12 h-12 rounded-full border-2 border-transparent object-cover" alt="Marcus Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANOMEGTN_M3gZKrcece4yCU75-aeIDVr6QBrrEvhOeeohchb0zUxBXiyDSIdDq3d6bVQhp7ZGEt8vbcHwAPID8E1fERP_U2C3stVkNc4R3TM08zBS53_13omUBBYb6aXJZE0IT6zPgTCpQ3mVFogl1NdLp90eqcUPfhzG05JiGy1d8ZA8-fPkk5-gsFy5JkwCgc5knY36lRzntXLBayjcMUmAanpIgETlmVbLjtPcMao4q7SS-zjZT2Obd56BjcyyPrZKHFYHAfhfk"/>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-md text-[14px] text-on-surface font-bold truncate">Marcus Chen</span>
                  <span className="font-caption text-[12px] text-on-surface-variant">2h ago</span>
                </div>
                <p className="font-body-md text-[16px] text-on-surface-variant truncate">Thank you so much for the fresh produce last week!</p>
              </div>
            </div>
            
            {/* Thread 3 */}
            <div className="p-6 flex items-start gap-3 cursor-pointer hover:bg-surface-variant transition-all border-l-4 border-transparent">
              <div className="relative flex-shrink-0">
                <img className="w-12 h-12 rounded-full border-2 border-transparent object-cover" alt="Elena Rodriguez" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVuy9GLFGwlyZ1wNXiDzwa_8LwjSa6NBkYyeQZM9qXRnVDPDOTpm7D5bUqs-ogQ2vHKKXYKQzu0_84aZiGt9j9-4By0PZS5AsEscL3M1TDhuKe6ISR3W3XHCKnboWP31dBt2t539aq12JwbZ36JejOaowDu9CAXihknU319DiFR9bHhaBbzazv02GK587JfqX_2sysO6FtnOk5nxiRFXyOszbotzAN8EWpHFLfP2XjmNai7lUHVasyAGm2oOt_-GWEO7Z__5ZvUcCd"/>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-on-surface-variant rounded-full border-2 border-surface-container-high"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-md text-[14px] text-on-surface font-bold truncate">Elena Rodriguez</span>
                  <span className="font-caption text-[12px] text-on-surface-variant">Yesterday</span>
                </div>
                <p className="font-body-md text-[16px] text-on-surface-variant truncate font-bold text-on-surface">Great, see you at 6:00 PM.</p>
              </div>
            </div>
            
            {/* Additional Placeholder Threads */}
            <div className="p-6 flex items-start gap-3 cursor-pointer hover:bg-surface-variant transition-all opacity-80 border-l-4 border-transparent">
              <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center">
                <span className="material-symbols-outlined text-outline">person</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-label-md text-[14px] text-on-surface font-bold truncate">Community Hub</span>
                  <span className="font-caption text-[12px] text-on-surface-variant">2 days</span>
                </div>
                <p className="font-body-md text-[16px] text-on-surface-variant truncate">Volunteer schedule for Friday updated.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Chat Area */}
        <section className="flex-1 flex flex-col bg-surface overflow-hidden">
          {/* Chat Header */}
          <header className="h-20 flex items-center justify-between px-6 border-b border-outline-variant/50 bg-surface shadow-sm flex-shrink-0">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-full border border-primary-dim object-cover" alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeFz2QXQgTV1jqHVJaCB6dJjoZ1hpMPCD964C-LlQltCYTdOb5awpuqpt8j09Hh81QX0kClXvHxqRTZwTGGvPj2CXgfDjmKsfvVJFx86OMi33rN4fc14pXnekFzjOev_abKXMN2wDQHCtGqMJO61ieBAwcnToAzpD-_kEt7wtmlGfGoHz5oBNoCEy57fkufkrOxgD8WzUrOoCjDfFQPTa0nhz0ow4dSce0uU1mqvLm9f7ux8rcmY2r79Aeir_Tbvg8ducmtTHno_SP"/>
              <div>
                <h3 className="font-headline-md text-[24px] font-bold text-on-surface leading-tight">Sarah Jenkins</h3>
                <p className="font-caption text-[12px] text-primary flex items-center gap-1 font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="p-3 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors cursor-pointer">
                <span className="material-symbols-outlined">call</span>
              </button>
              <button className="p-3 text-on-surface-variant hover:bg-surface-variant rounded-full transition-colors cursor-pointer">
                <span className="material-symbols-outlined">info</span>
              </button>
            </div>
          </header>
          
          {/* Message History */}
          <div className="flex-1 overflow-y-auto p-12 space-y-12 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#255036] [&::-webkit-scrollbar-thumb]:rounded-full bg-[radial-gradient(circle_at_top_right,rgba(0,45,22,0.2),#001206)]">
            {/* Date Separator */}
            <div className="flex justify-center">
              <span className="px-6 py-1 bg-surface-container rounded-full text-[12px] font-bold text-on-surface-variant">Today</span>
            </div>
            
            {/* Incoming Message */}
            <div className="flex items-end gap-3 max-w-[80%]">
              <img className="w-8 h-8 rounded-full mb-2 object-cover" alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeFz2QXQgTV1jqHVJaCB6dJjoZ1hpMPCD964C-LlQltCYTdOb5awpuqpt8j09Hh81QX0kClXvHxqRTZwTGGvPj2CXgfDjmKsfvVJFx86OMi33rN4fc14pXnekFzjOev_abKXMN2wDQHCtGqMJO61ieBAwcnToAzpD-_kEt7wtmlGfGoHz5oBNoCEy57fkufkrOxgD8WzUrOoCjDfFQPTa0nhz0ow4dSce0uU1mqvLm9f7ux8rcmY2r79Aeir_Tbvg8ducmtTHno_SP"/>
              <div className="space-y-1">
                <div className="bg-surface-container p-6 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl text-[16px] text-on-surface border border-outline-variant">
                  Hi there! I saw the listing for the surplus bakery items from Green Grocers.
                </div>
                <span className="font-caption text-[12px] text-on-surface-variant block ml-6">12:40 PM</span>
              </div>
            </div>
            
            {/* Incoming Message 2 */}
            <div className="flex items-end gap-3 max-w-[80%]">
              <div className="w-8 flex-shrink-0"></div>
              <div className="space-y-1">
                <div className="bg-surface-container p-6 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl text-[16px] text-on-surface border border-outline-variant">
                  Is the sourdough bread still available for pickup tonight? I can come by around 7:00 PM if that works.
                </div>
              </div>
            </div>
            
            {/* Outgoing Message */}
            <div className="flex items-end justify-end gap-3 ml-auto max-w-[80%]">
              <div className="space-y-1 text-right">
                <div className="bg-primary-container p-6 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl text-[16px] text-on-primary-container shadow-lg shadow-primary/10">
                  Hello Sarah! Yes, we have 3 loaves of sourdough and some baguettes available. 7:00 PM is perfect—we'll have them packed for you.
                </div>
                <div className="flex items-center justify-end gap-1 font-caption text-[12px] text-primary-dim">
                  <span>12:44 PM</span>
                  <span className="material-symbols-outlined text-[14px]">done_all</span>
                </div>
              </div>
            </div>
            
            {/* Incoming Message 3 */}
            <div className="flex items-end gap-3 max-w-[80%]">
              <img className="w-8 h-8 rounded-full mb-2 object-cover" alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeFz2QXQgTV1jqHVJaCB6dJjoZ1hpMPCD964C-LlQltCYTdOb5awpuqpt8j09Hh81QX0kClXvHxqRTZwTGGvPj2CXgfDjmKsfvVJFx86OMi33rN4fc14pXnekFzjOev_abKXMN2wDQHCtGqMJO61ieBAwcnToAzpD-_kEt7wtmlGfGoHz5oBNoCEy57fkufkrOxgD8WzUrOoCjDfFQPTa0nhz0ow4dSce0uU1mqvLm9f7ux8rcmY2r79Aeir_Tbvg8ducmtTHno_SP"/>
              <div className="space-y-1">
                <div className="bg-surface-container p-6 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl text-[16px] text-on-surface border border-outline-variant">
                  That's amazing! Thank you so much for doing this. I'll see you then!
                </div>
                <span className="font-caption text-[12px] text-on-surface-variant block ml-6">12:45 PM</span>
              </div>
            </div>
            
            {/* System Message / Chip */}
            <div className="flex justify-center pt-6">
              <div className="flex items-center gap-2 px-6 py-2 bg-tertiary-container/10 border border-tertiary-container/30 rounded-xl">
                <span className="material-symbols-outlined text-tertiary-dim text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                <span className="font-label-md text-[14px] text-tertiary font-bold">Pickup confirmed for 7:00 PM</span>
              </div>
            </div>
          </div>
          
          {/* Input Area */}
          <footer className="p-6 bg-surface border-t border-outline-variant/50 flex-shrink-0">
            <div className="flex items-center gap-3 max-w-4xl mx-auto">
              <button className="p-3 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">add_circle</span>
              </button>
              <button className="p-3 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">image</span>
              </button>
              <div className="flex-1 relative">
                <input className="w-full bg-surface-container-high border border-outline-variant rounded-full px-6 py-3 text-[16px] text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Type a message..." type="text"/>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-tertiary-dim hover:scale-110 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined">sentiment_satisfied</span>
                </button>
              </div>
              <button className="w-12 h-12 flex items-center justify-center bg-primary text-on-primary-container rounded-full shadow-lg hover:shadow-[0_4px_14px_rgba(110,255,132,0.2)] active:scale-95 transition-all cursor-pointer">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </button>
            </div>
          </footer>
        </section>
        
        {/* Right Detail Panel */}
        <section className="w-64 border-l border-outline-variant/50 bg-surface-container-low hidden lg:flex flex-col p-6">
          <h4 className="font-label-md text-[14px] font-bold text-primary-dim mb-6 uppercase tracking-wider">Rescue Details</h4>
          <div className="bg-surface-variant rounded-xl p-6 mb-6 border border-outline-variant">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-primary">shopping_basket</span>
              <span className="font-label-md text-[14px] font-bold text-on-surface">Artisan Sourdough</span>
            </div>
            <div className="flex justify-between text-[12px] font-medium text-on-surface-variant mb-1">
              <span>Quantity</span>
              <span className="text-on-surface">3 Units</span>
            </div>
            <div className="flex justify-between text-[12px] font-medium text-on-surface-variant">
              <span>Expiry</span>
              <span className="text-error font-bold">Today</span>
            </div>
          </div>
          
          <h4 className="font-label-md text-[14px] font-bold text-primary-dim mb-6 uppercase tracking-wider">Recipient Info</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-on-surface-variant text-[16px]">verified_user</span>
              <span className="font-caption text-[12px] text-on-surface font-bold">Community Hero Level 4</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-on-surface-variant text-[16px]">history</span>
              <span className="font-caption text-[12px] text-on-surface font-bold">12 successful rescues</span>
            </div>
          </div>
          
          <div className="mt-auto">
            <button className="w-full py-2 border border-outline text-on-surface-variant font-bold text-[14px] rounded-lg hover:bg-surface-variant transition-colors cursor-pointer">
              Report User
            </button>
          </div>
        </section>
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
        <Link className="flex flex-col items-center space-y-1 text-on-surface-variant hover:text-primary transition-colors" to="/vendor/listings">
          <span className="material-symbols-outlined">fastfood</span>
          <span className="text-[10px]">Listings</span>
        </Link>
        <Link className="flex flex-col items-center space-y-1 text-on-surface-variant hover:text-primary transition-colors" to="/vendor/analytics">
          <span className="material-symbols-outlined">leaderboard</span>
          <span className="text-[10px]">Analytics</span>
        </Link>
        <Link className="flex flex-col items-center space-y-1 text-primary" to="/vendor/messages">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
          <span className="text-[10px] font-bold">Messages</span>
        </Link>
      </nav>
    </div>
  );
}
