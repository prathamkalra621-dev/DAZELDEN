import { ArrowUpRight } from "lucide-react";

/**
 * Props:
 * - index: number | string  (e.g. 1, "01")
 * - title: string
 * - description: string
 * - href: string (optional link target)
 */
export default function ServiceCard({ index, title, description, href = "#contact" }) {
  const displayIndex = String(index).padStart(2, "0");

  return (
    <a
      href={href}
      className="group relative flex flex-col justify-between border border-[#D8D6CE] p-7 transition-colors hover:border-[#14141A]"
    >
      <div>
        <div className="mb-8 flex items-start justify-between">
          <span className="font-mono text-xs text-[#FF4D2E]">
            {displayIndex}
          </span>
          <ArrowUpRight
            size={16}
            className="text-[#14141A]/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2B4CFF]"
          />
        </div>
        <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#14141A]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[#14141A]/65">
          {description}
        </p>
      </div>
    </a>
  );
}