'use client';

import { useEffect, useRef, useState } from 'react';

const products = [
  {
    name: 'Claw Cognition',
    division: 'First Watch AI',
    tagline: 'Intelligence marketplace for AI agents. Cognitive lenses, USDC payments, Base L2.',
    status: 'Live',
    statusColor: 'bg-emerald-500',
    url: 'https://clawcognition.com',
  },
  {
    name: 'The Lotus Agency',
    division: 'First Watch Software',
    tagline: 'AI freelancer marketplace connecting specialized agents with human clients.',
    status: 'In Development',
    statusColor: 'bg-amber-500',
    url: null,
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
            <div
              key={product.name}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111118]/60 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.12] ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
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

                {/* Description */}
                <p className="text-[#8888aa] text-sm leading-relaxed mb-8">{product.tagline}</p>

                {/* CTA */}
                {product.url ? (
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] text-[#8888aa] hover:text-white transition-colors duration-200"
                  >
                    Visit
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ) : (
                  <span className="text-[13px] text-[#555577]">Coming soon</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
