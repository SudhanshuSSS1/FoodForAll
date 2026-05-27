import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/30 w-full relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-12 max-w-7xl mx-auto">

        {/* Left Side: Brand and Copyright */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-6 w-6 bg-primary-container/20 rounded-md flex items-center justify-center border border-primary/30">
              <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            {/* primary = #6bfc81 — vivid green brand name */}
            <span className="font-headline font-bold text-primary text-xl tracking-tight">foodForALL</span>
          </div>
          {/* on-surface-variant = #88b695 — muted readable copyright text */}
          <p className="font-body text-sm text-on-surface-variant text-center md:text-left">
            © {currentYear} foodForALL. All rights reserved.
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {/* on-surface = #ccfcd9 — clearly readable links on near-black */}
          <a className="font-label text-sm text-on-surface hover:text-primary transition-colors font-semibold" href="#about">About Us</a>
          <a className="font-label text-sm text-on-surface hover:text-primary transition-colors font-semibold" href="#vendors">Vendor Portal</a>
          <a className="font-label text-sm text-on-surface hover:text-primary transition-colors font-semibold" href="#privacy">Privacy Policy</a>
          <a className="font-label text-sm text-on-surface hover:text-primary transition-colors font-semibold" href="#impact">Impact Report</a>
          <a className="font-label text-sm text-on-surface hover:text-primary transition-colors font-semibold" href="#contact">Contact</a>
        </div>

      </div>
    </footer>
  );
}
