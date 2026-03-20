'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const products = [
  {
    name: 'Claw Cognition',
    division: 'Vektra Software',
    tagline: 'Agent-first marketplace for cognitive lenses — structured thinking frameworks that enhance AI reasoning. Live on Base L2 with USDC payments.',
    status: 'Live',
    statusColor: 'bg-emerald-500',
    href: '/software/claw-cognition',
    external: 'https://clawcognition.com',
  },
  {
    name: 'Lineage Engine',
    division: 'Vektra AI',
    tagline: 'Open-source cognitive architecture framework with emotion modeling, neural mesh, immune system, DNA evolution, and portable identity.',
    status: 'In Development',
    statusColor: 'bg-blue-500',
    href: '/ai/lineage-engine',
    external: null,
  },
];

export default function Products() {
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
    <section ref={ref} className="relative py-32 md:py-40 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb]/15 to-transparent" />

      <div className="mx-auto max-w-[1200px]">
        <div className={`text-center mb-20 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2563eb] mb-4">Products</p>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white/90">
            What we&apos;re{' '}
            <span className="gradient-text font-medium">building.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {products.map((product, i) => (
            <Link
              key={product.name}
              href={product.href}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111118]/60 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_0_40px_rgba(37,99,235,0.04)] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              {/* Corner accents */}
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-white/[0.04] group-hover:border-white/[0.1] transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-white/[0.04] group-hover:border-white/[0.1] transition-colors duration-300" />

              <div className="relative p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl md:text-3xl font-light text-white/90 tracking-tight">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${product.statusColor}`} />
                    <span className="font-mono text-[10px] text-[#8888aa] uppercase tracking-wider">{product.status}</span>
                  </div>
                </div>
                <p className="font-mono text-[10px] text-[#555577] uppercase tracking-wider mb-6">{product.division}</p>

                <p className="text-[#8888aa] text-sm leading-relaxed mb-8">{product.tagline}</p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-[13px] text-[#555577] group-hover:text-white/70 transition-colors duration-300">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  {product.external && (
                    <a
                      href={product.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-[12px] text-[#555577] hover:text-[#8888aa] transition-colors"
                    >
                      Visit
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
