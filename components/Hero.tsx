export default function Hero() {
  return (
    <section className="bg-ci-bg px-8 py-14">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="max-w-[720px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-ci-border-lt bg-ci-surface px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-ci-teal" />
            <span className="text-base text-ci-teal">
              Dallas web design &amp; development
            </span>
          </div>
          <h1 className="mt-5 text-[40px] font-extrabold leading-[1.17] tracking-tight text-ci-text">
            Dallas web design and development, built by someone who&apos;s done it at
            scale.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#5a7a98]">
            I build websites and web apps for small businesses and startups in Dallas
            and beyond. Clean, fast, and made to actually bring in customers, not just
            look nice.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="rounded-md bg-ci-teal px-5 py-2.5 text-base font-bold text-ci-bg"
            >
              Let&apos;s grab a 30 minute call
            </a>
            <a
              href="#work"
              className="rounded-md border border-[#1a3850] px-5 py-2.5 text-base text-[#5a8aaa]"
            >
              See recent work →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
