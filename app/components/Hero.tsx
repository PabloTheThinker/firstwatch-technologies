'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('./ParticleField'), { ssr: false });

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Three.js particle field */}
      <ParticleField />

      {/* Ambient gradient underneath */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1>
          <span
            className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-extralight tracking-tight text-white transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            First Watch
          </span>
          <span
            className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium tracking-tight gradient-text transition-all duration-1000 delay-150 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Technologies
          </span>
        </h1>
        <p
          className={`mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-[#8888aa] font-light max-w-md sm:max-w-xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Intelligent software. Autonomous systems. Resilient infrastructure.
        </p>
        <div
          className={`mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 transition-all duration-1000 delay-500 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#divisions"
            className="w-full sm:w-auto px-7 py-3 rounded-lg bg-[#2563eb] text-white text-sm font-medium hover:bg-[#3b82f6] transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.35)] text-center"
          >
            Explore Divisions
          </a>
          <a
            href="#mission"
            className="w-full sm:w-auto px-7 py-3 rounded-lg border border-white/[0.1] text-[#8888aa] text-sm hover:text-white hover:border-white/[0.2] transition-all duration-200 text-center"
          >
            Our Mission
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          mounted ? 'opacity-40' : 'opacity-0'
        }`}
      >
        <div className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-transparent via-[#2563eb]/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
