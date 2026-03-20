'use client';

import { useEffect, useRef, useState } from 'react';

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission" ref={sectionRef} className="section relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className={`mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`h-px bg-blue-500/60 transition-all duration-700 delay-200 ${isVisible ? 'w-8' : 'w-0'}`} />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-400">Mission</span>
            <div className={`h-px bg-white/[0.04] transition-all duration-1000 delay-300 ${isVisible ? 'flex-1' : 'flex-0 w-0'}`} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight text-white/90 tracking-tight mb-3">
            See a Path. <span className="font-medium gradient-text">Secure a Path.</span>
          </h2>
        </div>

        {/* Mission card */}
        <div className={`relative overflow-hidden rounded-2xl border border-blue-500/15 bg-gradient-to-br from-blue-500/[0.04] to-transparent mb-8 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Corner accents */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-blue-500/30" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-blue-500/30" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-blue-500/30" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-blue-500/30" />
          {/* Scan lines */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(37,99,235,0.015)_2px,rgba(37,99,235,0.015)_4px)] pointer-events-none" />

          <div className="relative p-8 md:p-10">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <span className="text-2xl">🔭</span>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed max-w-2xl text-lg">
                  First Watch Technologies builds support systems for humanity — intelligent software and autonomous systems that expand what people can do, reach, and protect.
                </p>
                <p className="text-gray-400 leading-relaxed max-w-2xl">
                  We develop AI platforms that bring clarity to complex decisions, communication infrastructure that stays resilient when traditional networks fail, and autonomous robotics for disaster response and space exploration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Four pillars */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 transition-all duration-700 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {[
            { label: 'AI', icon: '🧠' },
            { label: 'Software', icon: '💻' },
            { label: 'Robotics', icon: '🤖' },
            { label: 'Communications', icon: '📡' },
          ].map((pillar) => (
            <div key={pillar.label} className="text-center rounded-xl border border-white/[0.04] bg-[#111118]/40 py-5 px-3 hover:border-blue-500/20 transition-colors duration-200">
              <span className="text-xl mb-2 block">{pillar.icon}</span>
              <div className="font-mono text-sm font-medium text-white/80">{pillar.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
