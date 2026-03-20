'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Capability {
  title: string;
  description: string;
}

interface DivisionProduct {
  name: string;
  tagline: string;
  status: string;
  statusColor: string;
  href: string;
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
  products?: DivisionProduct[];
}

const colorConfig = {
  purple: {
    gradient: 'radial-gradient(circle, rgba(147,51,234,0.07) 0%, rgba(147,51,234,0.02) 40%, transparent 65%)',
    accent: 'text-purple-400',
    border: 'border-purple-500/20',
    bg: 'bg-purple-500/5',
    glow: 'hover:border-purple-500/25',
  },
  blue: {
    gradient: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.02) 40%, transparent 65%)',
    accent: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/5',
    glow: 'hover:border-blue-500/25',
  },
  orange: {
    gradient: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, rgba(249,115,22,0.02) 40%, transparent 65%)',
    accent: 'text-orange-400',
    border: 'border-orange-500/20',
    bg: 'bg-orange-500/5',
    glow: 'hover:border-orange-500/25',
  },
  green: {
    gradient: 'radial-gradient(circle, rgba(34,197,94,0.07) 0%, rgba(34,197,94,0.02) 40%, transparent 65%)',
    accent: 'text-green-400',
    border: 'border-green-500/20',
    bg: 'bg-green-500/5',
    glow: 'hover:border-green-500/25',
  },
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
  tags,
  accentColor,
  products,
}: DivisionPageProps) {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const capRef = useRef<HTMLDivElement>(null);
  const [capVisible, setCapVisible] = useState(false);
  const colors = colorConfig[accentColor];

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
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
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-16">
          <Link href="/" className="font-medium text-sm text-white tracking-tight hover:opacity-80 transition-opacity">
            First Watch Technologies
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-[#555577]">{number}</span>
            <span className="text-[#555577]/50">/</span>
            <span className={`font-mono text-[10px] ${colors.accent}`}>{subtitle}</span>
          </div>
        </div>
      </nav>

      {/* Hero — full viewport */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[900px] h-[900px] rounded-full"
            style={{
              background: colors.gradient,
              left: '50%',
              top: '45%',
              transform: `translate(calc(-50% + ${mousePos.x * 40}px), calc(-50% + ${mousePos.y * 40}px))`,
              transition: 'transform 0.5s ease-out',
              filter: 'blur(60px)',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 w-full">
          {/* Breadcrumb */}
          <div className={`flex items-center gap-2 mb-10 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <Link href="/" className="font-mono text-[10px] text-[#555577] hover:text-[#8888aa] transition-colors uppercase tracking-wider">
              First Watch
            </Link>
            <span className="text-[#555577]/30">/</span>
            <span className={`font-mono text-[10px] ${colors.accent} uppercase tracking-wider`}>{subtitle}</span>
          </div>

          <p className={`font-mono text-[11px] uppercase tracking-[0.2em] ${colors.accent} mb-4 transition-all duration-700 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            {name}
          </p>

          <h1 className={`max-w-3xl transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white/90">
              {headline}
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight gradient-text mt-1">
              {headlineAccent}
            </span>
          </h1>

          <p className={`mt-8 text-lg text-[#8888aa] leading-relaxed max-w-2xl transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {description}
          </p>

          {/* Tags */}
          <div className={`flex flex-wrap gap-2 mt-8 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {tags.map((tag) => (
              <span key={tag} className={`font-mono text-[10px] px-3 py-1.5 rounded-md border ${colors.border} ${colors.bg} ${colors.accent}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-32 px-6">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb]/15 to-transparent" />
        <div className="mx-auto max-w-2xl space-y-8">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[#8888aa] text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Products */}
      {products && products.length > 0 && (
        <section className="py-32 px-6">
          <div className="mx-auto max-w-[1200px]">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2563eb] mb-16">Products</p>
            <div className="grid md:grid-cols-2 gap-4">
              {products.map((product) => {
                const dotColor = product.statusColor === 'green' ? 'bg-emerald-500' : product.statusColor === 'blue' ? 'bg-blue-500' : 'bg-amber-500';
                return (
                  <Link
                    key={product.name}
                    href={product.href}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111118]/60 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_0_40px_rgba(37,99,235,0.04)]"
                  >
                    <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/[0.04] group-hover:border-white/[0.1] transition-colors duration-300" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/[0.04] group-hover:border-white/[0.1] transition-colors duration-300" />
                    <div className="relative p-8 md:p-10">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl md:text-2xl font-light text-white/90 tracking-tight">{product.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                          <span className="font-mono text-[10px] text-[#8888aa] uppercase tracking-wider">{product.status}</span>
                        </div>
                      </div>
                      <p className="text-[#8888aa] text-sm leading-relaxed mb-6">{product.tagline}</p>
                      <span className="inline-flex items-center gap-2 text-[13px] text-[#555577] group-hover:text-white/70 transition-colors duration-300">
                        Learn more
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Capabilities */}
      <section ref={capRef} className="py-32 px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className={`mb-16 transition-all duration-1000 ${capVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2563eb] mb-4">Capabilities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111118]/60 backdrop-blur-sm p-8 transition-all duration-500 ${colors.glow} ${
                  capVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                {/* Corner accents */}
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/[0.04]" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/[0.04]" />

                <span className="font-mono text-[10px] text-[#555577] mb-5 block">0{i + 1}</span>
                <h3 className="text-lg font-light text-white/90 mb-4 tracking-tight">{cap.title}</h3>
                <p className="text-sm text-[#8888aa] leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-[1200px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#555577] hover:text-[#8888aa] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Divisions
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-10 px-6">
        <div className="mx-auto max-w-[1400px] flex items-center justify-between">
          <span className="text-xs text-[#555577]">&copy; {new Date().getFullYear()} First Watch Technologies</span>
          <div className="flex items-center gap-6">
            <Link href="/ai" className="text-xs text-[#555577] hover:text-[#8888aa] transition-colors">AI</Link>
            <Link href="/software" className="text-xs text-[#555577] hover:text-[#8888aa] transition-colors">Software</Link>
            <Link href="/robotics" className="text-xs text-[#555577] hover:text-[#8888aa] transition-colors">Robotics</Link>
            <Link href="/communications" className="text-xs text-[#555577] hover:text-[#8888aa] transition-colors">Communications</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
