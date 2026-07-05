import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
} from "@/lib/contact";

export default function CTA() {
  return (
    <section id="cta" className="border-t border-ci-border bg-ci-surface px-8 py-11 text-center">
      <div className="mx-auto w-full max-w-[1100px]">
        <h2 className="mb-2.5 text-[28px] font-bold leading-[1.35] tracking-tight text-ci-text">
          Something slowing your business down? Let&apos;s talk.
        </h2>
        <p className="mx-auto mb-2 max-w-[480px] text-base leading-[1.7] text-ci-subtle">
          Free 30 minute call for Dallas small businesses and startups. Tell me
          what&apos;s going on and I&apos;ll tell you straight whether I can help or point
          you somewhere better.
        </p>
        <p className="mb-6 font-mono text-[16px] text-ci-hint">
          No pitch. No retainer to start.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=30%20minute%20call`}
            className="rounded-md bg-ci-teal px-6 py-3 text-base font-bold text-ci-bg"
          >
            Book a Free 30 Minute Call
          </a>
          <a
            href={CONTACT_PHONE_HREF}
            className="rounded-md border border-[#1a3850] px-5 py-3 text-base text-[#5a8aaa]"
          >
            Call {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
