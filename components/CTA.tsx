export default function CTA() {
  return (
    <section id="cta" className="border-t border-ci-border bg-ci-surface px-8 py-11 text-center">
      <h2 className="mb-2.5 text-[22px] font-bold leading-[1.35] tracking-tight text-ci-text">
        Whatever&apos;s slowing your business down — let&apos;s talk about it.
      </h2>
      <p className="mx-auto mb-2 max-w-[420px] text-[13px] leading-[1.7] text-ci-subtle">
        It&apos;s a free 30-minute call. Tell me what you&apos;re dealing with and I&apos;ll tell you honestly what I think, whether that means working together or pointing you somewhere else.
      </p>
      <p className="mb-6 font-mono text-[11px] text-ci-hint">
        No pitch. No retainer required to start.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <a
          href="mailto:hello@compiledinsights.com"
          className="rounded-md bg-ci-teal px-6 py-3 text-xs font-bold text-ci-bg"
        >
          Book a Free 30-min Call
        </a>
        <a
          href="#about"
          className="rounded-md border border-[#1a3850] px-5 py-3 text-xs text-[#5a8aaa]"
        >
          Learn more about me →
        </a>
      </div>
    </section>
  );
}
