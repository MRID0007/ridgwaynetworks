import { SERVICES } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-jetbrains)] text-2xl md:text-3xl font-bold mb-2">
            <span className="text-terminal">&gt;</span> Services
          </h2>
          <div className="w-16 h-px bg-terminal/50 mb-12" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <div className="group border border-border hover:border-terminal/30 bg-bg-card hover:bg-bg-card-hover p-8 transition-all duration-300">
                <span className="text-terminal text-2xl mb-4 block">
                  {service.icon}
                </span>
                <h3 className="font-[family-name:var(--font-jetbrains)] text-lg font-semibold mb-3 group-hover:text-terminal transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
