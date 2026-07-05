"use client";

import { Check, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type TagStyle = "blue" | "teal" | "pink";

export interface CaseStudyTag {
  label: string;
  style: TagStyle;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  label: string;
}

export interface CaseStudyCardProps {
  projectTitle: string;
  siteName: string;
  url: string;
  href: string;
  tags: CaseStudyTag[];
  primaryImage: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  lightboxImages: CaseStudyImage[];
  lightboxAriaLabel: string;
  imageCaption: string;
  blurb: string;
  checklist: string[];
  quote: string;
  attribution: string;
  quoteAccent?: "teal" | "pink";
  primaryImageMaxHeight?: number;
}

const tagStyles: Record<TagStyle, string> = {
  blue: "bg-[rgba(37,99,235,0.1)] text-[#4a90d9] border-[rgba(37,99,235,0.2)]",
  teal: "bg-[rgba(0,200,158,0.08)] text-ci-teal-dim border-[rgba(0,200,158,0.15)]",
  pink: "bg-[rgba(201,76,122,0.1)] text-[#c94c7a] border-[rgba(201,76,122,0.2)]",
};

const quoteAccentStyles = {
  teal: "border-l-ci-teal",
  pink: "border-l-[#c94c7a]",
};

export default function CaseStudyCard({
  projectTitle,
  siteName,
  url,
  href,
  tags,
  primaryImage,
  lightboxImages,
  lightboxAriaLabel,
  imageCaption,
  blurb,
  checklist,
  quote,
  attribution,
  quoteAccent = "teal",
  primaryImageMaxHeight,
}: CaseStudyCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen, closeLightbox]);

  const activeImage = lightboxImages[lightboxIndex];

  return (
    <>
      <article className="mb-3.5 overflow-hidden rounded-[10px] border border-ci-border bg-ci-surface">
        <div className="border-b border-ci-border px-5 py-[18px]">
          <div className="mb-3 inline-flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag.label}
                className={`rounded-[4px] border px-2 py-0.5 text-[13px] ${tagStyles[tag.style]}`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          <div className="mb-1 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-[18px] font-extrabold text-ci-text">{projectTitle}</h3>
              <p className="text-[13px] text-ci-subtle">
                {siteName} · {url}
              </p>
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-ci-border px-3.5 py-1.5 text-[16px] text-[#5a8aaa]"
            >
              View live site
              <ExternalLink className="h-[11px] w-[11px]" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        <div className="px-5 py-[18px]">
          <button
            type="button"
            onClick={() => {
              setLightboxIndex(0);
              setLightboxOpen(true);
            }}
            className="group mb-4 block w-full overflow-hidden rounded-[10px] border border-ci-border-lt text-left transition-colors hover:border-ci-teal/40"
            aria-label={lightboxAriaLabel}
          >
            {primaryImageMaxHeight ? (
              <Image
                src={primaryImage.src}
                alt={primaryImage.alt}
                width={primaryImage.width}
                height={primaryImage.height}
                className="block h-auto w-full"
                style={{ maxHeight: primaryImageMaxHeight }}
                sizes="(max-width: 1100px) 100vw, 1100px"
              />
            ) : (
              <Image
                src={primaryImage.src}
                alt={primaryImage.alt}
                width={primaryImage.width}
                height={primaryImage.height}
                className="h-auto w-full"
                sizes="(max-width: 1100px) 100vw, 1100px"
              />
            )}
            <p className="border-t border-ci-border px-3 py-2 text-center text-[13px] text-ci-hint group-hover:text-ci-subtle">
              {imageCaption}
            </p>
          </button>

          <p className="mb-4 text-base leading-[1.65] text-ci-subtle">{blurb}</p>

          <ul className="mb-4 flex flex-col gap-1.5">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check
                  className="mt-0.5 h-3 w-3 shrink-0 text-ci-teal"
                  strokeWidth={2.5}
                />
                <span className="text-[16px] leading-relaxed text-ci-muted">{item}</span>
              </li>
            ))}
          </ul>

          <blockquote
            className={`rounded-[10px] border border-ci-border border-l-[3px] bg-ci-deep p-4 ${quoteAccentStyles[quoteAccent]}`}
          >
            <p className="mb-3 text-base leading-[1.65] text-ci-subtle">
              &ldquo;{quote}&rdquo;
            </p>
            <footer className="text-[13px] font-semibold text-ci-text">{attribution}</footer>
          </blockquote>
        </div>
      </article>

      {lightboxOpen && activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(6,11,22,0.92)] p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxAriaLabel}
          onClick={closeLightbox}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[10px] border border-ci-border bg-ci-surface"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-ci-border px-4 py-3">
              {lightboxImages.length > 1 ? (
                <div className="flex flex-wrap gap-2">
                  {lightboxImages.map((image, index) => (
                    <button
                      key={image.label}
                      type="button"
                      onClick={() => setLightboxIndex(index)}
                      className={`rounded-md px-3 py-1.5 text-[13px] font-semibold ${
                        lightboxIndex === index
                          ? "bg-ci-teal text-ci-bg"
                          : "border border-ci-border text-ci-subtle"
                      }`}
                    >
                      {image.label}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-[13px] font-semibold text-ci-text">{activeImage.label}</p>
              )}
              <button
                type="button"
                onClick={closeLightbox}
                className="rounded-md border border-ci-border p-1.5 text-ci-subtle hover:text-ci-text"
                aria-label="Close"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
            <div className="overflow-y-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={activeImage.src} alt={activeImage.alt} className="h-auto w-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
