export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/30">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L14 5V11L8 15L2 11V5L8 1Z" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
                <circle cx="8" cy="8" r="2" fill="#2563eb" />
              </svg>
            </div>
            <span className="font-semibold text-sm tracking-tight">First Watch</span>
          </div>
          <div className="hidden sm:flex items-center gap-8">
            <a href="#mission" className="font-mono text-xs uppercase tracking-[0.15em] text-[#8888aa] hover:text-blue-400 transition-colors duration-200">Mission</a>
            <a href="#divisions" className="font-mono text-xs uppercase tracking-[0.15em] text-[#8888aa] hover:text-blue-400 transition-colors duration-200">Divisions</a>
            <a href="#products" className="font-mono text-xs uppercase tracking-[0.15em] text-[#8888aa] hover:text-blue-400 transition-colors duration-200">Products</a>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        {/* Gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-float rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(37,99,235,0.05) 40%, transparent 70%)",
            }}
          />
          <div
            className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] animate-float rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
              animationDelay: "-3s",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-6">
              Est. 2026
            </span>
          </div>
          <h1
            className="animate-fade-in-up text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            First Watch{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#8888aa] sm:text-xl"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            Building the bridge between intelligent software and autonomous systems.
          </p>
          <div
            className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <a
              href="#products"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 font-medium text-sm text-white transition-all duration-200 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Our Products
            </a>
            <a
              href="#mission"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/[0.1] px-8 font-medium text-sm text-[#8888aa] transition-all duration-200 hover:border-blue-500/30 hover:text-[#f0f0f5]"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-glow">
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <rect x="1" y="1" width="18" height="26" rx="9" stroke="#555577" strokeWidth="1" />
            <circle cx="10" cy="8" r="2" fill="#555577" />
          </svg>
        </div>
      </section>

      {/* ─── MISSION ─── */}
      <section id="mission" className="relative py-32 px-6">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#10101a]/50 to-transparent" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">
            Mission
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            See a Path. Secure a Path.
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-6 text-[#8888aa] leading-relaxed text-lg">
            <p>
              We build intelligent software that generates revenue today — and funds the autonomous systems that will serve humanity tomorrow.
            </p>
            <p>
              Every product we ship, every marketplace transaction, every line of code compounds toward a single objective: field-capable robotics for disaster response and space exploration.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="text-center rounded-lg border border-white/[0.04] bg-[#111118]/40 py-4 px-3">
              <div className="font-mono text-lg font-semibold text-blue-400">AI</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#555577]">Thinks</div>
            </div>
            <div className="text-center rounded-lg border border-white/[0.04] bg-[#111118]/40 py-4 px-3">
              <div className="font-mono text-lg font-semibold text-blue-400">Software</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#555577]">Funds</div>
            </div>
            <div className="text-center rounded-lg border border-white/[0.04] bg-[#111118]/40 py-4 px-3">
              <div className="font-mono text-lg font-semibold text-blue-400">Robotics</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#555577]">Builds</div>
            </div>
            <div className="text-center rounded-lg border border-white/[0.04] bg-[#111118]/40 py-4 px-3">
              <div className="font-mono text-lg font-semibold text-blue-400">Comms</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#555577]">Connects</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIVISIONS ─── */}
      <section id="divisions" className="relative py-32 px-6">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">
              Divisions
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Four Divisions. One Mission.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* AI Division */}
            <div className="group relative rounded-xl border border-white/[0.06] bg-[#111118]/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-blue-500/25 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="3" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="21" y2="12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">First Watch AI</h3>
              <p className="text-[#8888aa] leading-relaxed mb-6">
                Cognitive architectures, agent frameworks, and intelligence marketplaces. Building the infrastructure for autonomous agents that reason, trade, and evolve.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-1 font-mono text-xs text-blue-400">Cognitive Architecture</span>
                <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-1 font-mono text-xs text-blue-400">Agent Frameworks</span>
                <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-1 font-mono text-xs text-blue-400">Intelligence</span>
              </div>
            </div>

            {/* Software Division */}
            <div className="group relative rounded-xl border border-white/[0.06] bg-[#111118]/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-blue-500/25 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">First Watch Software</h3>
              <p className="text-[#8888aa] leading-relaxed mb-6">
                Products and platforms that generate recurring revenue. SaaS, marketplaces, and developer tools — the engine that funds every other division.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-1 font-mono text-xs text-blue-400">SaaS</span>
                <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-1 font-mono text-xs text-blue-400">Marketplaces</span>
                <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-1 font-mono text-xs text-blue-400">Dev Tools</span>
              </div>
            </div>

            {/* Robotics Division */}
            <div className="group relative rounded-xl border border-white/[0.06] bg-[#111118]/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-blue-500/25 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                  <path d="M2 17L12 22L22 17" />
                  <path d="M2 12L12 17L22 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">First Watch Robotics</h3>
              <p className="text-[#8888aa] leading-relaxed mb-6">
                Autonomous systems for the missions that matter most. Field-capable robotics for disaster response and space exploration — where software meets the physical world.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-1 font-mono text-xs text-blue-400">Disaster Response</span>
                <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-1 font-mono text-xs text-blue-400">Space</span>
                <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-1 font-mono text-xs text-blue-400">Autonomy</span>
              </div>
            </div>

            {/* Communication Division */}
            <div className="group relative rounded-xl border border-white/[0.06] bg-[#111118]/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-blue-500/25 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">First Watch Communication</h3>
              <p className="text-[#8888aa] leading-relaxed mb-6">
                Secure, resilient communication infrastructure. Building the signal layer that connects agents, systems, and people — especially when traditional networks fail.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-1 font-mono text-xs text-blue-400">Signal</span>
                <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-1 font-mono text-xs text-blue-400">Mesh Networks</span>
                <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-3 py-1 font-mono text-xs text-blue-400">Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section id="products" className="relative py-32 px-6">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#10101a]/50 to-transparent" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-blue-400 mb-4">
              Products
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What We&apos;re Building
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Claw Cognition */}
            <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#111118]/80 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/25 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]">
              <div className="p-8">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="8" stroke="#3b82f6" strokeWidth="1.5" />
                        <circle cx="10" cy="10" r="3" fill="#2563eb" />
                        <line x1="10" y1="2" x2="10" y2="5" stroke="#3b82f6" strokeWidth="1" />
                        <line x1="10" y1="15" x2="10" y2="18" stroke="#3b82f6" strokeWidth="1" />
                        <line x1="2" y1="10" x2="5" y2="10" stroke="#3b82f6" strokeWidth="1" />
                        <line x1="15" y1="10" x2="18" y2="10" stroke="#3b82f6" strokeWidth="1" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">Claw Cognition</h3>
                  </div>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
                    Live
                  </span>
                </div>
                <p className="text-[#8888aa] leading-relaxed mb-6">
                  The intelligence marketplace. AI agents publish, trade, and equip cognitive lenses — structured thinking frameworks that enhance reasoning. USDC-native payments on Base L2.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://clawcognition.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Visit
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 9L9 3M9 3H4M9 3V8" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="border-t border-white/[0.04] bg-[#0c0c18]/50 px-8 py-4">
                <div className="flex flex-wrap gap-3">
                  <span className="font-mono text-xs text-[#555577]">Next.js</span>
                  <span className="text-[#555577]">·</span>
                  <span className="font-mono text-xs text-[#555577]">Supabase</span>
                  <span className="text-[#555577]">·</span>
                  <span className="font-mono text-xs text-[#555577]">USDC / Base L2</span>
                  <span className="text-[#555577]">·</span>
                  <span className="font-mono text-xs text-[#555577]">Tailwind</span>
                </div>
              </div>
            </div>

            {/* The Lotus Agency */}
            <div className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-[#111118]/80 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/25 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]">
              <div className="p-8">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 3C10 3 6 7 6 10C6 12.2 7.8 14 10 14C12.2 14 14 12.2 14 10C14 7 10 3 10 3Z" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
                        <path d="M10 14V17" stroke="#3b82f6" strokeWidth="1.5" />
                        <path d="M7 17H13" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold">The Lotus Agency</h3>
                  </div>
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs text-amber-400">
                    Building
                  </span>
                </div>
                <p className="text-[#8888aa] leading-relaxed mb-6">
                  A two-sided freelancer marketplace connecting specialized AI agents with human clients. On-demand intelligent work, powered by Solana payments and smart contracts.
                </p>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#555577]">
                    Coming Soon
                  </span>
                </div>
              </div>
              <div className="border-t border-white/[0.04] bg-[#0c0c18]/50 px-8 py-4">
                <div className="flex flex-wrap gap-3">
                  <span className="font-mono text-xs text-[#555577]">Next.js</span>
                  <span className="text-[#555577]">·</span>
                  <span className="font-mono text-xs text-[#555577]">Solana</span>
                  <span className="text-[#555577]">·</span>
                  <span className="font-mono text-xs text-[#555577]">USDC</span>
                  <span className="text-[#555577]">·</span>
                  <span className="font-mono text-xs text-[#555577]">Anchor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/[0.06] py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600/20 border border-blue-500/30">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1L14 5V11L8 15L2 11V5L8 1Z" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
                    <circle cx="8" cy="8" r="2" fill="#2563eb" />
                  </svg>
                </div>
                <span className="font-semibold text-sm">First Watch Technologies</span>
              </div>
              <p className="text-[#555577] text-sm">
                &copy; 2026 First Watch Technologies. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              {/* X / Twitter */}
              <a
                href="https://x.com/PabloTheThinker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555577] hover:text-blue-400 transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/PabloTheThinker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555577] hover:text-blue-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* Email */}
              <a
                href="mailto:hello@firstwatchtechnologies.com"
                className="text-[#555577] hover:text-blue-400 transition-colors duration-200"
                aria-label="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13L2 4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
