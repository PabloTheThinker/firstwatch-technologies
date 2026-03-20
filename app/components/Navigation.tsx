'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/60 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between h-16">
        <Link href="/" className="text-white font-medium text-sm tracking-tight hover:opacity-80 transition-opacity">
          First Watch Technologies
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/ai" className="text-white/60 text-sm hover:text-white transition-colors">AI</Link>
          <Link href="/software" className="text-white/60 text-sm hover:text-white transition-colors">Software</Link>
          <Link href="/robotics" className="text-white/60 text-sm hover:text-white transition-colors">Robotics</Link>
          <Link href="/communications" className="text-white/60 text-sm hover:text-white transition-colors">Communications</Link>
        </div>
      </div>
    </nav>
  );
}
