import { Database, Globe, Server, TrendingUp, type LucideIcon } from "lucide-react";

type Accent = "teal" | "blue";

interface ServiceCardProps {
  icon: LucideIcon;
  accent: Accent;
  title: string;
  body: string;
  pills: string[];
}

const accentStyles: Record<
  Accent,
  { icon: string; iconBg: string; iconBorder: string; pillBg: string; pillText: string }
> = {
  teal: {
    icon: "text-ci-teal",
    iconBg: "bg-[rgba(0,200,158,0.1)]",
    iconBorder: "border-[rgba(0,200,158,0.2)]",
    pillBg: "bg-[rgba(0,200,158,0.08)]",
    pillText: "text-ci-teal-dim",
  },
  blue: {
    icon: "text-ci-blue",
    iconBg: "bg-[rgba(26,140,255,0.1)]",
    iconBorder: "border-[rgba(26,140,255,0.2)]",
    pillBg: "bg-[rgba(26,140,255,0.08)]",
    pillText: "text-ci-blue-dim",
  },
};

function ServiceCard({ icon: Icon, accent, title, body, pills }: ServiceCardProps) {
  const styles = accentStyles[accent];
  return (
    <article className="flex flex-col gap-2.5 rounded-[10px] border border-ci-border bg-ci-surface p-5">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[7px] border ${styles.iconBg} ${styles.iconBorder}`}
      >
        <Icon className={`h-4 w-4 ${styles.icon}`} strokeWidth={2} />
      </div>
      <h3 className="text-[13px] font-bold text-ci-text">{title}</h3>
      <p className="text-xs leading-[1.65] text-ci-subtle">{body}</p>
      <div className="flex flex-wrap gap-1.5">
        {pills.map((pill) => (
          <span
            key={pill}
            className={`rounded-[4px] px-2 py-0.5 text-[10px] font-normal ${styles.pillBg} ${styles.pillText}`}
          >
            {pill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-ci-bg px-8 py-11">
      <header className="mb-7 text-center">
        <h2 className="text-xl font-bold tracking-tight text-ci-text">
          What I can help with
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-ci-subtle">
          The same skills that serve enterprise teams work even better for businesses that just need it done simply and right.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <ServiceCard
          icon={Globe}
          accent="teal"
          title="Websites & Web Apps"
          body="From a clean website that actually brings in customers, to a full product your team uses every day. I build things that work — and that you can maintain without calling me every week."
          pills={["Websites", "Web apps", "Internal tools"]}
        />
        <ServiceCard
          icon={Server}
          accent="blue"
          title="Cloud & Infrastructure"
          body="The behind-the-scenes stuff that keeps everything running reliably. Whether you're setting things up for the first time or fixing an architecture that's become a headache — I'll make it clean and solid."
          pills={["Cloud hosting", "Security", "Automation"]}
        />
        <ServiceCard
          icon={Database}
          accent="blue"
          title="Data & Business Intelligence"
          body="Stop guessing. I'll help you collect, organize, and make sense of your data — whether that means a simple sales dashboard for your shop or a full data warehouse for a growing company."
          pills={["Reporting", "Data pipelines", "Warehousing"]}
        />
        <ServiceCard
          icon={TrendingUp}
          accent="teal"
          title="Analytics & Smarter Decisions"
          body="Know who your best customers are, what's actually working, and where you're leaving money on the table. I'll turn your raw numbers into answers you can act on — without drowning you in spreadsheets."
          pills={["Dashboards", "KPI strategy", "Customer insights"]}
        />
      </div>
    </section>
  );
}
