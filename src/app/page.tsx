"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("docux-theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else if (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("docux-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("docux-theme", "light");
    }
  };

  const features = [
    { icon: "⊙", bg: "var(--mint-bg)", color: "var(--mint-dark)", title: "Offline OCR scanning", desc: "ML Kit reads text from any photo instantly — no internet, no API cost, nothing sent to a server." },
    { icon: "◈", bg: "var(--purple-bg)", color: "var(--purple-dark)", title: "AI classification", desc: "DeepSeek and Claude identify document type, extract entities, and assign a confidence score automatically." },
    { icon: "▣", bg: "var(--indigo-bg)", color: "var(--indigo-dark)", title: "Smart collections", desc: "Receipts, Travel, Shopping, Notes — DocuX builds and maintains these collections for you, no tagging required." },
    { icon: "◉", bg: "var(--amber-bg)", color: "var(--amber-dark)", title: "Expiry reminders", desc: "Push notifications at 90, 30, 7 days and on expiry day — for passports, licences, certificates, contracts." },
    { icon: "⌕", bg: "var(--blue-bg)", color: "var(--blue-dark)", title: "Fuzzy search", desc: "Fuse.js-powered search across all document text, names, brands, and dates — even partial matches work." },
    { icon: "↑", bg: "var(--teal-bg)", color: "var(--teal-dark)", title: "Selective cloud backup", desc: "Choose exactly which documents sync to Supabase. Restore selectively too — you stay in control." },
    { icon: "✦", bg: "var(--purple-bg)", color: "var(--purple-dark)", title: "Ask DocuX AI", desc: "Chat with your documents. Ask which ID expires soonest or what receipts you have from March." },
    { icon: "⊞", bg: "var(--sky-bg)", color: "var(--sky-dark)", title: "Duplicate detection", desc: "Jaccard similarity flags repeat scans before you save them — keeps your library clean without effort." },
    { icon: "⊠", bg: "var(--rose-bg)", color: "var(--rose-dark)", title: "App lock", desc: "Biometric or PIN lock on launch. Your documents stay private even if someone picks up your phone." },
  ];

  const steps = [
    { n: "1", icon: "📷", title: "Scan or import", desc: "Tap the + button. Take a photo or pick from your gallery. No account needed to start." },
    { n: "2", icon: "⊙", title: "OCR extracts text", desc: "ML Kit runs offline OCR instantly. All text extracted on-device — nothing leaves your phone." },
    { n: "3", icon: "◈", title: "AI classifies", desc: "DeepSeek or Claude identifies document type, extracts key fields, and assigns a confidence score." },
    { n: "4", icon: "✦", title: "Auto-organised", desc: "Document lands in the right collection, expiry tracking set up, reminders scheduled automatically." },
  ];

  const faqs = [
    { q: "Is DocuX really free?", a: "Yes. Download and use DocuX for free. The free tier includes unlimited offline scanning, 5 AI-classified documents, 15 AI chat messages per month, and 10 cloud backup records. DocuX Pro removes all those limits for $2.99/month or $19.99/year." },
    { q: "Does DocuX work without internet?", a: "The core scanning feature (OCR) works 100% offline using ML Kit on-device — no internet and no data leaves your phone. AI classification and cloud backup do require an internet connection." },
    { q: "What kinds of documents can DocuX scan?", a: "Passports, national IDs, driver licences, seaman books, STCW and maritime certificates, employment contracts, receipts, invoices, boarding passes, utility bills, insurance cards, bank statements, and more." },
    { q: "Is my data safe and private?", a: "Scanned images are stored locally on your device by default. Cloud backup syncs to Supabase with Google Sign-In. AI classification sends OCR text (not images) to DeepSeek or Claude for processing. Full details at docux.online/privacy." },
    { q: "How does AI classification work?", a: "After OCR extracts text from your document, DocuX sends it to DeepSeek (primary) or Claude (backup) to identify the document type, extract fields like names and dates, and assign a confidence score." },
    { q: "How do expiry reminders work?", a: "When DocuX detects an expiry date, it automatically schedules push notifications at 90, 30, and 7 days before expiry — plus a reminder on the day itself. No manual setup needed." },
    { q: "What is Ask DocuX AI?", a: "A chat interface where you ask questions about your documents in plain language — which ID expires soonest, show receipts from March, what is my Seaman Book number. Free users get 15 messages per month; Pro users get unlimited." },
    { q: "Can I cancel DocuX Pro?", a: "Yes. DocuX Pro is a Google Play subscription — cancel anytime through your Google Play subscriptions page. You keep Pro access until the end of your billing period." },
    { q: "Is DocuX available on iOS?", a: "DocuX is currently Android-only, available on Google Play. An iOS version is not on the roadmap at this time." },
    { q: "How do I delete my account and data?", a: "Request deletion at docux.online/delete-account. All cloud-stored data associated with your Google account will be permanently removed." },
  ];

  const LogoMark = ({ small }: { small?: boolean }) => (
    <div style={{ display: "flex", gap: 2, alignItems: "flex-end", height: small ? 22 : 28 }}>
      <div style={{ width: small ? 5 : 6, height: small ? 22 : 28, borderRadius: 2, background: "var(--mint)" }} />
      <div style={{ width: small ? 5 : 6, height: small ? 16 : 20, borderRadius: 2, background: "var(--purple)" }} />
      <div style={{ width: small ? 5 : 6, height: small ? 19 : 24, borderRadius: 2, background: "var(--blue)" }} />
    </div>
  );

  const Section = ({ id, label, title, sub, children, card }: {
    id?: string; label: string; title: string; sub: string; children: React.ReactNode; card?: boolean;
  }) => (
    <section id={id} style={{
      background: card ? "var(--card)" : "var(--background)",
      borderTop: card ? "0.5px solid var(--border)" : undefined,
      borderBottom: card ? "0.5px solid var(--border)" : undefined,
    }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "64px 36px" }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: "var(--purple-dark)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
        <h2 style={{ fontSize: 24, fontWeight: 500, marginBottom: 8 }}>{title}</h2>
        <p style={{ fontSize: 14, color: "var(--foreground-secondary)", lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>{sub}</p>
        {children}
      </div>
    </section>
  );

  const Bullets = ({ items }: { items: string[] }) => (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((b, i) => (
        <li key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "var(--foreground)", marginBottom: 8, lineHeight: 1.5 }}>
          <span style={{ color: "var(--mint)", flexShrink: 0 }}>✓</span>{b}
        </li>
      ))}
    </ul>
  );

  const TabletFrame = ({ src, alt }: { src: string; alt: string }) => (
    <div style={{ background: "#1a1a2e", borderRadius: 18, padding: 8, border: "0.5px solid rgba(255,255,255,0.08)" }}>
      <img src={src} alt={alt} style={{ width: "100%", borderRadius: 12, display: "block" }} />
    </div>
  );

  const PhoneFrame = ({ src, alt }: { src: string; alt: string }) => (
    <div style={{ background: "#1a1a2e", borderRadius: 36, padding: 10, border: "0.5px solid rgba(255,255,255,0.08)", maxWidth: 210, margin: "0 auto" }}>
      <img src={src} alt={alt} style={{ width: "100%", borderRadius: 28, display: "block" }} />
    </div>
  );

  const ssLabel = (color: string, bg: string, text: string) => (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontSize: 11, fontWeight: 500, color, background: bg,
      padding: "3px 10px", borderRadius: 20, marginBottom: 12,
    }}>{text}</div>
  );

  return (
    <div style={{ background: "var(--background)", color: "var(--foreground)", minHeight: "100vh", fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}>

      {/* NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 36px", background: "var(--nav)",
        borderBottom: "0.5px solid var(--border)",
        position: "sticky", top: 0, zIndex: 100,
        backdropFilter: "blur(12px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LogoMark />
          <span style={{ fontSize: 17, fontWeight: 500 }}>DocuX</span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[["Features", "#features"], ["How it works", "#how-it-works"], ["Pricing", "#pricing"], ["FAQ", "#faq"]].map(([label, href]) => (
            <a key={href} href={href} style={{ fontSize: 13, color: "var(--foreground-secondary)", textDecoration: "none" }}>{label}</a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={toggleDark} aria-label="Toggle dark mode" style={{
            background: "transparent", border: "0.5px solid var(--border-strong)",
            borderRadius: "50%", width: 34, height: 34, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--foreground)", fontSize: 16,
          }}>{dark ? "☀" : "🌙"}</button>
          <a href="#" style={{
            background: "var(--mint)", color: "#fff",
            padding: "9px 20px", borderRadius: 22, fontSize: 13, fontWeight: 500,
            textDecoration: "none",
          }}>Download free</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: 920, margin: "0 auto", padding: "64px 36px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "var(--purple-bg)", color: "var(--purple-dark)",
              fontSize: 11, fontWeight: 500, padding: "4px 12px",
              borderRadius: 20, marginBottom: 16,
              border: "0.5px solid rgba(168,85,247,0.2)",
            }}>✦ AI-powered · Android app</div>
            <h1 style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.25, marginBottom: 14 }}>
              Your documents,<br />
              <span style={{ color: "var(--mint-dark)" }}>organised</span> and<br />
              <span style={{ color: "var(--purple-dark)" }}>always searchable</span>
            </h1>
            <p style={{ fontSize: 14, color: "var(--foreground-secondary)", lineHeight: 1.75, marginBottom: 24 }}>
              DocuX scans, classifies, and tracks your documents using AI. Passports, contracts, receipts, IDs — all in one place, with expiry alerts so nothing slips through.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <a href="#" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--mint)", color: "#fff",
                padding: "12px 22px", borderRadius: 24, fontSize: 13, fontWeight: 500,
                textDecoration: "none",
              }}>▶ Get on Google Play</a>
              <a href="#how-it-works" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", color: "var(--foreground)",
                border: "0.5px solid var(--border-strong)",
                padding: "12px 22px", borderRadius: 24, fontSize: 13, fontWeight: 500,
                textDecoration: "none",
              }}>↓ See how it works</a>
            </div>
            <p style={{ fontSize: 11, color: "var(--foreground-muted)", marginTop: 12 }}>Free to start · No account required · Android only</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <PhoneFrame src="/screenshots/dashboard.png" alt="DocuX dashboard" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: "var(--card)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex" }}>
          {[
            { num: "100%", color: "var(--mint-dark)", label: "Offline OCR — no internet needed" },
            { num: "AI", color: "var(--purple-dark)", label: "Auto-classifies every document" },
            { num: "Cloud", color: "var(--blue-dark)", label: "Backup via Google Sign-In" },
            { num: "Free", color: "var(--indigo-dark)", label: "To download and start using" },
          ].map((s, i, arr) => (
            <div key={i} style={{
              flex: 1, textAlign: "center", padding: "20px 12px",
              borderRight: i < arr.length - 1 ? "0.5px solid var(--border)" : "none",
            }}>
              <div style={{ fontSize: 22, fontWeight: 500, color: s.color }}>{s.num}</div>
              <div style={{ fontSize: 11, color: "var(--foreground-muted)", marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <Section id="features" label="Features" title="Everything your documents need" sub="A complete document management system that lives in your pocket — powered by AI, works offline.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {features.map((f, i) => (
            <div key={i} style={{ background: "var(--card)", borderRadius: 14, border: "0.5px solid var(--border)", padding: 20 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 9,
                background: f.bg, color: f.color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, marginBottom: 12,
              }}>{f.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 5 }}>{f.title}</div>
              <div style={{ fontSize: 12, color: "var(--foreground-secondary)", lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works" label="How it works" title="From photo to organised in seconds" sub="Tap the + button, pick your document — DocuX handles the rest." card>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ background: "var(--background)", borderRadius: 14, border: "0.5px solid var(--border)", padding: 20 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: "var(--purple-dark)", color: "#fff",
                fontSize: 12, fontWeight: 500,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 12,
              }}>{s.n}</div>
              <div style={{ fontSize: 20, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 12, color: "var(--foreground-secondary)", lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* SCREENSHOT: DASHBOARD */}
      <section style={{ maxWidth: 920, margin: "0 auto", padding: "64px 36px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          <div>
            {ssLabel("var(--purple-dark)", "var(--purple-bg)", "⌂ Dashboard")}
            <h3 style={{ fontSize: 22, fontWeight: 500, marginBottom: 10, lineHeight: 1.3 }}>Find anything.<br />Ask anything.</h3>
            <p style={{ fontSize: 13, color: "var(--foreground-secondary)", lineHeight: 1.75, marginBottom: 16 }}>
              Your home screen shows what matters — document counts, AI stats, smart collections, and expiry alerts at a glance.
            </p>
            <Bullets items={[
              "Smart collections auto-organise: Receipts, Travel, Shopping, Notes",
              "Expiry alert banners surface soon-to-expire documents immediately",
              "Full-text search across every document you have scanned",
              "Works on phone and tablet with optimised layouts",
            ]} />
          </div>
          <TabletFrame src="/screenshots/tablet-dashboard.png" alt="DocuX tablet dashboard" />
        </div>
      </section>

      <div style={{ height: "0.5px", background: "var(--border)", margin: "0 36px" }} />

      {/* SCREENSHOT: MY DOCUMENTS */}
      <section style={{ maxWidth: 920, margin: "0 auto", padding: "64px 36px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          <TabletFrame src="/screenshots/tablet-documents.png" alt="DocuX documents screen" />
          <div>
            {ssLabel("var(--mint-dark)", "var(--mint-bg)", "☰ My Documents")}
            <h3 style={{ fontSize: 22, fontWeight: 500, marginBottom: 10, lineHeight: 1.3 }}>Every document,<br />fully detailed.</h3>
            <p style={{ fontSize: 13, color: "var(--foreground-secondary)", lineHeight: 1.75, marginBottom: 16 }}>
              Track your entire document vault with Valid, Expiring, and Expired tabs. Tap any document to see AI-extracted fields and confidence score.
            </p>
            <Bullets items={[
              "Valid, Expiring, Expired tabs — always know your document status",
              "AI-extracted fields: name, number, issue date, expiry date",
              "AI confidence score shown per document",
              "Reminder status visible directly in the detail panel",
            ]} />
          </div>
        </div>
      </section>

      <div style={{ height: "0.5px", background: "var(--border)", margin: "0 36px" }} />

      {/* SCREENSHOT: AI CHAT */}
      <section style={{ maxWidth: 920, margin: "0 auto", padding: "64px 36px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          <div>
            {ssLabel("var(--purple-dark)", "var(--purple-bg)", "✦ Ask DocuX AI")}
            <h3 style={{ fontSize: 22, fontWeight: 500, marginBottom: 10, lineHeight: 1.3 }}>Chat with your<br />documents.</h3>
            <p style={{ fontSize: 13, color: "var(--foreground-secondary)", lineHeight: 1.75, marginBottom: 16 }}>
              Instead of searching manually, just ask. DocuX AI knows every document in your library and answers in plain language.
            </p>
            <Bullets items={[
              "What receipts do I have from March? — instant answer",
              "Which ID expires soonest? — scans all your documents",
              "15 free messages per month, unlimited with DocuX Pro",
              "Powered by DeepSeek with Claude as intelligent backup",
            ]} />
          </div>
          <PhoneFrame src="/screenshots/chat.png" alt="DocuX AI chat" />
        </div>
      </section>

      {/* PRICING */}
      <Section id="pricing" label="Pricing" title="Simple, honest pricing" sub="Start free. Upgrade when you need more. Cancel anytime via Google Play." card>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Free */}
          <div style={{ background: "var(--background)", borderRadius: 16, border: "0.5px solid var(--border)", padding: 26 }}>
            <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 4 }}>Free</div>
            <div style={{ fontSize: 30, fontWeight: 500 }}>$0</div>
            <div style={{ fontSize: 12, color: "var(--foreground-muted)", marginBottom: 18 }}>forever</div>
            {["5 AI-processed documents (lifetime)", "15 AI chat messages per month", "10 backup and restore records", "Unlimited offline OCR scanning", "Smart collections and expiry alerts"].map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "var(--foreground)", marginBottom: 8 }}>
                <span style={{ color: "var(--mint)" }}>✓</span>{f}
              </div>
            ))}
            {["Unlimited AI processing", "Unlimited cloud backup"].map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "var(--foreground-muted)", marginBottom: 8 }}>
                <span>✕</span>{f}
              </div>
            ))}
            <a href="#" style={{
              display: "block", textAlign: "center", marginTop: 18,
              padding: 11, borderRadius: 24, fontSize: 13, fontWeight: 500,
              border: "0.5px solid var(--border-strong)", color: "var(--foreground)",
              textDecoration: "none",
            }}>Download free</a>
          </div>
          {/* Pro */}
          <div style={{ background: "var(--background)", borderRadius: 16, border: "2px solid var(--mint)", padding: 26 }}>
            <div style={{
              display: "inline-block", fontSize: 10, fontWeight: 500,
              background: "var(--mint-bg)", color: "var(--mint-dark)",
              padding: "3px 10px", borderRadius: 20, marginBottom: 12,
            }}>Most popular</div>
            <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 4 }}>DocuX Pro</div>
            <div style={{ fontSize: 30, fontWeight: 500 }}>$2.99</div>
            <div style={{ fontSize: 12, color: "var(--foreground-muted)", marginBottom: 18 }}>per month · or $19.99 / year (save 44%)</div>
            {["Unlimited AI document processing", "Unlimited AI chat messages", "Unlimited cloud backup and restore", "All free features included", "Priority support", "Early access to new features"].map((f, i) => (
              <div key={i} style={{ display: "flex", gap: 8, fontSize: 12, color: "var(--foreground)", marginBottom: 8 }}>
                <span style={{ color: "var(--mint)" }}>✓</span>{f}
              </div>
            ))}
            <a href="#" style={{
              display: "block", textAlign: "center", marginTop: 18,
              padding: 11, borderRadius: 24, fontSize: 13, fontWeight: 500,
              background: "var(--mint)", color: "#fff", border: "none",
              textDecoration: "none",
            }}>Get DocuX Pro</a>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" label="FAQ" title="Common questions" sub="Everything you need to know before downloading.">
        <div>
          {faqs.map((item, i) => (
            <div key={i} style={{ borderBottom: "0.5px solid var(--border)", padding: "18px 0" }}>
              <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 8, display: "flex", gap: 10 }}>
                <span style={{ color: "var(--purple)", flexShrink: 0 }}>?</span>{item.q}
              </div>
              <div style={{ fontSize: 13, color: "var(--foreground-secondary)", lineHeight: 1.7, paddingLeft: 24 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer style={{ background: "var(--card)", padding: "40px 36px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
              <LogoMark small />
              <span style={{ fontSize: 15, fontWeight: 500, color: "#fff" }}>DocuX</span>
            </div>
            <div style={{ fontSize: 12, color: "#6B7280" }}>Your AI document assistant</div>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"], ["Delete Account", "/delete-account"], ["Contact", "mailto:djmirontos@gmail.com"]].map(([label, href]) => (
              <a key={href} href={href} style={{ fontSize: 12, color: "#6B7280", textDecoration: "none" }}>{label}</a>
            ))}
          </div>
        </div>
        <div style={{
          maxWidth: 920, margin: "20px auto 0",
          paddingTop: 20, borderTop: "0.5px solid rgba(255,255,255,0.07)",
          textAlign: "center", fontSize: 11, color: "#4B5563",
        }}>© 2026 Airyl Tech · DocuX · All rights reserved</div>
      </footer>

    </div>
  );
}