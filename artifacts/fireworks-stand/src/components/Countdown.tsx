import { useState, useEffect } from "react";

function getTargetDate(): Date {
  const now = new Date();
  const year = now.getFullYear();
  const target = new Date(year, 6, 4, 0, 0, 0); // July 4
  if (now > target) {
    target.setFullYear(year + 1);
  }
  return target;
}

function getTimeLeft() {
  const target = getTargetDate();
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isToday: true };
  const isToday =
    new Date().toDateString() === new Date(target).toDateString();
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isToday,
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

  if (time.isToday) {
    return (
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <span
          style={{
            background: "rgba(249,168,37,0.15)",
            border: "2px solid #F9A825",
            borderRadius: 999,
            padding: "0.5rem 1.5rem",
            color: "#F9A825",
            fontWeight: 800,
            fontSize: "1.1rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Happy 4th of July!
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
        Countdown to July 4th
      </p>
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", alignItems: "flex-start", flexWrap: "wrap" }}>
        <Digit value={time.days} label="Days" />
        <div style={{ color: "#F9A825", fontSize: "2rem", fontWeight: 900, paddingTop: 4, lineHeight: 1.6 }}>:</div>
        <Digit value={time.hours} label="Hours" />
        <div style={{ color: "#F9A825", fontSize: "2rem", fontWeight: 900, paddingTop: 4, lineHeight: 1.6 }}>:</div>
        <Digit value={time.minutes} label="Min" />
        <div style={{ color: "#F9A825", fontSize: "2rem", fontWeight: 900, paddingTop: 4, lineHeight: 1.6 }}>:</div>
        <Digit value={time.seconds} label="Sec" />
      </div>
    </div>
  );
}
