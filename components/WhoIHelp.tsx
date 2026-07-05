import { Check, Rocket, Store } from "lucide-react";

const startupItems = [
  "You need senior help but you're not ready to hire full time",
  "Your data is a mess and you're making decisions on gut feel",
  "You need a product or internal tool built the right way",
  "Your cloud setup is held together with duct tape",
];

const localItems = [
  "Your website is outdated, missing, or not bringing in customers",
  "You're doing things manually that could run on autopilot",
  "You want to understand who your best customers really are",
  "You've been burned by tech people who talked big and delivered little",
];

export default function WhoIHelp() {
  return (
    <section className="border-y border-ci-border bg-ci-surface px-8 py-9">
      <div className="mx-auto w-full max-w-[1100px]">
        <header className="mb-6 text-center">
          <h2 className="text-[28px] font-bold tracking-tight text-ci-text">
            Who I work with
          </h2>
          <p className="mt-1.5 text-base text-ci-subtle">
            Startups and local businesses face different problems. Both need technology that helps.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
          <article className="rounded-b-[10px] border border-ci-border border-t-2 border-t-ci-teal bg-ci-deep p-5">
            <div className="mb-3.5 flex items-center gap-2">
              <Rocket className="h-[18px] w-[18px] text-ci-teal" strokeWidth={2} />
              <h3 className="text-lg font-bold text-ci-text">
                Startups & Small Businesses
              </h3>
            </div>
            <ul className="flex flex-col gap-2">
              {startupItems.map((text) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 h-[13px] w-[13px] shrink-0 text-ci-teal"
                    strokeWidth={2.5}
                  />
                  <span className="text-base leading-relaxed text-ci-muted">{text}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-b-[10px] border border-ci-border border-t-2 border-t-ci-blue bg-ci-deep p-5">
            <div className="mb-3.5 flex items-center gap-2">
              <Store className="h-[18px] w-[18px] text-ci-blue" strokeWidth={2} />
              <h3 className="text-lg font-bold text-ci-text">
                Local & Independent Businesses
              </h3>
            </div>
            <ul className="flex flex-col gap-2">
              {localItems.map((text) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Check
                    className="mt-0.5 h-[13px] w-[13px] shrink-0 text-ci-blue"
                    strokeWidth={2.5}
                  />
                  <span className="text-base leading-relaxed text-ci-muted">{text}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
