import React, { useState, useEffect } from 'react';
import BackgroundStars from './components/BackgroundStars';
import CursorHeartTrail from './components/CursorHeartTrail';
import AudioPlayer from './components/AudioPlayer';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AdoreSection from './components/AdoreSection';
import ReflectionSection from './components/ReflectionSection';
import HeartLetterSection from './components/HeartLetterSection';
import ConstellationSection from './components/ConstellationSection';
import Footer from './components/Footer';
import { Heart } from 'lucide-react';

export default function App() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initialize prefers-reduced-motion
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReducedMotion(true);
    }
    
    // Tasteful brief starlight fade-in
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0a0518] flex flex-col items-center justify-center z-50">
        <div className="relative">
          <Heart className="w-12 h-12 text-pink-400 fill-pink-400/30 animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-xl animate-ping" />
        </div>
        <p className="mt-4 font-serif text-pink-200/80 text-sm tracking-widest uppercase">
          Lighting the stars...
        </p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0a0518] text-[#fff5f7] selection:bg-pink-500/30 selection:text-pink-100">
      {/* Dynamic Starry Canvas & Cosmos Background */}
      <BackgroundStars reducedMotion={reducedMotion} />

      {/* Romantic Heart Cursor Trail (Desktop & Touch) */}
      <CursorHeartTrail reducedMotion={reducedMotion} />

      {/* Floating Audio Player (OFF by default, user-controlled) */}
      <AudioPlayer />

      {/* Floating Navbar */}
      <Navbar reducedMotion={reducedMotion} setReducedMotion={setReducedMotion} />

      {/* Main Storyline Sections */}
      <main className="relative z-10">
        {/* SECTION 1: OPENING HERO */}
        <HeroSection reducedMotion={reducedMotion} />

        {/* SECTION 2: WHAT I ADORE ABOUT YOU (Interactive Glowing Cards) */}
        <AdoreSection reducedMotion={reducedMotion} />

        {/* SECTION 3: WHAT I WISH I DID BETTER (Accountability & Sincere Reflection) */}
        <ReflectionSection reducedMotion={reducedMotion} />

        {/* SECTION 4: A LETTER FROM MY HEART (Wax Seal Envelope & Hinglish Letter) */}
        <HeartLetterSection reducedMotion={reducedMotion} />

        {/* SECTION 5: ONE LAST THING (Heart Constellation & Respectful Choice) */}
        <ConstellationSection reducedMotion={reducedMotion} />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
