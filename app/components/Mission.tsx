'use client';

import { useEffect, useRef, useState } from 'react';

export default function Mission() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission" ref={ref} className="relative min-h-screen flex items-center justify-center px-6">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb]/15 to-transparent" />

      <div className="max-w-4xl w-full">
        {/* Mission statement card */}
        <div
          className={`relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111118]/60 backdrop-blur-sm p-8 md:p-16 transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-[#2563eb]/30" />
          <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-[#2563eb]/30" />
          <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-[#2563eb]/30" />
          <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-[#2563eb]/30" />

          <p
            className={`font-mono text-[11px] uppercase tracking-[0.2em] text-[#2563eb] mb-8 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Mission
          </p>
          <h2
            className={`text-2xl sm:text-3xl md:text-5xl font-extralight tracking-tight text-white/90 leading-[1.15] mb-6 md:mb-8 transition-all duration-1000 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            See a path.{' '}
            <span className="gradient-text font-medium">Secure a path.</span>
          </h2>
          <p
            className={`text-[#8888aa] text-base md:text-lg leading-relaxed max-w-2xl transition-all duration-1000 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            First Watch Technologies develops intelligent software, autonomous systems, and
            resilient communication infrastructure. Our work spans four divisions — each focused
            on expanding what people can do, reach, and protect.
          </p>
        </div>
      </div>
    </section>
  );
}
