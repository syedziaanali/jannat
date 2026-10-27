import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Heart, Sparkles, X, ZoomIn } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function TimelineSection({ reducedMotion }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="story" className="relative py-24 sm:py-32 px-4 max-w-6xl mx-auto">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-pink-400/20 text-xs text-pink-300 mb-4"
        >
          <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400/40" />
          <span>Chapter I • The Footprints of Us</span>
        </motion.div>

        <motion.h2
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl text-pink-100 font-normal leading-tight"
        >
          {siteConfig.timeline.headline}
        </motion.h2>

        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg text-pink-200/70 font-cormorant italic max-w-2xl mx-auto"
        >
          {siteConfig.timeline.subheadline}
        </motion.p>
      </div>

      {/* Timeline River Container */}
      <div className="relative">
        {/* Central glowing vertical timeline line */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-pink-500/40 via-purple-500/30 to-pink-500/10" />
        <div className="md:hidden absolute left-4 top-4 bottom-8 w-0.5 bg-gradient-to-b from-pink-500/40 via-purple-500/30 to-pink-500/10" />

        <div className="space-y-14 sm:space-y-24">
          {siteConfig.timeline.memories.map((memory, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={memory.id}
                initial={reducedMotion ? {} : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node / Starlight Orb */}
                <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#12092b] border-2 border-pink-400/60 shadow-lg shadow-pink-500/30 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                  </div>
                </div>

                {/* Content Box */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
                    {/* Top ambient highlight */}
                    <div className="absolute -top-16 -right-16 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-colors" />

                    {/* Metadata Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-400/25 text-pink-300 text-xs font-medium">
                        <Calendar className="w-3 h-3 text-pink-400" />
                        {memory.date}
                      </span>
                      <span className="text-[11px] text-pink-300/60 uppercase tracking-widest font-sans">
                        {memory.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-pink-100 font-medium mb-3">
                      {memory.title}
                    </h3>

                    <p className="text-sm sm:text-base text-pink-200/80 leading-relaxed font-sans mb-4">
                      {memory.description}
                    </p>

                    {/* Location or tender footnote */}
                    <div className="flex items-center gap-1.5 text-xs text-pink-300/60 font-serif italic pt-3 border-t border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-pink-400/80" />
                      <span>{memory.location}</span>
                    </div>
                  </div>
                </div>

                {/* Photo Card Box */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div
                    onClick={() => setSelectedPhoto(memory)}
                    className="relative cursor-pointer group rounded-3xl overflow-hidden glass-card p-2 border border-pink-400/20 shadow-2xl transition-all duration-500 hover:border-pink-400/40 hover:scale-[1.02]"
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40">
                      <img
                        src={memory.image}
                        alt={memory.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                        loading="lazy"
                      />

                      {/* Gentle Gradient Scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0518]/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Zoom Indicator */}
                      <div className="absolute bottom-3 right-3 p-2 rounded-full glass-pill text-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ZoomIn className="w-4 h-4" />
                      </div>

                      {/* Polaroid-style Bottom Caption */}
                      <div className="absolute bottom-3 left-3 right-12">
                        <p className="text-xs text-pink-100/90 font-cormorant italic truncate">
                          "{memory.caption}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-3xl w-full rounded-3xl overflow-hidden glass-card border border-pink-400/30 p-3 sm:p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/60 text-pink-200 hover:text-white border border-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 mb-4">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-3 pb-2">
                <span className="text-xs text-pink-400 font-medium uppercase tracking-wider">
                  {selectedPhoto.date}
                </span>
                <h4 className="font-serif text-2xl text-pink-100 mt-1">
                  {selectedPhoto.title}
                </h4>
                <p className="text-sm text-pink-200/80 mt-1 font-sans">
                  {selectedPhoto.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
