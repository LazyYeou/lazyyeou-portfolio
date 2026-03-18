export default function Footer() {
  return (
    <footer
      className="border-t px-6 md:px-16 py-7 flex flex-col sm:flex-row items-center
        justify-center gap-2 text-[12px] text-center"
      style={{ borderColor: "var(--border)", color: "var(--muted)" }}
    >
      <span>© 2026 LazyYeou - Built with React and Tailwind</span>
    </footer>
  );
}
