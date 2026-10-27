import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function HeroSection({ reducedMotion }) {
  const scrollToNext = () => {
    const nextSec = document.getElementById('adore');
    if (nextSec) nextSec.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="opening"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden"
    >
      {/* Central Gentle Aura Glow */}
      <div className="absolute w-[360px] sm:w-[540px] h-[360px] sm:h-[540px] rounded-full bg-gradient-to-tr from-pink-500/15 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Primary Site Title Badge */}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="flex flex-col items-center gap-2 mb-6"
      >
        <span className="text-[11px] sm:text-xs uppercase font-sans tracking-[0.3em] text-pink-300/80 font-semibold px-4 py-1.5 rounded-full glass-pill border border-pink-400/20 shadow-lg">
          {siteConfig.siteTitle}
        </span>
      </motion.div>

      {/* Primary Center Greeting */}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="max-w-3xl mx-auto space-y-5"
      >
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none text-glow">
          <span className="block text-pink-100 font-normal">
            Hey <span className="romantic-gradient-text italic font-serif font-semibold">{siteConfig.girlfriendName}</span>
          </span>
          <span className="inline-block mt-2 text-3xl sm:text-5xl lg:text-6xl text-pink-400 font-light">
            ... ❤️
          </span>
        </h1>

        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-xl sm:text-2xl lg:text-3xl text-pink-100 font-cormorant italic tracking-wide max-w-2xl mx-auto leading-relaxed px-4 text-glow-subtle font-medium"
        >
          "{siteConfig.hero.leadMessage}"
        </motion.p>
      </motion.div>

      {/* Dedicated Subtle Message */}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        className="mt-8 max-w-xl mx-auto px-4"
      >
        <p className="text-sm sm:text-base text-pink-200/70 font-sans leading-relaxed">
          Take your time with this. No expectations, no pressure—just quiet, honest words from my heart to yours.
        </p>
      </motion.div>

      {/* Gentle Scroll Hint */}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        onClick={scrollToNext}
        className="mt-14 sm:mt-18 flex flex-col items-center gap-2 text-pink-300/60 hover:text-pink-300 transition-colors cursor-pointer select-none group"
      >
        <span className="text-xs tracking-widest uppercase font-sans font-medium group-hover:tracking-[0.2em] transition-all">
          Scroll gently to continue
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
