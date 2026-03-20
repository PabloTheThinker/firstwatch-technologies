'use client';

import { useEffect, useRef, useState } from 'react';

export default function Mission() {
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
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p
          className={`text-2xl sm:text-3xl md:text-4xl font-extralight leading-relaxed text-white/80 tracking-tight transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          We develop intelligent software, autonomous systems, and resilient
          communication infrastructure — expanding what people can do, reach, and protect.
        </p>
        <p
          className={`mt-8 text-sm text-white/30 font-mono uppercase tracking-[0.2em] transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          See a path. Secure a path.
        </p>
      </div>
    </section>
  );
}
