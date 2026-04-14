import { ABOUT_TEXT } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";
import { AuditTerminal } from "./Terminal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-bg-card/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-jetbrains)] text-2xl md:text-3xl font-bold mb-2">
            <span className="text-terminal">&gt;</span> About
          </h2>
          <div className="w-16 h-px bg-terminal/50 mb-12" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal delay={100}>
            <div className="border border-border bg-bg-card p-8 md:p-10 h-full">
              <div className="flex flex-col gap-4">
                {ABOUT_TEXT.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-text-secondary text-sm md:text-base leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-[family-name:var(--font-jetbrains)] text-sm text-text-secondary">
                  <span className="text-terminal">$</span> whoami
                </p>
                <p className="font-[family-name:var(--font-jetbrains)] text-sm text-text-primary mt-1">
                  Michael Ridgway — Full-Stack Developer
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <AuditTerminal />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
