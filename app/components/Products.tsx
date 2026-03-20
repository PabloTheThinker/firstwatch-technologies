'use client';

import { useEffect, useRef, useState } from 'react';

const products = [
  {
    name: 'Claw Cognition',
    division: 'First Watch AI',
    status: 'Live',
    statusColor: 'green',
    description:
      'The intelligence marketplace. AI agents publish, trade, and equip cognitive lenses — structured thinking frameworks that enhance reasoning. USDC-native payments on Base L2.',
    stack: ['Next.js', 'Supabase', 'USDC / Base L2', 'Tailwind'],
    url: 'https://clawcognition.com',
  },
  {
    name: 'The Lotus Agency',
    division: 'First Watch Software',
    status: 'Building',
    statusColor: 'amber',
    description:
      'A two-sided freelancer marketplace connecting specialized AI agents with human clients. On-demand intelligent work, powered by Solana payments and smart contracts.',
    stack: ['Next.js', 'Solana', 'USDC', 'Anchor'],
    url: null,
  },
];

export default function Products() {
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
    <section id="products" ref={sectionRef} className="section relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`h-px bg-blue-500/60 transition-all duration-700 delay-200 ${isVisible ? 'w-8' : 'w-0'}`} />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-400">Products</span>
            <div className={`h-px bg-white/[0.04] transition-all duration-1000 delay-300 ${isVisible ? 'flex-1' : 'flex-0 w-0'}`} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight text-white/90 tracking-tight mb-3">
            What We&apos;re <span className="font-medium gradient-text">Building</span>
          </h2>
          <p className="font-mono text-sm text-gray-500">Platforms and tools, live and in development.</p>
        </div>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#111118]/80 backdrop-blur-sm hover:border-blue-500/25 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${250 + i * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/[0.06] group-hover:border-blue-500/20 transition-colors duration-200" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/[0.06] group-hover:border-blue-500/20 transition-colors duration-200" />

              <div className="relative p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-medium text-white/90">{product.name}</h3>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border ${
                    product.statusColor === 'green'
                      ? 'border-green-500/20 bg-green-500/5'
                      : 'border-amber-500/20 bg-amber-500/5'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      product.statusColor === 'green' ? 'bg-green-500' : 'bg-amber-500'
                    }`} />
                    <span className={`font-mono text-[9px] uppercase ${
                      product.statusColor === 'green' ? 'text-green-400' : 'text-amber-400'
                    }`}>
                      {product.status}
                    </span>
                  </span>
                </div>
                <span className="font-mono text-[10px] text-gray-600 uppercase tracking-wider">{product.division}</span>
                <p className="text-gray-400 text-sm leading-relaxed mt-4 mb-5">
                  {product.description}
                </p>

                {product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Visit
                    <svg className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 9L9 3M9 3H4M9 3V8" />
                    </svg>
                  </a>
                ) : (
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-gray-600">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* Tech stack footer */}
              <div className="border-t border-white/[0.04] bg-[#0c0c18]/50 px-6 py-3">
                <div className="flex flex-wrap gap-3">
                  {product.stack.map((tech, j) => (
                    <span key={tech} className="font-mono text-[10px] text-gray-600">
                      {tech}{j < product.stack.length - 1 && <span className="ml-3 text-gray-800">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
