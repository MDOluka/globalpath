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
    const el = document.getElementById("contact");
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const subject = encodeURIComponent(`Interest in ${plan} plan`);
    const body = encodeURIComponent(
      `Hello GlobalPath team,\n\nI am interested in the ${plan} plan. Please contact me to proceed with setup and pricing. Thanks.`
    );
    window.location.href = `mailto:info@globalpath.net?subject=${subject}&body=${body}`;
  }

  function handleFooterConnect() {
    const subject = encodeURIComponent(`Inquiry about GlobalPath services`);
    const body = encodeURIComponent(
      `Hello GlobalPath team,\n\nI am interested in learning more about your plans and services. Please contact me. Thanks.`
    );
    window.location.href = `mailto:info@globalpath.net?subject=${subject}&body=${body}`;
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
              <img src="/logo.png" alt="GlobalPath Logo" style={{ width: 28, height: 28 }} />
            </div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>GlobalPath Network</div>
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

          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((s) => !s)}
            style={{ background: "transparent", border: "none", color: "#fff", fontSize: 22, display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 6, cursor: "pointer" }}
            className="md:hidden"
          >
            ☰
          </button>
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
      <section id="hero" style={{ paddingTop: 96, paddingBottom: 48, backgroundImage: 'url("/hero-internet.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-gradient" style={{ borderRadius: 18, padding: 28, color: "#fff" }}>
            <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
              <h1 style={{ fontSize: 38, lineHeight: 1.05, fontWeight: 800 }}>Enterprise Internet Connectivity</h1>
              <p style={{ marginTop: 14, fontSize: 16, color: "rgba(255,255,255,0.92)" }}>
                GlobalPath delivers fast, reliable fiber internet for homes, businesses, and enterprises across Uganda. Low latency, high uptime, and rapid support.
              </p>

              <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 22 }}>
                <button onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })} style={{ backgroundColor: AQUA, color: NAVY, padding: "10px 18px", borderRadius: 10, fontWeight: 800, border: "none", cursor: "pointer" }}>View Detailed Plans</button>
                <button onClick={handleFooterConnect} style={{ border: `2px solid ${AQUA}`, color: "#fff", padding: "10px 18px", borderRadius: 10, fontWeight: 700, background: "transparent", cursor: "pointer" }}>Talk to Sales</button>
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
              GlobalPath currently provides high-speed internet to key Ugandan cities: Lira, Gulu, Arua, Adjumani, Mbale, Jinja, and Soroti. Our fiber network is enterprise-grade, professionally installed, and scalable.
            </p>
            <div style={{ marginTop: 12, height: 220, backgroundColor: "#ffffff", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: NAVY }}>
              Coverage Map Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" style={{ padding: "48px 0", background: "#ffffff", color: NAVY }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 18 }}>Plans in Detail</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 18 }}>
            <PlanCard title="Blazing Speed" price="UGX 150,000" speed="15 Mbps" bullets={["Unlimited (shared)", "Quick install", "Email & phone support"]} onChoose={() => handleChoosePlan("Blazing Speed")} />
            <PlanCard title="Ultra Speed" price="UGX 250,000" speed="30 Mbps" bullets={["Higher shared bandwidth", "Priority support", "Best for small teams"]} onChoose={() => handleChoosePlan("Ultra Speed")} />
            <PlanCard title="Quantum Speed" price="UGX 350,000" speed="50 Mbps" bullets={["Top shared speeds", "Uptime assurance", "Recommended for streaming and conferencing"]} onChoose={() => handleChoosePlan("Quantum Speed")} />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" style={{ padding: "44px 0", backgroundColor: NAVY, color: "#fff" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 20 }}>Why Choose GlobalPath</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
            <FeatureCard text="Quick turnaround technical support: Our team resolves issues promptly to minimize downtime." />
            <FeatureCard text="Assured network uptime: Redundant infrastructure guarantees stable connectivity 24/7." />
            <FeatureCard text="Enterprise monitoring and SLA focus: Continuous monitoring ensures performance matches service agreements." />
            <FeatureCard text="Redundant and modern infrastructure: Fiber-optic backbone designed for scalability and reliability." />
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section id="sectors" style={{ padding: "44px 0", background: "#fff", color: NAVY }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 800, marginBottom: 18 }}>Who We Serve</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
            <SectorCard title="Hospitals" desc="Reliable connections for critical healthcare systems, EMRs, and telemedicine." />
            <SectorCard title="Banks" desc="Secure, fast networks for financial transactions and internal communication." />
            <SectorCard title="Government" desc="Scalable connectivity for offices, departments, and citizen services." />
            <SectorCard title="Schools & Universities" desc="Support e-learning, research, and campus operations with stable internet." />
            <SectorCard title="Homes" desc="Fast fiber for streaming, work-from-home, and everyday browsing." />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "44px 0", background: AQUA, color: NAVY }}>
        <div className="container" style={{ maxWidth: 980, textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>About GlobalPath</h2>
          <p style={{ marginBottom: 14, fontSize: 16, lineHeight: 1.6 }}>
            GlobalPath Network is a leading Ugandan Internet Service Provider delivering fast, reliable fiber solutions to homes, businesses, and institutions. Our mission is to connect communities with world-class internet, empowering productivity, education, and innovation.
          </p>
          <p style={{ marginBottom: 14, fontSize: 16, lineHeight: 1.6 }}>
            With a focus on transparent pricing, professional installation, and proactive support, GlobalPath ensures every client enjoys a seamless and secure internet experience. We leverage modern fiber-optic infrastructure with redundancy for uninterrupted connectivity.
          </p>
          <p style={{ marginBottom: 14, fontSize: 16, lineHeight: 1.6 }}>
            Whether you are a hospital, bank, university, government office, or home, our solutions are designed to meet your unique needs with high speed, low latency, and guaranteed reliability.
          </p>
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
        <div className="container" style={{ maxWidth: 900, textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 10 }}>Contact Us</h2>
          <p style={{ margin: 4 }}>Email: <a href="mailto:info@globalpath.net" style={{ color: AQUA }}>info@globalpath.net</a></p>
          <p style={{ margin: 4 }}>Phone: <a href="tel:+256393248554" style={{ color: AQUA }}>+256 393 248 554</a></p>
          <p style={{ margin: 8, color: "#dbe9ff" }}>Offices: Gulu — Airfield Road · Lira — Kanodiko Technology Park</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, fontSize: 20 }}>
            <a href="#" aria-label="Facebook" style={{ color: "#fff" }}><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" style={{ color: "#fff" }}><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" style={{ color: "#fff" }}><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram" style={{ color: "#fff" }}><FaInstagram /></a>
            <a href="#" aria-label="YouTube" style={{ color: "#fff" }}><FaYoutube /></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#07102a", color: "#cbd5e1", padding: "18px 0", textAlign: "center", fontSize: 14 }}>
        <div>© {new Date().getFullYear()} GlobalPath Network</div>
        <div style={{ color: "#9fb8d9", marginTop: 6 }}>
          Designed & Managed by GlobalPath IT Team
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/256393248554"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: 22,
          right: 22,
          backgroundColor: WHATSAPP,
          color: "#fff",
          width: 56,
          height: 56,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          fontSize: 28,
          cursor: "pointer",
          zIndex: 999,
        }}
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

// --- Subcomponents ---

function PlanCard({ title, price, speed, bullets, onChoose }) {
  return (
    <div className="card-hover" style={{ background: "#f1f5f9", borderRadius: 12, padding: 18, display: "flex", flexDirection: "column", gap: 10, cursor: "pointer" }}>
      <h3 style={{ fontSize: 20, fontWeight: 700 }}>{title}</h3>
      <p style={{ fontWeight: 600 }}>{speed}</p>
      <p style={{ fontWeight: 700, fontSize: 18 }}>{price}</p>
      <ul style={{ marginLeft: 18 }}>
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <button onClick={onChoose} className="plan-cta" style={{ marginTop: 12, padding: "8px 14px", borderRadius: 8, border: "none", fontWeight: 700, backgroundColor: AQUA, color: NAVY, cursor: "pointer" }}>Choose Plan</button>
    </div>
  );
}

function FeatureCard({ text }) {
  return (
    <div style={{ background: "#00264d", padding: 18, borderRadius: 12, color: "#fff", textAlign: "center", fontSize: 14 }}>
      {text}
    </div>
  );
}

function SectorCard({ title, desc }) {
  return (
    <div style={{ background: "#e0f7ff", padding: 16, borderRadius: 12, textAlign: "center" }}>
      <h4 style={{ fontWeight: 700, marginBottom: 6 }}>{title}</h4>
      <p style={{ fontSize: 14 }}>{desc}</p>
    </div>
  );
}