import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[600]">
      <div
        className="h-full transition-[width] duration-100"
        style={{
          width: `${pct}%`,
          background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        }}
      />
    </div>
  );
}
