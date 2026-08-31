"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  tx: number;
  ty: number;
  r: number;
  a: number;
};

type Props = {
  progress?: number;
  className?: string;
  density?: number;
};

export function DataVisualization({
  progress = 0.22,
  className,
  density = 1,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(progress);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let disposed = false;
    let frame = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    const metrics = [
      { label: "18.4", x: 0.18, y: 0.22 },
      { label: "0.73", x: 0.78, y: 0.18 },
      { label: "Δ 6%", x: 0.14, y: 0.72 },
      { label: "94", x: 0.84, y: 0.68 },
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      const count = Math.max(90, Math.floor(((width * height) / 7800) * density));
      const cx = width * 0.5;
      const cy = height * 0.52;
      particles = Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2 + (i % 7) * 0.15;
        const ring = 70 + (i % 6) * 42 + (i % 3) * 10;
        const tx = cx + Math.cos(angle) * ring * (0.55 + (i % 5) * 0.08);
        const ty = cy + Math.sin(angle) * ring * 0.62;
        const ox = Math.random() * width;
        const oy = Math.random() * height;
        return {
          x: ox,
          y: oy,
          ox,
          oy,
          tx,
          ty,
          r: i % 17 === 0 ? 2.2 : 1.05 + Math.random() * 0.8,
          a: 0.25 + Math.random() * 0.55,
        };
      });
    };

    const draw = (time: number) => {
      if (disposed) return;
      ctx.clearRect(0, 0, width, height);

      const p = reduced ? 0.85 : Math.min(Math.max(progressRef.current, 0), 1);
      const organize = smooth(clamp((p - 0.08) / 0.55));
      const decide = smooth(clamp((p - 0.72) / 0.28));
      const pulse = reduced ? 0 : Math.sin(time * 0.0012) * 0.5 + 0.5;
      const cx = width * 0.5;
      const cy = height * 0.52;

      const glow = ctx.createRadialGradient(
        cx,
        cy,
        20,
        cx,
        cy,
        Math.max(width, height) * 0.55,
      );
      glow.addColorStop(0, `rgba(91, 140, 255, ${0.07 + decide * 0.12})`);
      glow.addColorStop(1, "rgba(5,5,7,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        const wobble = reduced
          ? 0
          : Math.sin(time * 0.0007 + index) * (8 * (1 - organize));
        particle.x = lerp(particle.ox, particle.tx, organize) + wobble;
        particle.y = lerp(particle.oy, particle.ty, organize) + wobble * 0.6;
        if (decide > 0) {
          particle.x = lerp(particle.x, cx, decide * 0.82);
          particle.y = lerp(particle.y, cy, decide * 0.82);
        }
      });

      ctx.lineWidth = 0.6;
      const step = particles.length > 180 ? 2 : 1;
      for (let i = 0; i < particles.length; i += step) {
        const a = particles[i];
        for (let j = i + 1; j < Math.min(i + 8, particles.length); j += 1) {
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          const max = 78 + organize * 36;
          if (dist < max) {
            const alpha =
              (1 - dist / max) * (0.05 + organize * 0.14) * (1 - decide * 0.7);
            ctx.strokeStyle = `rgba(180, 200, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((particle, index) => {
        const highlight = index % 19 === 0;
        ctx.beginPath();
        ctx.fillStyle = highlight
          ? `rgba(139, 147, 255, ${0.55 + pulse * 0.35})`
          : `rgba(210, 220, 255, ${particle.a * (0.55 + organize * 0.45)})`;
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (p > 0.18 && p < 0.86) {
        ctx.font = "500 11px ui-sans-serif, system-ui";
        metrics.forEach((metric, i) => {
          const fade = Math.sin((p - 0.18) * Math.PI) * (0.55 + i * 0.05);
          ctx.fillStyle = `rgba(245,245,247,${0.28 + fade * 0.4})`;
          ctx.fillText(metric.label, width * metric.x, height * metric.y);
        });
      }

      if (decide > 0.05) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(91, 140, 255, ${0.25 + decide * 0.55})`;
        ctx.lineWidth = 1.2;
        ctx.arc(cx, cy, 26 + pulse * 6, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = `rgba(91, 140, 255, ${0.35 + decide * 0.5})`;
        ctx.arc(cx, cy, 4.5, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = window.requestAnimationFrame(draw);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    frame = window.requestAnimationFrame(draw);

    return () => {
      disposed = true;
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [density, reduced]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function clamp(n: number) {
  return Math.min(1, Math.max(0, n));
}

function smooth(t: number) {
  return t * t * (3 - 2 * t);
}
