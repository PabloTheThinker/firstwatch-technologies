'use client';

import { useEffect, useState, useRef } from 'react';

const philosophyLines = [
  'See a path, secure a path.',
  'Software funds. Robotics builds.',
  'Support systems for humanity.',
  'Building in public.',
];

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    const line = philosophyLines[currentLine];
    let charIndex = 0;

    if (isTyping) {
      const typeInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setDisplayText(line.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setIsTyping(false), 2000);
        }
      }, 50);
      return () => clearInterval(typeInterval);
    } else {
      const eraseTimeout = setTimeout(() => {
        setDisplayText('');
        setCurrentLine((prev) => (prev + 1) % philosophyLines.length);
        setIsTyping(true);
      }, 500);
      return () => clearTimeout(eraseTimeout);
    }
  }, [currentLine, isTyping]);

  // Parallax mouse tracking
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section ref={heroRef} className="relative z-10 min-h-screen flex items-center overflow-hidden">
      {/* Blueprint grid background */}
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
        {/* Gradient mesh glow */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(37,99,235,0.04) 40%, transparent 70%)',
            left: '30%',
            top: '40%',
            transform: `translate(calc(-50% + ${mousePos.x * 50}px), calc(-50% + ${mousePos.y * 50}px))`,
            transition: 'transform 0.4s ease-out',
            filter: 'blur(40px)',
          }}
        />
        {/* Secondary amber accent glow */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)',
            left: '70%',
            top: '60%',
            transform: `translate(calc(-50% + ${mousePos.x * -30}px), calc(-50% + ${mousePos.y * -30}px))`,
            transition: 'transform 0.5s ease-out',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 relative w-full">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          {/* Status line */}
          <div
            className={`inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 transition-all duration-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-blue-400">
              Building in public
            </span>
          </div>

          {/* Name */}
          <h1 className="mb-4">
            <span
              className={`block text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white/90 transition-all duration-700 delay-100 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              First Watch
            </span>
            <span
              className={`block text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight gradient-text transition-all duration-700 delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              Technologies
            </span>
          </h1>

          {/* Subtitle */}
          <div
            className={`flex items-center justify-center lg:justify-start gap-3 mb-8 transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="h-px w-8 bg-blue-500/40" />
            <p className="font-mono text-xs md:text-sm text-gray-500 uppercase tracking-[0.15em]">
              Support Systems for Humanity
            </p>
            <div className="h-px w-8 bg-blue-500/40" />
          </div>

          {/* Division badges */}
          <div
            className={`flex flex-wrap justify-center lg:justify-start gap-2 mb-10 transition-all duration-700 delay-[400ms] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {[
              { icon: '🧠', label: 'AI' },
              { icon: '💻', label: 'Software' },
              { icon: '🤖', label: 'Robotics' },
              { icon: '📡', label: 'Communications' },
            ].map((d) => (
              <span
                key={d.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/5 bg-white/[0.02] text-gray-500 font-mono text-[11px] hover:border-blue-500/30 hover:text-blue-300 hover:bg-blue-500/5 transition-all duration-200 cursor-default"
              >
                <span>{d.icon}</span>
                {d.label}
              </span>
            ))}
          </div>

          {/* Terminal */}
          <div
            className={`bg-[#0c0c18]/80 backdrop-blur-sm border border-white/[0.06] rounded-xl p-5 max-w-xl shadow-[0_4px_40px_rgba(0,0,0,0.3),0_0_60px_rgba(37,99,235,0.05)] transition-all duration-700 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/[0.04]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="font-mono text-[10px] text-gray-600 ml-auto">philosophy.sh — bash</span>
            </div>
            <div className="font-mono text-sm md:text-base leading-relaxed">
              <span className="text-blue-400">firstwatch</span>
              <span className="text-gray-600">:</span>
              <span className="text-blue-300">~</span>
              <span className="text-gray-500">$ </span>
              <span className="text-gray-200">{displayText}</span>
              <span className="typing-cursor" />
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-wrap justify-center lg:justify-start gap-4 mt-10 transition-all duration-700 delay-[600ms] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg text-white font-mono text-sm hover:bg-blue-500 transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              Our Products
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#mission"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-lg text-gray-400 font-mono text-sm hover:border-blue-500/30 hover:text-gray-300 transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
