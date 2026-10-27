import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, Heart, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/content';

export default function HeartLetterSection({ reducedMotion }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    if (!reducedMotion) {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.6 },
        colors: ['#f472b6', '#e8b4b8', '#ffd1dc', '#fae8e0'],
        scalar: 0.7,
        ticks: 90,
      });
    }
  };

  return (
    <section id="letter" className="relative py-24 sm:py-32 px-4 max-w-4xl mx-auto">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-700/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-pink-400/20 text-xs text-pink-300 mb-4"
        >
          <Mail className="w-3.5 h-3.5 text-pink-400" />
          <span>Chapter III • Words From the Deepest Place</span>
        </motion.div>

        <motion.h2
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl text-pink-100 font-normal leading-tight"
        >
          A Letter From My Heart
        </motion.h2>

        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-3 text-base text-pink-200/70 font-cormorant italic"
        >
          {siteConfig.letter.envelopePrompt}
        </motion.p>
      </div>

      {/* Interactive Envelope Container */}
      <div className="relative max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* CLOSED ENVELOPE WITH WAX SEAL */
            <motion.div
              key="closed-envelope"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              onClick={handleOpenEnvelope}
              className="cursor-pointer group relative rounded-3xl p-8 sm:p-12 glass-card border border-pink-400/30 bg-gradient-to-b from-[#25103a]/90 via-[#180927]/90 to-[#12061e]/90 shadow-2xl box-glow hover:border-pink-400/50 transition-all duration-500 overflow-hidden text-center"
            >
              {/* Envelope Flap Accent Lines */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-all" />

              <div className="py-8 sm:py-12 flex flex-col items-center justify-center">
                {/* WAX SEAL */}
                <div className="relative mb-6">
                  {/* Outer Seal Glow */}
                  <div className="absolute inset-0 rounded-full bg-pink-500/30 blur-md group-hover:blur-lg transition-all animate-pulse" />

                  {/* Wax Seal Body */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#741544] via-[#be185d] to-[#f472b6] border-2 border-pink-200/40 shadow-xl flex flex-col items-center justify-center transform group-hover:scale-105 active:scale-95 transition-transform duration-300">
                    <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-pink-100 fill-pink-100 drop-shadow-md" />
                    <span className="text-[10px] sm:text-xs font-serif font-bold text-pink-100/90 tracking-widest mt-0.5 uppercase">
                      Z & J
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-pink-100 font-medium">
                  To Jannat, With All My Heart
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-pink-300/80 font-sans tracking-wide">
                  Click the wax seal to break the seal and unfold the letter
                </p>

                <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-pink-400/30 text-xs text-pink-200 group-hover:bg-pink-500/20 transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-pink-300" />
                  <span>Personal & Private</span>
                </div>
              </div>
            </motion.div>
          ) : (
            /* UNFOLDED LETTER */
            <motion.div
              key="opened-letter"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl p-7 sm:p-12 shadow-2xl overflow-hidden border border-amber-200/30"
              style={{
                backgroundColor: '#fffdfa',
                backgroundImage: 'radial-gradient(#f7efe5 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            >
              {/* Paper Corner Embellishments */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-rose-300/60" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-rose-300/60" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-rose-300/60" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-rose-300/60" />

              {/* Letter Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-rose-200/60 mb-6 gap-2">
                <div>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-rose-800/70 font-semibold">
                    {siteConfig.letter.date}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#3b1227] font-semibold mt-0.5">
                    {siteConfig.letter.salutation}
                  </h3>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-800 text-xs font-sans transition-colors self-end sm:self-auto"
                  title="Fold letter back into envelope"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Fold back</span>
                </button>
              </div>

              {/* Heartfelt Hinglish Letter Body */}
              <div className="space-y-6 text-[#2d0e20] leading-relaxed">
                <p className="font-serif text-lg sm:text-2xl text-[#3d0f28] leading-relaxed tracking-wide italic bg-rose-50/70 p-5 sm:p-7 rounded-2xl border-l-4 border-rose-500 shadow-inner">
                  "{siteConfig.letter.hinglishText}"
                </p>

                <p className="font-sans text-sm sm:text-base text-[#4a1c35] leading-relaxed px-1">
                  {siteConfig.letter.extendedEnglishNote}
                </p>
              </div>

              {/* Signoff */}
              <div className="mt-8 pt-6 border-t border-rose-200/60 flex flex-col items-end text-right">
                <span className="text-xs sm:text-sm text-rose-800/80 font-serif italic">
                  {siteConfig.letter.signoff}
                </span>
                <span className="font-script text-4xl sm:text-5xl text-rose-900 mt-1">
                  {siteConfig.letter.signature}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
