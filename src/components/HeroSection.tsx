"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ROLE_LINES = [
  "Law Graduate",
  "Corporate & Banking Litigation",
  "Future Advocate",
];

const CYCLE_DURATION_MS = 2200; // ~0.3s fade in, ~1.6s visible, ~0.3s fade out

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % ROLE_LINES.length);
    }, CYCLE_DURATION_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="border-b border-border-subtle bg-card-background/90 py-16 sm:py-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="relative h-28 w-28 overflow-hidden rounded-full border border-border-subtle bg-background shadow-sm sm:h-36 sm:w-36">
          {/* Uses public/photo.jpg – make sure this file exists in the public folder */}
          <Image
            src="/photo.jpg"
            alt="Keshav Sharma"
            fill
            sizes="(max-width: 640px) 112px, 144px"
            className="object-cover"
            priority
          />
        </div>

        <h1
          id="hero-title"
          className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
        >
          Keshav Sharma
        </h1>

        <div className="mt-2 h-7 overflow-hidden whitespace-nowrap text-base font-medium text-primary-soft sm:h-8 sm:text-lg">
          <span
            key={ROLE_LINES[currentIndex]}
            className="inline-block headline-phrase"
          >
            {ROLE_LINES[currentIndex]}
          </span>
        </div>

        <div className="mt-5 max-w-2xl space-y-3 text-sm leading-relaxed text-muted sm:text-base">
          <p>
            I am a detail-oriented and highly motivated law graduate with a
            strong foundation in corporate law, banking litigation, legal
            research, and regulatory compliance.
          </p>
          <p>
            My practice experience spans civil litigation, commercial disputes,
            debt recovery proceedings, insurance claim disputes, and criminal
            complaints. I have developed strong analytical, drafting, and
            research skills through hands-on experience before the Punjab &amp;
            Haryana High Court and District Courts.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://drive.google.com/uc?export=download&id=1RrsFWM1I1hqdZWOQ5MXpAgg68LboepcU"
            target="_blank"
            rel="noopener noreferrer"
            download="Keshav_Sharma_Resume.pdf"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-soft"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border-subtle px-5 py-2.5 text-sm font-medium text-foreground/80 hover:bg-background"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-muted sm:text-sm">
          <span className="rounded-full border border-border-subtle bg-background px-3 py-1">
            Panchkula, Haryana
          </span>
          <span className="rounded-full border border-border-subtle bg-background px-3 py-1">
            Corporate &amp; Contract Law · Banking &amp; Debt Recovery ·
            Insurance Law
          </span>
        </div>
      </div>
    </section>
  );
}
