import { useReveal } from "../hooks/useReveal";
import { SKILLS } from "../data";

export default function Skills() {
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section
      id="skills"
      className="px-6 md:px-16 py-24 border-t border-b"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div ref={titleRef} className="reveal">
        <p className="eyebrow">Skills</p>
        <h2
          className="font-['Instrument_Serif'] leading-[1.1] tracking-[-0.025em] mb-3"
          style={{ fontSize: "clamp(36px,4vw,54px)", fontWeight: 400 }}
        >
          My{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>tools</em>
        </h2>
        <p
          className="text-[14px] leading-[1.8] max-w-[540px] mb-16"
          style={{ color: "var(--muted)" }}
        >
          Some of the technologies I’ve been working with recently. I’m always
          eager to learn new tools and expand my skill set, so this list is by
          no means exhaustive.
        </p>
      </div>

      <div
        ref={gridRef}
        className="reveal reveal-d1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-px rounded-2xl overflow-hidden border"
        style={{ background: "var(--border)", borderColor: "var(--border)" }}
      >
        {SKILLS.map((cat) => (
          <div
            key={cat.label}
            className="group p-8 transition-colors duration-200"
            style={{ background: "var(--surface)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--bg)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--surface)")
            }
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span
                className="text-[11px] font-bold tracking-[0.15em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                {cat.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.pills.map((pill) => (
                <span
                  key={pill}
                  className="text-[11px] font-medium px-3 py-[5px] rounded-full border
                    transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderColor: "var(--border2)",
                    color: "var(--muted)",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
