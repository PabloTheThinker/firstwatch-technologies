'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const HeroBackground = dynamic(() => import('./HeroBackground'), { ssr: false });

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      {/* Canvas background */}
      <HeroBackground />

      <div className="relative z-10 text-center px-6 max-w-5xl w-full">
        {/* Status indicator */}
        <div
          className={`flex items-center justify-center gap-2 mb-8 transition-all duration-700 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb] animate-pulse shadow-[0_0_6px_rgba(37,99,235,0.6)]" />
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#2563eb]/60">
            Systems Online
          </span>
        </div>

        <h1>
          <span
            className={`block text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extralight tracking-tight text-white transition-all duration-1000 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            First Watch
          </span>
          <span
            className={`block text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium tracking-tight gradient-text transition-all duration-1000 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Technologies
          </span>
        </h1>

        {/* Divider line */}
        <div
          className={`mx-auto mt-6 mb-6 transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 w-12' : 'opacity-0 w-0'
          }`}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-[#2563eb]/40 to-transparent" />
        </div>

        <p
          className={`text-sm sm:text-base md:text-lg text-[#8888aa] font-light max-w-md sm:max-w-lg mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Intelligent software. Autonomous systems.
          <br className="hidden sm:block" />{' '}
          Resilient infrastructure.
        </p>

        <div
          className={`mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto transition-all duration-1000 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#divisions"
            className="w-full sm:w-auto px-8 py-3 rounded-md bg-[#2563eb] text-white text-sm font-medium hover:bg-[#3b82f6] transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] text-center"
          >
            Explore Divisions
          </a>
          <a
            href="#mission"
            className="w-full sm:w-auto px-8 py-3 rounded-md border border-white/[0.08] text-[#8888aa] text-sm hover:text-white hover:border-white/[0.15] transition-all duration-200 text-center"
          >
            Our Mission
          </a>
        </div>
      </div>

      {/* Bottom scroll indicator + coordinates */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-0 right-0 px-6 flex items-end justify-between transition-all duration-1000 delay-700 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="hidden sm:block font-mono text-[9px] text-white/10 uppercase tracking-wider">
          Est. 2026
        </span>
        <div className="mx-auto sm:mx-0 flex flex-col items-center gap-1">
          <span className="font-mono text-[9px] text-white/15 uppercase tracking-wider">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-[#2563eb]/30 to-transparent animate-pulse" />
        </div>
        <span className="hidden sm:block font-mono text-[9px] text-white/10 uppercase tracking-wider">
          Spring Hill, FL
        </span>
      </div>
    </section>
  );
}
