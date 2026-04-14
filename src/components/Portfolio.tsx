import { PROJECTS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-bg-card/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-jetbrains)] text-2xl md:text-3xl font-bold mb-2">
            <span className="text-terminal">&gt;</span> Portfolio
          </h2>
          <div className="w-16 h-px bg-terminal/50 mb-12" />
        </ScrollReveal>

        <div className="flex flex-col gap-6">
          {PROJECTS.map((project) => (
            <ScrollReveal key={project.title}>
              <div className="group border border-border hover:border-terminal/30 bg-bg-card hover:bg-bg-card-hover p-8 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-jetbrains)] text-xl font-semibold group-hover:text-terminal transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-[family-name:var(--font-jetbrains)] text-terminal/70 text-sm mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-[family-name:var(--font-jetbrains)] text-xs border border-border hover:border-terminal/50 text-text-secondary hover:text-terminal px-4 py-2 transition-all duration-300 shrink-0"
                    >
                      Visit Site
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-[family-name:var(--font-jetbrains)] text-xs border border-terminal/20 text-terminal/80 px-3 py-1 bg-terminal/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
