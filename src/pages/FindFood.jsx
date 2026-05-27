import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All Items', 'Free', 'Paid', 'Bakery', 'Produce', 'Ready Meals'];

const mockItems = [
  {
    id: 1,
    name: 'Artisan Bakery Co.',
    title: 'Mixed pastry bag and whole wheat loaves.',
    price: 'FREE',
    distance: '0.5 miles away',
    timeLeft: '2h left',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuqh5NppJi9r3KWQ4oIri6qtbUgwm8ToCaSxcA2RzCC1_muyW1AkyJAd_alKerIl9x4GhgFKxsAMqqNlxYhfPMmM7ciGtO22m-hu_2zM58Cf-yh_fmS9G8VTee87-v1r65gAzel2CQFUqrSOtxOzFdMz7UeC-_VikRwxf0lYd1b-nTJgAHvjhxOgWoDcr4_dg1bzs0leLuND5LY7MawpM4MmezGuDLMYyLgo_To3EV57mgCr_w1vjf-UnWPphK7qfiD9NhCthCwuaA',
    categories: ['Free', 'Bakery'],
  },
  {
    id: 2,
    name: 'Green Grocers',
    title: 'Organic vegetable surplus box (5kg).',
    price: '$3.50',
    distance: '1.2 miles away',
    timeLeft: '4h left',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQlLJwR2HESbmNrNLf8YHUOHATNxm5I2lR73W9VtubD6sXFTkc0_wJbH7WxKO3uRwvyJ2NNaMso3M-IQem4R7FROqR8uOdHx-_dbwvl5rGn54GkvjVcsj7Nzaiomu_cFjTf3S94OJgdeIhc7KB42mw-il505dN9-RT3rvgl2gbnHVFEVO3lgtXNwGz8uwpVNaMqQpW69pFepff0KGSNLpY_el40Oit0dRlCzgFJpGyViKu67vg23o0s4j-BilmaJUOxGShlyr6OiGY',
    categories: ['Paid', 'Produce'],
  },
  {
    id: 3,
    name: 'Healthy Habits Cafe',
    title: 'Salmon Poke Bowl & Green Smoothie.',
    price: '$4.99',
    distance: '0.8 miles away',
    timeLeft: '45m left',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdJbb1wpK2UKGVQddpLHI80_DOTOpDvG6BuvbkExfgRB02asO9vXksZyNZ0DzyYcIRU_Ub_2IpcGOCtIaU8CKY3It95sqTBnfWBOga_YEjwUoeLtpiTypbPS_EzkPmggVatzOvkxEcu8FUNiMHZ1Bvd3h8fQlm1K0f0RCRHxMtqsQC06oBBZnrzSfiVUo7KQM5__41zIYmdiOrKYZaBNUNQia74rWhvifzPmgjVKF7TRLySOtNGcTKYj3oQOZfklph0e6ds5LiCU4R',
    categories: ['Paid', 'Ready Meals'],
  },
  {
    id: 4,
    name: 'Sunnyside Market',
    title: 'Box of seasonal mixed fruits.',
    price: 'FREE',
    distance: '2.5 miles away',
    timeLeft: '3h left',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZuv351QYJGV5F8vx2ofniGcrS2INbXGJy1Tqc-XASNWeQcX2V0a7of03evOcAFQKDh9txdeUib3ymrx8g8jqJCx5hG4PodLIqAeOaCztIkw0JriJ0Pkd9pIqsdXKcAy7QuSgEL8ibzYwgO6L-9YSc6CnSjxlUFse-aXNMKTBxwWbaQET4GyGASLhkCZmqVTJsmu8zC20n-7c-_1t6TvL9l1xgq0O_hfS21On_e2LTrSzZeKw7qfX7HXTrs-P75iwjOTjLR4T9N1Zo',
    categories: ['Free', 'Produce'],
  }
];

const FindFood = () => {
  const [view, setView] = useState('list');
  const [activeCategory, setActiveCategory] = useState('All Items');

  const filteredItems = activeCategory === 'All Items'
    ? mockItems
    : mockItems.filter(item => item.categories.includes(activeCategory));

  return (
    <main className="max-w-[1280px] mx-auto px-6 py-6 pt-24 min-h-screen">
      {/* Search & Discovery Header */}
      <section className="mb-20 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="font-headline-lg text-headline-lg text-primary">Discover Surplus Near You</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Rescue delicious food and support your community.</p>
          </div>
          {/* View Toggle */}
          <div className="flex bg-surface-container rounded-full p-1 self-start">
            <button
              onClick={() => setView('list')}
              className={`px-6 py-1 rounded-full font-label-md text-label-md transition-all flex items-center gap-1 ${
                view === 'list'
                  ? 'bg-surface-container-lowest text-primary shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-variant'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">grid_view</span> List
            </button>
            <button
              onClick={() => setView('map')}
              className={`px-6 py-1 rounded-full font-label-md text-label-md transition-all flex items-center gap-1 ${
                view === 'map'
                  ? 'bg-surface-container-lowest text-primary shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-variant'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">map</span> Map
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-center">
          <div className="lg:col-span-4 relative group">
            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">search</span>
            <input
              className="w-full pl-20 pr-6 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary-container font-body-md text-body-md"
              placeholder="Search stores or food types..."
              type="text"
            />
          </div>
          <div className="lg:col-span-8 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 px-6 py-1 rounded-full font-label-md text-label-md transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-container text-on-primary-container'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-outline-variant'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Feed Grid */}
      <section className="transition-all duration-500" id="discoveryCanvas">
        {/* List View */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${view === 'list' ? '' : 'hidden'}`} id="listView">
          {filteredItems.map(item => (
            <Link key={item.id} to={`/item/${item.id}`} className="bg-surface-container-lowest rounded-xl overflow-hidden card-shadow group cursor-pointer hover:-translate-y-1 transition-all block">
              <div className="h-48 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={item.title}
                  src={item.img}
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-secondary text-[16px]">timer</span>
                  <span className="font-label-md text-[12px] text-secondary">{item.timeLeft}</span>
                </div>
              </div>
              <div className="p-6 space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-md text-body-lg text-primary">{item.name}</h3>
                  <span className={`font-label-md text-label-md font-bold ${item.price === 'FREE' ? 'text-secondary' : 'text-primary'}`}>
                    {item.price}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span className="font-body-md text-caption">{item.distance}</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-1">{item.title}</p>
                <div className="w-full text-center mt-6 py-2 rounded-lg border-2 border-primary-container text-primary font-label-md text-label-md group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">View Details</div>
              </div>
            </Link>
          ))}
          {filteredItems.length === 0 && (
            <div className="col-span-full py-12 text-center text-on-surface-variant">
              <span className="material-symbols-outlined text-4xl mb-2 opacity-50">search_off</span>
              <p className="font-body-md">No surplus items found in this category.</p>
            </div>
          )}
        </div>

        {/* Map View */}
        <div className={`h-[600px] w-full bg-surface-container rounded-xl overflow-hidden card-shadow relative ${view === 'map' ? '' : 'hidden'}`} id="mapView">
          <div className="w-full h-full bg-[#f2f0ed]" data-location="San Francisco">
            {/* Pseudo-map UI */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <span className="material-symbols-outlined text-[400px]">map</span>
            </div>
            {/* Pins */}
            <div className="absolute top-1/4 left-1/3 group cursor-pointer">
              <div className="bg-primary text-white p-1 rounded-full shadow-lg flex items-center gap-1 px-2 py-1 active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-[20px]">bakery_dining</span>
                <span className="font-label-md text-[12px]">Artisan Bakery</span>
              </div>
              <div className="w-4 h-4 bg-primary rotate-45 -mt-2 mx-auto shadow-lg"></div>
            </div>
            <div className="absolute top-1/2 left-2/3 group cursor-pointer">
              <div className="bg-secondary text-white p-1 rounded-full shadow-lg flex items-center gap-1 px-2 py-1 active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-[20px]">nutrition</span>
                <span className="font-label-md text-[12px]">Green Grocers</span>
              </div>
              <div className="w-4 h-4 bg-secondary rotate-45 -mt-2 mx-auto shadow-lg"></div>
            </div>
            <div className="absolute bottom-1/3 left-1/2 group cursor-pointer">
              <div className="bg-primary text-white p-1 rounded-full shadow-lg flex items-center gap-1 px-2 py-1 active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-[20px]">restaurant</span>
                <span className="font-label-md text-[12px]">Healthy Habits</span>
              </div>
              <div className="w-4 h-4 bg-primary rotate-45 -mt-2 mx-auto shadow-lg"></div>
            </div>
            {/* Map Controls */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-1">
              <button className="bg-surface-container-lowest p-2 rounded-lg shadow-md hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-on-surface">add</span>
              </button>
              <button className="bg-surface-container-lowest p-2 rounded-lg shadow-md hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-on-surface">remove</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 bg-primary-container rounded-xl p-12 text-on-primary-container relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg mb-2">Become a Surplus Partner</h2>
          <p className="font-body-md text-body-lg mb-6 text-on-primary-container/90">Join local stores in fighting food waste. List your surplus today and help feed your community while reducing your footprint.</p>
          <div className="flex flex-wrap gap-2">
            <button className="bg-on-primary-container text-primary-container px-12 py-2 rounded-full font-label-md text-label-md hover:bg-surface-bright transition-colors">List Your Surplus</button>
            <button className="bg-transparent border-2 border-on-primary-container text-on-primary-container px-12 py-2 rounded-full font-label-md text-label-md hover:bg-on-primary-container/10 transition-colors">Learn More</button>
          </div>
        </div>
        {/* Decorative Blobs */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-on-primary-container/10 blob-shape"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/20 blob-shape -translate-y-1/2 translate-x-1/2"></div>
      </section>
    </main>
  );
};

export default FindFood;
