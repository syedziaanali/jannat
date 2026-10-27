import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Feather, Stars, Compass, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/content';

const iconMap = {
  Sparkles: Sparkles,
  Heart: Heart,
  Feather: Feather,
  Stars: Stars,
  Compass: Compass,
};

export default function AdoreSection({ reducedMotion }) {
  const [activeCardId, setActiveCardId] = useState(null);

  const toggleCard = (id) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="adore" className="relative py-24 sm:py-32 px-4 max-w-6xl mx-auto">
      {/* Background Ambient Violet & Pink Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-pink-400/20 text-xs text-pink-300 mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>Chapter I • The Light in You</span>
        </motion.div>

        <motion.h2
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl text-pink-100 font-normal leading-tight"
        >
          {siteConfig.adorations.headline}
        </motion.h2>

        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-pink-200/70 font-cormorant italic max-w-2xl mx-auto"
        >
          {siteConfig.adorations.subheadline}
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {siteConfig.adorations.items.map((item, index) => {
          const Icon = iconMap[item.icon] || Heart;
          const isExpanded = activeCardId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              onClick={() => toggleCard(item.id)}
              className={`relative rounded-3xl p-7 cursor-pointer glass-card transition-all duration-500 overflow-hidden group select-none ${
                isExpanded
                  ? 'border-pink-400/50 bg-[#1e0e38]/80 box-glow ring-1 ring-pink-400/30'
                  : 'hover:border-pink-400/35 hover:bg-[#150a2e]/70'
              }`}
            >
              {/* Subtle Ambient Shimmer */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-pink-500/10 via-purple-500/5 to-transparent rounded-full blur-2xl group-hover:from-pink-500/20 transition-all" />

              {/* Icon & Category Tag */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-400/30 flex items-center justify-center text-pink-300 group-hover:scale-110 group-hover:text-pink-100 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-pink-300/60 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  {item.tag}
                </span>
              </div>

              {/* Title & Short Description */}
              <h3 className="font-serif text-2xl text-pink-100 font-medium group-hover:text-pink-200 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-pink-200/70 font-sans leading-relaxed">
                {item.shortDesc}
              </p>

              {/* Expandable Loving Deep Message */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden mt-4 pt-4 border-t border-pink-500/20"
                  >
                    <p className="text-sm text-pink-100/90 leading-relaxed font-cormorant italic text-base sm:text-lg">
                      "{item.fullMessage}"
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs text-pink-300 font-medium">
                      <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400 animate-pulse" />
                      <span>{item.highlight}</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Interactive Prompt */}
              <div className="mt-5 pt-3 flex items-center justify-between text-xs text-pink-300/60 group-hover:text-pink-300 transition-colors border-t border-white/5">
                <span>{isExpanded ? 'Click to fold' : 'Tap to read my thoughts'}</span>
                <ChevronRight
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isExpanded ? 'rotate-90 text-pink-400' : 'group-hover:translate-x-1'
                  }`}
                />
              </div>

              {/* Subtle floating heart animation on expand */}
              {isExpanded && !reducedMotion && (
                <span className="absolute top-4 right-12 text-pink-400/40 animate-ping text-sm pointer-events-none">
                  ♥
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
