import { Check, ExternalLink, Eye, Sparkles, type LucideIcon } from "lucide-react";

type TagStyle = "blue" | "teal" | "pink";

interface ProjectTag {
  label: string;
  style: TagStyle;
}

interface Project {
  previewBg: string;
  icon: LucideIcon;
  iconColor: string;
  iconContainerBg: string;
  iconContainerBorder: string;
  siteName: string;
  url: string;
  href: string;
  tags: ProjectTag[];
  description: string;
  checklist: string[];
}

const tagStyles: Record<TagStyle, string> = {
  blue: "bg-[rgba(37,99,235,0.1)] text-[#4a90d9] border-[rgba(37,99,235,0.2)]",
  teal: "bg-[rgba(0,200,158,0.08)] text-ci-teal-dim border-[rgba(0,200,158,0.15)]",
  pink: "bg-[rgba(201,76,122,0.1)] text-[#c94c7a] border-[rgba(201,76,122,0.2)]",
};

const projects: Project[] = [
  {
    previewBg: "#0e2040",
    icon: Eye,
    iconColor: "#2563eb",
    iconContainerBg: "rgba(37,99,235,0.15)",
    iconContainerBorder: "rgba(37,99,235,0.3)",
    siteName: "TransVision PC",
    url: "transvisionpc.com",
    href: "https://www.transvisionpc.com",
    tags: [
      { label: "Optometry", style: "blue" },
      { label: "Local Business", style: "teal" },
      { label: "Victoria, TX", style: "teal" },
    ],
    description:
      "A 30+ year optometry practice that needed a modern web presence to match their reputation. Built to drive local search traffic and make it easy for new patients to find them and walk in.",
    checklist: [
      "Full local SEO setup — geo tags, structured data, local keyword targeting",
      "Mobile-first design built for patients searching on their phones",
      "Walk-in availability and services surfaced clearly for new visitors",
    ],
  },
  {
    previewBg: "#200e1a",
    icon: Sparkles,
    iconColor: "#c94c7a",
    iconContainerBg: "rgba(201,76,122,0.15)",
    iconContainerBorder: "rgba(201,76,122,0.3)",
    siteName: "Ann & Friends",
    url: "annandfriends.com",
    href: "https://www.annandfriends.com",
    tags: [
      { label: "Nail Salon", style: "pink" },
      { label: "Local Business", style: "teal" },
      { label: "Magnolia, TX", style: "teal" },
    ],
    description:
      "An appointment-only nail salon near Houston that needed a site as polished as their work. Built to convert browsers into bookings and make it simple for customers to reach the right stylist.",
    checklist: [
      "On-brand design with custom color palette matching the salon's identity",
      "Service showcase with clear booking flow for appointment-only model",
      "Local SEO and geo-targeting for Houston-area search visibility",
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <article className="overflow-hidden rounded-[10px] border border-ci-border bg-ci-surface">
      <div
        className="flex h-[140px] flex-col items-center justify-center border-b border-ci-border"
        style={{ backgroundColor: project.previewBg }}
      >
        <div
          className="mb-2.5 flex h-12 w-12 items-center justify-center rounded-[10px] border"
          style={{
            backgroundColor: project.iconContainerBg,
            borderColor: project.iconContainerBorder,
          }}
        >
          <Icon
            className="h-[22px] w-[22px]"
            style={{ color: project.iconColor }}
            strokeWidth={2}
          />
        </div>
        <p className="text-[18px] font-extrabold text-ci-text">{project.siteName}</p>
        <p className="text-[13px] text-ci-subtle">{project.url}</p>
      </div>

      <div className="px-5 py-[18px]">
        <div className="mb-3 inline-flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded-[4px] border px-2 py-0.5 text-[13px] ${tagStyles[tag.style]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <p className="mb-3.5 text-base leading-[1.65] text-ci-subtle">{project.description}</p>

        <ul className="mb-4 flex flex-col gap-1.5">
          {project.checklist.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check
                className="mt-0.5 h-3 w-3 shrink-0 text-ci-teal"
                strokeWidth={2.5}
              />
              <span className="text-[16px] leading-relaxed text-ci-muted">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-ci-border px-3.5 py-1.5 text-[16px] text-[#5a8aaa]"
        >
          View live site
          <ExternalLink className="h-[11px] w-[11px]" strokeWidth={2.5} />
        </a>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="bg-ci-bg px-8 py-11">
      <div className="mx-auto w-full max-w-[1100px]">
        <header className="mb-7 text-center">
          <p className="mb-2 text-[15px] font-semibold uppercase tracking-[1.2px] text-ci-teal">
            Recent Work
          </p>
          <h2 className="mb-2 text-[28px] font-bold tracking-tight text-ci-text">
            Local businesses I&apos;ve helped get online — and get found.
          </h2>
          <p className="mx-auto max-w-sm text-base leading-relaxed text-ci-subtle">
            Real clients. Real results. No templates, no page builders — built from scratch for each business.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.url} project={project} />
          ))}
        </div>

        <p className="mt-5 text-center text-[16px] text-ci-hint">
          More projects coming soon — including data and infrastructure work.
        </p>
      </div>
    </section>
  );
}
