import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  radius: number;
  gravity: number;
  trail: { x: number; y: number }[];
}

const COLORS = [
  "#FF3B3B", "#FF6B6B", "#FFD700", "#FFA500",
  "#FFFFFF", "#F9A825", "#FF8C00", "#C62828",
  "#4FC3F7", "#E1F5FE",
];

function createBurst(x: number, y: number): Particle[] {
  const count = 40 + Math.floor(Math.random() * 30);
  const particles: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
    const speed = 2.5 + Math.random() * 5;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      radius: 1.5 + Math.random() * 2.5,
      gravity: 0.06 + Math.random() * 0.04,
      trail: [],
    });
  }
  return particles;
}

export default function FireworksCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current = particlesRef.current.filter((p) => p.alpha > 0.02);

    for (const p of particlesRef.current) {
      p.trail.push({ x: p.x, y: p.y });
      if (p.trail.length > 5) p.trail.shift();

      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.97;
      p.alpha -= 0.018;

      if (p.trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(p.trail[0].x, p.trail[0].y);
        for (let i = 1; i < p.trail.length; i++) {
          ctx.lineTo(p.trail[i].x, p.trail[i].y);
        }
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.4;
        ctx.lineWidth = p.radius * 0.6;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleWindowClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest("a, button, input, textarea, select, label, [role='button'], [data-no-fireworks]")) {
        return;
      }
      fireAt(e.clientX, e.clientY);
    };
    window.addEventListener("click", handleWindowClick);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", handleWindowClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  const fireAt = useCallback((x: number, y: number) => {
    const burst = createBurst(x, y);
    if (Math.random() > 0.5) {
      const offset = 30 + Math.random() * 40;
      const burst2 = createBurst(x + (Math.random() - 0.5) * offset, y + (Math.random() - 0.5) * offset);
      particlesRef.current.push(...burst2);
    }
    particlesRef.current.push(...burst);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
