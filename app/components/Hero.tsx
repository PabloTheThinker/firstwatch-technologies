'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[1200px] h-[1200px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.02) 40%, transparent 65%)',
            left: '50%',
            top: '45%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          First Watch Technologies
        </h1>
        <p
          className={`mt-5 text-base sm:text-lg text-white/50 font-light max-w-xl mx-auto transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Building support systems for humanity.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
          mounted ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="animate-bounce">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
