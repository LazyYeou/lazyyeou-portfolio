import { useReveal } from "../hooks/useReveal";
import { TIMELINE, STATS } from "../data";

export default function About() {
  const titleRef = useReveal();
  const contentRef = useReveal();

  return (
    <section
      id="about"
      className="px-6 md:px-16 py-24 border-t"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div ref={titleRef} className="reveal">
        <p className="eyebrow">About</p>
        <h2
          className="font-['Instrument_Serif'] leading-[1.1] tracking-[-0.025em] mb-3"
          style={{ fontSize: "clamp(36px,4vw,54px)", fontWeight: 400 }}
        >
          The person{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            behind
          </em>{" "}
          the code
        </h2>
      </div>

      <div
        ref={contentRef}
        className="reveal reveal-d1 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-20 items-start mt-0"
      >
        {/* Left */}
        <div>
          <div className="space-y-5 mb-10">
            {[
              <>
                I'm a{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  Computer Science student @ Institut Teknologi Bandung
                </strong>{" "}
                fascinated by how code can move things in the real world.
                Currently learning how to combine AI with drones (UAVs) to build
                smarter software. I don't just want to build apps; I want to
                build things that think and fly.
              </>,
              <>
                My approach:{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  start with the problem
                </strong>
                , not the technology. I've shipped full-stack apps with real
                users and learned that the best code is the code nobody notices.
              </>,
              <>
                I'm drawn to projects at the intersection of{" "}
                <strong
                  className="font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  clean engineering and human-centered design
                </strong>
                . Currently exploring machine learning and cloud architecture to
                level up my stack.
              </>,
            ].map((text, i) => (
              <p
                key={i}
                className="text-[14px] leading-[1.9]"
                style={{ color: "var(--muted)" }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 gap-px rounded-xl overflow-hidden border"
            style={{
              background: "var(--border)",
              borderColor: "var(--border)",
            }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="p-6 transition-colors duration-200 cursor-default"
                style={{ background: "var(--surface2)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--bg)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--surface2)")
                }
              >
                <div
                  className="font-['Instrument_Serif'] text-[38px] italic leading-none mb-1.5"
                  style={{ color: "var(--accent)" }}
                >
                  {s.num}
                </div>
                <div
                  className="text-[11px] tracking-[0.1em] uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col">
          {TIMELINE.map((item) => (
            <div
              key={item.role}
              className="tl-item pl-7 pb-6 pt-6 border-l"
              style={{ borderColor: "var(--border2)" }}
            >
              <div
                className="font-['DM_Mono'] text-[10px] tracking-[0.1em] mb-1.5"
                style={{ color: "var(--accent)" }}
              >
                {item.year}
              </div>
              <div
                className="text-[15px] font-semibold mb-1"
                style={{ color: "var(--ink)" }}
              >
                {item.role}
              </div>
              <div className="text-[12px]" style={{ color: "var(--muted)" }}>
                {item.place}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
