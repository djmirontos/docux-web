"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence, type Variants } from "framer-motion";
import {
  Moon, Sun, ArrowDown, Scan, Brain, FolderOpen, Bell,
  Search, CloudUpload, MessageCircle, Copy, Lock,
  Camera, Sparkles, Check, X, HelpCircle, ChevronDown,
  Shield, Zap, Star, ArrowRight, FileText, CreditCard,
  Plane, Receipt
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
};

function useInViewAnimate(threshold = 0.15) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

const GooglePlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M3.18 23.76c.29.16.62.24.96.24.4 0 .8-.11 1.16-.33l13.1-7.57-2.89-2.89L3.18 23.76z" fill="#EA4335"/>
    <path d="M21.54 9.64l-2.14-1.24-3.23 3.23 3.23 3.23 2.17-1.25c.62-.36 1-.99 1-1.98s-.41-1.63-1.03-1.99z" fill="#FBBC04"/>
    <path d="M2.22.49C2.08.7 2 .96 2 1.26v21.48c0 .3.08.56.22.77l.09.08 12.03-12.03v-.28L2.31.4l-.09.09z" fill="#4285F4"/>
    <path d="M16.34 8.16L13.27 5.1 4.3.33C3.94.11 3.54 0 3.14 0c-.34 0-.67.08-.96.24l12.33 12.33 1.83-1.83-.09-.09-.91-.49z" fill="#34A853"/>
  </svg>
);

const LogoMark = ({ small }: { small?: boolean }) => (
  <div style={{ display: "flex", gap: 2, alignItems: "flex-end", height: small ? 22 : 28 }}>
    <div style={{ width: small ? 5 : 6, height: small ? 22 : 28, borderRadius: 2, background: "var(--mint)" }} />
    <div style={{ width: small ? 5 : 6, height: small ? 16 : 20, borderRadius: 2, background: "var(--purple)" }} />
    <div style={{ width: small ? 5 : 6, height: small ? 19 : 24, borderRadius: 2, background: "var(--blue)" }} />
  </div>
);

const GlowCard = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{
    background: "var(--card)",
    borderRadius: 20,
    border: "0.5px solid var(--border)",
    padding: "20px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    backdropFilter: "blur(12px)",
    ...style
  }}>{children}</div>
);

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      borderBottom: "0.5px solid var(--border)",
      overflow: "hidden",
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", display: "flex", justifyContent: "space-between",
        alignItems: "center", padding: "20px 0", background: "transparent",
        border: "none", cursor: "pointer", color: "var(--foreground)", textAlign: "left",
      }}>
        <span style={{ fontSize: 15, fontWeight: 500 }}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={18} style={{ color: "var(--foreground-muted)", flexShrink: 0 }} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div style={{ fontSize: 14, color: "var(--foreground-secondary)", lineHeight: 1.75, paddingBottom: 20 }}>{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LandingPage() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("docux-theme");
    if (saved === "dark") { setDark(true); document.documentElement.classList.add("dark"); }
    else if (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches) { setDark(true); document.documentElement.classList.add("dark"); }
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) { document.documentElement.classList.add("dark"); localStorage.setItem("docux-theme", "dark"); }
    else { document.documentElement.classList.remove("dark"); localStorage.setItem("docux-theme", "light"); }
  };

  const hero = useInViewAnimate(0.1);
  const trust = useInViewAnimate();
  const social = useInViewAnimate();
  const feat1 = useInViewAnimate();
  const feat2 = useInViewAnimate();
  const feat3 = useInViewAnimate();
  const feat4 = useInViewAnimate();
  const hiw = useInViewAnimate();
  const showcase = useInViewAnimate();
  const pricing = useInViewAnimate();
  const faqSection = useInViewAnimate();
  const cta = useInViewAnimate();

  const faqs = [
    { q: "Is DocuX really free?", a: "Yes. The free tier includes unlimited offline scanning, 5 AI-classified documents, 15 AI chat messages per month, and 10 cloud backup records. DocuX Pro removes all limits for $2.99/month or $19.99/year." },
    { q: "Does DocuX work without internet?", a: "Core OCR scanning works 100% offline using ML Kit on-device — no internet needed, no data leaves your phone. AI classification and cloud backup require an internet connection." },
    { q: "What kinds of documents can DocuX scan?", a: "Passports, national IDs, driver licences, seaman books, STCW certificates, employment contracts, receipts, invoices, boarding passes, utility bills, insurance cards, bank statements, and more." },
    { q: "Is my data safe and private?", a: "Scanned images are stored locally by default. Cloud backup syncs to Supabase with Google Sign-In authentication. AI classification sends only OCR text — never your images — to DeepSeek or Claude for processing." },
    { q: "How does AI classification work?", a: "After OCR extracts text, DocuX sends it to DeepSeek (primary) or Claude (backup) to identify document type, extract fields like names and dates, and assign a confidence score. The whole process takes a few seconds." },
    { q: "How do expiry reminders work?", a: "When DocuX detects an expiry date, it automatically schedules push notifications at 90, 30, and 7 days before — plus a reminder on the day. No manual setup needed." },
    { q: "Can I cancel DocuX Pro?", a: "Yes. DocuX Pro is a Google Play subscription — cancel anytime through your Google Play subscriptions page. You keep Pro access until the end of your billing period." },
    { q: "Is DocuX available on iOS?", a: "DocuX is currently Android-only, available on Google Play. An iOS version is not on the roadmap at this time." },
  ];

  const sectionLabel = (text: string) => (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontSize: 11, fontWeight: 600, color: "var(--purple-dark)",
      background: "var(--purple-bg)", padding: "4px 12px",
      borderRadius: 20, marginBottom: 16, letterSpacing: "0.06em",
      textTransform: "uppercase", border: "0.5px solid rgba(124,58,237,0.2)",
    }}>{text}</div>
  );

  return (
    <div style={{ background: "var(--background)", color: "var(--foreground)", minHeight: "100vh", fontFamily: "var(--font-geist-sans), Arial, sans-serif", overflowX: "hidden" }}>

      {/* GLOBAL STYLES */}
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes pulse-glow { 0%,100%{box-shadow:0 0 0 0 rgba(124,58,237,0.15)} 50%{box-shadow:0 0 0 12px rgba(124,58,237,0)} }
        .float { animation: float 4s ease-in-out infinite; }
        .float2 { animation: float2 3s ease-in-out infinite 0.5s; }
        .float3 { animation: float2 5s ease-in-out infinite 1s; }
        .nav-link:hover { color: var(--foreground) !important; }
        .btn-primary:hover { opacity: 0.92; transform: translateY(-1px); }
        .btn-ghost:hover { background: var(--purple-bg) !important; border-color: var(--purple) !important; color: var(--purple-dark) !important; }
        .feat-card:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,0,0,0.1) !important; }
        .price-card:hover { transform: translateY(-2px); }
        * { transition: background 0.2s, color 0.2s, border-color 0.2s; }
        .btn-primary, .btn-ghost, .feat-card, .price-card { transition: all 0.2s ease !important; }
      `}</style>

      {/* NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 40px", height: 60,
        background: scrolled ? "var(--nav)" : "transparent",
        borderBottom: scrolled ? "0.5px solid var(--border)" : "none",
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LogoMark />
          <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em" }}>DocuX</span>
        </div>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {[["Features", "#features"], ["How it works", "#how-it-works"], ["Pricing", "#pricing"], ["FAQ", "#faq"]].map(([label, href]) => (
            <a key={href} href={href} className="nav-link" style={{ fontSize: 13, color: "var(--foreground-secondary)", textDecoration: "none", fontWeight: 500 }}>{label}</a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={toggleDark} aria-label="Toggle dark mode" style={{
            background: "transparent", border: "0.5px solid var(--border-strong)",
            borderRadius: "50%", width: 34, height: 34, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--foreground)",
          }}>
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a href="#" className="btn-primary" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--mint)", color: "#fff",
            padding: "9px 18px", borderRadius: 22, fontSize: 13, fontWeight: 600,
            textDecoration: "none", boxShadow: "0 2px 12px rgba(52,211,153,0.3)",
          }}>
            <GooglePlayIcon /> Download free
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 60 }}>
        {/* BG blobs */}
        <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "30%", right: "5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "30%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", width: "100%" }}>
          {/* LEFT */}
          <motion.div ref={hero.ref} variants={stagger} initial="hidden" animate={hero.inView ? "visible" : "hidden"}>
            <motion.div variants={fadeUp}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "var(--purple-bg)", color: "var(--purple-dark)",
                fontSize: 12, fontWeight: 600, padding: "6px 14px",
                borderRadius: 20, marginBottom: 24,
                border: "0.5px solid rgba(124,58,237,0.25)",
                boxShadow: "0 2px 8px rgba(124,58,237,0.1)",
              }}>
                <Sparkles size={13} /> AI-Powered Document Intelligence
              </div>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{
              fontSize: 52, fontWeight: 700, lineHeight: 1.1,
              letterSpacing: "-0.03em", marginBottom: 20,
            }}>
              Stop Losing<br />
              <span style={{
                background: "linear-gradient(135deg, var(--purple-dark), var(--mint-dark))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Important</span><br />
              Documents
            </motion.h1>

            <motion.p variants={fadeUp} style={{
              fontSize: 17, color: "var(--foreground-secondary)",
              lineHeight: 1.7, marginBottom: 28, maxWidth: 460,
            }}>
              Scan, organize, search and protect passports, IDs, contracts, receipts and certificates — all in one intelligent document vault.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {[
                { icon: <Zap size={14} />, text: "Works 100% offline — no internet needed" },
                { icon: <Brain size={14} />, text: "AI-powered organization with DeepSeek + Claude" },
                { icon: <Bell size={14} />, text: "Automatic expiry reminders for all your documents" },
                { icon: <Shield size={14} />, text: "Secure cloud backup via Google Sign-In" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--foreground-secondary)" }}>
                  <div style={{ color: "var(--mint-dark)", flexShrink: 0 }}>{item.icon}</div>
                  {item.text}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 20 }}>
              <a href="#" className="btn-primary" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #7C3AED, #34D399)",
                color: "#fff", padding: "14px 26px", borderRadius: 28,
                fontSize: 15, fontWeight: 600, textDecoration: "none",
                boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
              }}>
                <GooglePlayIcon /> Download Free
              </a>
              <a href="#how-it-works" className="btn-ghost" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: "var(--foreground)",
                border: "0.5px solid var(--border-strong)",
                padding: "14px 26px", borderRadius: 28,
                fontSize: 15, fontWeight: 600, textDecoration: "none",
              }}>
                <ArrowDown size={15} /> See how it works
              </a>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex" }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} style={{ color: "#F59E0B", fill: "#F59E0B" }} />)}
              </div>
              <span style={{ fontSize: 13, color: "var(--foreground-secondary)" }}>Loved by early users · No account required · Android only</span>
            </motion.div>
          </motion.div>

          {/* RIGHT — floating mockup */}
          <div style={{ position: "relative", height: 560, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Main phone */}
            <motion.div
              className="float"
              initial={{ opacity: 0, y: 30 }}
              animate={hero.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                background: "#1a1a2e", borderRadius: 40, padding: 10,
                border: "0.5px solid rgba(255,255,255,0.12)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.3), 0 0 0 0.5px rgba(255,255,255,0.05)",
                width: 220, zIndex: 2, position: "relative",
              }}
            >
              <img src="/screenshots/dashboard.png" alt="DocuX dashboard" style={{ width: "100%", borderRadius: 32, display: "block" }} />
            </motion.div>

            {/* Floating card: Expiry */}
            <motion.div
              className="float2"
              initial={{ opacity: 0, x: 30 }}
              animate={hero.inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{
                position: "absolute", top: "12%", right: "2%",
                background: "var(--card)", borderRadius: 16,
                border: "0.5px solid var(--border)",
                padding: "12px 16px", zIndex: 3,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                backdropFilter: "blur(12px)", minWidth: 160,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Bell size={14} style={{ color: "#D97706" }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--foreground)" }}>Expiry Alert</span>
              </div>
              <div style={{ fontSize: 11, color: "var(--foreground-secondary)" }}>Seaman&apos;s Book</div>
              <div style={{ fontSize: 11, color: "#D97706", fontWeight: 500, marginTop: 2 }}>Expires in 64 days</div>
            </motion.div>

            {/* Floating card: AI */}
            <motion.div
              className="float3"
              initial={{ opacity: 0, x: -30 }}
              animate={hero.inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              style={{
                position: "absolute", bottom: "18%", left: "0%",
                background: "var(--card)", borderRadius: 16,
                border: "0.5px solid var(--border)",
                padding: "12px 16px", zIndex: 3,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                backdropFilter: "blur(12px)", minWidth: 170,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--purple-bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Brain size={14} style={{ color: "var(--purple-dark)" }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--foreground)" }}>AI Classified</span>
              </div>
              <div style={{ fontSize: 11, color: "var(--foreground-secondary)" }}>Passport · 94% confidence</div>
              <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
                <span style={{ fontSize: 10, background: "var(--mint-bg)", color: "var(--mint-dark)", padding: "2px 7px", borderRadius: 10, fontWeight: 500 }}>Valid</span>
                <span style={{ fontSize: 10, background: "var(--purple-bg)", color: "var(--purple-dark)", padding: "2px 7px", borderRadius: 10, fontWeight: 500 }}>Travel</span>
              </div>
            </motion.div>

            {/* Floating card: Search */}
            <motion.div
              className="float2"
              initial={{ opacity: 0, y: -20 }}
              animate={hero.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.9 }}
              style={{
                position: "absolute", top: "4%", left: "4%",
                background: "var(--card)", borderRadius: 14,
                border: "0.5px solid var(--border)",
                padding: "10px 14px", zIndex: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Search size={13} style={{ color: "var(--foreground-muted)" }} />
                <span style={{ fontSize: 12, color: "var(--foreground-secondary)" }}>Search documents...</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <motion.section
        ref={trust.ref}
        variants={stagger}
        initial="hidden"
        animate={trust.inView ? "visible" : "hidden"}
        style={{ background: "var(--card)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 40px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {[
            { icon: <Zap size={20} />, color: "var(--mint-dark)", bg: "var(--mint-bg)", num: "100% Offline", label: "Nothing leaves your device" },
            { icon: <Brain size={20} />, color: "var(--purple-dark)", bg: "var(--purple-bg)", num: "AI-Powered", label: "DeepSeek + Claude powered" },
            { icon: <CloudUpload size={20} />, color: "var(--blue-dark)", bg: "var(--blue-bg)", num: "Cloud Backup", label: "Google Sign-In sync" },
            { icon: <Shield size={20} />, color: "var(--indigo-dark)", bg: "var(--indigo-bg)", num: "Privacy First", label: "Your data stays yours" },
          ].map((s, i) => (
            <motion.div key={i} variants={fadeUp} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: s.bg, color: s.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 3 }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "var(--foreground-muted)" }}>{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SOCIAL PROOF */}
      <motion.section
        ref={social.ref}
        variants={stagger}
        initial="hidden"
        animate={social.inView ? "visible" : "hidden"}
        style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 40px" }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
          {sectionLabel("Trusted For")}
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Trusted for important documents</h2>
          <p style={{ fontSize: 16, color: "var(--foreground-secondary)", maxWidth: 480, margin: "0 auto" }}>From government IDs to professional certificates — DocuX handles documents that matter.</p>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {[
            { icon: <Plane size={24} />, color: "var(--blue-dark)", bg: "var(--blue-bg)", title: "Passports & Travel", desc: "Track expiry dates automatically. Never get caught with an expired passport again." },
            { icon: <FileText size={24} />, color: "var(--purple-dark)", bg: "var(--purple-bg)", title: "Professional Certificates", desc: "STCW, licences, and credentials — always know when renewals are due." },
            { icon: <Receipt size={24} />, color: "var(--mint-dark)", bg: "var(--mint-bg)", title: "Receipts & Expenses", desc: "Find any receipt instantly. Search by brand, amount, or date." },
            { icon: <CreditCard size={24} />, color: "var(--indigo-dark)", bg: "var(--indigo-bg)", title: "IDs & Cards", desc: "Driver licences, national IDs, insurance cards — all in one secure vault." },
          ].map((c, i) => (
            <motion.div key={i} variants={fadeUp} className="feat-card" style={{
              background: "var(--card)", borderRadius: 20,
              border: "0.5px solid var(--border)", padding: 24,
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: c.bg, color: c.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>{c.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: "var(--foreground-secondary)", lineHeight: 1.6 }}>{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FEATURE 1: AI CLASSIFICATION */}
      <section id="features" style={{ background: "var(--card)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}>
        <motion.div
          ref={feat1.ref}
          variants={stagger}
          initial="hidden"
          animate={feat1.inView ? "visible" : "hidden"}
          style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
        >
          <motion.div variants={fadeUp}>
            {sectionLabel("AI Classification")}
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.2 }}>Your documents,<br />understood instantly</h2>
            <p style={{ fontSize: 16, color: "var(--foreground-secondary)", lineHeight: 1.7, marginBottom: 32 }}>
              DocuX uses DeepSeek AI with Claude as backup to read and understand every document you scan — automatically.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: <Check size={15} />, title: "Extracts names, dates, and document numbers", desc: "No manual input needed — ever." },
                { icon: <Check size={15} />, title: "Detects expiry dates automatically", desc: "Schedules reminders the moment it classifies." },
                { icon: <Check size={15} />, title: "Identifies 20+ document types", desc: "Passports, certificates, receipts, contracts and more." },
                { icon: <Check size={15} />, title: "Shows AI confidence score", desc: "Know exactly how certain the AI is about each document." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 24, height: 24, borderRadius: 8, background: "var(--mint-bg)", color: "var(--mint-dark)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: "var(--foreground-secondary)" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div style={{ background: "#1a1a2e", borderRadius: 20, padding: 8, border: "0.5px solid rgba(255,255,255,0.08)", boxShadow: "0 24px 64px rgba(0,0,0,0.2)" }}>
              <img src="/screenshots/tablet-documents.png" alt="AI document classification" style={{ width: "100%", borderRadius: 14, display: "block" }} />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURE 2: ASK DOCUX AI */}
      <motion.section
        ref={feat2.ref}
        variants={stagger}
        initial="hidden"
        animate={feat2.inView ? "visible" : "hidden"}
        style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
      >
        <motion.div variants={fadeUp}>
          <div style={{ background: "#1a1a2e", borderRadius: 36, padding: 10, border: "0.5px solid rgba(255,255,255,0.08)", boxShadow: "0 24px 64px rgba(0,0,0,0.15)", maxWidth: 280, margin: "0 auto" }}>
            <img src="/screenshots/chat.png" alt="Ask DocuX AI" style={{ width: "100%", borderRadius: 28, display: "block" }} />
          </div>
        </motion.div>
        <motion.div variants={fadeUp}>
          {sectionLabel("Ask DocuX AI")}
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.2 }}>Chat with your<br />document library</h2>
          <p style={{ fontSize: 16, color: "var(--foreground-secondary)", lineHeight: 1.7, marginBottom: 32 }}>
            Instead of searching manually, just ask. DocuX AI knows every document in your library.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            {[
              "What receipts do I have from March?",
              "Which passport expires soonest?",
              "Show me all travel documents.",
              "What is my Seaman's Book number?",
            ].map((q, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "var(--card)", borderRadius: 12,
                border: "0.5px solid var(--border)", padding: "10px 14px",
              }}>
                <MessageCircle size={14} style={{ color: "var(--purple-dark)", flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "var(--foreground-secondary)", fontStyle: "italic" }}>&quot;{q}&quot;</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: "var(--foreground-muted)" }}>15 free messages/month · Unlimited with Pro</div>
        </motion.div>
      </motion.section>

      {/* FEATURE 3: SMART SEARCH */}
      <section style={{ background: "var(--card)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}>
        <motion.div
          ref={feat3.ref}
          variants={stagger}
          initial="hidden"
          animate={feat3.inView ? "visible" : "hidden"}
          style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
        >
          <motion.div variants={fadeUp}>
            {sectionLabel("Smart Search")}
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.2 }}>Find anything<br />in seconds</h2>
            <p style={{ fontSize: 16, color: "var(--foreground-secondary)", lineHeight: 1.7, marginBottom: 32 }}>
              Fuse.js-powered fuzzy search across all your document text, names, brands, and dates — even partial matches work.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["passport", "employment contract", "SM Store receipt", "STCW certificate"].map((term, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: "var(--background)", borderRadius: 12,
                  border: "0.5px solid var(--border)", padding: "12px 16px",
                }}>
                  <Search size={14} style={{ color: "var(--foreground-muted)", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "var(--foreground)", flex: 1 }}>{term}</span>
                  <span style={{ fontSize: 11, color: "var(--mint-dark)", fontWeight: 500, background: "var(--mint-bg)", padding: "2px 8px", borderRadius: 10 }}>Found</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div style={{ background: "#1a1a2e", borderRadius: 20, padding: 8, border: "0.5px solid rgba(255,255,255,0.08)", boxShadow: "0 24px 64px rgba(0,0,0,0.2)" }}>
              <img src="/screenshots/tablet-dashboard.png" alt="Smart search" style={{ width: "100%", borderRadius: 14, display: "block" }} />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURE 4: EXPIRY TRACKING */}
      <motion.section
        ref={feat4.ref}
        variants={stagger}
        initial="hidden"
        animate={feat4.inView ? "visible" : "hidden"}
        style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 40px" }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
          {sectionLabel("Expiry Tracking")}
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Never miss an expiry date</h2>
          <p style={{ fontSize: 16, color: "var(--foreground-secondary)", maxWidth: 480, margin: "0 auto" }}>
            DocuX automatically schedules smart reminders the moment it detects an expiry date on any document.
          </p>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {[
            { days: "90 days", color: "var(--blue-dark)", bg: "var(--blue-bg)", border: "rgba(96,165,250,0.3)", label: "Early warning", desc: "Plan renewals well in advance without rushing." },
            { days: "30 days", color: "var(--mint-dark)", bg: "var(--mint-bg)", border: "rgba(52,211,153,0.3)", label: "Action time", desc: "Start the renewal process with plenty of time." },
            { days: "7 days", color: "#D97706", bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.3)", label: "Urgent", desc: "Final reminder — act now before it's too late." },
            { days: "Today", color: "#E11D48", bg: "rgba(244,63,94,0.1)", border: "rgba(244,63,94,0.3)", label: "Expired", desc: "Immediate alert when a document expires today." },
          ].map((r, i) => (
            <motion.div key={i} variants={fadeUp} style={{
              background: "var(--card)", borderRadius: 20,
              border: `1px solid ${r.border}`,
              padding: 24, textAlign: "center",
              boxShadow: `0 4px 20px ${r.border}`,
            }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: r.color, marginBottom: 6 }}>{r.days}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: r.color, background: r.bg, padding: "3px 10px", borderRadius: 20, display: "inline-block", marginBottom: 12 }}>{r.label}</div>
              <div style={{ fontSize: 13, color: "var(--foreground-secondary)", lineHeight: 1.6 }}>{r.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ background: "var(--card)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}>
        <motion.div
          ref={hiw.ref}
          variants={stagger}
          initial="hidden"
          animate={hiw.inView ? "visible" : "hidden"}
          style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 40px" }}
        >
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
            {sectionLabel("How It Works")}
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>From photo to organised in seconds</h2>
            <p style={{ fontSize: 16, color: "var(--foreground-secondary)", maxWidth: 480, margin: "0 auto" }}>Tap the + button, pick your document — DocuX handles the rest.</p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, position: "relative" }}>
            <div style={{ position: "absolute", top: 28, left: "12.5%", right: "12.5%", height: 1, background: "linear-gradient(90deg, var(--mint), var(--purple))", opacity: 0.3, zIndex: 0 }} />
            {[
              { n: "01", icon: <Camera size={22} />, color: "var(--mint-dark)", bg: "var(--mint-bg)", title: "Scan or import", desc: "Tap + and take a photo or pick from your gallery. No account needed to start." },
              { n: "02", icon: <Scan size={22} />, color: "var(--blue-dark)", bg: "var(--blue-bg)", title: "OCR reads it", desc: "ML Kit extracts all text on-device instantly. Nothing leaves your phone at this stage." },
              { n: "03", icon: <Brain size={22} />, color: "var(--purple-dark)", bg: "var(--purple-bg)", title: "AI classifies", desc: "DeepSeek or Claude identifies the type, extracts fields, and assigns a confidence score." },
              { n: "04", icon: <Sparkles size={22} />, color: "#D97706", bg: "rgba(245,158,11,0.1)", title: "Auto-organised", desc: "Lands in the right collection, reminders set, everything searchable — automatically." },
            ].map((s, i) => (
              <motion.div key={i} variants={fadeUp} style={{ padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: s.bg, color: s.color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>{s.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: s.color, letterSpacing: "0.08em", marginBottom: 8 }}>{s.n}</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: "var(--foreground-secondary)", lineHeight: 1.6 }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* APP SHOWCASE */}
      <motion.section
        ref={showcase.ref}
        variants={stagger}
        initial="hidden"
        animate={showcase.inView ? "visible" : "hidden"}
        style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 40px" }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
          {sectionLabel("App Showcase")}
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Built for every screen</h2>
          <p style={{ fontSize: 16, color: "var(--foreground-secondary)", maxWidth: 480, margin: "0 auto" }}>The same powerful AI organization, optimized for phones and tablets.</p>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 20, alignItems: "end" }}>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <GlowCard>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, color: "var(--purple-dark)" }}>📱 Phone</div>
              <div style={{ fontSize: 12, color: "var(--foreground-secondary)" }}>Optimised for one-hand use with bottom navigation and a central + FAB button.</div>
            </GlowCard>
            <GlowCard>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, color: "var(--mint-dark)" }}>📟 Tablet</div>
              <div style={{ fontSize: 12, color: "var(--foreground-secondary)" }}>Sidebar navigation with master-detail layout for power users managing large libraries.</div>
            </GlowCard>
            <GlowCard>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4, color: "var(--blue-dark)" }}>🌙 Dark Mode</div>
              <div style={{ fontSize: 12, color: "var(--foreground-secondary)" }}>System, light, or dark — toggle anytime from settings. Beautiful in all modes.</div>
            </GlowCard>
          </motion.div>
          <motion.div variants={fadeUp} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ background: "#1a1a2e", borderRadius: 20, padding: 8, border: "0.5px solid rgba(255,255,255,0.08)", boxShadow: "0 16px 48px rgba(0,0,0,0.2)" }}>
              <img src="/screenshots/tablet-dashboard.png" alt="Tablet view" style={{ width: "100%", borderRadius: 14, display: "block" }} />
            </div>
            <div style={{ background: "#1a1a2e", borderRadius: 20, padding: 8, border: "0.5px solid rgba(255,255,255,0.08)", boxShadow: "0 16px 48px rgba(0,0,0,0.2)" }}>
              <img src="/screenshots/tablet-documents.png" alt="Documents view" style={{ width: "100%", borderRadius: 14, display: "block" }} />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* PRICING */}
      <section id="pricing" style={{ background: "var(--card)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}>
        <motion.div
          ref={pricing.ref}
          variants={stagger}
          initial="hidden"
          animate={pricing.inView ? "visible" : "hidden"}
          style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 40px" }}
        >
          <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
            {sectionLabel("Pricing")}
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Simple, honest pricing</h2>
            <p style={{ fontSize: 16, color: "var(--foreground-secondary)" }}>Start free. Upgrade when you need more. Cancel anytime via Google Play.</p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 760, margin: "0 auto 48px" }}>
            {/* Free */}
            <motion.div variants={fadeUp} className="price-card" style={{
              background: "var(--background)", borderRadius: 24,
              border: "0.5px solid var(--border)", padding: 32,
            }}>
              <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>Free</div>
              <div style={{ fontSize: 42, fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 2 }}>$0</div>
              <div style={{ fontSize: 13, color: "var(--foreground-muted)", marginBottom: 24 }}>forever</div>
              {["5 AI-processed documents (lifetime)", "15 AI chat messages per month", "10 backup and restore records", "Unlimited offline OCR scanning", "Smart collections and expiry alerts"].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--foreground)", marginBottom: 10, alignItems: "center" }}>
                  <Check size={14} style={{ color: "var(--mint)", flexShrink: 0 }} />{f}
                </div>
              ))}
              {["Unlimited AI processing", "Unlimited cloud backup"].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--foreground-muted)", marginBottom: 10, alignItems: "center" }}>
                  <X size={14} style={{ flexShrink: 0 }} />{f}
                </div>
              ))}
              <a href="#" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                marginTop: 24, padding: "13px", borderRadius: 24, fontSize: 14, fontWeight: 600,
                border: "0.5px solid var(--border-strong)", color: "var(--foreground)",
                textDecoration: "none",
              }}>
                <GooglePlayIcon /> Download free
              </a>
            </motion.div>
            {/* Pro */}
            <motion.div variants={fadeUp} className="price-card" style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.06), rgba(52,211,153,0.06))",
              borderRadius: 24,
              border: "2px solid var(--mint)",
              padding: 32,
              boxShadow: "0 0 0 1px rgba(52,211,153,0.1), 0 8px 32px rgba(52,211,153,0.1)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                <div style={{ fontSize: 18, fontWeight: 600 }}>DocuX Pro</div>
                <div style={{ fontSize: 11, fontWeight: 600, background: "var(--mint)", color: "#fff", padding: "3px 10px", borderRadius: 20 }}>Most popular</div>
              </div>
              <div style={{ fontSize: 42, fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 2 }}>$2.99</div>
              <div style={{ fontSize: 13, color: "var(--foreground-muted)", marginBottom: 24 }}>per month · or $19.99/year <span style={{ color: "var(--mint-dark)", fontWeight: 600 }}>save 44%</span></div>
              {["Unlimited AI document processing", "Unlimited AI chat messages", "Unlimited cloud backup and restore", "All free features included", "Priority support", "Early access to new features"].map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 10, fontSize: 13, color: "var(--foreground)", marginBottom: 10, alignItems: "center" }}>
                  <Check size={14} style={{ color: "var(--mint)", flexShrink: 0 }} />{f}
                </div>
              ))}
              <a href="#" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                marginTop: 24, padding: "13px", borderRadius: 24, fontSize: 14, fontWeight: 600,
                background: "linear-gradient(135deg, #7C3AED, #34D399)",
                color: "#fff", border: "none", textDecoration: "none",
                boxShadow: "0 4px 20px rgba(124,58,237,0.25)",
              }}>
                <ArrowRight size={15} /> Get DocuX Pro
              </a>
            </motion.div>
          </div>

          {/* Value props */}
          <motion.div variants={fadeUp} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, maxWidth: 760, margin: "0 auto" }}>
            {[
              { icon: <Search size={16} />, text: "Save hours searching for documents" },
              { icon: <Bell size={16} />, text: "Never miss an expiry date again" },
              { icon: <Shield size={16} />, text: "Protect your most important records" },
            ].map((v, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--foreground-secondary)", background: "var(--background)", borderRadius: 12, padding: "12px 16px", border: "0.5px solid var(--border)" }}>
                <div style={{ color: "var(--purple-dark)", flexShrink: 0 }}>{v.icon}</div>
                {v.text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <motion.section
        id="faq"
        ref={faqSection.ref}
        variants={stagger}
        initial="hidden"
        animate={faqSection.inView ? "visible" : "hidden"}
        style={{ maxWidth: 760, margin: "0 auto", padding: "96px 40px" }}
      >
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: 56 }}>
          {sectionLabel("FAQ")}
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Common questions</h2>
          <p style={{ fontSize: 16, color: "var(--foreground-secondary)" }}>Everything you need to know before downloading.</p>
        </motion.div>
        <motion.div variants={fadeUp}>
          {faqs.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
        </motion.div>
        <motion.div variants={fadeUp} style={{ textAlign: "center", marginTop: 40 }}>
          <p style={{ fontSize: 14, color: "var(--foreground-secondary)", marginBottom: 12 }}>Still have questions?</p>
          <a href="mailto:support@docux.online" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 14, fontWeight: 600, color: "var(--purple-dark)",
            textDecoration: "none", background: "var(--purple-bg)",
            padding: "10px 20px", borderRadius: 20,
            border: "0.5px solid rgba(124,58,237,0.2)",
          }}>
            <MessageCircle size={15} /> Contact Support
          </a>
        </motion.div>
      </motion.section>

      {/* FINAL CTA */}
      <section style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(52,211,153,0.06))", borderTop: "0.5px solid var(--border)" }}>
        <motion.div
          ref={cta.ref}
          variants={stagger}
          initial="hidden"
          animate={cta.inView ? "visible" : "hidden"}
          style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 40px", textAlign: "center" }}
        >
          <motion.div variants={fadeUp}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "var(--purple-bg)", color: "var(--purple-dark)",
              fontSize: 12, fontWeight: 600, padding: "6px 14px",
              borderRadius: 20, marginBottom: 24,
              border: "0.5px solid rgba(124,58,237,0.25)",
            }}>
              <Sparkles size={13} /> Free to download · No account required
            </div>
            <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 16, lineHeight: 1.1 }}>
              Your documents deserve<br />
              <span style={{ background: "linear-gradient(135deg, var(--purple-dark), var(--mint-dark))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                better than folders
              </span>
            </h2>
            <p style={{ fontSize: 18, color: "var(--foreground-secondary)", marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
              Join early users organizing their important documents with AI.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#" className="btn-primary" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "linear-gradient(135deg, #7C3AED, #34D399)",
                color: "#fff", padding: "16px 32px", borderRadius: 32,
                fontSize: 16, fontWeight: 700, textDecoration: "none",
                boxShadow: "0 8px 32px rgba(124,58,237,0.3)",
              }}>
                <GooglePlayIcon /> Download DocuX Free
              </a>
              <a href="#features" className="btn-ghost" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: "var(--foreground)",
                border: "0.5px solid var(--border-strong)",
                padding: "16px 32px", borderRadius: 32,
                fontSize: 16, fontWeight: 600, textDecoration: "none",
              }}>
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--card)", padding: "48px 40px", borderTop: "0.5px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20, marginBottom: 32 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <LogoMark small />
              <span style={{ fontSize: 16, fontWeight: 600 }}>DocuX</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--foreground-muted)" }}>Your AI document assistant · Android app</div>
          </div>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Delete Account", "/delete-account"], ["Contact", "mailto:support@docux.online"]].map(([label, href]) => (
              <a key={href} href={href} className="nav-link" style={{ fontSize: 13, color: "var(--foreground-muted)", textDecoration: "none", fontWeight: 500 }}>{label}</a>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", paddingTop: 24, borderTop: "0.5px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 12, color: "var(--foreground-muted)" }}>© 2026 Airyl Tech · DocuX · All rights reserved</div>
          <div style={{ fontSize: 12, color: "var(--foreground-muted)" }}>Built with Next.js · Deployed on Vercel</div>
        </div>
      </footer>

    </div>
  );
}