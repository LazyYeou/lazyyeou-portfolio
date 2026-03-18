import { useReveal } from "../hooks/useReveal";
import { CONTACT_LINKS } from "../data";

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-24 text-center bg-[var(--surface)] border-t border-b border-[var(--border)] text-white"
    >
      <div ref={ref} className="reveal max-w-[640px] mx-auto">
        <p className="eyebrow font-bold text-[20px] tracking-[0.3em] uppercase text-white/100 mb-10  justify-center flex">
          Contact
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
          {CONTACT_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.02] text-left
                          transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <Icon width={20} height={20} strokeWidth={1.5} />
                </div>

                <div>
                  <div className="text-[9px] tracking-[0.2em] uppercase text-white/40 mb-0.5 font-mono">
                    {link.label}
                  </div>
                  <div className="text-[13px] font-medium text-white/90">
                    {link.value}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
