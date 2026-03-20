'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface DivisionPanelProps {
  name: string;
  tagline: string;
  href: string;
  gradient: string;
}

function DivisionPanel({ name, tagline, href, gradient }: DivisionPanelProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-[1000px] h-[1000px] rounded-full"
          style={{
            background: gradient,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {name}
        </h2>
        <p
          className={`mt-4 text-base sm:text-lg text-white/40 font-light transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {tagline}
        </p>
        <Link
          href={href}
          className={`inline-flex items-center gap-2 mt-8 text-sm text-white/70 hover:text-white border-b border-white/20 hover:border-white/60 pb-0.5 transition-all duration-300 delay-400 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Learn More
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

const divisions = [
  {
    name: 'First Watch AI',
    tagline: 'Cognitive architectures and agent frameworks for autonomous systems.',
    href: '/ai',
    gradient: 'radial-gradient(circle, rgba(147,51,234,0.06) 0%, rgba(147,51,234,0.02) 40%, transparent 65%)',
  },
  {
    name: 'First Watch Software',
    tagline: 'Platforms and tools that bring clarity to complex decisions.',
    href: '/software',
    gradient: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.02) 40%, transparent 65%)',
  },
  {
    name: 'First Watch Robotics',
    tagline: 'Autonomous systems for disaster response and space exploration.',
    href: '/robotics',
    gradient: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, rgba(249,115,22,0.02) 40%, transparent 65%)',
  },
  {
    name: 'First Watch Communications',
    tagline: 'Resilient infrastructure that works when everything else fails.',
    href: '/communications',
    gradient: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, rgba(34,197,94,0.02) 40%, transparent 65%)',
  },
];

export default function Divisions() {
  return (
    <>
      {divisions.map((div) => (
        <DivisionPanel key={div.name} {...div} />
      ))}
    </>
  );
}
