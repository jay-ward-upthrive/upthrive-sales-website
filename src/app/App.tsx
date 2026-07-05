import { motion, useInView } from "motion/react";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight, CheckCircle, TrendingUp, Phone, Star,
  ChevronDown, Menu, X, Shield, Globe, BarChart2,
  Calendar, Target, Search, MousePointer, Zap, Layers,
  MapPin, MessageSquare
} from "lucide-react";

// ─── Animation variants ────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

// ─── Navbar ────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Process", "Results", "FAQ"];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000100]/92 backdrop-blur-md border-b border-[#EFE9B8]/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display text-[1.6rem] font-black text-[#EFE9B8] tracking-tighter leading-none">
          UP<span className="text-[#F57B05]">THRIVE</span>
        </span>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[13px] font-medium text-[#EFE9B8]/60 hover:text-[#EFE9B8] transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#F57B05] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#F57B05]/90 transition-all hover:scale-[1.03]"
        >
          Book a Call <ArrowRight size={13} />
        </a>

        <button className="md:hidden text-[#EFE9B8]" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#000100] border-t border-[#EFE9B8]/8 px-6 py-5 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#EFE9B8]/70 hover:text-[#EFE9B8]"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#F57B05] text-white px-5 py-3 rounded-full text-sm font-semibold"
          >
            Book a Call <ArrowRight size={13} />
          </a>
        </motion.div>
      )}
    </nav>
  );
}

// ─── Hero Visual Scene ─────────────────────────────────────────────────────
function HeroScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 bg-[#F57B05]/10 rounded-full blur-3xl" />
      </div>

      {/* Browser window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-72 bg-[#111108] rounded-2xl border border-[#EFE9B8]/10 shadow-2xl overflow-hidden"
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a06] border-b border-[#EFE9B8]/6">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#DB3D4D]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F57B05]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#02694C]/70" />
          </div>
          <div className="flex-1 bg-[#EFE9B8]/5 rounded-full px-3 py-1 font-mono-label text-[9px] text-[#EFE9B8]/25">
            yourinsuranceagency.com
          </div>
        </div>

        {/* Website mockup content */}
        <div className="p-5 space-y-3">
          <div className="h-2.5 bg-[#F57B05]/70 rounded-full w-3/5" />
          <div className="h-1.5 bg-[#EFE9B8]/12 rounded-full w-full" />
          <div className="h-1.5 bg-[#EFE9B8]/8 rounded-full w-4/5" />
          <div className="mt-5 h-9 bg-[#F57B05] rounded-xl flex items-center justify-center w-40">
            <div className="h-1.5 bg-white/50 rounded-full w-20" />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-14 rounded-xl border border-[#EFE9B8]/6"
                style={{ background: "rgba(239,233,184,0.03)" }}
              />
            ))}
          </div>
          <div className="space-y-2 mt-1">
            <div className="h-1.5 bg-[#EFE9B8]/6 rounded-full w-full" />
            <div className="h-1.5 bg-[#EFE9B8]/6 rounded-full w-5/6" />
            <div className="h-1.5 bg-[#EFE9B8]/4 rounded-full w-3/4" />
          </div>
        </div>
      </motion.div>

      {/* Floating card — Lead received */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1.0 }}
        style={{ top: "10%", right: "-14%", position: "absolute" }}
      >
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-[#02694C] text-white rounded-2xl px-4 py-3 shadow-2xl border border-[#02694C]/50 w-44"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
              <Phone size={10} />
            </div>
            <span className="text-[11px] font-semibold">New Lead</span>
          </div>
          <div className="text-[10px] text-white/65 leading-snug">
            Marcus T. wants a quote
          </div>
          <div className="mt-2 font-mono-label text-[9px] text-white/40">Just now</div>
        </motion.div>
      </motion.div>

      {/* Floating card — Call booked */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1.3 }}
        style={{ bottom: "8%", left: "-12%", position: "absolute" }}
      >
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="bg-[#382A51] text-[#EFE9B8] rounded-2xl px-4 py-3 shadow-2xl border border-[#EFE9B8]/10 w-44"
        >
          <div className="flex items-center gap-2 mb-1.5">
            <Calendar size={12} className="text-[#F57B05]" />
            <span className="text-[11px] font-semibold">Call Booked</span>
          </div>
          <div className="text-[10px] text-[#EFE9B8]/55">Thu 2 pm · Sarah K.</div>
          <div className="mt-2 flex gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={8} className="text-[#F57B05] fill-[#F57B05]" />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Floating badge — Google rank */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        style={{ top: "45%", right: "-18%", position: "absolute" }}
      >
        <motion.div
          animate={{ y: [-4, 6, -4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="bg-[#0578C6] text-white rounded-2xl px-4 py-3 shadow-xl border border-[#0578C6]/30"
        >
          <div className="text-[11px] font-semibold mb-0.5">Rank #1</div>
          <div className="text-[10px] text-white/60">Google Local</div>
          <TrendingUp size={14} className="mt-1.5 text-white/80" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#000100] flex items-center overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[32rem] h-[32rem] bg-[#382A51]/25 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-[#F57B05]/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#EFE9B8 1px, transparent 1px), linear-gradient(90deg, #EFE9B8 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Left — copy */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-[#F57B05]/10 border border-[#F57B05]/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F57B05] animate-pulse" />
            <span className="font-mono-label text-[11px] text-[#F57B05] uppercase tracking-widest">
              Built for insurance agents
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display font-black text-[#EFE9B8] leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)" }}
          >
            YOUR SITE<br />
            SHOULD<br />
            <span className="text-[#F57B05]">SELL.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-[#EFE9B8]/55 leading-relaxed mb-8 max-w-md"
          >
            Upthrive builds SEO-first websites for insurance agents that turn
            visitors into booked calls. No fluff. No templates. Just results.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#F57B05] text-white px-8 py-4 rounded-full font-semibold text-[15px] hover:bg-[#F57B05]/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Free Call <ArrowRight size={15} />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 border border-[#EFE9B8]/18 text-[#EFE9B8]/60 px-8 py-4 rounded-full font-medium text-[15px] hover:border-[#EFE9B8]/35 hover:text-[#EFE9B8] transition-all"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-5">
            <div className="flex -space-x-2">
              {(["#F57B05", "#0578C6", "#02694C", "#382A51"] as const).map(
                (c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#000100] flex items-center justify-center text-[11px] font-bold text-white"
                    style={{ backgroundColor: c }}
                  >
                    {["M", "S", "J", "A"][i]}
                  </div>
                )
              )}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={11} className="text-[#F57B05] fill-[#F57B05]" />
                ))}
              </div>
              <p className="font-mono-label text-[10px] text-[#EFE9B8]/35 mt-0.5">
                347+ agents served
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — animated scene */}
        <div className="hidden md:block relative h-[480px] lg:h-[560px]">
          <HeroScene />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-[#EFE9B8]/25" size={22} />
      </motion.div>
    </section>
  );
}

// ─── Problem Section ───────────────────────────────────────────────────────
function ProblemSection() {
  const problems = [
    {
      stat: "73%",
      label: "of visitors leave in under 10 seconds",
      note: "if your site looks outdated or slow.",
      color: "#DB3D4D",
    },
    {
      stat: "42%",
      label: "of leads book with the first agent they trust",
      note: "online. Is that you?",
      color: "#F57B05",
    },
    {
      stat: "$0",
      label: "return from traffic that never converts",
      note: "Your site is leaking revenue every day.",
      color: "#382A51",
    },
  ];

  return (
    <section className="bg-[#EFE9B8] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono-label text-[11px] uppercase tracking-[0.22em] text-[#000100]/38 mb-5"
          >
            The problem
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-black text-[#000100] leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            A WEAK WEBSITE<br />IS COSTING YOU.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-5"
        >
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-3xl p-9 border border-black/6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div
                className="font-display font-black leading-none mb-4"
                style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", color: p.color }}
              >
                {p.stat}
              </div>
              <p className="font-semibold text-[#000100] text-lg leading-snug mb-2">
                {p.label}
              </p>
              <p className="text-[#000100]/45 text-sm">{p.note}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.5 }}
          className="text-center mt-12 text-[#000100]/45 text-base font-medium"
        >
          The good news? It's fixable. Fast.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Solution Section ──────────────────────────────────────────────────────
function SolutionSection() {
  const flow = [
    { icon: <Search size={17} />, label: "Visitors find you on Google", color: "#0578C6" },
    { icon: <Globe size={17} />, label: "Your site earns trust instantly", color: "#382A51" },
    { icon: <MousePointer size={17} />, label: "They click, fill a form, or call", color: "#F57B05" },
    { icon: <Phone size={17} />, label: "A booked call lands in your calendar", color: "#02694C" },
  ];

  return (
    <section className="bg-[#000100] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left */}
          <div>
            <motion.p
              variants={fadeUp}
              className="font-mono-label text-[11px] uppercase tracking-[0.22em] text-[#F57B05]/65 mb-5"
            >
              The solution
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-black text-[#EFE9B8] leading-[0.9] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)" }}
            >
              TURN TRAFFIC<br />INTO BOOKED<br />
              <span className="text-[#F57B05]">CALLS.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#EFE9B8]/55 leading-relaxed mb-8 text-[15px]"
            >
              We build a complete digital sales system — not just a pretty site.
              Every element is engineered to build trust, capture leads, and get
              potential clients to call you.
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3">
              {[
                "SEO that puts you on page one, locally",
                "Landing pages that convert at 3× the industry average",
                "Lead capture that works while you sleep",
                "Trust signals that close before you even speak",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-[#EFE9B8]/75 text-[15px]"
                >
                  <CheckCircle
                    size={15}
                    className="text-[#02694C] flex-shrink-0 mt-0.5"
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right — flow diagram */}
          <div className="flex flex-col gap-3">
            {flow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.13, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center gap-4 bg-[#EFE9B8]/4 border border-[#EFE9B8]/8 rounded-2xl px-6 py-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                  style={{ backgroundColor: step.color }}
                >
                  {step.icon}
                </div>
                <span className="text-[#EFE9B8] font-medium text-[15px]">
                  {step.label}
                </span>
                <span className="ml-auto font-mono-label text-[10px] text-[#EFE9B8]/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < flow.length - 1 && (
                  <div className="absolute left-9 -bottom-3 w-px h-3 bg-[#EFE9B8]/10" />
                )}
              </motion.div>
            ))}

            {/* Result */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 bg-[#02694C] rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle size={18} />
                <span className="font-semibold text-[15px]">Revenue generated.</span>
              </div>
              <p className="text-white/65 text-sm">
                Your website becomes your best-performing salesperson.
              </p>
              <div
                className="font-display font-black mt-4 leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
              >
                +2.8× leads
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Process Section ───────────────────────────────────────────────────────
function ProcessSection() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We learn your market, competition, and goals. No guesswork — we come in prepared.", icon: <Target size={19} /> },
    { num: "02", title: "Strategy", desc: "We map your full digital system from search intent to booked call.", icon: <BarChart2 size={19} /> },
    { num: "03", title: "Build", desc: "We design and develop your site with conversion baked into every element.", icon: <Layers size={19} /> },
    { num: "04", title: "Launch", desc: "Go live in 2–3 weeks. SEO-optimized and indexed from day one.", icon: <Zap size={19} /> },
    { num: "05", title: "Grow", desc: "Ongoing optimization, ranking improvements, and support as you scale.", icon: <TrendingUp size={19} /> },
  ];

  return (
    <section className="bg-[#382A51] py-24 md:py-36" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono-label text-[11px] uppercase tracking-[0.22em] text-[#F57B05]/75 mb-5"
          >
            How it works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-black text-[#EFE9B8] leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            FROM ZERO TO<br />
            <span className="text-[#F57B05]">REVENUE-READY.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 relative"
        >
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 inset-x-0 h-px bg-[#EFE9B8]/8 pointer-events-none" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col"
            >
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#000100] border border-[#EFE9B8]/10 flex flex-col items-center justify-center mb-5 flex-shrink-0">
                <span className="font-mono-label text-[9px] text-[#F57B05] mb-1">
                  {step.num}
                </span>
                <span className="text-[#EFE9B8]/65">{step.icon}</span>
              </div>
              <h3 className="font-display font-black text-[#EFE9B8] text-xl mb-2">
                {step.title}
              </h3>
              <p className="text-[#EFE9B8]/45 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services Section ──────────────────────────────────────────────────────
function ServicesSection() {
  const services = [
    { icon: <Globe size={21} />, title: "SEO-First Website", desc: "Built to rank and convert. Every page optimized from day one, no retrofitting needed.", color: "#0578C6" },
    { icon: <MapPin size={21} />, title: "Local SEO Strategy", desc: "Dominate Google Maps and local results in your target market and surrounding areas.", color: "#F57B05" },
    { icon: <Star size={21} />, title: "Review Generation", desc: "Systematic, automated review collection that builds credibility and boosts local rankings.", color: "#02694C" },
    { icon: <Target size={21} />, title: "Lead Capture Funnels", desc: "Smart forms, quote tools, and call scheduling that capture leads around the clock.", color: "#382A51" },
    { icon: <Search size={21} />, title: "Google Business Profile", desc: "Complete GMB setup and ongoing optimization for maximum local pack visibility.", color: "#DB3D4D" },
    { icon: <Shield size={21} />, title: "Ongoing Optimization", desc: "Monthly performance reviews, content improvements, and ranking updates.", color: "#F57B05" },
  ];

  return (
    <section className="bg-[#EFE9B8] py-24 md:py-36" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono-label text-[11px] uppercase tracking-[0.22em] text-[#000100]/35 mb-5"
          >
            Services
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              variants={fadeUp}
              className="font-display font-black text-[#000100] leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              WHAT WE<br />BUILD FOR YOU.
            </motion.h2>
            <motion.a
              variants={fadeUp}
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#000100] text-[#EFE9B8] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#000100]/80 transition-all self-start shrink-0"
            >
              Get started <ArrowRight size={13} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.22 }}
              className="bg-white rounded-3xl p-8 border border-black/6 group cursor-default"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white flex-shrink-0"
                style={{ backgroundColor: s.color }}
              >
                {s.icon}
              </div>
              <h3 className="font-display font-black text-[#000100] text-xl mb-3">
                {s.title}
              </h3>
              <p className="text-[#000100]/50 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Animated stat counter ─────────────────────────────────────────────────
function Stat({
  value,
  prefix = "",
  suffix = "",
  label,
  color,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = value / (1800 / 16);
    const id = setInterval(() => {
      cur += step;
      if (cur >= value) {
        setCount(value);
        clearInterval(id);
      } else {
        setCount(Math.floor(cur));
      }
    }, 16);
    return () => clearInterval(id);
  }, [inView, value]);

  const formatted =
    value >= 1000 ? count.toLocaleString("en-US") : String(count);

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-display font-black leading-none mb-2"
        style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", color }}
      >
        {prefix}
        {formatted}
        {suffix}
      </div>
      <p className="text-[#EFE9B8]/45 text-sm">{label}</p>
    </div>
  );
}

// ─── Proof Section ─────────────────────────────────────────────────────────
function ProofSection() {
  const testimonials = [
    {
      quote:
        "I went from 3 leads a month to 19. My website was dead before Upthrive. Now it works harder than I do.",
      name: "Marcus T.",
      role: "Independent Life Insurance Agent",
      location: "Atlanta, GA",
      initials: "MT",
      avatarColor: "#F57B05",
    },
    {
      quote:
        "Within 60 days of launch I ranked #1 for my local area. My phone doesn't stop ringing. Best investment I've made.",
      name: "Sarah Kim",
      role: "Health & Medicare Specialist",
      location: "Phoenix, AZ",
      initials: "SK",
      avatarColor: "#0578C6",
    },
  ];

  return (
    <section className="bg-[#000100] py-24 md:py-36" id="results">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono-label text-[11px] uppercase tracking-[0.22em] text-[#F57B05]/65 mb-5"
          >
            Results
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-black text-[#EFE9B8] leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
          >
            THE NUMBERS<br />
            <span className="text-[#F57B05]">DON'T LIE.</span>
          </motion.h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 border-y border-[#EFE9B8]/8 py-16 mb-16"
        >
          <motion.div variants={fadeIn}>
            <Stat value={347} suffix="+" label="Insurance agents served" color="#F57B05" />
          </motion.div>
          <motion.div variants={fadeIn}>
            <Stat value={280} suffix="%" label="Average lead increase" color="#02694C" />
          </motion.div>
          <motion.div variants={fadeIn}>
            <Stat value={18400} prefix="$" suffix="+" label="Avg. revenue added — Year 1" color="#0578C6" />
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[#EFE9B8]/4 border border-[#EFE9B8]/8 rounded-3xl p-8"
            >
              <div className="flex gap-0.5 mb-5">
                {[0, 1, 2, 3, 4].map((j) => (
                  <Star key={j} size={13} className="text-[#F57B05] fill-[#F57B05]" />
                ))}
              </div>
              <p className="text-[#EFE9B8]/80 text-lg leading-relaxed mb-7 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[#EFE9B8] font-semibold text-sm">
                    {t.name}
                  </div>
                  <div className="text-[#EFE9B8]/38 text-xs">
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── FAQ Section ───────────────────────────────────────────────────────────
function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "What makes Upthrive different from other web agencies?",
      a: "We specialize in insurance agents only. We know your compliance requirements, your buyers, and your competitive landscape. Every site we build is a conversion system — not just a design project.",
    },
    {
      q: "How long does it take to launch my website?",
      a: "Most sites go live in 2–3 weeks. We move fast without cutting corners. You'll have a fully optimized, revenue-ready site in under a month.",
    },
    {
      q: "Do I need any technical knowledge?",
      a: "None at all. We handle everything — design, development, SEO setup, Google Business Profile, and launch. You focus on serving clients; we handle the digital infrastructure.",
    },
    {
      q: "What if I already have a website?",
      a: "We audit your current site for free. If it's underperforming, we'll show you exactly why and fix it. If it's already working well, we'll tell you that too.",
    },
    {
      q: "How do you get me ranking on Google?",
      a: "We build every site with on-page SEO baked in — correct structure, keyword targeting, local signals, and solid technical foundations. We also set up and optimize your Google Business Profile for local pack visibility.",
    },
    {
      q: "What happens after launch?",
      a: "Ongoing clients receive monthly performance reports, SEO updates, content additions, and technical maintenance. Your site keeps improving after launch — that's when the compounding really starts.",
    },
  ];

  return (
    <section className="bg-[#EFE9B8] py-24 md:py-36" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono-label text-[11px] uppercase tracking-[0.22em] text-[#000100]/35 mb-5"
          >
            FAQ
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-black text-[#000100] leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
          >
            GOT QUESTIONS?<br />WE GOT ANSWERS.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-2.5"
        >
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeUp}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full text-left bg-white rounded-2xl px-6 py-5 border border-black/6 hover:border-black/12 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-[#000100] text-sm md:text-[15px] leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={17}
                    className={`text-[#000100]/35 flex-shrink-0 transition-transform duration-200 ${
                      openIdx === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIdx === i && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="text-[#000100]/55 text-sm leading-relaxed mt-4 pr-6"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA Section ───────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="bg-[#000100] py-24 md:py-36" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-[#F57B05]/10 border border-[#F57B05]/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F57B05] animate-pulse" />
            <span className="font-mono-label text-[11px] text-[#F57B05] uppercase tracking-widest">
              Your next client is searching right now
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display font-black text-[#EFE9B8] leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            MAKE YOUR SITE<br />DO THE<br />
            <span className="text-[#F57B05]">HEAVY LIFTING.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#EFE9B8]/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Book a free 30-minute strategy call. We'll audit your digital
            presence and show you exactly what it's costing you.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="mailto:hello@upthrive.com"
              className="inline-flex items-center gap-3 bg-[#F57B05] text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-[#F57B05]/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Free Strategy Call
              <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-[#EFE9B8]/20 text-sm mt-6"
          >
            No commitment. No pitch. Just clarity.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#000100] border-t border-[#EFE9B8]/8 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-[1.5rem] font-black text-[#EFE9B8] tracking-tighter leading-none">
          UP<span className="text-[#F57B05]">THRIVE</span>
        </span>
        <p className="font-mono-label text-[11px] text-[#EFE9B8]/25 text-center">
          © 2024 Upthrive. Built to rank. Designed to convert.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-[#EFE9B8]/28 hover:text-[#EFE9B8]/55 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { display: none; }
        * { scrollbar-width: none; }
      `}</style>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <ServicesSection />
        <ProofSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
