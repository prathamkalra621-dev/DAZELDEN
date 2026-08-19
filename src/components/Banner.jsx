import { ArrowUpRight } from "lucide-react";

function CropMark({ ClassName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <line x1="12" y1="0" x2="12" y2="9" stroke="#14141A" strokeWidth="1" />
      <line x1="12" y1="15" x2="12" y2="24" stroke="#14141A" strokeWidth="1" />
      <line x1="0" y1="12" x2="9" y2="12" stroke="#14141A" strokeWidth="1" />
      <line x1="15" y1="12" x2="24" y2="12" stroke="#14141A" strokeWidth="1" />
    </svg>
  );
}

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF7] px-6 pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="relative mx-auto max-w-6xl border border-[#D8D6CE] px-6 py-14 md:px-14 md:py-20">
        {/* Crop marks */}
        <CropMark className="absolute -left-3 -top-3 h-6 w-6" />
        <CropMark className="absolute -right-3 -top-3 h-6 w-6" />
        <CropMark className="absolute -bottom-3 -left-3 h-6 w-6" />
        <CropMark className="absolute -bottom-3 -right-3 h-6 w-6" />

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-[#FF4D2E]">
              Job No. 0142 — Brand &amp; Product Studio
            </p>
            <h1 className="font-sans text-[13vw] font-semibold leading-[0.92] tracking-tight text-[#14141A] sm:text-6xl md:text-7xl">
              Design that
              <br />
              <span className="text-[#2B4CFF]">ships</span> and sells.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#14141A]/70">
              We're a small studio building brand systems, websites, and
              product interfaces for teams who'd rather stand out than blend
              in.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group flex items-center gap-2 bg-[#14141A] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#FAFAF7] transition-transform hover:-translate-y-0.5"
              >
                Start a project
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#work"
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#14141A]/70 underline decoration-[#D8D6CE] underline-offset-4 hover:text-[#14141A]"
              >
                View the work
              </a>
            </div>
          </div>

          {/* Stamp / meta block */}
          <div className="flex shrink-0 flex-col gap-6 border-t border-[#D8D6CE] pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#14141A]/50">
                Est.
              </p>
              <p className="font-mono text-sm text-[#14141A]">2016</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#14141A]/50">
                Projects shipped
              </p>
              <p className="font-mono text-sm text-[#14141A]">180+</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#14141A]/50">
                Studio
              </p>
              <p className="font-mono text-sm text-[#14141A]">Remote-first</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}