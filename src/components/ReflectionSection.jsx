import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircleHeart, Clock, Sprout, HeartHandshake } from 'lucide-react';
import { siteConfig } from '../data/content';

const reflectionIcons = [
  MessageCircleHeart,
  Clock,
  ShieldCheck,
  Sprout
];

export default function ReflectionSection({ reducedMotion }) {
  return (
    <section id="reflections" className="relative py-16 sm:py-32 px-4 max-w-5xl mx-auto">
      {/* Background Soft Burgundy Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] bg-rose-950/20 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill border border-pink-400/20 text-[11px] sm:text-xs text-pink-300 mb-3"
        >
          <HeartHandshake className="w-3.5 h-3.5 text-pink-400" />
          <span>Chapter II • Holding Space & Accountability</span>
        </motion.div>

        <motion.h2
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-2xl sm:text-5xl lg:text-6xl text-pink-100 font-normal leading-tight"
        >
          {siteConfig.reflection.headline}
        </motion.h2>

        <motion.p
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-3 text-sm sm:text-lg text-pink-200/70 font-cormorant italic max-w-2xl mx-auto"
        >
          {siteConfig.reflection.subheadline}
        </motion.p>
      </div>

      {/* Sincere Intro Box */}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-8 sm:mb-12 p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-card border border-rose-400/20 bg-[#180922]/70 text-center max-w-3xl mx-auto shadow-xl"
      >
        <p className="text-xs sm:text-base text-pink-100/90 leading-relaxed font-sans">
          {siteConfig.reflection.introNote}
        </p>
      </motion.div>

      {/* Reflection Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {siteConfig.reflection.reflections.map((item, index) => {
          const Icon = reflectionIcons[index] || Sprout;

          return (
            <motion.div
              key={index}
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-card border border-pink-400/15 bg-[#140824]/60 hover:border-pink-400/35 transition-all duration-400 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-pink-500/10 border border-pink-400/20 flex items-center justify-center text-pink-300 mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <h3 className="font-serif text-lg sm:text-2xl text-pink-100 font-medium mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-base text-pink-200/75 leading-relaxed font-sans mb-4 sm:mb-6">
                  {item.description}
                </p>
              </div>

              {/* Takeaway / Sincere Promise */}
              <div className="pt-3 sm:pt-4 border-t border-white/5 flex items-start gap-2 text-xs sm:text-sm text-pink-300/90 font-cormorant italic">
                <span className="text-pink-400 font-bold shrink-0">•</span>
                <span>{item.takeaway}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Sincere Closing Banner */}
      <motion.div
        initial={reducedMotion ? {} : { opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 sm:mt-18 text-center max-w-2xl mx-auto p-4 sm:p-6 rounded-2xl glass-pill border border-pink-400/20"
      >
        <p className="font-cormorant italic text-base sm:text-xl text-pink-100/90 leading-relaxed">
          "{siteConfig.reflection.closingQuote}"
        </p>
      </motion.div>
    </section>
  );
}
