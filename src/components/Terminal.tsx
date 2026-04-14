"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";

interface TerminalLine {
  text: string;
  isOutput?: boolean;
  className?: string;
}

interface TerminalCommand {
  command: string;
  delay: number;
  isOutput?: boolean;
}

const PROMPT = "michael@ridgway:~$";

function TerminalWindow({
  title,
  initialCommand,
  commands,
  typingSpeed = 45,
}: {
  title?: string;
  initialCommand: string;
  commands: TerminalCommand[];
  typingSpeed?: number;
}) {
  const { ref, isVisible } = useInView(0.3);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [commandIndex, setCommandIndex] = useState(-1);
  const [initialDone, setInitialDone] = useState(false);
  const [hoverDots, setHoverDots] = useState(false);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Start when visible
  useEffect(() => {
    if (isVisible && !started) setStarted(true);
  }, [isVisible, started]);

  // Type the initial command
  useEffect(() => {
    if (!started) return;
    if (commandIndex === -1 && !initialDone) {
      const start = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - start;
        const chars = Math.floor(elapsed / typingSpeed);
        if (chars <= initialCommand.length) {
          setCurrentText(initialCommand.substring(0, chars));
        } else {
          clearInterval(interval);
          setInitialDone(true);
          setLines([{ text: `${PROMPT} ${initialCommand}` }]);
          setCurrentText("");
          setCommandIndex(0);
        }
      }, 16);
      return () => clearInterval(interval);
    }
  }, [started, commandIndex, initialDone, initialCommand, typingSpeed]);

  // Execute command sequence
  useEffect(() => {
    if (!started || !initialDone) return;
    if (commandIndex >= 0 && commandIndex < commands.length) {
      const { command, delay, isOutput } = commands[commandIndex];
      const timeout = setTimeout(() => {
        setLines((prev) => [
          ...prev,
          {
            text: isOutput ? command : `${PROMPT} ${command}`,
            isOutput,
            className: command.startsWith("[+]")
              ? "text-terminal font-bold"
              : command.startsWith("[*]") || command.startsWith("[~]")
                ? "text-yellow-400"
                : command.startsWith("[!]")
                  ? "text-red-400"
                  : undefined,
          },
        ]);
        setCommandIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [commandIndex, initialDone, started, commands]);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  return (
    <div
      ref={ref}
      className="bg-[#0d0d14] text-terminal p-3 sm:p-4 rounded-lg shadow-lg shadow-terminal/5 font-[family-name:var(--font-jetbrains)] text-xs sm:text-sm relative border border-border overflow-hidden"
    >
      {/* Title bar with traffic light dots */}
      <div
        className="absolute top-2 left-2 flex space-x-2"
        onMouseEnter={() => setHoverDots(true)}
        onMouseLeave={() => setHoverDots(false)}
      >
        <div className="w-3 h-3 rounded-full bg-red-500 relative">
          {hoverDots && (
            <span className="absolute inset-0 flex items-center justify-center text-[8px] text-white">
              &times;
            </span>
          )}
        </div>
        <div className="w-3 h-3 rounded-full bg-yellow-400 relative">
          {hoverDots && (
            <span className="absolute inset-0 flex items-center justify-center text-[8px] text-black">
              &ndash;
            </span>
          )}
        </div>
        <div className="w-3 h-3 rounded-full bg-green-500 relative">
          {hoverDots && (
            <span className="absolute inset-0 flex items-center justify-center text-[8px] text-white">
              &#9723;
            </span>
          )}
        </div>
      </div>

      {title && (
        <div className="text-center text-text-secondary text-xs mb-2 mt-0">
          {title}
        </div>
      )}

      {/* Terminal body */}
      <div className="mt-6 max-h-64 overflow-y-auto scrollbar-thin">
        {lines.map((line, i) => (
          <div key={i}>
            {line.isOutput || line.className ? (
              <span className={line.className || "text-text-secondary"}>
                {line.text}
              </span>
            ) : (
              <>
                <span className="text-purple-500">{PROMPT}</span>{" "}
                {line.text.replace(`${PROMPT} `, "")}
              </>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {!initialDone && started && (
          <div>
            <span className="text-purple-500">{PROMPT}</span> {currentText}
            <span className="animate-pulse">|</span>
          </div>
        )}

        {commandIndex >= commands.length && initialDone && (
          <div>
            <span className="text-purple-500">{PROMPT}</span>{" "}
            <span className="animate-pulse">|</span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

// --- Terminal instances used on the site ---

const deployCommands: TerminalCommand[] = [
  { command: "[*] Cloning repository...", delay: 500, isOutput: true },
  { command: "[*] Building Docker image with Kaniko...", delay: 600, isOutput: true },
  { command: "[*] Compiling TypeScript...", delay: 400, isOutput: true },
  { command: "[*] Optimizing production build...", delay: 500, isOutput: true },
  { command: "[*] Pushing image to registry...", delay: 400, isOutput: true },
  { command: "[*] Rolling out deployment...", delay: 500, isOutput: true },
  { command: "[+] Deployment successful — site is live!", delay: 600, isOutput: true },
];

const stackCommands: TerminalCommand[] = [
  { command: "cat tech-stack.yml", delay: 400 },
  { command: "frontend: [React, Next.js, TypeScript, Tailwind]", delay: 300, isOutput: true },
  { command: "backend:  [Node.js, Fastify, Python, REST APIs]", delay: 300, isOutput: true },
  { command: "database: [PostgreSQL, SQLite, Drizzle, Prisma]", delay: 300, isOutput: true },
  { command: "infra:    [Kubernetes, Docker, Cloudflare, GitOps]", delay: 300, isOutput: true },
  { command: "tools:    [Git, GitHub, Kaniko, Inngest, Playwright]", delay: 300, isOutput: true },
  { command: "[+] Stack loaded.", delay: 500, isOutput: true },
];

const auditCommands: TerminalCommand[] = [
  { command: "[*] Scanning ridgwaynetworks.com...", delay: 500, isOutput: true },
  { command: "[*] Checking SSL/TLS configuration...", delay: 400, isOutput: true },
  { command: "[+] SSL: A+ (Cloudflare)", delay: 300, isOutput: true },
  { command: "[*] Testing response times...", delay: 400, isOutput: true },
  { command: "[+] TTFB: 42ms", delay: 300, isOutput: true },
  { command: "[*] Checking security headers...", delay: 400, isOutput: true },
  { command: "[+] X-Frame-Options: DENY", delay: 200, isOutput: true },
  { command: "[+] X-Content-Type-Options: nosniff", delay: 200, isOutput: true },
  { command: "[+] All checks passed.", delay: 500, isOutput: true },
];

export function DeployTerminal() {
  return (
    <TerminalWindow
      title="michael@ridgway — deploy"
      initialCommand="./deploy.sh ridgwaynetworks"
      commands={deployCommands}
    />
  );
}

export function StackTerminal() {
  return (
    <TerminalWindow
      title="michael@ridgway — stack"
      initialCommand="ridgway --show-stack"
      commands={stackCommands}
    />
  );
}

export function AuditTerminal() {
  return (
    <TerminalWindow
      title="michael@ridgway — audit"
      initialCommand="ridgway --audit ridgwaynetworks.com"
      commands={auditCommands}
    />
  );
}
