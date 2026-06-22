import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Account · DocuX",
  description: "Request deletion of your DocuX account and all associated data.",
};

const LogoMark = () => (
  <div style={{ display: "flex", gap: 2, alignItems: "flex-end", height: 24 }}>
    <div style={{ width: 5, height: 24, borderRadius: 2, background: "#34D399" }} />
    <div style={{ width: 5, height: 17, borderRadius: 2, background: "#A855F7" }} />
    <div style={{ width: 5, height: 20, borderRadius: 2, background: "#60A5FA" }} />
  </div>
);

export default function DeleteAccountPage() {
  return (
    <div style={{ background: "#f5f3ff", minHeight: "100vh", fontFamily: "system-ui, Arial, sans-serif", color: "#0f0f1a" }}>

      {/* NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 40px", background: "rgba(255,255,255,0.92)",
        borderBottom: "0.5px solid rgba(0,0,0,0.07)",
        backdropFilter: "blur(12px)",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "#0f0f1a" }}>
          <LogoMark />
          <span style={{ fontSize: 17, fontWeight: 600 }}>DocuX</span>
        </Link>
        <Link href="/" style={{ fontSize: 13, color: "#6B7280", textDecoration: "none", fontWeight: 500 }}>← Back to home</Link>
      </nav>

      {/* CONTENT */}
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "64px 40px" }}>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "rgba(244,63,94,0.08)", color: "#E11D48",
          fontSize: 11, fontWeight: 600, padding: "4px 12px",
          borderRadius: 20, marginBottom: 24, letterSpacing: "0.06em",
          textTransform: "uppercase" as const,
          border: "0.5px solid rgba(244,63,94,0.2)",
        }}>Account Management</div>

        <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Delete Your Account</h1>
        <p style={{ fontSize: 16, color: "#4B5563", lineHeight: 1.7, marginBottom: 48 }}>
          We are sorry to see you go. You can request complete deletion of your DocuX account and all associated cloud data by following the steps below.
        </p>

        {/* Warning card */}
        <div style={{
          background: "rgba(244,63,94,0.06)",
          border: "1px solid rgba(244,63,94,0.2)",
          borderRadius: 16, padding: "20px 24px", marginBottom: 40,
        }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#E11D48", marginBottom: 8 }}>⚠ This action is permanent</div>
          <div style={{ fontSize: 13, color: "#4B5563", lineHeight: 1.7 }}>
            Deleting your account will permanently remove:
            <ul style={{ marginTop: 8, paddingLeft: 20, display: "flex", flexDirection: "column" as const, gap: 4 }}>
              <li>All documents backed up to the cloud</li>
              <li>Your Google Sign-In authentication data</li>
              <li>Your DocuX Pro subscription history</li>
              <li>All account preferences and settings</li>
            </ul>
            <div style={{ marginTop: 12, fontWeight: 500 }}>
              Note: Data stored locally on your device is not affected. To remove local data, uninstall the app or clear app data from your Android settings.
            </div>
          </div>
        </div>

        {/* Steps */}
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24 }}>How to delete your account</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 16, marginBottom: 48 }}>
          {[
            {
              n: "01",
              title: "Cancel your subscription first",
              desc: "If you have DocuX Pro, cancel your subscription via Google Play before requesting deletion. Go to Google Play → Subscriptions → DocuX Pro → Cancel.",
            },
            {
              n: "02",
              title: "Send a deletion request",
              desc: "Email us at djmirontos@gmail.com with the subject line \"Delete Account Request\" and include the Gmail address associated with your DocuX account.",
            },
            {
              n: "03",
              title: "Confirmation",
              desc: "We will confirm your request within 48 hours and complete the deletion within 30 days. You will receive a confirmation email when your data has been permanently removed.",
            },
          ].map((step, i) => (
            <div key={i} style={{
              display: "flex", gap: 16, alignItems: "flex-start",
              background: "#fff", borderRadius: 16,
              border: "0.5px solid rgba(0,0,0,0.07)",
              padding: "20px 24px",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "rgba(124,58,237,0.1)", color: "#7C3AED",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, flexShrink: 0,
              }}>{step.n}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{step.title}</div>
                <div style={{ fontSize: 13, color: "#4B5563", lineHeight: 1.7 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          background: "#fff", borderRadius: 20,
          border: "0.5px solid rgba(0,0,0,0.07)",
          padding: "28px 32px", textAlign: "center",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Ready to delete your account?</h3>
          <p style={{ fontSize: 13, color: "#6B7280", marginBottom: 20 }}>Send us an email and we will take care of the rest within 30 days.</p>
          
            href="mailto:djmirontos@gmail.com?subject=Delete Account Request&body=Hi, I would like to request deletion of my DocuX account. My Gmail address is: "
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#E11D48", color: "#fff",
              padding: "12px 24px", borderRadius: 24,
              fontSize: 14, fontWeight: 600, textDecoration: "none",
            }}
          >
            Send Deletion Request
          </a>
          <div style={{ fontSize: 12, color: "#9CA3AF", marginTop: 12 }}>djmirontos@gmail.com</div>
        </div>

        {/* Alternatives */}
        <div style={{ marginTop: 40 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>Before you go — have you tried?</h3>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
            {[
              { title: "Disable cloud backup", desc: "Turn off backup in Settings → Cloud Backup. Your local data stays, nothing syncs." },
              { title: "Sign out of Google", desc: "Sign out from Settings → Account. Removes cloud access without deleting data." },
              { title: "Enable app lock", desc: "Protect your documents with biometric or PIN lock from Settings → App Lock." },
            ].map((alt, i) => (
              <div key={i} style={{
                display: "flex", gap: 12,
                background: "rgba(52,211,153,0.06)",
                border: "0.5px solid rgba(52,211,153,0.2)",
                borderRadius: 12, padding: "14px 18px",
              }}>
                <div style={{ color: "#059669", fontSize: 16, flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{alt.title}</div>
                  <div style={{ fontSize: 12, color: "#4B5563" }}>{alt.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer links */}
        <div style={{
          marginTop: 48, paddingTop: 32,
          borderTop: "0.5px solid rgba(0,0,0,0.07)",
          display: "flex", gap: 24, flexWrap: "wrap" as const,
        }}>
          <Link href="/privacy" style={{ fontSize: 13, color: "#7C3AED", textDecoration: "none", fontWeight: 500 }}>Privacy Policy</Link>
          <Link href="/terms" style={{ fontSize: 13, color: "#7C3AED", textDecoration: "none", fontWeight: 500 }}>Terms of Service</Link>
          <Link href="/" style={{ fontSize: 13, color: "#7C3AED", textDecoration: "none", fontWeight: 500 }}>Back to Home</Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: "0.5px solid rgba(0,0,0,0.07)", padding: "24px 40px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#9CA3AF" }}>© 2026 Airyl Tech · DocuX · All rights reserved</p>
      </footer>
    </div>
  );
}