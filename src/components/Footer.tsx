export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} Ridgway Networks
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/MRID0007"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary hover:text-terminal transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:contact@ridgwaynetworks.com"
            className="font-[family-name:var(--font-jetbrains)] text-xs text-text-secondary hover:text-terminal transition-colors"
          >
            contact@ridgwaynetworks.com
          </a>
        </div>
      </div>
    </footer>
  );
}
