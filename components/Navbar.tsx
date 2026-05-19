export default function Navbar() {
  return (
    <header className="flex h-[52px] w-full items-center justify-between border-b border-ci-border bg-ci-bg px-8">
      <div className="flex items-center gap-1.5">
        <span className="font-mono text-sm font-bold text-ci-teal">[CI]</span>
        <span className="text-sm font-bold text-ci-text">Compiled Insights</span>
      </div>
      <nav className="flex items-center gap-6">
        <div className="hidden items-center gap-6 sm:flex">
          <a href="#services" className="text-xs text-ci-nav-link">
            Services
          </a>
          <a href="#about" className="text-xs text-ci-nav-link">
            About
          </a>
          <a href="#work" className="text-xs text-ci-nav-link">
            Work
          </a>
        </div>
        <a
          href="#cta"
          className="rounded-md bg-ci-teal px-3.5 py-1.5 text-xs font-bold text-ci-bg"
        >
          Let&apos;s Talk →
        </a>
      </nav>
    </header>
  );
}
