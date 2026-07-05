import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  LINKEDIN_URL,
} from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-[#121e2e] bg-ci-dark px-8 py-4">
      <div className="mx-auto flex w-full max-w-[1100px] flex-wrap items-center justify-between gap-2">
        <p className="text-[13px] text-ci-ghost">
          © 2026 Compiled Insights · Dallas, TX · Web design &amp; development
        </p>
        <div className="flex flex-wrap items-center gap-8">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[#253a50]"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[13px] text-[#253a50]"
          >
            {CONTACT_EMAIL}
          </a>
          <a href={CONTACT_PHONE_HREF} className="text-[13px] text-[#253a50]">
            {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </footer>
  );
}
