'use client';

import { useEffect, useRef, useState } from 'react';

const divisions = [
  {
    name: 'First Watch AI',
    subtitle: 'Intelligence',
    number: '01',
    icon: '🧠',
    description:
      'Cognitive architectures, agent frameworks, and intelligence platforms. Building infrastructure for autonomous agents that reason, collaborate, and adapt.',
    tags: ['Cognitive Architecture', 'Agent Frameworks', 'Intelligence Platforms'],
    gradientFrom: 'from-purple-500/[0.02]',
    iconBg: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/15',
  },
  {
    name: 'First Watch Software',
    subtitle: 'Platforms',
    number: '02',
    icon: '💻',
    description:
      'Products and platforms that bring clarity to complex decisions. AI-powered tools, marketplaces, and systems designed for how people actually work.',
    tags: ['SaaS', 'Marketplaces', 'Developer Tools', 'AI-Powered'],
    gradientFrom: 'from-blue-500/[0.02]',
    iconBg: 'bg-blue-500/10',
    iconBorder: 'border-blue-500/15',
  },
  {
    name: 'First Watch Robotics',
    subtitle: 'Autonomous Systems',
    number: '03',
    icon: '🤖',
    description:
      'Autonomous systems for extreme environments. Extending human reach into spaces too dangerous, inaccessible, or distant for direct intervention — from disaster zones to orbit.',
    tags: ['Autonomous Systems', 'Disaster Response', 'Space Exploration'],
    gradientFrom: 'from-orange-500/[0.02]',
    iconBg: 'bg-orange-500/10',
    iconBorder: 'border-orange-500/15',
  },
  {
    name: 'First Watch Communications',
    subtitle: 'Infrastructure',
    number: '04',
    icon: '📡',
    description:
      'Resilient communication systems that work when everything else fails. Connecting agents, machines, and people across any terrain, any condition.',
    tags: ['Mesh Networks', 'Resilient Signal', 'Field Communications'],
    gradientFrom: 'from-green-500/[0.02]',
    iconBg: 'bg-green-500/10',
    iconBorder: 'border-green-500/15',
  },
];

export default function Divisions() {
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
    <section id="divisions" ref={sectionRef} className="section relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`h-px bg-blue-500/60 transition-all duration-700 delay-200 ${isVisible ? 'w-8' : 'w-0'}`} />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-400">Divisions</span>
            <div className={`h-px bg-white/[0.04] transition-all duration-1000 delay-300 ${isVisible ? 'flex-1' : 'flex-0 w-0'}`} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extralight text-white/90 tracking-tight mb-3">
            Four Divisions. <span className="font-medium gradient-text">One Mission.</span>
          </h2>
        </div>

        {/* Division cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {divisions.map((div, i) => (
            <div
              key={div.number}
              className={`group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#111118]/80 backdrop-blur-sm hover:border-blue-500/25 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${250 + i * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${div.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/[0.06] group-hover:border-blue-500/20 transition-colors duration-200" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/[0.06] group-hover:border-blue-500/20 transition-colors duration-200" />

              <div className="relative p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${div.iconBg} border ${div.iconBorder} flex items-center justify-center`}>
                      <span className="text-lg">{div.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-white/90">{div.name}</h3>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-gray-600">{div.subtitle}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] text-gray-700 uppercase tracking-wider">{div.number}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {div.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {div.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-gray-500">
                      {tag}
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
