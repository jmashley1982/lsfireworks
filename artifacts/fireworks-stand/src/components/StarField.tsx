import { useEffect, useRef } from "react";

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const stars: HTMLDivElement[] = [];
    const shooters: HTMLDivElement[] = [];

    for (let i = 0; i < 130; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 3 + 1;
      star.style.width = size + "px";
      star.style.height = size + "px";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.setProperty("--dur", Math.random() * 3 + 2 + "s");
      star.style.setProperty("--delay", Math.random() * 5 + "s");
      container.appendChild(star);
      stars.push(star);
    }

    for (let i = 0; i < 4; i++) {
      const shooter = document.createElement("div");
      shooter.className = "shooting-star";
      shooter.style.left = Math.random() * 70 + 15 + "%";
      shooter.style.top = Math.random() * 30 + 5 + "%";
      shooter.style.setProperty("--travel", Math.random() * 4 + 3 + "s");
      shooter.style.setProperty("--sdelay", Math.random() * 10 + i * 4 + "s");
      container.appendChild(shooter);
      shooters.push(shooter);
    }

    return () => {
      stars.forEach((s) => s.remove());
      shooters.forEach((s) => s.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
}
