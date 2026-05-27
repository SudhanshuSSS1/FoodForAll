import React, { useEffect, useState } from 'react';

export default function Mission() {
  const [progressWidth, setProgressWidth] = useState('0%');
  const [alertPing, setAlertPing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setProgressWidth('75%'), 300);
    const interval = setInterval(() => {
      setAlertPing(true);
      setTimeout(() => setAlertPing(false), 1500);
    }, 4000);
    return () => { clearTimeout(timer); clearInterval(interval); };
  }, []);

  return (
    <section id="mission" className="py-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          {/* primary = #6bfc81 — bright accent on dark bg */}
          <h2 className="font-headline text-3xl md:text-headline-lg text-primary mb-3">Our Local Mission</h2>
          {/* on-surface-variant = #88b695 — readable muted text */}
          <p className="font-body text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Connecting surplus from local grocers directly to those who value it, ensuring no good meal goes to waste.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-12 gap-6">

          {/* Bento Item 1: Rescue Nearing Expiry */}
          <div className="md:col-span-8 bg-surface-container-high rounded-xl p-6 md:p-12 flex flex-col md:flex-row gap-6 items-center overflow-hidden border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
            <div className="flex-1">
              <h3 className="font-headline text-2xl text-primary mb-3">Rescue Nearing Expiry</h3>
              {/* on-surface = #ccfcd9 for body text */}
              <p className="font-body text-body-md text-on-surface mb-6">
                Stores can quickly list items reaching their best-by dates. It's a simple, fast process that keeps shelves rotating and hearts full.
              </p>
              <ul className="space-y-2">
                {/* primary-fixed = #6bfc81 — bright green list items */}
                <li className="flex items-center gap-2 font-label text-label-md text-primary-fixed">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Reduce inventory loss
                </li>
                <li className="flex items-center gap-2 font-label text-label-md text-primary-fixed">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Support local families
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full h-48 md:h-full rounded-xl overflow-hidden shadow-sm">
              <img
                alt="Fresh Produce"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpcuz-IiC6QMUjMO16YivcgQyEKoAUrVp0juMnTP07Tvl_k4dSXk0H8DGRcurvHtN-yUAhDy02l-N-KxrVGjijTbD4qyv2U6AaoXHAWsZ8HJm3TAgyUlxpeJdYlUHxr2M0kz3NCxOxDFFsUWc_3NzCbOJpQUkjsqC5d9qYGWFuAndHlHQ6QAG65pBruxv_Z8i4OyLjoLCJoD7g9MxoffLgnP6H1a_N6PAigCOkh34ZFjTp27kQvfXr6K1-urJP_gd6wbTVU-zCBo79"
              />
            </div>
          </div>

          {/* Bento Item 2: Low Cost or Free */}
          {/* primary-container=#11b948 bg — use on-primary-container=#002a09 for dark text */}
          <div className="md:col-span-4 bg-primary-container rounded-xl p-6 flex flex-col justify-between border border-primary/20 hover:shadow-[0_0_30px_rgba(17,185,72,0.3)] transition-all duration-300">
            <div>
              <span className="material-symbols-outlined text-[48px] mb-6 text-on-primary-container block animate-bounce" style={{ fontVariationSettings: "'FILL' 0" }}>
                volunteer_activism
              </span>
              <h3 className="font-headline text-2xl mb-3 text-on-primary-container">Low Cost or Free</h3>
            </div>
            <p className="font-body text-body-md text-on-primary-container/90">
              Dignity is at the heart of our platform. Choose how you contribute or find what you need with total transparency.
            </p>
          </div>

          {/* Bento Item 3: Real-time Alerts */}
          {/* secondary-fixed=#7df7ae bg — on-secondary-fixed=#004828 dark text */}
          <div className="md:col-span-4 bg-secondary-fixed rounded-xl p-6 flex flex-col border border-secondary/20 hover:shadow-[0_0_30px_rgba(125,247,174,0.3)] transition-all duration-300">
            <h3 className="font-headline text-2xl mb-3 text-on-secondary-fixed">Real-time Alerts</h3>
            <p className="font-body text-body-md mb-6 text-on-secondary-fixed font-medium">
              Get notified the moment a listing goes live in your neighborhood. Fresh food waits for no one!
            </p>
            <div className="mt-auto bg-black/10 p-3 rounded-lg border border-black/10">
              <div className="flex items-center gap-2 font-caption text-caption text-on-secondary-fixed font-bold">
                <span className={`material-symbols-outlined text-sm ${alertPing ? 'animate-ping text-on-secondary-fixed-variant' : 'text-on-secondary-fixed'}`}>
                  notifications_active
                </span>
                <span>New Surplus nearby!</span>
              </div>
            </div>
          </div>

          {/* Bento Item 4: Track Your Impact */}
          <div className="md:col-span-8 bg-surface-container-highest rounded-xl p-6 md:p-12 border border-outline-variant/20 hover:border-primary/30 transition-all duration-300">
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="font-headline text-2xl text-primary mb-3">Track Your Impact</h3>
                <p className="font-body text-body-md text-on-surface">
                  See exactly how many pounds of food you've saved and the carbon footprint reduced. Community health is measurable.
                </p>
              </div>
              {/* White card — use dark text colors for readability */}
              <div className="bg-white rounded-xl p-6 card-shadow border border-outline-variant/30">
                <div className="flex justify-between mb-2">
                  {/* surface = #001206 is very dark — good on white */}
                  <span className="font-label text-label-md text-surface font-bold">Goal: 500 lbs</span>
                  {/* secondary-container = #006d3f — dark green, readable on white */}
                  <span className="font-label text-label-md text-secondary-container font-bold">75%</span>
                </div>
                <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden">
                  <div
                    style={{ width: progressWidth }}
                    className="bg-primary-container h-full transition-all duration-[1500ms] ease-out rounded-full"
                  />
                </div>
                <p className="font-caption text-caption text-gray-500 mt-2">375 lbs rescued so far</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
