import React from 'react';

const statsData = [
  { value: '10k+', label: 'Meals Shared' },
  { value: '500+', label: 'Local Vendors' },
  { value: '12', label: 'Active Cities' },
  { value: '1.2k', label: 'Impact Reports' },
];

export default function Stats() {
  return (
    <section className="py-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {statsData.map((stat, i) => (
          <div
            key={i}
            className="text-center p-6 bg-surface-container-high rounded-xl card-shadow border border-outline-variant/20 hover:translate-y-[-4px] transition-transform duration-300"
          >
            {/* primary = #6bfc81 — bright green number on dark card */}
            <div className="text-primary font-display text-[32px] md:text-headline-lg font-bold mb-1">
              {stat.value}
            </div>
            {/* on-surface-variant = #88b695 — muted readable label */}
            <div className="font-label text-label-md text-on-surface-variant font-semibold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
