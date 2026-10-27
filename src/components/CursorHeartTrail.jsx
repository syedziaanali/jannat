import React, { useEffect, useState } from 'react';

export default function CursorHeartTrail({ reducedMotion = false }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (reducedMotion) return;

    let id = 0;
    let lastTime = 0;

    const handlePointerMove = (e) => {
      const now = Date.now();
      // Throttle creation to maintain silky 60fps performance
      if (now - lastTime < 50) return;
      lastTime = now;

      const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
      const clientY = e.clientY || (e.touches && e.touches[0]?.clientY);

      if (clientX === undefined || clientY === undefined) return;

      const newHeart = {
        id: ++id,
        x: clientX,
        y: clientY,
        size: Math.random() * 8 + 10,
        rotation: (Math.random() - 0.5) * 40,
        color: ['#f472b6', '#fbcfe8', '#e8b4b8', '#c084fc'][Math.floor(Math.random() * 4)],
      };

      setHearts((prev) => [...prev.slice(-18), newHeart]);
    };

    const handleTouchStart = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const newHearts = Array.from({ length: 3 }).map((_, i) => ({
        id: ++id + i,
        x: touch.clientX + (Math.random() - 0.5) * 20,
        y: touch.clientY + (Math.random() - 0.5) * 20,
        size: Math.random() * 10 + 12,
        rotation: (Math.random() - 0.5) * 50,
        color: '#f472b6',
      }));
      setHearts((prev) => [...prev.slice(-15), ...newHearts]);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    const cleanupInterval = setInterval(() => {
      setHearts((prev) => (prev.length > 0 ? prev.slice(1) : prev));
    }, 120);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchstart', handleTouchStart);
      clearInterval(cleanupInterval);
    };
  }, [reducedMotion]);

  if (reducedMotion || hearts.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 select-none animate-ping"
          style={{
            left: heart.x,
            top: heart.y,
            fontSize: `${heart.size}px`,
            color: heart.color,
            transform: `translate(-50%, -50%) rotate(${heart.rotation}deg)`,
            opacity: 0.75,
            filter: 'drop-shadow(0 0 6px rgba(244, 114, 182, 0.7))',
            transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
            animationDuration: '1.2s',
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}
