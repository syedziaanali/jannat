import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, Heart, X } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function PolaroidGallery({ reducedMotion }) {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section className="relative py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-pink-400/20 text-xs text-pink-300 mb-4"
        >
          <Camera className="w-3.5 h-3.5 text-pink-400" />
          <span>Frames of Warmth</span>
        </motion.div>

        <motion.h2
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl text-pink-100 font-normal"
        >
          {siteConfig.gallery.headline}
        </motion.h2>

        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-3 text-sm sm:text-base text-pink-200/70 font-cormorant italic"
        >
          {siteConfig.gallery.subheadline}
        </motion.p>
      </div>

      {/* Polaroids Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2">
        {siteConfig.gallery.photos.map((item, index) => (
          <motion.div
            key={index}
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setActivePhoto(item)}
            className={`group cursor-pointer rounded-2xl bg-[#fffdfa] p-3.5 pb-6 shadow-xl transition-all duration-500 hover:scale-105 hover:rotate-0 hover:shadow-2xl hover:shadow-pink-500/20 ${
              reducedMotion ? '' : item.rotation
            }`}
          >
            {/* Photo Frame */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-900 mb-3">
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/40 text-pink-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkles className="w-3 h-3" />
              </div>
            </div>

            {/* Polaroid handwritten-style caption */}
            <div className="px-1 text-center">
              <p className="font-serif italic text-xs sm:text-sm text-neutral-800 line-clamp-2 leading-snug">
                "{item.caption}"
              </p>
              <span className="block mt-1 text-[10px] uppercase font-sans tracking-widest text-neutral-400 font-semibold">
                {item.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Polaroid Fullscreen Lightbox */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-lg w-full bg-[#fffdfa] rounded-3xl p-4 sm:p-5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="Close photo"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-square rounded-2xl overflow-hidden bg-black mb-4">
                <img
                  src={activePhoto.url}
                  alt={activePhoto.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center px-2 pb-2">
                <p className="font-serif italic text-base sm:text-lg text-neutral-900">
                  "{activePhoto.caption}"
                </p>
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-sans block mt-1">
                  {activePhoto.date}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
