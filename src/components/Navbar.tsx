import { useEffect, useState } from "react";

const LINKS = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.5 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[500] flex items-center justify-between
        px-16 backdrop-blur-xl transition-all duration-300
        ${scrolled ? "py-4 border-b" : "py-5 border-b border-transparent"}
      `}
      style={{
        background: "rgba(9,9,11,0.8)",
        borderColor: scrolled ? "var(--border)" : "transparent",
      }}
    >
      <a
        href="#hero"
        className="font-['Instrument_Serif'] text-[22px] italic transition-colors duration-200 hover:text-[var(--accent)]"
        style={{ color: "var(--ink)" }}
      >
        LazyYeou
      </a>

      <ul className="hidden md:flex gap-9 list-none">
        {LINKS.map((link) => {
          const isActive = active === link.toLowerCase();
          return (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-[12px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200
                  relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-px
                  after:bg-[var(--accent)] after:transition-[width] after:duration-300
                  ${
                    isActive
                      ? "text-[var(--ink)] after:w-full"
                      : "text-[var(--muted)] hover:text-[var(--ink)] after:w-0 hover:after:w-full"
                  }
                `}
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
