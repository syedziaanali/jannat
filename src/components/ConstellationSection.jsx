import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, HeartHandshake, Sparkles, Heart, Check, X } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function ConstellationSection({ reducedMotion }) {
  const [showRespectModal, setShowRespectModal] = useState(false);

  // Helper to open pre-filled WhatsApp draft
  const handleOpenWhatsApp = () => {
    const rawNumber = siteConfig.whatsapp.phoneNumber.replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(siteConfig.whatsapp.prefilledMessage);
    
    // Fallback if number is not configured or placeholder
    const url = rawNumber 
      ? `https://wa.me/${rawNumber}?text=${encodedText}` 
      : `https://wa.me/?text=${encodedText}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Heart Constellation Points (SVG percentages normalized to 300x260 box)
  const constellationNodes = [
    { x: 150, y: 70, label: "Hope" },
    { x: 110, y: 35, label: "Laughter" },
    { x: 60, y: 55, label: "Moments" },
    { x: 40, y: 110, label: "Kindness" },
    { x: 75, y: 175, label: "Patience" },
    { x: 150, y: 240, label: "Always" },
    { x: 225, y: 175, label: "Grace" },
    { x: 260, y: 110, label: "Sanctuary" },
    { x: 240, y: 55, label: "Peace" },
    { x: 190, y: 35, label: "Warmth" },
  ];

  return (
    <section id="constellation" className="relative py-16 sm:py-36 px-4 max-w-5xl mx-auto text-center">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] bg-pink-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Chapter Badge */}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-pink-400/20 text-[11px] sm:text-xs text-pink-300 mb-4 sm:mb-6"
      >
        <Sparkles className="w-3.5 h-3.5 text-pink-400" />
        <span>Chapter IV • The Heart in the Stars</span>
      </motion.div>

      {/* Section Title */}
      <motion.h2
        initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="font-serif text-2xl sm:text-5xl lg:text-6xl text-pink-100 font-normal leading-tight"
      >
        {siteConfig.constellation.headline}
      </motion.h2>

      <motion.p
        initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="mt-2.5 text-sm sm:text-lg text-pink-200/70 font-cormorant italic max-w-xl mx-auto"
      >
        {siteConfig.constellation.subheadline}
      </motion.p>

      {/* CELESTIAL HEART CONSTELLATION SVG */}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative w-[230px] sm:w-[360px] h-[200px] sm:h-[320px] mx-auto my-8 sm:my-12 flex items-center justify-center select-none"
      >
        {/* Subtle background cosmic cloud */}
        <div className="absolute inset-0 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />

        <svg
          viewBox="0 0 300 260"
          className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(244,114,182,0.4)]"
        >
          {/* Constellation Connecting Lines */}
          <path
            d="M 150 70 L 110 35 L 60 55 L 40 110 L 75 175 L 150 240 L 225 175 L 260 110 L 240 55 L 190 35 Z"
            fill="none"
            stroke="url(#constellationGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="animate-constellation"
          />

          {/* Cross Support Lines for Astronomical Feel */}
          <line x1="150" y1="70" x2="150" y2="240" stroke="rgba(244, 114, 182, 0.2)" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="40" y1="110" x2="260" y2="110" stroke="rgba(244, 114, 182, 0.2)" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="110" y1="35" x2="190" y2="35" stroke="rgba(244, 114, 182, 0.25)" strokeWidth="0.8" />

          {/* Gradients */}
          <defs>
            <linearGradient id="constellationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbcfe8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#f472b6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Star Nodes */}
          {constellationNodes.map((node, i) => (
            <g key={i} className="cursor-pointer group">
              {/* Outer pulsing ring */}
              <circle
                cx={node.x}
                cy={node.y}
                r="7"
                fill="rgba(244, 114, 182, 0.25)"
                className="animate-ping origin-center"
                style={{ animationDuration: `${2.5 + (i % 3) * 0.8}s` }}
              />
              {/* Inner glowing star */}
              <circle
                cx={node.x}
                cy={node.y}
                r="3.5"
                fill="#ffffff"
                stroke="#f472b6"
                strokeWidth="1.5"
                className="group-hover:scale-150 transition-transform"
              />
            </g>
          ))}
        </svg>

        {/* Center Constellation Label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 fill-pink-400/40 mx-auto animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-cormorant italic text-pink-200/80 tracking-widest block mt-1">
            Jannat's Star
          </span>
        </div>
      </motion.div>

      {/* Primary Honest Messages */}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="max-w-2xl mx-auto space-y-3 sm:space-y-4 px-2"
      >
        <p className="font-serif text-lg sm:text-3xl text-pink-100 font-medium leading-relaxed">
          "{siteConfig.constellation.messagePrimary}"
        </p>

        <p className="text-sm sm:text-xl text-pink-200/75 font-cormorant italic leading-relaxed">
          "{siteConfig.constellation.messageSecondary}"
        </p>
      </motion.div>

      {/* The Two Honest, Non-Manipulative Options */}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.55 }}
        className="mt-8 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 max-w-sm sm:max-w-lg mx-auto w-full px-2"
      >
        {/* Option 1: "Can We Talk?" -> Opens prefilled WhatsApp draft */}
        <button
          onClick={handleOpenWhatsApp}
          className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-pink-600 via-pink-700 to-purple-800 hover:from-pink-500 hover:to-purple-700 text-white font-medium text-sm sm:text-base border border-pink-300/40 shadow-xl shadow-pink-950/60 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 group"
          id="can-we-talk-btn"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-pink-200 group-hover:scale-110 transition-transform shrink-0" />
          <span>{siteConfig.constellation.chatButtonText}</span>
        </button>

        {/* Option 2: "Not right now" -> Respects her boundaries unconditionally */}
        <button
          onClick={() => setShowRespectModal(true)}
          className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-full glass-card border border-white/10 hover:border-pink-400/30 text-pink-200/80 hover:text-white font-medium text-sm sm:text-base hover:bg-white/5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          id="not-right-now-btn"
        >
          <HeartHandshake className="w-4 h-4 text-pink-400 shrink-0" />
          <span>{siteConfig.constellation.respectButtonText}</span>
        </button>
      </motion.div>

      {/* Helper caption: no auto-sending, no pressure */}
      <p className="mt-4 sm:mt-5 text-[11px] sm:text-xs text-pink-300/50 font-sans tracking-wide px-3">
        Opens a draft in WhatsApp only if you choose to. Never auto-sent.
      </p>

      {/* RESPECT MODAL */}
      <AnimatePresence>
        {showRespectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setShowRespectModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="relative max-w-sm sm:max-w-lg w-full rounded-2xl sm:rounded-3xl p-6 sm:p-10 glass-card border border-pink-400/40 bg-[#160a2c]/95 shadow-2xl text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowRespectModal(false)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-pink-300/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-pink-500/15 border border-pink-400/30 flex items-center justify-center text-pink-300 mx-auto mb-4 sm:mb-5">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-pink-400 fill-pink-400/30" />
              </div>

              <h3 className="font-serif text-xl sm:text-3xl text-pink-100 font-medium mb-3 sm:mb-4">
                {siteConfig.constellation.respectResponse.title}
              </h3>

              <p className="text-xs sm:text-base text-pink-200/80 leading-relaxed font-sans mb-4 sm:mb-6">
                {siteConfig.constellation.respectResponse.message}
              </p>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm text-pink-200/90 font-cormorant italic">
                  {siteConfig.constellation.respectResponse.quote}
                </p>
              </div>

              <p className="text-[11px] sm:text-xs text-pink-300/70 font-sans tracking-wide">
                {siteConfig.constellation.respectResponse.footer}
              </p>

              <button
                onClick={() => setShowRespectModal(false)}
                className="mt-5 sm:mt-6 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-pink-500/20 hover:bg-pink-500/30 text-pink-200 text-xs font-medium border border-pink-400/30 transition-colors"
              >
                Close with peace
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
