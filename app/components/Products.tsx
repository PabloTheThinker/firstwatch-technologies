'use client';

import { useEffect, useRef, useState } from 'react';

function ProductPanel({
  name,
  tagline,
  status,
  url,
}: {
  name: string;
  tagline: string;
  status: string;
  url: string | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
    <div
      ref={ref}
      className={`flex flex-col items-center text-center transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight text-white">
        {name}
      </h3>
      <p className="mt-3 text-sm sm:text-base text-white/40 font-light max-w-md">
        {tagline}
      </p>
      <div className="mt-6 flex items-center gap-6">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/70 hover:text-white border-b border-white/20 hover:border-white/60 pb-0.5 transition-all"
          >
            Visit
          </a>
        ) : (
          <span className="text-sm text-white/30">{status}</span>
        )}
      </div>
    </div>
  );
}

export default function Products() {
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
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32">
      <p
        className={`text-sm text-white/30 font-mono uppercase tracking-[0.2em] mb-20 transition-all duration-1000 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Products
      </p>
      <div className="grid md:grid-cols-2 gap-20 md:gap-32 max-w-4xl w-full">
        <ProductPanel
          name="Claw Cognition"
          tagline="Intelligence marketplace for AI agents."
          status="Live"
          url="https://clawcognition.com"
        />
        <ProductPanel
          name="The Lotus Agency"
          tagline="AI freelancer marketplace."
          status="Coming Soon"
          url={null}
        />
      </div>
    </section>
  );
}
