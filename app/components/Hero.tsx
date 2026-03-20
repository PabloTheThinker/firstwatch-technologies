'use client';

import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[1000px] h-[1000px] rounded-full opacity-80"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, rgba(37,99,235,0.02) 40%, transparent 65%)',
            left: '50%',
            top: '45%',
            transform: `translate(calc(-50% + ${mousePos.x * 40}px), calc(-50% + ${mousePos.y * 40}px))`,
            transition: 'transform 0.5s ease-out',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1>
          <span
            className={`block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extralight tracking-tight text-white transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            First Watch
          </span>
          <span
            className={`block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight gradient-text transition-all duration-1000 delay-150 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Technologies
          </span>
        </h1>
        <p
          className={`mt-6 text-base sm:text-lg text-[#8888aa] font-light max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Building support systems for humanity through intelligent software and autonomous systems.
        </p>
        <div
          className={`mt-10 flex items-center justify-center gap-5 transition-all duration-1000 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#divisions"
            className="px-7 py-3 rounded-lg bg-[#2563eb] text-white text-sm font-medium hover:bg-[#3b82f6] transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]"
          >
            Explore Divisions
          </a>
          <a
            href="#mission"
            className="px-7 py-3 rounded-lg border border-white/[0.1] text-[#8888aa] text-sm hover:text-white hover:border-white/[0.2] transition-all duration-200"
          >
            Our Mission
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          mounted ? 'opacity-40' : 'opacity-0'
        }`}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#2563eb]/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
