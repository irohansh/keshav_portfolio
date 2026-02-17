"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#practice-areas", label: "Practice Areas" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-foreground"
      aria-hidden
    >
      {open ? (
        <path d="M18 6L6 18M6 6l12 12" />
      ) : (
        <>
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </>
      )}
    </svg>
  );
}

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border-subtle bg-background shadow-sm md:bg-background/80 md:backdrop-blur"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex h-14 min-h-[3.5rem] max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-baseline gap-2" onClick={closeMenu}>
          <span className="rounded-full border border-border-subtle px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary">
            KS
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-muted sm:inline">
            Law Graduate
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-xs font-medium text-muted md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile/tablet: hide nav controls so only KS logo shows */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <MenuIcon open={isMenuOpen} />
        </button>
      </div>

      {/* Mobile/tablet: overlay + right-side panel (does not cover full width) */}
      {isMenuOpen && (
        <>
          <button
            type="button"
            onClick={closeMenu}
            className="fixed inset-0 z-[100] bg-foreground/30 md:hidden"
            aria-label="Close menu"
          />
          <div
            className="fixed right-0 top-0 z-[110] flex h-full w-[min(20rem,85vw)] flex-col overflow-hidden border-l border-border-subtle bg-background shadow-2xl md:hidden"
            role="dialog"
            aria-label="Navigation menu"
          >
            <div className="flex shrink-0 h-16 items-center justify-end border-b border-border-subtle px-5">
              <button
                type="button"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition hover:bg-background hover:text-foreground"
                aria-label="Close menu"
              >
                <MenuIcon open />
              </button>
            </div>
            <nav
              aria-label="Primary"
              className="flex flex-col gap-0 overflow-y-auto px-5 py-5 text-left text-base font-medium text-foreground"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg py-3.5 pr-3 text-muted transition hover:bg-background hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
