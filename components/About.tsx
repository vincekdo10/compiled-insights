import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-ci-bg px-8 py-11">
      <div className="flex flex-col items-start gap-11 md:flex-row">
        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#1a3050] bg-ci-surface">
          <User className="h-5 w-5 text-ci-teal" strokeWidth={2} />
        </div>
        <div className="flex-1">
          <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[1.2px] text-ci-teal">
            A little about me
          </p>
          <h2 className="mb-4 text-[20px] font-bold leading-[1.35] tracking-tight text-ci-text">
            Hi, I&apos;m Vincent. I&apos;ve spent 10+ years working every angle of technology — and I started this to actually use that.
          </h2>
          <p className="mb-3 text-[13px] leading-[1.75] text-ci-muted">
            I&apos;ve been a software engineer, data analyst, data scientist, cloud architect, and solutions architect — with stops in BI advisory and data transformation consulting along the way. I&apos;ve seen how technology works inside some of the biggest companies, and more importantly, I&apos;ve seen where it fails.
          </p>
          <p className="mb-5 text-[13px] leading-[1.75] text-ci-muted">
            What I care about most is making sure technology actually helps the people using it. I work directly with my clients — no account managers, no hand-offs — and I explain everything in plain English, whether you&apos;re a founder or a florist.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <div className="min-w-[160px] flex-1 rounded-r-md border border-ci-border border-l-[3px] border-l-ci-teal bg-ci-surface p-3 px-3.5">
              <p className="mb-0.5 text-[11px] font-bold text-ci-text">
                You talk to me directly
              </p>
              <p className="text-[11px] leading-relaxed text-ci-subtle">
                No account managers. No relaying messages. Just a straight conversation with the person doing the work.
              </p>
            </div>
            <div className="min-w-[160px] flex-1 rounded-r-md border border-ci-border border-l-[3px] border-l-ci-blue bg-ci-surface p-3 px-3.5">
              <p className="mb-0.5 text-[11px] font-bold text-ci-text">
                Plain English, always
              </p>
              <p className="text-[11px] leading-relaxed text-ci-subtle">
                I won&apos;t hide behind jargon. If I can&apos;t explain what I&apos;m doing clearly, I shouldn&apos;t be doing it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
