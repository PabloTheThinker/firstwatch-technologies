import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10 px-6">
      <div className="mx-auto max-w-[1400px] flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} First Watch Technologies
        </span>
        <div className="flex items-center gap-8">
          <Link href="/ai" className="text-xs text-white/20 hover:text-white/50 transition-colors">AI</Link>
          <Link href="/software" className="text-xs text-white/20 hover:text-white/50 transition-colors">Software</Link>
          <Link href="/robotics" className="text-xs text-white/20 hover:text-white/50 transition-colors">Robotics</Link>
          <Link href="/communications" className="text-xs text-white/20 hover:text-white/50 transition-colors">Communications</Link>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://x.com/PabloTheThinker" target="_blank" rel="noopener noreferrer" className="text-xs text-white/20 hover:text-white/50 transition-colors">
            X
          </a>
          <a href="https://github.com/PabloTheThinker" target="_blank" rel="noopener noreferrer" className="text-xs text-white/20 hover:text-white/50 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
