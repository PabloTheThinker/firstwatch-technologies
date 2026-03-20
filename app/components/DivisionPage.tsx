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

const colorMap = {
  purple: {
    iconBg: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/20',
    tagBorder: 'border-purple-500/20',
    tagBg: 'bg-purple-500/5',
    tagText: 'text-purple-400',
    glowFrom: 'from-purple-500/[0.04]',
    capBorder: 'border-purple-500/10',
  },
  blue: {
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/20',
    tagBorder: 'border-blue-500/20',
    tagBg: 'bg-blue-500/5',
    tagText: 'text-blue-400',
    glowFrom: 'from-blue-500/[0.04]',
    capBorder: 'border-blue-500/10',
  },
  orange: {
    iconBg: 'bg-orange-500/10',
    iconBorder: 'border-orange-500/20',
    tagBorder: 'border-orange-500/20',
    tagBg: 'bg-orange-500/5',
    tagText: 'text-orange-400',
    glowFrom: 'from-orange-500/[0.04]',
    capBorder: 'border-orange-500/10',
  },
  green: {
    iconBg: 'bg-green-500/10',
    iconBorder: 'border-green-500/20',
    tagBorder: 'border-green-500/20',
    tagBg: 'bg-green-500/5',
    tagText: 'text-green-400',
    glowFrom: 'from-green-500/[0.04]',
    capBorder: 'border-green-500/10',
  },
};

export default function DivisionPage({
  name,
  number,
  subtitle,
  icon,
  headline,
  headlineAccent,
  description,
  paragraphs,
  capabilities,
  tags,
  accentColor,
}: DivisionPageProps) {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const capRef = useRef<HTMLDivElement>(null);
  const [capVisible, setCapVisible] = useState(false);

  const colors = colorMap[accentColor];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCapVisible(true); },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (capRef.current) observer.observe(capRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/70 backdrop-blur-xl border-b border-white/[0.06]" style={{ backdropFilter: 'blur(20px) saturate(1.2)' }}>
        <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-85 transition-opacity duration-200">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <span className="text-sm">🔭</span>
            </div>
            <span className="font-medium text-sm text-white/90 tracking-tight">First Watch</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-mono text-[10px] text-gray-600 uppercase tracking-wider">{number}</span>
            <span className="text-gray-800">/</span>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">{subtitle}</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-16">
        {/* Blueprint grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
          <div
            className="absolute w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, rgba(37,99,235,0.03) 40%, transparent 70%)',
              left: '20%',
              top: '30%',
              transform: `translate(calc(-50% + ${mousePos.x * 40}px), calc(-50% + ${mousePos.y * 40}px))`,
              transition: 'transform 0.4s ease-out',
              filter: 'blur(40px)',
            }}
          />
        </div>

        <div className="mx-auto max-w-[1200px] px-6 relative w-full">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div
              className={`flex items-center gap-2 mb-8 transition-all duration-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link href="/" className="font-mono text-[10px] uppercase tracking-wider text-gray-600 hover:text-blue-400 transition-colors">
                First Watch
              </Link>
              <span className="text-gray-800">/</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-gray-500">{subtitle}</span>
            </div>

            {/* Icon + number */}
            <div
              className={`flex items-center gap-4 mb-6 transition-all duration-700 delay-100 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <div className={`w-14 h-14 rounded-xl ${colors.iconBg} border ${colors.iconBorder} flex items-center justify-center`}>
                <span className="text-2xl">{icon}</span>
              </div>
              <div>
                <span className="font-mono text-[10px] text-gray-600 uppercase tracking-wider">{number}</span>
                <h2 className="font-mono text-xs text-gray-500 uppercase tracking-wider">{name}</h2>
              </div>
            </div>

            {/* Headline */}
            <h1
              className={`mb-6 transition-all duration-700 delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="block text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white/90">
                {headline}
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight gradient-text">
                {headlineAccent}
              </span>
            </h1>

            {/* Lead paragraph */}
            <p
              className={`text-gray-300 text-lg leading-relaxed max-w-2xl mb-8 transition-all duration-700 delay-300 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {description}
            </p>

            {/* Tags */}
            <div
              className={`flex flex-wrap gap-2 transition-all duration-700 delay-[400ms] ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`font-mono text-[10px] px-2.5 py-1 rounded-md border ${colors.tagBorder} ${colors.tagBg} ${colors.tagText}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-2xl space-y-6">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-gray-400 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section ref={capRef} className="section relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="mx-auto max-w-[1200px] px-6">
          <div className={`mb-12 transition-all duration-700 ease-out ${capVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`h-px bg-blue-500/60 transition-all duration-700 delay-200 ${capVisible ? 'w-8' : 'w-0'}`} />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-400">Capabilities</span>
              <div className={`h-px bg-white/[0.04] transition-all duration-1000 delay-300 ${capVisible ? 'flex-1' : 'flex-0 w-0'}`} />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#111118]/80 backdrop-blur-sm hover:border-blue-500/25 transition-all duration-500 ease-out ${
                  capVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${250 + i * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.glowFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/[0.06] group-hover:border-blue-500/20 transition-colors duration-200" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/[0.06] group-hover:border-blue-500/20 transition-colors duration-200" />

                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-white/90">{cap.title}</h3>
                    <span className="font-mono text-[9px] text-gray-700 uppercase tracking-wider">0{i + 1}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back CTA */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-gray-500 hover:text-blue-400 transition-colors"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to First Watch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.04] py-8">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="mx-auto max-w-[1200px] px-6 relative">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500/30" />
              <span className="font-mono text-xs text-gray-600">
                &copy; {new Date().getFullYear()} First Watch Technologies
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
