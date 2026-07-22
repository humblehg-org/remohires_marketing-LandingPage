"use client";

import { useEffect, useState } from "react";

const COMMANDS = [
  "build a support bot trained on our docs",
  "automate lead intake into our CRM",
  "turn weekly sales data into a dashboard",
  "wire up an AI agent for order triage",
];

export function Terminal() {
  const [text, setText] = useState("");

  useEffect(() => {
    let commandIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = COMMANDS[commandIndex];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(tick, 1700);
          return;
        }
        timeout = setTimeout(tick, 42);
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          commandIndex = (commandIndex + 1) % COMMANDS.length;
          timeout = setTimeout(tick, 320);
          return;
        }
        timeout = setTimeout(tick, 20);
      }
    }

    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="terminal">
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="line">
        <span className="prompt">your team &gt;</span> <span>{text}</span>
        <span className="cursor"></span>
      </div>
    </div>
  );
}
