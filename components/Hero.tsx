export default function Hero() {
  const careerItems = [
    { color: "bg-ci-teal", label: "Software Engineering" },
    { color: "bg-ci-teal", label: "Data Analysis & Science" },
    { color: "bg-ci-blue", label: "Cloud Architecture" },
    { color: "bg-ci-blue", label: "BI & Analytics Advising" },
    { color: "bg-ci-teal", label: "Solutions Architecture" },
  ];

  return (
    <section className="bg-ci-bg px-8 py-14">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-start justify-between gap-12 lg:flex-row">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-ci-border-lt bg-ci-surface px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-ci-teal" />
            <span className="text-base text-ci-teal">Available for new clients</span>
          </div>
          <h1 className="mt-5 text-[40px] font-extrabold leading-[1.17] tracking-tight text-ci-text">
            Technology should work for your business. Not the other way around.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#5a7a98]">
            Whether you run a startup or a local business, I help you build the right tools, make sense of your numbers, and fix what&apos;s slowing you down.
          </p>
          <p className="mt-2.5 text-lg leading-relaxed text-[#5a7a98]">
            10+ years across engineering, data, and cloud. You work with me directly. No agency layers, no jargon.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="rounded-md bg-ci-teal px-5 py-2.5 text-base font-bold text-ci-bg"
            >
              Let&apos;s grab a 30 minute call
            </a>
            <a
              href="#services"
              className="rounded-md border border-[#1a3850] px-5 py-2.5 text-base text-[#5a8aaa]"
            >
              See what I do →
            </a>
          </div>
        </div>

        <div className="w-[260px] shrink-0">
          <div className="rounded-[10px] border border-ci-border bg-ci-surface p-3.5">
            <p className="mb-3 text-[11px] uppercase tracking-wider text-ci-hint">
              10+ year career across
            </p>
            <ul className="flex flex-col gap-1.5">
              {careerItems.map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${item.color}`} />
                  <span className="text-[13px] text-[#5a8aaa]">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
