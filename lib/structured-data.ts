import { CONTACT_EMAIL, CONTACT_PHONE, LINKEDIN_URL } from "@/lib/contact";
import {
  BUSINESS_ADDRESS,
  OG_IMAGE,
  SERVICE_AREAS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const faqItems = [
  {
    question: "How much does a small business website cost in Dallas?",
    answer:
      "Most small business sites I build start in a straightforward range depending on pages, design complexity, and whether you need booking, e-commerce, or custom features. I quote upfront after a free call so there are no surprise agency fees.",
  },
  {
    question: "Do you work with startups in Dallas?",
    answer:
      "Yes. I build MVPs, internal tools, and customer-facing web apps for early-stage startups across DFW. You work directly with me, not a rotating team.",
  },
  {
    question: "Are you a web designer or a developer?",
    answer:
      "Both. I design and build websites from scratch, handle hosting setup, local SEO basics, and can extend into data, analytics, and cloud work when you need it.",
  },
  {
    question: "Who is a good fit for Compiled Insights?",
    answer:
      "Local businesses that need a professional site to get found online, and startups that need a technical partner to ship a web app without hiring full time. Based in Dallas, available across North Texas and remotely.",
  },
];

const reviews = [
  {
    author: "TransVision, P.C.",
    body: "The results have exceeded our expectations. Since launching our new website, we've seen many new patients find and choose our clinic. Vincent's expertise, creativity, and attention to detail made the entire process smooth and enjoyable.",
  },
  {
    author: "Ann & Friends Nail Salon",
    body: "We'd never had a website before and weren't sure where to start. Vincent walked us through everything and built something that actually represents our salon.",
  },
];

export { faqItems };

export function getStructuredData() {
  const imageUrl = `${SITE_URL}${OG_IMAGE.url}`;

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    image: imageUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_ADDRESS.city,
      addressRegion: BUSINESS_ADDRESS.region,
      addressCountry: BUSINESS_ADDRESS.country,
    },
    areaServed: SERVICE_AREAS.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    priceRange: "$$",
    serviceType: [
      "Web design",
      "Web development",
      "Small business websites",
      "Startup web app development",
      "Local SEO",
      "Cloud consulting",
      "Business analytics",
    ],
    founder: { "@id": `${SITE_URL}/#person` },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Organization", name: review.author },
      reviewBody: review.body,
    })),
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Vincent Do",
    jobTitle: "Web Designer & Developer",
    worksFor: { "@id": `${SITE_URL}/#business` },
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    sameAs: [LINKEDIN_URL],
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_ADDRESS.city,
      addressRegion: BUSINESS_ADDRESS.region,
      addressCountry: BUSINESS_ADDRESS.country,
    },
    knowsAbout: [
      "Web design",
      "Web development",
      "Startup technical consulting",
      "Cloud architecture",
      "Data analytics",
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#business` },
  };

  return [professionalService, person, faqPage, webSite];
}
