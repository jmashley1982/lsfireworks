import { useState, useEffect } from "react";

/**
 * Business open dates:
 * June 24 – July 4
 * December 20–23
 * December 26 – January 1
 */
function getNextOpenDate(): { target: Date; label: string; isOpen: boolean } {
  const now = new Date();
  const y = now.getFullYear();

  // Build all candidate windows for this year and next
  const windows = [
    { start: new Date(y, 5, 24, 12, 0, 0), end: new Date(y, 6, 4, 23, 59, 59), label: "Summer Season Opens" },
    { start: new Date(y, 11, 20, 14, 0, 0), end: new Date(y, 11, 23, 18, 0, 0), label: "Winter Season Opens" },
    { start: new Date(y, 11, 26, 12, 0, 0), end: new Date(y, 11, 31, 23, 59, 59), label: "New Year Season Opens" },
    { start: new Date(y + 1, 5, 24, 12, 0, 0), end: new Date(y + 1, 6, 4, 23, 59, 59), label: "Summer Season Opens" },
  ];

  for (const w of windows) {
    if (now >= w.start && now <= w.end) {
      return { target: w.end, label: "Open Now", isOpen: true };
    }
    if (now < w.start) {
      return { target: w.start, label: w.label, isOpen: false };
    }
  }

  // Fallback: next summer
  return {
    target: new Date(y + 1, 5, 24, 12, 0, 0),
    label: "Summer Season Opens",
    isOpen: false,
  };
}

function getTimeLeft() {
  const { target, label, isOpen } = getNextOpenDate();
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, label, isOpen: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    label,
    isOpen,
  };
}

function Digit({ value, label }: { value: number; label: string }) {
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlip(true);
      const t = setTimeout(() => {
        setPrev(value);
        setFlip(false);
      }, 300);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [value, prev]);

  return (
    <div style={{ textAlign: "center", minWidth: 70 }}>
      <div
        style={{
          background: "rgba(0,0,0,0.45)",
          border: "2px solid rgba(249,168,37,0.5)",
          borderRadius: 8,
          padding: "8px 12px",
          fontVariantNumeric: "tabular-nums",
          fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
          fontWeight: 900,
          color: "#F9A825",
          letterSpacing: "0.04em",
          transition: "transform 0.3s, opacity 0.3s",
          transform: flip ? "scale(0.85)" : "scale(1)",
          opacity: flip ? 0.5 : 1,
          textShadow: "0 0 20px rgba(249,168,37,0.7)",
          minWidth: 64,
          display: "inline-block",
        }}
      >
        {String(prev).padStart(2, "0")}
      </div>
      <div
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginTop: 4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (time.isOpen) {
    return (
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <span
          style={{
            background: "rgba(76,175,80,0.15)",
            border: "2px solid #4CAF50",
            borderRadius: 999,
            padding: "0.5rem 1.5rem",
            color: "#4CAF50",
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          We Are Open Now!
        </span>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: "2rem" }}>
      <p
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "0.75rem",
        }}
      >
        {time.label}
      </p>
      <div className="countdown-row">
        <Digit value={time.days} label="Days" />
        <div className="countdown-sep" style={{ color: "#F9A825", fontSize: "2rem", fontWeight: 900, paddingTop: 4, lineHeight: 1.6 }}>:</div>
        <Digit value={time.hours} label="Hours" />
        <div className="countdown-sep" style={{ color: "#F9A825", fontSize: "2rem", fontWeight: 900, paddingTop: 4, lineHeight: 1.6 }}>:</div>
        <Digit value={time.minutes} label="Min" />
        <div className="countdown-sep" style={{ color: "#F9A825", fontSize: "2rem", fontWeight: 900, paddingTop: 4, lineHeight: 1.6 }}>:</div>
        <Digit value={time.seconds} label="Sec" />
      </div>
    </div>
  );
}
