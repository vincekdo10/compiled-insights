import CaseStudyCard from "@/components/CaseStudyCard";

const caseStudies = [
  {
    projectTitle: "Optometry website redesign — Victoria, TX",
    siteName: "TransVision PC",
    url: "transvisionpc.com",
    href: "https://www.transvisionpc.com",
    tags: [
      { label: "Optometry", style: "blue" as const },
      { label: "Local Business", style: "teal" as const },
      { label: "Victoria, TX", style: "teal" as const },
    ],
    primaryImage: {
      src: "/screenshots/transvision/comparison-viewport.webp",
      width: 2904,
      height: 956,
      alt: "TransVision optometry website before and after redesign, Victoria TX small business web design",
    },
    lightboxImages: [
      {
        src: "/screenshots/transvision/before-full.webp",
        alt: "TransVision optometry website before redesign, Victoria TX, July 2024",
        label: "Before (July 2024)",
      },
      {
        src: "/screenshots/transvision/after-full.webp",
        alt: "TransVision optometry website after redesign, Victoria TX, 2026",
        label: "After (2026)",
      },
    ],
    lightboxAriaLabel: "TransVision full page screenshots",
    imageCaption: "Click to view full page screenshots",
    blurb:
      "I modernized an outdated small business website into a clean, professional site with better navigation and a stronger visual identity. More new patients are now discovering the practice through the site.",
    checklist: [
      "Local SEO with geo tags, structured data, and keywords that match how patients search",
      "Built for phones first, since that's how most people look for a doctor",
      "Walk in hours and services easy to find on the first page",
    ],
    quote:
      "The results have exceeded our expectations. Since launching our new website, we've seen many new patients find and choose our clinic. Vincent's expertise, creativity, and attention to detail made the entire process smooth and enjoyable.",
    attribution: "TransVision, P.C., Optometry Practice",
    quoteAccent: "teal" as const,
  },
  {
    projectTitle: "Nail salon website — Magnolia, TX",
    siteName: "Ann & Friends",
    url: "annandfriends.com",
    href: "https://www.annandfriends.com",
    tags: [
      { label: "Nail Salon", style: "pink" as const },
      { label: "Local Business", style: "teal" as const },
      { label: "Magnolia, TX", style: "teal" as const },
    ],
    primaryImage: {
      src: "/screenshots/annandfriends/site-viewport.webp",
      width: 2880,
      height: 1800,
      alt: "Ann and Friends nail salon website homepage, Magnolia TX small business web design",
    },
    lightboxImages: [
      {
        src: "/screenshots/annandfriends/site-full.webp",
        alt: "Ann and Friends nail salon full website design, Magnolia TX",
        label: "Full site",
      },
    ],
    lightboxAriaLabel: "Ann and Friends full page screenshot",
    imageCaption: "Click to view full page screenshot",
    blurb:
      "A brand new site for an appointment only nail salon in Magnolia. Built from scratch to match the quality of their work, with clear services, on brand design, and a simple path to book.",
    checklist: [
      "Design and colors that match the salon",
      "Services laid out clearly with a simple path to book",
      "Local SEO aimed at customers searching in the Magnolia and North Houston area",
    ],
    quote:
      "We'd never had a website before and weren't sure where to start. Vincent walked us through everything and built something that actually represents our salon.",
    attribution: "Ann & Friends Nail Salon",
    quoteAccent: "pink" as const,
    primaryImageMaxHeight: 520,
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-ci-bg px-8 py-11">
      <div className="mx-auto w-full max-w-[1100px]">
        <header className="mb-7 text-center">
          <p className="mb-2 text-[15px] font-semibold uppercase tracking-[1.2px] text-ci-teal">
            Recent Work
          </p>
          <h2 className="mb-2 text-[28px] font-bold tracking-tight text-ci-text">
            Small business websites across Texas, built from scratch
          </h2>
          <p className="mx-auto max-w-md text-base leading-relaxed text-ci-subtle">
            Work with small businesses across Texas. Each site custom built, not pulled
            from a template.
          </p>
        </header>

        {caseStudies.map((study) => (
          <CaseStudyCard key={study.url} {...study} />
        ))}

        <p className="mt-5 text-center text-[16px] text-ci-hint">
          More projects coming, including data and infrastructure work.
        </p>
      </div>
    </section>
  );
}
