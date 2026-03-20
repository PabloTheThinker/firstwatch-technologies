'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Capability {
  title: string;
  description: string;
}

interface DivisionPageProps {
  name: string;
  number: string;
  subtitle: string;
  icon: string;
  headline: string;
  headlineAccent: string;
  description: string;
  paragraphs: string[];
  capabilities: Capability[];
  tags: string[];
  accentColor: 'purple' | 'blue' | 'orange' | 'green';
}

const gradientMap = {
  purple: 'radial-gradient(circle, rgba(147,51,234,0.06) 0%, rgba(147,51,234,0.02) 40%, transparent 65%)',
  blue: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.02) 40%, transparent 65%)',
  orange: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, rgba(249,115,22,0.02) 40%, transparent 65%)',
  green: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, rgba(34,197,94,0.02) 40%, transparent 65%)',
};

export default function DivisionPage({
  name,
  number,
  subtitle,
  headline,
  headlineAccent,
  description,
  paragraphs,
  capabilities,
  accentColor,
}: DivisionPageProps) {
  const [mounted, setMounted] = useState(false);
  const capRef = useRef<HTMLDivElement>(null);
  const [capVisible, setCapVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCapVisible(true); },
      { threshold: 0.1 }
    );
    if (capRef.current) observer.observe(capRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-16">
          <Link href="/" className="text-white font-medium text-sm tracking-tight hover:opacity-80 transition-opacity">
            First Watch Technologies
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-white/30 text-xs">
            <span className="font-mono">{number}</span>
            <span>/</span>
            <span>{subtitle}</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[1000px] h-[1000px] rounded-full"
            style={{
              background: gradientMap[accentColor],
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(80px)',
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p
            className={`text-xs text-white/30 font-mono uppercase tracking-[0.2em] mb-8 transition-all duration-700 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {name}
          </p>
          <h1
            className={`transition-all duration-1000 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white">
              {headline}
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white/60">
              {headlineAccent}
            </span>
          </h1>
          <p
            className={`mt-6 text-base sm:text-lg text-white/40 font-light max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {description}
          </p>
        </div>
      </section>

      {/* Body text */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-2xl space-y-8">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-white/40 text-lg leading-relaxed font-light">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section ref={capRef} className="py-32 px-6">
        <div className="mx-auto max-w-[1200px]">
          <p
            className={`text-xs text-white/30 font-mono uppercase tracking-[0.2em] text-center mb-20 transition-all duration-1000 ${
              capVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Capabilities
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-white/[0.04] rounded-xl overflow-hidden">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`bg-black p-8 md:p-10 transition-all duration-700 ${
                  capVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <h3 className="text-lg font-light text-white mb-4">{cap.title}</h3>
                <p className="text-sm text-white/30 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-[1200px] text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-10 px-6">
        <div className="mx-auto max-w-[1400px] flex items-center justify-between">
          <span className="text-xs text-white/20">&copy; {new Date().getFullYear()} First Watch Technologies</span>
        </div>
      </footer>
    </div>
  );
}
