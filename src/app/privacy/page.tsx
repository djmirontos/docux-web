import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy · DocuX",
  description: "Privacy Policy for DocuX - Your AI Document Assistant",
};

const LogoMark = () => (
  <div style={{ display: "flex", gap: 2, alignItems: "flex-end", height: 24 }}>
    <div style={{ width: 5, height: 24, borderRadius: 2, background: "#34D399" }} />
    <div style={{ width: 5, height: 17, borderRadius: 2, background: "#A855F7" }} />
    <div style={{ width: 5, height: 20, borderRadius: 2, background: "#60A5FA" }} />
  </div>
);

export default function PrivacyPage() {
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
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 40px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "rgba(168,85,247,0.1)", color: "#7C3AED",
          fontSize: 11, fontWeight: 600, padding: "4px 12px",
          borderRadius: 20, marginBottom: 24, letterSpacing: "0.06em",
          textTransform: "uppercase" as const, border: "0.5px solid rgba(124,58,237,0.2)",
        }}>Legal</div>

        <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 48 }}>Last updated: June 22, 2026 · Airyl Tech · DocuX</p>

        {[
          {
            title: "1. Introduction",
            content: `DocuX ("we", "our", or "us") is developed by Airyl Tech. This Privacy Policy explains how we collect, use, and protect your information when you use the DocuX Android application and website at docux.online. By using DocuX, you agree to the collection and use of information in accordance with this policy.`
          },
          {
            title: "2. Information We Collect",
            content: `We collect the following types of information:

- Document images and text: When you scan a document, the image is processed locally on your device using ML Kit OCR. The extracted text (not the image) may be sent to AI providers for classification.

- Account information: If you choose to use cloud backup, we collect your Google account email address and display name via Google Sign-In (OAuth 2.0).

- Usage data: We may collect anonymized usage statistics to improve the app, such as feature usage frequency and crash reports.

- Device information: Basic device information such as Android version and device model may be collected for debugging purposes.`
          },
          {
            title: "3. How We Use Your Information",
            content: `We use the information we collect to:

- Process and classify your documents using AI (DeepSeek as primary, Anthropic Claude as backup)
- Provide cloud backup and restore functionality via Supabase
- Send push notifications for document expiry reminders
- Improve app performance and fix bugs
- Respond to your support requests

We do not sell your personal information to third parties.`
          },
          {
            title: "4. AI Processing",
            content: `DocuX uses AI services to classify your documents. When AI classification is used:

- Only the extracted OCR text is sent to AI providers — your document images are never transmitted
- DeepSeek (deepseek.com) is our primary AI provider
- Anthropic Claude (anthropic.com) is our backup AI provider
- AI processing requires an active internet connection
- The offline OCR scanning feature (ML Kit) processes everything on-device with no data transmission

Please refer to DeepSeek's and Anthropic's privacy policies for information on how they handle data sent to their APIs.`
          },
          {
            title: "5. Cloud Backup",
            content: `Cloud backup is an optional feature. When enabled:

- Your document data (metadata and images) is stored securely in Supabase (supabase.com)
- Access is authenticated via Google OAuth 2.0
- Data is encrypted in transit using TLS
- You can delete your cloud data at any time via docux.online/delete-account
- You control exactly which documents are backed up using our selective backup feature`
          },
          {
            title: "6. Data Storage",
            content: `By default, all your scanned documents are stored locally on your Android device using SQLite. This data remains on your device and is subject to your device's security settings (screen lock, encryption).

Cloud backup data is stored in Supabase with row-level security (RLS) enabled, ensuring only authenticated users can access their own data.`
          },
          {
            title: "7. Third-Party Services",
            content: `DocuX uses the following third-party services:

- Google Sign-In (Google LLC) — authentication for cloud backup
- Supabase — cloud database and storage
- DeepSeek — AI document classification
- Anthropic Claude — AI document classification (backup)
- RevenueCat — subscription and payment management
- Google Play — app distribution and in-app purchases
- Expo / EAS — app build and delivery infrastructure`
          },
          {
            title: "8. Children's Privacy",
            content: `DocuX is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at djmirontos@gmail.com.`
          },
          {
            title: "9. Your Rights",
            content: `You have the right to:

- Access the personal data we hold about you
- Request correction of inaccurate data
- Request deletion of your data (see Section 10)
- Withdraw consent for data processing at any time
- Export your data

To exercise any of these rights, contact us at djmirontos@gmail.com.`
          },
          {
            title: "10. Data Deletion",
            content: `You can request complete deletion of your account and all associated cloud data at any time by visiting docux.online/delete-account or by contacting us at djmirontos@gmail.com.

Local data stored on your device can be deleted by uninstalling the DocuX app or clearing app data from your Android device settings.

Cloud data deletion requests are processed within 30 days.`
          },
          {
            title: "11. Changes to This Policy",
            content: `We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date at the top of this page. We encourage you to review this Privacy Policy periodically.`
          },
          {
            title: "12. Contact Us",
            content: `If you have any questions about this Privacy Policy or our data practices, please contact us at:

Airyl Tech
Email: djmirontos@gmail.com
Website: https://www.docux.online`
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: "#0f0f1a" }}>{section.title}</h2>
            <div style={{
              fontSize: 14, color: "#4B5563", lineHeight: 1.8,
              whiteSpace: "pre-line" as const,
              background: "#fff", borderRadius: 16,
              border: "0.5px solid rgba(0,0,0,0.07)",
              padding: "20px 24px",
            }}>{section.content}</div>
          </div>
        ))}

        {/* Footer links */}
        <div style={{
          marginTop: 48, paddingTop: 32,
          borderTop: "0.5px solid rgba(0,0,0,0.07)",
          display: "flex", gap: 24, flexWrap: "wrap" as const,
        }}>
          <Link href="/terms" style={{ fontSize: 13, color: "#7C3AED", textDecoration: "none", fontWeight: 500 }}>Terms of Service</Link>
          <Link href="/delete-account" style={{ fontSize: 13, color: "#7C3AED", textDecoration: "none", fontWeight: 500 }}>Delete Account</Link>
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