"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

/**
 * Final single-file production-quality page.js
 * - Navy dominant (#001f54), Aqua accent (#00cfff), White
 * - WhatsApp uses brand green (#25D366)
 * - Testimonials auto-rotate
 * - Choose Plan button opens mail client and scrolls to contact
 *
 * Paste into src/app/page.js and run dev/build.
 */

const NAVY = "#001f54";
const AQUA = "#00cfff";
const WHATSAPP = "#25D366";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const testimonials = [
    { name: "James K", text: "GlobalPath transformed our connectivity." },
    { name: "Sarah L", text: "Extremely reliable speeds and excellent support." },
    { name: "David O", text: "Best ISP infrastructure we have used in years." },
  ];

  const [tIndex, setTIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTIndex((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  function handleChoosePlan(plan) {
    setSelectedPlan(plan);
    // scroll to contact
    const el = document.getElementById("contact");
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // open mail client with prefilled subject and body
    const subject = encodeURIComponent(`Interest in ${plan} plan`);
    const body = encodeURIComponent(
      `Hello GlobalPath team,I am interested in the ${plan} plan. Please contact me to proceed with setup and pricing. Thanks.`
    );
    // Use mailto - that will open default mail app
    window.location.href = `mailto:info@globalpathnetwork.net?subject=${subject}&body=${body}`;
  }

  return (
    <div style={{ backgroundColor: "#ffffff", color: NAVY, minHeight: "100vh" }}>
      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-gradient {
          background: linear-gradient(90deg, ${NAVY} 0%, #003366 30%, ${AQUA} 60%);
          background-size: 300% 300%;
          animation: gradient-x 12s ease infinite;
        }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 18px 30px rgba(2,6,23,0.14); }
        .plan-cta:hover { transform: translateY(-3px); }
        .container { max-width: 1200px; margin-left: auto; margin-right: auto; padding-left: 1rem; padding-right: 1rem; }
      `}</style>

      {/* NAVBAR */}
      <header style={{ backgroundColor: NAVY }} className="w-full fixed top-0 left-0 right-0 z-50">
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div aria-hidden style={{ width: 44, height: 44, borderRadius: 8, background: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill={NAVY} xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zm11-5v10h-2V7h2z" />
              </svg>
            </div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>Globalpath Network</div>
          </div>

          <nav className="hidden md:flex" style={{ gap: 22, alignItems: "center" }}>
            <a href="#hero" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
            <a href="#packages" style={{ color: "#fff", textDecoration: "none" }}>Packages</a>
            <a href="#coverage" style={{ color: "#fff", textDecoration: "none" }}>Coverage</a>
            <a href="#why-us" style={{ color: "#fff", textDecoration: "none" }}>Why Us</a>
            <a href="#sectors" style={{ color: "#fff", textDecoration: "none" }}>Sectors</a>
            <a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About</a>
            <a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="#contact"
              style={{
                backgroundColor: AQUA,
                color: NAVY,
                padding: "8px 14px",
                borderRadius: 8,
                fontWeight: 700,
                textDecoration: "none",
                display: "none",
              }}
              className="md:inline-block"
            >
              Get Connected
            </a>

            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((s) => !s)}
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: 22,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 6,
                cursor: "pointer",
              }}
              className="md:hidden"
            >
              ☰
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ backgroundColor: NAVY, padding: "12px 1rem" }} className="md:hidden">
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href="#hero" onClick={() => setMenuOpen(false)} style={{ color: "#fff" }}>Home</a>
              <a href="#packages" onClick={() => setMenuOpen(false)} style={{ color: "#fff" }}>Packages</a>
              <a href="#coverage" onClick={() => setMenuOpen(false)} style={{ color: "#fff" }}>Coverage</a>
              <a href="#why-us" onClick={() => setMenuOpen(false)} style={{ color: "#fff" }}>Why Us</a>
              <a href="#sectors" onClick={() => setMenuOpen(false)} style={{ color: "#fff" }}>Sectors</a>
              <a href="#about" onClick={() => setMenuOpen(false)} style={{ color: "#fff" }}>About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} style={{ color: "#fff" }}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" style={{ paddingTop: 96, paddingBottom: 48 }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-gradient"
            style={{
              borderRadius: 18,
              padding: 28,
              boxShadow: "0 18px 40px rgba(2,6,23,0.12)",
              color: "#fff",
            }}
          >
            <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
              <h1 style={{ fontSize: 38, lineHeight: 1.05, fontWeight: 800 }}>Enterprise Internet Connectivity</h1>
              <p style={{ marginTop: 14, fontSize: 16, color: "rgba(255,255,255,0.92)" }}>
                GlobalPath delivers fast, reliable fiber internet for homes, businesses and enterprises across Uganda.
                We prioritize low latency, uptime and rapid support so your people and systems keep running.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 12, marginTop: 22 }}>
                <SnapshotCard name="Blazing Speed" price="UGX 150,000" speed="15 Mbps" />
                <SnapshotCard name="Ultra Speed" price="UGX 250,000" speed="30 Mbps" />
                <SnapshotCard name="Quantum Speed" price="UGX 350,000" speed="50 Mbps" />
              </div>

              <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 22 }}>
                <a
                  href="#packages"
                  style={{
                    backgroundColor: AQUA,
                    color: NAVY,
                    padding: "10px 18px",
                    borderRadius: 10,
                    fontWeight: 800,
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                  className="plan-cta"
                >
                  View Detailed Plans
                </a>

                <a
                  href="#contact"
                  style={{
                    border: `2px solid ${AQUA}`,
                    color: "#fff",
                    padding: "10px 18px",
                    borderRadius: 10,
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Talk to Sales
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" style={{ padding: "44px 0" }}>
        <div className="container">
          <div style={{ backgroundColor: AQUA, color: NAVY, borderRadius: 12, padding: 22 }}>
            <h2 style={{ textAlign: "center", fontSize: 26, fontWeight: 800 }}>Coverage</h2>
            <p style={{ textAlign: "center", maxWidth: 920, margin: "8px auto 14px", color: NAVY }}>
              We currently provide high-speed internet to major Ugandan regions including Gulu and Lira.
              Our fiber network is growing rapidly and offers enterprise-grade connectivity with professional installation and support.
            </p>

            <div style={{ marginTop: 12, height: 220, backgroundColor: "#ffffff", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: NAVY }}>
              Coverage map placeholder
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES IN DETAIL */}
      <section id="packages" style={{ padding: "48px 0", background: "#ffffff", color: NAVY }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 18 }}>Plans in Detail</h2>
          <p style={{ textAlign: "center", color: "#4a4a4a", marginBottom: 20, maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
            Choose the package that fits your needs. All plans include professional installation options and 24/7 technical support.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 18 }}>
            <PlanCard
              title="Blazing Speed"
              price="UGX 150,000"
              speed="15 Mbps"
              bullets={["Unlimited (shared)", "Quick install", "Email & phone support"]}
              onChoose={() => handleChoosePlan("Blazing Speed")}
            />
            <PlanCard
              title="Ultra Speed"
              price="UGX 250,000"
              speed="30 Mbps"
              bullets={["Higher shared bandwidth", "Priority support", "Best for small teams"]}
              onChoose={() => handleChoosePlan("Ultra Speed")}
            />
            <PlanCard
              title="Quantum Speed"
              price="UGX 350,000"
              speed="50 Mbps"
              bullets={["Top shared speeds", "Uptime assurance", "Recommended for streaming and conferencing"]}
              onChoose={() => handleChoosePlan("Quantum Speed")}
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" style={{ padding: "44px 0", backgroundColor: NAVY, color: "#fff" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 20 }}>Why Choose GlobalPath</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
            <FeatureCard text="Quick turnaround technical support" />
            <FeatureCard text="Assured network uptime" />
            <FeatureCard text="Enterprise monitoring and SLA focus" />
            <FeatureCard text="Redundant and modern infrastructure" />
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" style={{ padding: "44px 0", background: "#fff", color: NAVY }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 18 }}>Sectors We Serve</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
            <SectorCard title="Residential" desc="Reliable fiber for homes, streaming and remote work." />
            <SectorCard title="Business" desc="Dedicated bandwidth for offices and SMEs." />
            <SectorCard title="Enterprise and Government" desc="Scalable, secure solutions for large organizations." />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "44px 0", background: AQUA, color: NAVY }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 12 }}>About GlobalPath</h2>
          <p style={{ textAlign: "center", marginBottom: 14 }}>
            GlobalPath Network is a Ugandan Internet Service Provider focused on delivering fast, reliable fiber solutions.
            We are committed to transparent pricing, professional installation, and excellent customer service.
          </p>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 8 }}>
            <div style={{ width: 84, height: 84, background: "#fff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>
              Logo
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: "44px 0", background: "#fff", color: NAVY }}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: 18, fontSize: 28, fontWeight: 800 }}>Customer Reviews</h2>

          <motion.div key={tIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div style={{ background: AQUA, color: NAVY, padding: 20, borderRadius: 12, maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
              <p style={{ fontStyle: "italic" }}>{testimonials[tIndex].text}</p>
              <p style={{ marginTop: 10, fontWeight: 700 }}>— {testimonials[tIndex].name}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "44px 0", background: NAVY, color: "#fff" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 10 }}>Contact Us</h2>

          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <p style={{ margin: 4 }}>Email: <a href="mailto:info@globalpathnetwork.net" style={{ color: AQUA }}>info@globalpath.net</a></p>
            <p style={{ margin: 4 }}>Phone: <a href="tel:+256393248554" style={{ color: AQUA }}>+256 393 248 554</a></p>
            <p style={{ margin: 8, color: "#dbe9ff" }}>Offices: Gulu — Airfield Road · Lira — Kanodiko Technology Park</p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, fontSize: 20 }}>
            <a href="#" aria-label="Facebook" style={{ color: "#fff" }}><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" style={{ color: "#fff" }}><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" style={{ color: "#fff" }}><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram" style={{ color: "#fff" }}><FaInstagram /></a>
            <a href="#" aria-label="YouTube" style={{ color: "#fff" }}><FaYoutube /></a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "28px 0", backgroundColor: NAVY, color: "#fff" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: 22, fontWeight: 800 }}>Ready to upgrade your connectivity?</h3>
          <a href="#contact" style={{ display: "inline-block", marginTop: 12, backgroundColor: AQUA, color: NAVY, padding: "10px 18px", borderRadius: 10, fontWeight: 800, textDecoration: "none" }}>
            Get Connected
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#07102a", color: "#cbd5e1", padding: "18px 0" }}>
        <div className="container" style={{ textAlign: "center", fontSize: 14 }}>
          <div>© {new Date().getFullYear()} Globalpath Network</div>
          <div style={{ color: "#9fb8d9", marginTop: 6 }}>Licensed ISP — delivering reliable fiber connectivity across Uganda</div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/256393248554"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        style={{
          position: "fixed",
          right: 18,
          bottom: 18,
          backgroundColor: WHATSAPP,
          color: "#fff",
          padding: "12px 14px",
          borderRadius: 999,
          boxShadow: "0 8px 20px rgba(37,211,102,0.24)",
          zIndex: 60,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
        }}
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

/* ------------------ Small UI components ------------------ */

function SnapshotCard({ name, price, speed }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.06)", padding: 12, borderRadius: 10, textAlign: "center" }}>
      <div style={{ fontWeight: 700 }}>{name}</div>
      <div style={{ marginTop: 6, fontSize: 14 }}>{speed}</div>
      <div style={{ marginTop: 8, fontWeight: 800 }}>{price}</div>
    </div>
  );
}

function PlanCard({ title, price, speed, bullets = [], onChoose }) {
  return (
    <motion.div whileHover={{ translateY: -6 }} style={{ background: "#fff", borderRadius: 12, padding: 18, boxShadow: "0 8px 20px rgba(2,6,23,0.06)" }}>
      <h3 style={{ color: "#001f54", fontSize: 18, fontWeight: 800 }}>{title}</h3>
      <div style={{ fontSize: 22, fontWeight: 900, margin: "10px 0", color: "#001f54" }}>{price}</div>
      <div style={{ color: "#374151", marginBottom: 10 }}>{speed}</div>
      <ul style={{ color: "#4b5563", marginBottom: 12 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ marginTop: 6 }}>• {b}</li>
        ))}
      </ul>

      <button
        onClick={onChoose}
        style={{
          width: "100%",
          backgroundColor: AQUA,
          color: NAVY,
          padding: "10px 12px",
          borderRadius: 8,
          fontWeight: 800,
          cursor: "pointer",
          border: "none",
        }}
        aria-label={`Choose ${title}`}
      >
        Choose Plan
      </button>
    </motion.div>
  );
}

function FeatureCard({ text }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} style={{ background: "#fff", color: NAVY, borderRadius: 10, padding: 16, textAlign: "center", fontWeight: 700 }}>
      {text}
    </motion.div>
  );
}

function SectorCard({ title, desc }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} style={{ background: "#fff", color: NAVY, borderRadius: 10, padding: 16 }}>
      <h4 style={{ fontWeight: 800, marginBottom: 8 }}>{title}</h4>
      <div style={{ color: "#475569" }}>{desc}</div>
    </motion.div>
  );
}