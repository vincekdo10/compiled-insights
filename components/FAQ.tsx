import { faqItems } from "@/lib/structured-data";

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-ci-border bg-ci-surface px-8 py-11">
      <div className="mx-auto w-full max-w-[1100px]">
        <header className="mb-7 text-center">
          <h2 className="text-[26px] font-bold tracking-tight text-ci-text">
            Common questions
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-base leading-relaxed text-ci-subtle">
            Straight answers for Dallas small businesses and startups shopping for a
            website or web app.
          </p>
        </header>
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="rounded-[10px] border border-ci-border bg-ci-deep p-5"
            >
              <h3 className="mb-2 text-[16px] font-bold text-ci-text">
                {item.question}
              </h3>
              <p className="text-base leading-[1.65] text-ci-subtle">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
