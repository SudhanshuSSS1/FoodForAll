import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [blobOffset, setBlobOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setBlobOffset({ x: x * 30, y: y * 30 });
  };

  const handleMouseLeave = () => {
    setBlobOffset({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden py-20 md:py-[120px] px-6 bg-surface"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column Text */}
        <div className="text-center lg:text-left">
          <h1 className="font-display text-[40px] md:text-display-lg leading-tight mb-6 text-on-surface">
            Nourish your community,{' '}
            <br className="hidden md:block" />
            {/* primary = #6bfc81 — bright neon green pops on near-black bg */}
            <span className="text-primary">don't waste the surplus.</span>
          </h1>
          {/* on-surface-variant = #88b695 — readable muted green on dark bg */}
          <p className="font-body text-body-lg text-on-surface-variant mb-12 max-w-xl mx-auto lg:mx-0">
            Join the movement to bridge the gap between food surplus and
            community needs. Local stores list fresh items, neighbors find
            affordable nourishment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/register" className="bg-primary-container text-on-primary-container font-bold px-8 py-4 rounded-xl transition-all duration-150 font-headline text-[18px] shadow-lg shadow-primary/20 hover:bg-primary-fixed-dim active:scale-[0.98] flex items-center justify-center gap-2 whitespace-nowrap">
              <span className="material-symbols-outlined text-xl">storefront</span>
              Become a Vendor
            </Link>
            
            <Link to="/item/1" className="bg-surface-container-high border border-outline-variant/30 text-on-surface font-bold px-8 py-4 rounded-xl transition-all duration-150 font-headline text-[18px] shadow-lg hover:border-primary/50 hover:bg-surface-container-highest active:scale-[0.98] flex items-center justify-center gap-2 whitespace-nowrap">
              <span className="material-symbols-outlined text-xl">near_me</span>
              Find Food Near You
            </Link>
          </div>
        </div>

        {/* Right Column Image & Blobs */}
        <div className="relative mt-12 lg:mt-0 flex justify-center">
          {/* Decorative Blob 1 */}
          <div
            style={{ transform: `translate(${blobOffset.x * 1.2}px, ${blobOffset.y * 1.2}px)` }}
            className="absolute -top-10 -right-10 w-64 h-64 bg-primary-fixed opacity-20 blob-shape -z-10 animate-pulse"
          />
          {/* Decorative Blob 2 */}
          <div
            style={{ transform: `translate(${blobOffset.x * -0.8}px, ${blobOffset.y * -0.8}px)` }}
            className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-fixed opacity-20 blob-shape -z-10"
          />
          {/* Main Image */}
          <div className="rounded-xl overflow-hidden card-shadow max-w-full lg:max-w-lg border border-outline-variant/30 bg-surface-container">
            <img
              alt="Community Food Market"
              className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBBIF13uDABMv64Fmldhp9RU2bPcBpDAWFDCEIvJdb31w3quukfReC6pzwx57n6LHO421h8OiRY3rDWlewwTp4sXhBolcFmBbthJWzxp921jpJ7wyz1IqyiZsCA4Hv78AKUX5uzYFcqq7jrxe80eAb5aTrSHoWtuP9_KvYv4HgIWfz1cz1-YuE4-a0ZlETn_MTt6E6tLCYdhw_l73rI6DuIjxAXj8wAN5t69H4eNvIk1Jl3WNEy-8cLyvydNJTQ40o1WTbm-5NGjXD"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
