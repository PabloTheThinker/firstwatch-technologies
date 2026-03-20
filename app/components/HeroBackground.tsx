'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    // Grid settings
    const gridSize = 60;
    const isMobile = window.innerWidth < 768;

    const animate = () => {
      time += 0.003;
      ctx.clearRect(0, 0, w(), h());

      // ── Gradient orbs ──
      // Primary blue orb - center, slowly drifting
      const orbX = w() * 0.5 + Math.sin(time * 0.7) * w() * 0.08;
      const orbY = h() * 0.4 + Math.cos(time * 0.5) * h() * 0.06;
      const orbR = Math.min(w(), h()) * (isMobile ? 0.7 : 0.5);

      const grad1 = ctx.createRadialGradient(orbX, orbY, 0, orbX, orbY, orbR);
      grad1.addColorStop(0, 'rgba(37, 99, 235, 0.12)');
      grad1.addColorStop(0.4, 'rgba(37, 99, 235, 0.04)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, w(), h());

      // Secondary purple orb - upper right
      const orb2X = w() * 0.7 + Math.cos(time * 0.4) * w() * 0.05;
      const orb2Y = h() * 0.25 + Math.sin(time * 0.6) * h() * 0.04;
      const orb2R = Math.min(w(), h()) * 0.35;

      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, orb2R);
      grad2.addColorStop(0, 'rgba(147, 51, 234, 0.06)');
      grad2.addColorStop(0.5, 'rgba(147, 51, 234, 0.02)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w(), h());

      // ── Geometric grid ──
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.04)';
      ctx.lineWidth = 0.5;

      // Horizontal lines
      for (let y = 0; y < h(); y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w(), y);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = 0; x < w(); x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h());
        ctx.stroke();
      }

      // ── Scanning line (radar sweep) ──
      const scanY = (h() * ((time * 0.15) % 1));
      const scanGrad = ctx.createLinearGradient(0, scanY - 80, 0, scanY + 20);
      scanGrad.addColorStop(0, 'transparent');
      scanGrad.addColorStop(0.7, 'rgba(37, 99, 235, 0.04)');
      scanGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 80, w(), 100);

      // ── Grid intersection dots ──
      // Only draw dots near the center for emphasis
      const centerX = w() / 2;
      const centerY = h() / 2;
      const maxDist = Math.min(w(), h()) * 0.5;

      for (let x = gridSize; x < w(); x += gridSize) {
        for (let y = gridSize; y < h(); y += gridSize) {
          const dx = x - centerX;
          const dy = y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            // Pulse dots near scan line
            const scanDist = Math.abs(y - scanY);
            const scanBoost = scanDist < 40 ? (1 - scanDist / 40) * 0.4 : 0;

            ctx.fillStyle = `rgba(37, 99, 235, ${alpha + scanBoost})`;
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // ── Corner brackets (HUD) ──
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.15)';
      ctx.lineWidth = 1;

      const margin = isMobile ? 20 : 40;
      const bracketSize = isMobile ? 20 : 30;

      // Top-left
      ctx.beginPath();
      ctx.moveTo(margin, margin + bracketSize);
      ctx.lineTo(margin, margin);
      ctx.lineTo(margin + bracketSize, margin);
      ctx.stroke();

      // Top-right
      ctx.beginPath();
      ctx.moveTo(w() - margin - bracketSize, margin);
      ctx.lineTo(w() - margin, margin);
      ctx.lineTo(w() - margin, margin + bracketSize);
      ctx.stroke();

      // Bottom-left
      ctx.beginPath();
      ctx.moveTo(margin, h() - margin - bracketSize);
      ctx.lineTo(margin, h() - margin);
      ctx.lineTo(margin + bracketSize, h() - margin);
      ctx.stroke();

      // Bottom-right
      ctx.beginPath();
      ctx.moveTo(w() - margin - bracketSize, h() - margin);
      ctx.lineTo(w() - margin, h() - margin);
      ctx.lineTo(w() - margin, h() - margin - bracketSize);
      ctx.stroke();

      // ── HUD status indicators ──
      if (!isMobile) {
        ctx.font = '10px monospace';
        ctx.fillStyle = 'rgba(37, 99, 235, 0.2)';
        ctx.textAlign = 'left';
        ctx.fillText('SYS.ACTIVE', margin + 4, margin + bracketSize + 16);
        ctx.textAlign = 'right';
        ctx.fillText('28°06\'N  82°32\'W', w() - margin - 4, margin + bracketSize + 16);
        ctx.textAlign = 'left';
        ctx.fillText('VEKTRA TECHNOLOGIES', margin + 4, h() - margin - bracketSize - 8);
        ctx.textAlign = 'right';
        ctx.fillText('SEC.CLEARANCE', w() - margin - 4, h() - margin - bracketSize - 8);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
}
