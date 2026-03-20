export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.04] py-8">
      {/* Blueprint grid fade */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="mx-auto max-w-[1200px] px-6 relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500/30" />
            <span className="font-mono text-xs text-gray-600">
              &copy; {new Date().getFullYear()} First Watch Technologies
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://x.com/PabloTheThinker"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-wider text-gray-600 hover:text-blue-400 transition-colors duration-200"
            >
              X / Twitter
            </a>
            <a
              href="https://github.com/PabloTheThinker"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-wider text-gray-600 hover:text-blue-400 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="mailto:hello@firstwatchtechnologies.com"
              className="font-mono text-[10px] uppercase tracking-wider text-gray-600 hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
