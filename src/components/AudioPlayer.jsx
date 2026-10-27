import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music, Play, Pause, Disc } from 'lucide-react';
import { siteConfig } from '../data/content';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [showControls, setShowControls] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setHasError(false);
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio play restricted or URL unreachable:', err);
          setHasError(true);
          setIsPlaying(false);
        });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      if (val === 0) setIsMuted(true);
      else setIsMuted(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end max-w-[calc(100vw-1.5rem)]">
      {/* Hidden Audio Tag */}
      <audio
        ref={audioRef}
        src={siteConfig.audio.audioUrl}
        preload="metadata"
        onError={() => setHasError(true)}
      />

      {/* Expanded Control Popup */}
      {showControls && (
        <div className="mb-2.5 p-3.5 sm:p-4 rounded-2xl glass-card border border-pink-400/20 shadow-2xl backdrop-blur-xl w-[calc(100vw-2rem)] max-w-[280px] sm:w-64 text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-300 shrink-0 ${isPlaying ? 'animate-spin' : ''}`}>
              <Disc className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="overflow-hidden">
              <p className="font-medium text-pink-100 truncate text-[11px] sm:text-xs">{siteConfig.audio.title}</p>
              <p className="text-pink-300/60 text-[10px] sm:text-[11px] truncate">{siteConfig.audio.artist}</p>
            </div>
          </div>

          {/* Volume slider */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/5">
            <button
              onClick={toggleMute}
              className="text-pink-300/80 hover:text-pink-200 transition-colors p-1"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-pink-400"
            />
            <span className="text-[10px] text-pink-300/70 w-6 text-right">
              {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
            </span>
          </div>

          {hasError && (
            <p className="mt-2 text-[10px] text-pink-400/80 bg-pink-950/40 p-1.5 rounded border border-pink-500/20">
              Note: Replace audioUrl in content.js with your personal track.
            </p>
          )}
        </div>
      )}

      {/* Floating Pill Toggle Button */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <button
          onClick={() => setShowControls((prev) => !prev)}
          className="p-2 sm:p-2.5 rounded-full glass-card border border-pink-400/20 text-pink-300 hover:text-pink-100 hover:border-pink-400/40 transition-all shadow-lg active:scale-95"
          title="Audio Settings"
          aria-label="Toggle audio player controls"
        >
          <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        <button
          onClick={togglePlay}
          className={`group flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full glass-card border transition-all duration-300 shadow-xl active:scale-95 ${
            isPlaying
              ? 'border-pink-400/50 bg-pink-950/50 text-pink-200 box-glow'
              : 'border-pink-400/20 hover:border-pink-400/40 text-pink-300/80 hover:text-pink-100'
          }`}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-pink-400 fill-current animate-pulse" />
              <span className="text-[11px] sm:text-xs font-medium tracking-wide">Playing</span>
              {/* Animated waveform bars */}
              <div className="flex items-end gap-0.5 h-3 ml-0.5">
                <span className="w-0.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-0.5 h-3 bg-pink-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-0.5 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-pink-400/80 fill-current" />
              <span className="text-[11px] sm:text-xs font-medium tracking-wide">Music (Off)</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
