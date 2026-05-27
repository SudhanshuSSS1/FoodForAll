import React from 'react';
import { Link } from 'react-router-dom';

export default function Callout() {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-surface">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary-fixed opacity-10 blob-shape translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-fixed opacity-10 blob-shape -translate-x-1/2 translate-y-1/2 pointer-events-none animate-pulse" />

      {/* Main Callout Box — surface-container-highest = #002d17 dark green */}
      <div className="max-w-4xl mx-auto bg-surface-container-highest rounded-xl p-12 md:p-20 text-center relative z-10 border border-outline-variant/40 card-shadow">
        {/* on-surface = #ccfcd9 — light mint, clearly readable */}
        <h2 className="font-headline text-3xl md:text-headline-lg mb-6 text-on-surface">
          Ready to join the kitchen?
        </h2>
        {/* on-surface-variant = #88b695 — muted green for body */}
        <p className="font-body text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Whether you're a grocery store, a small cafe, or a neighbor looking to help, there's a seat for you at our table.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/register" className="bg-primary-container text-on-primary-container font-bold px-10 py-4 rounded-xl transition-all duration-150 font-headline text-[18px] shadow-lg shadow-primary/20 hover:bg-primary-fixed-dim active:scale-[0.98] whitespace-nowrap">
            Create Vendor Account
          </Link>
          <Link to="/#about" className="bg-surface-container-high border border-outline-variant/30 text-on-surface font-bold px-10 py-4 rounded-xl transition-all duration-150 font-headline text-[18px] shadow-lg hover:border-primary/50 hover:bg-surface-container-highest active:scale-[0.98] whitespace-nowrap">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
