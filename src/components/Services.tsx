import { SERVICES, SKILLS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";
import { AuditTerminal } from "./Terminal";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-jetbrains)] text-2xl md:text-3xl font-bold mb-2">
            <span className="text-terminal">&gt;</span> Services &amp; Skills
          </h2>
          <div className="w-16 h-px bg-terminal/50 mb-12" />
        </ScrollReveal>

        {/* Service cards */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="group border border-border hover:border-terminal/30 bg-bg-card hover:bg-bg-card-hover p-6 transition-all duration-300"
              >
                <span className="text-terminal text-xl mb-3 block">
                  {service.icon}
                </span>
                <h3 className="font-[family-name:var(--font-jetbrains)] text-sm font-semibold mb-2 group-hover:text-terminal transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills + terminal side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS.map((category) => (
                <div
                  key={category.category}
                  className="border border-border bg-bg-card p-5"
                >
                  <h3 className="font-[family-name:var(--font-jetbrains)] text-xs text-terminal mb-3 uppercase tracking-wider">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="font-[family-name:var(--font-jetbrains)] text-xs text-text-primary border border-border hover:border-terminal/40 hover:text-terminal px-2.5 py-1 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <AuditTerminal />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
