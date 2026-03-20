'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const divisions = [
  {
    name: 'First Watch AI',
    subtitle: 'Intelligence',
    number: '01',
    tagline: 'Cognitive architectures and agent frameworks for autonomous systems that reason, collaborate, and adapt.',
    href: '/ai',
    gradient: 'rgba(147,51,234,0.05)',
    accentBorder: 'group-hover:border-purple-500/25',
    accentText: 'text-purple-400',
    accentGlow: 'group-hover:shadow-[0_0_40px_rgba(147,51,234,0.06)]',
  },
  {
    name: 'First Watch Software',
    subtitle: 'Platforms',
    number: '02',
    tagline: 'Products and platforms that bring clarity to complex decisions through AI-powered tools and marketplaces.',
    href: '/software',
    gradient: 'rgba(37,99,235,0.05)',
    accentBorder: 'group-hover:border-blue-500/25',
    accentText: 'text-blue-400',
    accentGlow: 'group-hover:shadow-[0_0_40px_rgba(37,99,235,0.06)]',
  },
  {
    name: 'First Watch Robotics',
    subtitle: 'Autonomous Systems',
    number: '03',
    tagline: 'Autonomous systems for extreme environments — from disaster zones to orbit.',
    href: '/robotics',
    gradient: 'rgba(249,115,22,0.05)',
    accentBorder: 'group-hover:border-orange-500/25',
    accentText: 'text-orange-400',
    accentGlow: 'group-hover:shadow-[0_0_40px_rgba(249,115,22,0.06)]',
  },
  {
    name: 'First Watch Communications',
    subtitle: 'Infrastructure',
    number: '04',
    tagline: 'Resilient communication systems that work when everything else fails.',
    href: '/communications',
    gradient: 'rgba(34,197,94,0.05)',
    accentBorder: 'group-hover:border-green-500/25',
    accentText: 'text-green-400',
    accentGlow: 'group-hover:shadow-[0_0_40px_rgba(34,197,94,0.06)]',
  },
];

export default function Divisions() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="divisions" ref={ref} className="relative py-32 md:py-40 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb]/15 to-transparent" />

      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2563eb] mb-4">Divisions</p>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white/90">
            Four divisions.{' '}
            <span className="gradient-text font-medium">One mission.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {divisions.map((div, i) => (
            <Link
              key={div.number}
              href={div.href}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111118]/60 backdrop-blur-sm transition-all duration-500 ${div.accentBorder} ${div.accentGlow} ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Hover gradient fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 50%, ${div.gradient}, transparent 70%)` }}
              />

              {/* Corner accents */}
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/[0.04] group-hover:border-white/[0.1] transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/[0.04] group-hover:border-white/[0.1] transition-colors duration-300" />

              <div className="relative p-8 md:p-10">
                {/* Top row */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-light text-white/90 tracking-tight">{div.name}</h3>
                    <span className={`font-mono text-[10px] uppercase tracking-[0.15em] ${div.accentText}`}>{div.subtitle}</span>
                  </div>
                  <span className="font-mono text-xs text-[#555577]">{div.number}</span>
                </div>

                {/* Description */}
                <p className="text-[#8888aa] text-sm leading-relaxed mb-8">
                  {div.tagline}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[13px] text-[#555577] group-hover:text-white/70 transition-colors duration-300">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
