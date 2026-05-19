export default function Footer() {
  return (
    <footer className="border-t border-[#121e2e] bg-ci-dark px-8 py-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[10px] text-ci-ghost">
          © 2025 Compiled Insights Consulting
        </p>
        <div className="flex gap-4.5">
          <a href="https://linkedin.com" className="text-[10px] text-[#253a50]">
            LinkedIn
          </a>
          <a href="https://github.com" className="text-[10px] text-[#253a50]">
            GitHub
          </a>
          <a
            href="mailto:hello@compiledinsights.com"
            className="text-[10px] text-[#253a50]"
          >
            hello@compiledinsights.com
          </a>
        </div>
      </div>
    </footer>
  );
}
