import { useScrollReveal } from "@/hooks/useScrollReveal";
import Countdown from "@/components/Countdown";

const RED = "#C62828";
const BLUE_DARK = "#061F35";
const BLUE = "#0D3B66";
const GOLD = "#F9A825";
const WHITE = "#FAFAFA";

function Header() {
  return (
    <header
      style={{
        background: RED,
        padding: "1rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "0.75rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        position: "sticky",
        top: 0,
        zIndex: 200,
        borderBottom: `3px solid ${WHITE}`,
        pointerEvents: "all",
      }}
    >
      <div
        style={{
          fontWeight: 900,
          fontSize: "clamp(1.05rem, 3vw, 1.35rem)",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: WHITE,
          textShadow: `2px 2px 0 ${BLUE_DARK}, 0 0 8px rgba(255,255,255,0.3)`,
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontSize: "1.5rem",
            marginRight: "0.3rem",
            animation: "bounce-icon 0.6s ease-in-out infinite alternate",
          }}
          aria-hidden="true"
        >
          🧨
        </span>
        Seguin Fireworks Stand
      </div>
      <a
        href="tel:+15551234567"
        style={{
          color: WHITE,
          fontWeight: 700,
          fontSize: "1.05rem",
          textDecoration: "none",
          background: "rgba(0,0,0,0.25)",
          padding: "0.5rem 1rem",
          borderRadius: "2rem",
          transition: "background 0.3s",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.45)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.25)")
        }
      >
        📞 (555) 123-4567
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        background: `radial-gradient(ellipse at center, ${BLUE} 0%, ${BLUE_DARK} 55%, #020d18 100%)`,
        padding: "4rem 1.5rem 5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderBottom: `6px solid ${RED}`,
        zIndex: 5,
        pointerEvents: "none",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-50%",
          background: `
            radial-gradient(circle at 25% 30%, rgba(255,255,255,0.06) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(255,200,100,0.08) 0%, transparent 45%),
            radial-gradient(circle at 50% 20%, rgba(255,215,0,0.05) 0%, transparent 40%)
          `,
          animation: "hero-glow 8s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 750, margin: "0 auto" }}>
        <span
          style={{
            display: "inline-block",
            background: GOLD,
            color: BLUE_DARK,
            fontWeight: 800,
            fontSize: "0.9rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "0.4rem 1.2rem",
            borderRadius: "2rem",
            marginBottom: "1.5rem",
            animation: "pulse-gold 2s ease-in-out infinite",
            boxShadow: "0 0 20px rgba(249,168,37,0.5)",
          }}
        >
          Open Seasonally
        </span>

        <h1
          id="hero-heading"
          style={{
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.03em",
            color: WHITE,
            textShadow: `3px 3px 0 ${RED}, 0 0 30px rgba(255,255,255,0.25)`,
            lineHeight: 1.1,
            marginBottom: "0.75rem",
          }}
        >
          Light Up the{" "}
          <span
            style={{
              color: GOLD,
              textShadow: `3px 3px 0 ${RED}, 0 0 40px rgba(249,168,37,0.7)`,
            }}
          >
            Sky
          </span>
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
            marginBottom: "0.5rem",
            letterSpacing: "0.02em",
          }}
        >
          All styles, sizes &amp; varieties of consumer fireworks.
        </p>
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.75)",
            marginBottom: "2rem",
            maxWidth: 500,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          From sparklers to grand finales — everything you need for an unforgettable celebration.
        </p>

        <Countdown />

        <div className="float-cta" style={{ display: "inline-block", pointerEvents: "all" }}>
          <a
            href="https://maps.google.com/?q=1234+Firecracker+Lane+Seguin+TX+78155"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: RED,
              color: WHITE,
              fontWeight: 900,
              fontSize: "1.2rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "1rem 2.5rem",
              borderRadius: "0.5rem",
              border: `3px solid ${WHITE}`,
              boxShadow: "0 8px 25px rgba(198,40,40,0.5)",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#e53935";
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 14px 35px rgba(198,40,40,0.7)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = RED;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 8px 25px rgba(198,40,40,0.5)";
            }}
          >
            Get Directions →
          </a>
        </div>

        <p
          className="sparkle-hint"
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.8rem",
            marginTop: "1.5rem",
            letterSpacing: "0.06em",
          }}
        >
          Click anywhere to light fireworks ✨
        </p>
      </div>
    </section>
  );
}

interface InfoCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
  delay?: number;
}

function InfoCard({ icon, title, children, delay = 0 }: InfoCardProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal info-card-border"
      style={{
        background: "#fff",
        borderRadius: "0.75rem",
        padding: "2rem 1.5rem",
        textAlign: "center",
        boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
        transition: "transform 0.3s, box-shadow 0.3s",
        transitionDelay: `${delay}ms`,
        pointerEvents: "all",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.14)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 6px 24px rgba(0,0,0,0.08)";
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: BLUE,
          fontSize: "1.8rem",
          marginBottom: "1rem",
          boxShadow: "0 4px 14px rgba(13,59,102,0.35)",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontWeight: 800,
          fontSize: "1.1rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: BLUE_DARK,
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h3>
      <div style={{ color: "#444", fontSize: "0.95rem", lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}

function InfoSection() {
  const headerRef = useScrollReveal<HTMLHeadingElement>();

  return (
    <section
      aria-labelledby="info-heading"
      style={{
        background: "#F5F0EB",
        padding: "4rem 1.5rem",
        position: "relative",
        zIndex: 5,
        pointerEvents: "all",
      }}
    >
      <h2
        ref={headerRef}
        id="info-heading"
        className="reveal"
        style={{
          textAlign: "center",
          fontWeight: 900,
          fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: BLUE_DARK,
          marginBottom: "2.5rem",
        }}
      >
        Come Visit Us
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <InfoCard icon="📍" title="Find Us" delay={0}>
          <p>1234 Firecracker Lane</p>
          <p>Seguin, TX 78155</p>
          <p style={{ marginTop: "0.75rem" }}>
            <a
              href="https://maps.google.com/?q=1234+Firecracker+Lane+Seguin+TX+78155"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: RED,
                fontWeight: 700,
                textDecoration: "underline",
                textUnderlineOffset: 3,
              }}
            >
              Open in Maps →
            </a>
          </p>
        </InfoCard>

        <InfoCard icon="🕐" title="Hours of Operation" delay={100}>
          <p>
            <strong>June 25 – July 4</strong>
          </p>
          <p style={{ marginTop: "0.4rem" }}>Mon–Fri: 10 AM – 9 PM</p>
          <p>Sat–Sun: 9 AM – 10 PM</p>
          <p style={{ marginTop: "0.4rem", color: RED, fontWeight: 700 }}>
            July 4th: 8 AM – Midnight
          </p>
        </InfoCard>

        <InfoCard icon="📞" title="Contact Us" delay={200}>
          <p>
            <strong>Phone: </strong>
            <a
              href="tel:+15551234567"
              style={{ color: RED, fontWeight: 700, textDecoration: "underline" }}
            >
              (555) 123-4567
            </a>
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Call for stock availability, bulk orders, or any questions!
          </p>
        </InfoCard>
      </div>
    </section>
  );
}

function ProductsSection() {
  const ref = useScrollReveal<HTMLDivElement>();

  const products = [
    { icon: "✨", name: "Sparklers", desc: "Safe fun for the whole family" },
    { icon: "🎆", name: "Aerial Shells", desc: "Big bursts lighting up the sky" },
    { icon: "🎇", name: "Roman Candles", desc: "Classic star-shooting favorites" },
    { icon: "🔥", name: "Ground Spinners", desc: "Colorful ground-level spectacles" },
    { icon: "💥", name: "Firecrackers", desc: "The classic pop and bang" },
    { icon: "🌟", name: "Grand Finales", desc: "Go out with a massive bang" },
  ];

  return (
    <section
      style={{
        background: BLUE_DARK,
        padding: "4rem 1.5rem",
        position: "relative",
        zIndex: 5,
        pointerEvents: "all",
        borderTop: `4px solid ${RED}`,
        borderBottom: `4px solid ${RED}`,
      }}
    >
      <div ref={ref} className="reveal" style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontWeight: 900,
            fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: WHITE,
            marginBottom: "0.5rem",
            textShadow: `2px 2px 0 ${RED}`,
          }}
        >
          What We Carry
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "2.5rem",
            fontSize: "1rem",
          }}
        >
          All styles. All sizes. All varieties.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
          }}
        >
          {products.map((p, i) => (
            <ProductCard key={p.name} {...p} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  icon,
  name,
  desc,
  delay,
}: {
  icon: string;
  name: string;
  desc: string;
  delay: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="reveal"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "0.75rem",
        padding: "1.5rem 1rem",
        textAlign: "center",
        transition: "background 0.3s, transform 0.3s, border-color 0.3s",
        transitionDelay: `${delay}ms`,
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(249,168,37,0.12)";
        el.style.borderColor = "rgba(249,168,37,0.4)";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "rgba(255,255,255,0.06)";
        el.style.borderColor = "rgba(255,255,255,0.1)";
        el.style.transform = "translateY(0)";
      }}
    >
      <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{icon}</div>
      <div
        style={{
          fontWeight: 800,
          fontSize: "1rem",
          color: GOLD,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          marginBottom: "0.3rem",
        }}
      >
        {name}
      </div>
      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>{desc}</div>
    </div>
  );
}

function SafetySection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      style={{
        background: "#F5F0EB",
        padding: "3.5rem 1.5rem",
        position: "relative",
        zIndex: 5,
        pointerEvents: "all",
      }}
    >
      <div ref={ref} className="reveal" style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.3rem, 3.5vw, 1.9rem)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: BLUE_DARK,
            marginBottom: "1rem",
          }}
        >
          Safety First
        </h2>
        <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
          Always follow Texas state safety guidelines when using consumer fireworks. Keep water
          nearby, never aim at people, and supervise children at all times.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "center",
          }}
        >
          {[
            "Keep water nearby",
            "Supervise children",
            "Never relight duds",
            "Follow local laws",
            "Use outdoors only",
          ].map((tip) => (
            <span
              key={tip}
              style={{
                background: BLUE_DARK,
                color: WHITE,
                fontSize: "0.8rem",
                fontWeight: 700,
                padding: "0.35rem 0.9rem",
                borderRadius: "2rem",
                letterSpacing: "0.04em",
              }}
            >
              {tip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: BLUE_DARK,
        color: "rgba(255,255,255,0.6)",
        textAlign: "center",
        padding: "2rem 1.5rem",
        fontSize: "0.85rem",
        letterSpacing: "0.03em",
        borderTop: `3px solid ${RED}`,
        position: "relative",
        zIndex: 5,
        pointerEvents: "all",
      }}
    >
      <div style={{ marginBottom: "0.5rem" }}>
        <span style={{ fontSize: "1.4rem" }}>🧨</span>
      </div>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <strong style={{ color: WHITE }}>Seguin Fireworks Stand</strong>. All rights reserved.
      </p>
      <p style={{ marginTop: "0.3rem" }}>Proudly serving the Seguin community.</p>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <InfoSection />
      <ProductsSection />
      <SafetySection />
      <Footer />
    </>
  );
}
