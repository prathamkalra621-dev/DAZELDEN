const COLUMNS = [
  {
    heading: "Studio",
    links: [
      { label: "Work", href: "#work" },
      { label: "Capabilities", href: "#services" },
      { label: "About", href: "#about" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "hello@halftonestudio.com", href: "mailto:hello@halftonestudio.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
   <footer>
        <div className="footer-inner">
          <span className="mono">© 2026 DAZELDEN — FULL-SERVICE GROWTH MARKETING</span>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
  );
}