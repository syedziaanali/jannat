import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Sparkles, EyeOff, Eye } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function Navbar({ reducedMotion, setReducedMotion }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Opening', href: '#opening' },
    { name: 'What I Adore', href: '#adore' },
    { name: 'Reflections', href: '#reflections' },
    { name: 'A Letter', href: '#letter' },
    { name: 'Always Here', href: '#constellation' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#0a0518]/70 backdrop-blur-md border-b border-pink-500/10 shadow-lg shadow-black/30'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand / Names */}
        <a
          href="#opening"
          className="group flex items-center gap-2 sm:gap-2.5 text-pink-100 hover:text-pink-300 transition-colors"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pink-500/10 border border-pink-400/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-pink-400/30 group-hover:fill-pink-400 transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-wide text-xs sm:text-base font-medium">
              {siteConfig.girlfriendName} <span className="text-pink-400">&</span> {siteConfig.boyfriendName}
            </span>
            <span className="text-[9px] sm:text-[10px] text-pink-300/60 font-sans tracking-widest uppercase">
              A Quiet Universe
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full glass-card border border-white/5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-pink-200/80 hover:text-pink-100 hover:bg-pink-500/15 transition-all"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right Actions: Reduced motion toggle & Mobile Menu trigger */}
        <div className="flex items-center gap-2">
          {/* Reduced Motion Toggle for accessibility */}
          <button
            onClick={() => setReducedMotion((prev) => !prev)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card border border-pink-400/20 text-[11px] text-pink-300/80 hover:text-pink-100 transition-colors"
            title={reducedMotion ? "Enable animations" : "Reduce animations for gentler motion"}
          >
            {reducedMotion ? (
              <>
                <EyeOff className="w-3.5 h-3.5 text-pink-400" />
                <span>Motion: Off</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                <span>Gentle Motion</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-xl glass-card border border-pink-400/20 text-pink-200 hover:text-pink-100"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-5 pt-3 pb-6 bg-[#0f0724]/95 backdrop-blur-2xl border-b border-pink-500/20 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-2.5 rounded-xl text-sm font-medium text-pink-100/90 hover:bg-pink-500/20 hover:text-pink-200 transition-colors"
              >
                {link.name}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between px-2">
              <span className="text-xs text-pink-300/70">Motion Effects:</span>
              <button
                onClick={() => setReducedMotion((prev) => !prev)}
                className="text-xs text-pink-300 px-3 py-1 rounded-full glass-card border border-pink-400/30"
              >
                {reducedMotion ? 'Animations Off' : 'Animations On'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
