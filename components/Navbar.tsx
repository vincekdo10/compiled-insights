export default function Navbar() {
  return (
    <header id="top" className="border-b border-ci-border bg-ci-bg px-8">
      <div className="mx-auto flex h-[52px] w-full max-w-[1100px] items-center justify-between">
        <a href="#top" className="flex items-center gap-1.5">
          <span className="font-mono text-lg font-bold text-ci-teal">[CI]</span>
          <span className="text-lg font-bold text-ci-text">Compiled Insights</span>
        </a>
        <nav className="flex items-center gap-6">
          <div className="hidden items-center gap-6 sm:flex">
            <a href="#work" className="text-base text-ci-nav-link">
              Work
            </a>
            <a href="#services" className="text-base text-ci-nav-link">
              Services
            </a>
            <a href="#about" className="text-base text-ci-nav-link">
              About
            </a>
          </div>
          <a
            href="#cta"
            className="rounded-md bg-ci-teal px-3.5 py-1.5 text-base font-bold text-ci-bg"
          >
            Let&apos;s Talk →
          </a>
        </nav>
      </div>
    </header>
  );
}
