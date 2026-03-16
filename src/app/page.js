"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <main className="bg-white dark:bg-gray-900 dark:text-gray-200 transition-all">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full backdrop-blur bg-white/80 dark:bg-black/40 shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-900 dark:text-sky-400">Globalpath Network</h1>
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#services">Services</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#coverage">Coverage</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="flex gap-4 items-center">
            <button onClick={() => setDark(!dark)} className="text-xl">🌙</button>
            <button onClick={() => setMenu(!menu)} className="md:hidden text-2xl">☰</button>
          </div>
        </div>
        {menu && (
          <div className="flex flex-col p-4 gap-3 bg-white dark:bg-gray-800 md:hidden">
            <a href="#services">Services</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#coverage">Coverage</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-32 bg-gradient-to-br from-blue-900 via-sky-400 to-white text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl backdrop-blur-xl bg-white/10 p-12 rounded-xl shadow-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-blue-900 dark:text-white">
            Enterprise Internet Connectivity
          </h1>
          <p className="mt-6 text-lg text-gray-100 dark:text-gray-200">
            Quick turnaround fixes for technical support with assured uptime. GlobalPath delivers high-speed fiber infrastructure for homes, businesses, and enterprise networks.
          </p>
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <a href="#pricing" className="bg-blue-900 hover:bg-sky-400 transition px-6 py-3 rounded font-semibold text-white">View Plans</a>
            <a href="#contact" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-blue-900 transition">Talk to Sales</a>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          <Stat number="10k+" label="Customers" />
          <Stat number="99.9%" label="Network Uptime" />
          <Stat number="24/7" label="Support" />
          <Stat number="15+" label="Cities" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Solutions</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <Service title="Residential Internet" text="High-speed fiber designed for modern homes." />
          <Service title="Business Connectivity" text="Dedicated bandwidth for companies and enterprises." />
          <Service title="Infrastructure Deployment" text="Professional network infrastructure rollout." />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-gray-800 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose GlobalPath</h2>
          <div className="grid md:grid-cols-4 gap-10 text-center">
            <Feature text="Low Latency Fiber" />
            <Feature text="Redundant Infrastructure" />
            <Feature text="Enterprise Monitoring" />
            <Feature text="Rapid Deployment" />
          </div>
        </div>
      </section>

      {/* LOGO CLOUD */}
      <section className="py-20 text-center">
        <h3 className="text-gray-500 mb-8">Trusted by growing companies</h3>
        <div className="flex justify-center flex-wrap gap-8 opacity-70">
          <Logo name="TechCorp" />
          <Logo name="CloudNet" />
          <Logo name="DataGrid" />
          <Logo name="NetSystems" />
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Coverage</h2>
        <p className="max-w-xl mx-auto">Expanding fiber connectivity across major cities and growing regions.</p>
        <div className="mt-12 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">Coverage Map</div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Plans</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <Price name="Blazing Speed" price="150k UGX" speed="15 Mbps" />
          <Price name="Ultra Speed" price="250k UGX" speed="30 Mbps" />
          <Price name="Quantum Speed" price="350k UGX" speed="50 Mbps" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-16">Customer Reviews</h2>
        <div className="max-w-3xl mx-auto">
          <Testimonial />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-4xl font-bold">Ready to upgrade your connectivity?</h2>
        <a href="#contact" className="inline-block mt-8 bg-sky-400 text-blue-900 px-8 py-3 rounded font-semibold hover:bg-white transition">Get Connected</a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mt-6">Email: support@globalpath.net</p>
        <p>Phone: +256700000000</p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a href="mailto:support@globalpath.net" className="inline-block bg-blue-900 text-white px-6 py-3 rounded hover:bg-sky-400 transition">Send Email</a>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a href="https://wa.me/256700000000" className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-400 transition">
        WhatsApp
      </a>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">© {new Date().getFullYear()} GlobalPath</footer>
    </main>
  );
}

/* COMPONENTS */

function Service({ title, text }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="p-8 border rounded-lg hover:shadow-lg">
      <h3 className="font-bold text-xl mb-4">{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
}

function Feature({ text }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-700 shadow rounded p-6">{text}</motion.div>
  );
}

function Price({ name, price, speed }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="border rounded-lg p-8 text-center hover:shadow-xl">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-3xl font-bold my-4">{price}</p>
      <p className="mb-6">{speed}</p>
      <button className="bg-blue-900 hover:bg-sky-400 text-white px-6 py-2 rounded transition font-semibold">Choose Plan</button>
    </motion.div>
  );
}

function Stat({ number, label }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h3 className="text-4xl font-bold text-blue-900 dark:text-sky-400">{number}</h3>
      <p className="mt-2">{label}</p>
    </motion.div>
  );
}

function Logo({ name }) {
  return <div className="text-lg font-semibold">{name}</div>;
}

function Testimonial() {
  const testimonials = [
    { name: "James K", text: "GlobalPath transformed our connectivity." },
    { name: "Sarah L", text: "Extremely reliable speeds and excellent support." },
    { name: "David O", text: "Best ISP infrastructure we've used in years." }
  ];

  const [i, setI] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setI((i + 1) % testimonials.length), 4000);
    return () => clearInterval(interval);
  }, [i]);

  return (
    <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white dark:bg-gray-700 shadow p-8 rounded text-center">
      <p className="italic">"{testimonials[i].text}"</p>
      <p className="mt-4 font-semibold">{testimonials[i].name}</p>
    </motion.div>
  );
}