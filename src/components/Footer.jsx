import React from 'react';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-12 pb-28 sm:py-24 border-t border-pink-500/10 bg-gradient-to-b from-transparent to-[#05020d] text-center px-4 overflow-hidden">
      {/* Background starlight accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto flex flex-col items-center space-y-6 relative z-10">
        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="group p-3 rounded-full glass-card border border-pink-400/20 text-pink-300 hover:text-white hover:border-pink-400/40 hover:scale-110 transition-all duration-300 shadow-lg active:scale-95"
          title="Return to the beginning"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Primary Dedication */}
        <div className="space-y-2">
          <p className="font-serif text-2xl sm:text-3xl text-pink-100 tracking-wide font-normal">
            {siteConfig.footer.madeWithLove}
          </p>
          <p className="text-xs sm:text-sm text-pink-300/70 font-cormorant italic">
            {siteConfig.footer.dedication}
          </p>
        </div>

        {/* Gentle Reminder Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-white/5 text-xs text-pink-300/60">
          <Sparkles className="w-3 h-3 text-pink-400" />
          <span>{siteConfig.footer.gentleReminder}</span>
        </div>

        {/* Year / Copyright note */}
        <div className="pt-4 text-[11px] text-pink-400/40 font-sans tracking-widest uppercase">
          © {siteConfig.footer.year} • All Rights Dedicated to Jannat's Peace
        </div>
      </div>
    </footer>
  );
}
