import React, { useEffect, useRef } from 'react';

export default function BackgroundStars({ reducedMotion = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate stars
    const starCount = Math.floor((width * height) / 3800);
    const stars = [];
    const colors = ['#ffffff', '#fbcfe8', '#f472b6', '#e0e7ff', '#c084fc', '#fae8e0'];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        baseAlpha: Math.random() * 0.7 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Shooting stars
    const shootingStars = [];
    const createShootingStar = () => {
      if (shootingStars.length < 2 && Math.random() < 0.025) {
        shootingStars.push({
          x: Math.random() * width * 0.8,
          y: Math.random() * height * 0.4,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 4 + 3,
          angle: (Math.PI / 4) + (Math.random() * 0.2 - 0.1),
          opacity: 1,
          decay: Math.random() * 0.015 + 0.008,
        });
      }
    };

    // Floating glowing dust particles
    const particles = [];
    for (let i = 0; i < 28; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.3 - 0.1,
        radius: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        hue: Math.random() > 0.5 ? 330 : 270, // pink or purple
      });
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Render static or twinkling stars
      stars.forEach((star) => {
        if (!reducedMotion) {
          star.twinklePhase += star.twinkleSpeed;
          star.alpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.25;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.fill();

        // Extra delicate glow for larger stars
        if (star.size > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = star.alpha * 0.15;
          ctx.fill();
        }
      });

      // Render floating particles
      if (!reducedMotion) {
        particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${p.alpha})`;
          ctx.globalAlpha = p.alpha;
          ctx.shadowBlur = 12;
          ctx.shadowColor = `hsl(${p.hue}, 80%, 70%)`;
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        // Shooting stars update
        createShootingStar();
        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const s = shootingStars[i];
          s.x += Math.cos(s.angle) * s.speed;
          s.y += Math.sin(s.angle) * s.speed;
          s.opacity -= s.decay;

          if (s.opacity <= 0 || s.x > width || s.y > height) {
            shootingStars.splice(i, 1);
            continue;
          }

          const tailX = s.x - Math.cos(s.angle) * s.length;
          const tailY = s.y - Math.sin(s.angle) * s.length;

          const gradient = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
          gradient.addColorStop(0, 'rgba(244, 114, 182, 0)');
          gradient.addColorStop(0.7, `rgba(251, 207, 232, ${s.opacity * 0.6})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(s.x, s.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.6;
          ctx.stroke();

          // Small head glow
          ctx.beginPath();
          ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Cosmos Background Gradients */}
      <div className="absolute inset-0 bg-[#0a0518]" />
      
      {/* Subtle Romantic Nebulae */}
      <div 
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full blur-[140px] opacity-25 mix-blend-screen pointer-events-none"
        style={{ background: 'radial-gradient(circle, #5a1036 0%, #25124f 60%, transparent 100%)' }}
      />
      <div 
        className="absolute top-[40%] -right-[15%] w-[60vw] h-[60vw] rounded-full blur-[160px] opacity-20 mix-blend-screen pointer-events-none"
        style={{ background: 'radial-gradient(circle, #741544 0%, #1f0d45 70%, transparent 100%)' }}
      />
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full blur-[150px] opacity-25 mix-blend-screen pointer-events-none"
        style={{ background: 'radial-gradient(circle, #be185d 0%, #12092b 75%, transparent 100%)' }}
      />

      {/* The Animated Night Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />
      
      {/* Vignette Overlay for cinematic intimacy */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10, 5, 24, 0.7) 100%)'
        }}
      />
    </div>
  );
}
