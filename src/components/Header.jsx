import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#services" },
  { label: "Studio", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8D6CE] bg-[#FAFAF7]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo mark */}
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-[#14141A] font-mono text-[11px] font-semibold tracking-tight text-[#14141A]">
            HS
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14141A]">
            Halftone Studio
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#14141A]/70 transition-colors hover:text-[#2B4CFF]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="group flex items-center gap-1.5 border border-[#14141A] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#14141A] transition-colors hover:bg-[#14141A] hover:text-[#FAFAF7]"
          >
            Start a project
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center border border-[#14141A] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-[#D8D6CE] bg-[#FAFAF7] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-xs uppercase tracking-[0.15em] text-[#14141A]/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="border border-[#14141A] px-4 py-2 text-center font-mono text-xs uppercase tracking-[0.15em] text-[#14141A]"
            >
              Start a project
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}