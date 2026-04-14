import { ABOUT_TEXT } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";
import { DeployTerminal } from "./Terminal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-jetbrains)] text-2xl md:text-3xl font-bold mb-2">
            <span className="text-terminal">&gt;</span> About
          </h2>
          <div className="w-16 h-px bg-terminal/50 mb-12" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <ScrollReveal>
            <div className="flex flex-col gap-5">
              {ABOUT_TEXT.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-text-secondary text-sm md:text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-4 pt-5 border-t border-border">
                <p className="font-[family-name:var(--font-jetbrains)] text-sm text-text-secondary">
                  <span className="text-terminal">$</span> whoami
                </p>
                <p className="font-[family-name:var(--font-jetbrains)] text-sm text-text-primary mt-1">
                  Michael Ridgway — Full-Stack Developer
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <DeployTerminal />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
