import { SKILLS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-jetbrains)] text-2xl md:text-3xl font-bold mb-2">
            <span className="text-terminal">&gt;</span> Skills
          </h2>
          <div className="w-16 h-px bg-terminal/50 mb-12" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, i) => (
            <ScrollReveal key={category.category} delay={i * 100}>
              <div className="border border-border bg-bg-card p-6">
                <h3 className="font-[family-name:var(--font-jetbrains)] text-sm text-terminal mb-4 uppercase tracking-wider">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="font-[family-name:var(--font-jetbrains)] text-xs text-text-primary border border-border hover:border-terminal/40 hover:text-terminal px-3 py-1.5 transition-colors cursor-default"
                    >
                      {skill}
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
