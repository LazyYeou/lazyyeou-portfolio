import { useReveal } from "../hooks/useReveal";
import { PROJECTS } from "../data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const titleRef = useReveal();
  const gridRef = useReveal();

  return (
    <section
      id="projects"
      className="px-6 md:px-16 py-24 bg-[var(--surface)] border-t border-b border-(--border)"
    >
      <div ref={titleRef} className="reveal">
        <p className="eyebrow">Projects</p>
        <h2
          className="font-['Instrument_Serif'] leading-[1.1] tracking-[-0.025em] mb-3"
          style={{ fontSize: "clamp(36px,4vw,54px)", fontWeight: 400 }}
        >
          Things I've{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>built</em>
        </h2>
        <p
          className="text-[14px] leading-[1.8] max-w-[540px] mb-16"
          style={{ color: "var(--muted)" }}
        >
          Each project solves a real problem. Hover the image area to upload
          your own screenshots.
        </p>
      </div>

      <div
        ref={gridRef}
        className="reveal reveal-d1 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
