import React, { useEffect, useRef, useState } from 'react';

export function NeonFlow({ children, className = "", enableClickInteraction = true }) {
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const particlesRef = useRef([]);
  const animationIdRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Colors del design system - Naranja
    const colors = ["#ff8f6f", "#ff6b35", "#ffaa8a", "#ff7851"];

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < 60; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: Math.random() * 100 + 50
        });
      }
    };
    initParticles();

    // Animation loop
    const animate = () => {
      if (!mounted) return;

      // Clear with semi-transparent background for trail effect
      ctx.fillStyle = 'rgba(26, 26, 26, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with glow
        const opacity = Math.min(particle.life / 50, 1);
        ctx.globalAlpha = opacity * 0.6;

        // Glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;

        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Remove dead particles and add new ones
        if (particle.life <= 0) {
          particlesRef.current[index] = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            radius: Math.random() * 2 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: Math.random() * 100 + 50
          };
        }
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mounted = false;
      window.removeEventListener('resize', resizeCanvas);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (!enableClickInteraction) return;

    // Add burst of particles at click location
    const colors = ["#ff8f6f", "#ff6b35", "#ffaa8a", "#ff7851"];
    // Could enhance this to respond to clicks if needed
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-surface ${className}`}
      onClick={handleClick}
      style={{ cursor: enableClickInteraction ? 'pointer' : 'default' }}
    >
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{
          touchAction: 'none',
          background: isLoaded ? 'transparent' : 'linear-gradient(135deg, #1a1a1a 0%, #0e0e0e 50%, #1a1a1a 100%)'
        }}
      />

      {/* Fallback gradient if neon doesn't load */}
      {!isLoaded && (
        <div
          className="absolute inset-0 w-full h-full bg-gradient-surface"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0e0e0e 50%, #1a1a1a 100%)'
          }}
        />
      )}

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-none">
        {children}
      </div>

      {/* Debug info */}
      {!isLoaded && (
        <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#666', fontSize: '12px', zIndex: 5 }}>
          Cargando efectos...
        </div>
      )}
    </div>
  );
}

export default NeonFlow;
