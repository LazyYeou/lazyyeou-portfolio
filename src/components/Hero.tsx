export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-3xl mt-20">
        <HeroContent />
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <>
      {/* Grid bg */}
      <div
        className="hero-grid absolute inset-0 pointer-events-none"
        aria-hidden
      />

      {/* Glow */}
      <div
        className="absolute w-[700px] h-[700px] top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-125 duration-300 "
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
        }}
        aria-hidden
      />
    </>
  );
}

function HeroContent() {
  return (
    <div className="mt-6">
      <h1
        className="anim-fade-up delay-100ms font-['Instrument_Serif'] leading-[0.95] tracking-[-0.03em] mb-6 font-normal"
        style={{ fontSize: "clamp(52px, 8vw, 110px)" }}
      >
        LazyYeou
      </h1>

      <p className="anim-fade-up delay-200ms text-[16px] md:text-[18px] leading-[1.85] max-w-[540px] mb-10 text-[var(--muted)]">
        <strong className="text-[var(--ink)] font-medium">
          Computer Science @ Institut Teknologi Bandung
        </strong>{" "}
        Fascinated by how code can move things in the real world.
      </p>

      <HeroActions />
    </div>
  );
}

function HeroActions() {
  return (
    <div className="anim-fade-up delay-300ms flex gap-4 flex-wrap">
      <a
        href="#projects"
        className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase px-8 py-4 rounded border border-[var(--border2)] text-[var(--ink)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[rgba(235,235,235,0.18)]"
      >
        View My Works
      </a>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.08em] uppercase px-8 py-4 rounded border border-[var(--border2)] text-[var(--ink)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[rgba(110,231,183,0.05)]"
      >
        Get in Touch
      </a>
    </div>
  );
}
