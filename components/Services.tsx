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
      <h3 className="text-[16px] font-bold text-ci-text">{title}</h3>
      <p className="text-base leading-[1.65] text-ci-subtle">{body}</p>
      <div className="flex flex-wrap gap-1.5">
        {pills.map((pill) => (
          <span
            key={pill}
            className={`rounded-[4px] px-2 py-0.5 text-[13px] font-normal ${styles.pillBg} ${styles.pillText}`}
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
      <div className="mx-auto w-full max-w-[1100px]">
        <header className="mb-7 text-center">
          <h2 className="text-[26px] font-bold tracking-tight text-ci-text">
            Web design, development, and technical help
          </h2>
          <p className="mx-auto mt-2 max-w-md text-base leading-relaxed text-ci-subtle">
            Websites and web apps first. Cloud, data, and analytics when you need them.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <ServiceCard
            icon={Globe}
            accent="teal"
            title="Websites & Web Apps"
            body="Custom websites for Dallas small businesses and web apps for startups. Built from scratch, fast on mobile, and set up to help you get found locally."
            pills={["Small business websites", "Web apps", "Local SEO"]}
          />
          <ServiceCard
            icon={TrendingUp}
            accent="teal"
            title="Analytics & Smarter Decisions"
            body="Find out who your best customers are, what's working, and where money is slipping away. Practical reporting for shops and growing teams across DFW."
            pills={["Dashboards", "KPI strategy", "Customer insights"]}
          />
          <ServiceCard
            icon={Database}
            accent="blue"
            title="Data & Business Intelligence"
            body="Stop guessing. I'll help you collect, organize, and understand your data, from a simple sales dashboard to a full warehouse for a growing company."
            pills={["Reporting", "Data pipelines", "Warehousing"]}
          />
          <ServiceCard
            icon={Server}
            accent="blue"
            title="Cloud & Infrastructure"
            body="The behind the scenes stuff that keeps everything running. Whether you're setting up for the first time or cleaning up a mess, I'll get it solid."
            pills={["Cloud hosting", "Security", "Automation"]}
          />
        </div>
      </div>
    </section>
  );
}
