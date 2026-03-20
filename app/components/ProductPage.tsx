'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Feature {
  title: string;
  description: string;
}

interface ProductPageProps {
  name: string;
  division: string;
  divisionHref: string;
  headline: string;
  headlineAccent: string;
  description: string;
  paragraphs: string[];
  features: Feature[];
  status: string;
  statusColor: string;
  url: string | null;
  accentColor: 'red' | 'green' | 'blue' | 'yellow';
}

const gradientMap = {
  red: 'radial-gradient(circle, rgba(185,28,28,0.07) 0%, rgba(185,28,28,0.02) 40%, transparent 65%)',
  green: 'radial-gradient(circle, rgba(22,101,52,0.08) 0%, rgba(22,101,52,0.02) 40%, transparent 65%)',
  blue: 'radial-gradient(circle, rgba(30,64,175,0.08) 0%, rgba(30,64,175,0.02) 40%, transparent 65%)',
  yellow: 'radial-gradient(circle, rgba(161,98,7,0.07) 0%, rgba(161,98,7,0.02) 40%, transparent 65%)',
};

const statusColorMap: Record<string, string> = {
  green: 'bg-emerald-500',
  blue: 'bg-blue-500',
  amber: 'bg-amber-500',
};

const accentTextMap = {
  red: 'text-red-400',
  green: 'text-green-400',
  blue: 'text-blue-400',
  yellow: 'text-yellow-400',
};

export default function ProductPage({
  name,
  division,
  divisionHref,
  headline,
  headlineAccent,
  description,
  paragraphs,
  features,
  status,
  statusColor,
  url,
  accentColor,
}: ProductPageProps) {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const featRef = useRef<HTMLDivElement>(null);
  const [featVisible, setFeatVisible] = useState(false);

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
      ([entry]) => { if (entry.isIntersecting) setFeatVisible(true); },
      { threshold: 0.1 }
    );
    if (featRef.current) observer.observe(featRef.current);
    return () => observer.disconnect();
  }, []);

  const accentText = accentTextMap[accentColor];
  const dotColor = statusColorMap[statusColor] || 'bg-blue-500';

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-16">
          <Link href="/" className="font-medium text-sm text-white tracking-tight hover:opacity-80 transition-opacity">
            Vektra Technologies
          </Link>
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
            <span className="font-mono text-[10px] text-[#8888aa] uppercase tracking-wider">{status}</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[900px] h-[900px] rounded-full"
            style={{
              background: gradientMap[accentColor],
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
              Vektra
            </Link>
            <span className="text-[#555577]/30">/</span>
            <Link href={divisionHref} className={`font-mono text-[10px] text-[#555577] hover:text-[#8888aa] transition-colors uppercase tracking-wider`}>
              {division}
            </Link>
            <span className="text-[#555577]/30">/</span>
            <span className={`font-mono text-[10px] ${accentText} uppercase tracking-wider`}>{name}</span>
          </div>

          {/* Status badge */}
          <div className={`flex items-center gap-2 mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`w-2 h-2 rounded-full ${dotColor}`} />
            <span className="font-mono text-[11px] text-[#8888aa] uppercase tracking-wider">{status}</span>
          </div>

          <h1 className={`max-w-3xl transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white/90">
              {headline}
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight gradient-text mt-1">
              {headlineAccent}
            </span>
          </h1>

          <p className={`mt-6 md:mt-8 text-base md:text-lg text-[#8888aa] leading-relaxed max-w-2xl transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {description}
          </p>

          {/* CTA */}
          {url && (
            <div className={`mt-10 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#2563eb] text-white text-sm font-medium hover:bg-[#3b82f6] transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.35)]"
              >
                Visit {name}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-32 px-6">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb]/15 to-transparent" />
        <div className="prose-body mx-auto max-w-2xl">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[#8888aa] text-base md:text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Features */}
      <section ref={featRef} className="py-20 md:py-32 px-6">
        <div className="mx-auto max-w-[1200px]">
          <p
            className={`font-mono text-[11px] uppercase tracking-[0.2em] text-[#2563eb] mb-16 transition-all duration-1000 ${
              featVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Key Features
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className={`relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111118]/60 backdrop-blur-sm p-8 transition-all duration-500 hover:border-white/[0.12] ${
                  featVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/[0.04]" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/[0.04]" />

                <span className="font-mono text-[10px] text-[#555577] mb-5 block">0{i + 1}</span>
                <h3 className="text-lg font-light text-white/90 mb-4 tracking-tight">{feat.title}</h3>
                <p className="text-sm text-[#8888aa] leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-[1200px] flex items-center gap-6">
          <Link
            href={divisionHref}
            className="inline-flex items-center gap-2 text-sm text-[#555577] hover:text-[#8888aa] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {division}
          </Link>
          <Link
            href="/"
            className="text-sm text-[#555577] hover:text-[#8888aa] transition-colors"
          >
            All Divisions
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-10 px-6">
        <div className="mx-auto max-w-[1400px] flex items-center justify-between">
          <span className="text-xs text-[#555577]">&copy; {new Date().getFullYear()} Vektra Technologies</span>
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
