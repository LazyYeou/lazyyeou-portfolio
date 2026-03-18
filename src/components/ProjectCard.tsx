import type { Project } from "../types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <a
      href={project.href}
      className="group flex flex-col h-full p-6 bg-[var(--surface)] border border-white/10 
                 rounded-lg transition-all duration-500 ease-out
                 hover:border-white/70 hover:-translate-y-1"
    >
      {/* Header: Project Number & Arrow */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
          {project.num}
        </span>
        <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
          ↗
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <h3 className="text-2xl font-light tracking-tight text-white mb-3">
          {project.name}
        </h3>
        <p className="text-sm leading-relaxed text-white/50 font-light max-w-[90%] mb-8">
          {project.description}
        </p>
      </div>

      {/* Footer: Tags */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 pt-6 border-t border-white/5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className=" text-[9px] uppercase tracking-widest text-white/30 group-hover:text-white/80 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
