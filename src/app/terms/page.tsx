import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service · DocuX",
  description: "Terms of Service for DocuX - Your AI Document Assistant",
};

const LogoMark = () => (
  <div style={{ display: "flex", gap: 2, alignItems: "flex-end", height: 24 }}>
    <div style={{ width: 5, height: 24, borderRadius: 2, background: "#34D399" }} />
    <div style={{ width: 5, height: 17, borderRadius: 2, background: "#A855F7" }} />
    <div style={{ width: 5, height: 20, borderRadius: 2, background: "#60A5FA" }} />
  </div>
);

export default function TermsPage() {
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
          textTransform: "uppercase" as const,
          border: "0.5px solid rgba(124,58,237,0.2)",
        }}>Legal</div>

        <h1 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 48 }}>Last updated: June 22, 2026 · Airyl Tech · DocuX</p>

        {[
          {
            title: "1. Acceptance of Terms",
            content: `By downloading, installing, or using the DocuX application ("App") or visiting docux.online ("Website"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use DocuX.

These Terms apply to all users of the App and Website, including users with free accounts and DocuX Pro subscribers.`
          },
          {
            title: "2. Description of Service",
            content: `DocuX is an AI-powered document scanning and organization application developed by Airyl Tech. The App allows users to:

- Scan and digitize physical documents using on-device OCR technology
- Classify documents automatically using AI (DeepSeek and Anthropic Claude)
- Organize documents into smart collections
- Receive expiry reminders for time-sensitive documents
- Back up documents to secure cloud storage
- Search and retrieve documents using natural language

DocuX is currently available exclusively on Android via Google Play.`
          },
          {
            title: "3. User Accounts",
            content: `A Google account is required only for cloud backup functionality. You may use the core scanning and organization features without creating an account.

When you connect your Google account, you are responsible for:

- Maintaining the confidentiality of your account credentials
- All activities that occur under your account
- Notifying us immediately of any unauthorized use at support@docux.online

We reserve the right to terminate accounts that violate these Terms.`
          },
          {
            title: "4. Free and Pro Plans",
            content: `DocuX offers two service tiers:

Free Plan (no payment required):
- 5 AI-processed documents (lifetime)
- 15 AI chat messages per month
- 10 cloud backup and restore records
- Unlimited offline OCR scanning
- Smart collections and expiry alerts

DocuX Pro Plan ($2.99/month or $19.99/year):
- Unlimited AI document processing
- Unlimited AI chat messages
- Unlimited cloud backup and restore
- All free features included
- Priority support
- Early access to new features

Plan limits and prices are subject to change with reasonable notice.`
          },
          {
            title: "5. Subscriptions and Payments",
            content: `DocuX Pro is sold as a recurring subscription through Google Play. By subscribing, you agree to the following:

- Subscriptions automatically renew at the end of each billing period unless cancelled
- Payment is charged to your Google Play account at confirmation of purchase
- You may cancel your subscription at any time through Google Play → Subscriptions
- Cancellation takes effect at the end of the current billing period — no partial refunds
- Refunds are handled according to Google Play's refund policy
- Subscription management is handled by RevenueCat on our behalf

For billing disputes, contact Google Play support or email support@docux.online.`
          },
          {
            title: "6. Acceptable Use",
            content: `You agree to use DocuX only for lawful purposes. You must not:

- Use DocuX to scan, store, or distribute documents you do not have the legal right to possess
- Attempt to reverse engineer, decompile, or disassemble the App
- Use DocuX to store or transmit malicious code
- Attempt to gain unauthorized access to our systems or other users' data
- Use DocuX in any way that violates applicable local, national, or international laws
- Scan documents containing sensitive information of others without their consent

We reserve the right to suspend or terminate access for violations of this section.`
          },
          {
            title: "7. Intellectual Property",
            content: `The DocuX application, including its design, code, branding, logo, and content, is owned by Airyl Tech and protected by applicable intellectual property laws.

You retain ownership of all documents you scan and store using DocuX. By using cloud backup, you grant Airyl Tech a limited, non-exclusive license to store and process your data solely for the purpose of providing the service.

The DocuX name, logo, and brand are trademarks of Airyl Tech. You may not use them without prior written permission.`
          },
          {
            title: "8. Third-Party Services",
            content: `DocuX integrates with third-party services including Google Sign-In, Supabase, DeepSeek, Anthropic Claude, and RevenueCat. Your use of these services is subject to their respective terms of service and privacy policies.

We are not responsible for the availability, accuracy, or content of third-party services. We will notify users of significant changes to third-party integrations where reasonably possible.`
          },
          {
            title: "9. Disclaimer of Warranties",
            content: `DocuX is provided "as is" and "as available" without warranties of any kind, either express or implied.

We do not warrant that:
- The App will be uninterrupted, error-free, or secure
- AI classification results will be 100% accurate
- Expiry dates detected by AI will always be correct
- Cloud backup will be available at all times

You should always verify important document information independently. Do not rely solely on DocuX for critical document management decisions.`
          },
          {
            title: "10. Limitation of Liability",
            content: `To the maximum extent permitted by law, Airyl Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:

- Loss of data or documents
- Missed document expiry dates
- Errors in AI classification
- Service interruptions or downtime
- Unauthorized access to your account

Our total liability to you for any claims arising from your use of DocuX shall not exceed the amount you paid for DocuX Pro in the 12 months preceding the claim, or $10 USD, whichever is greater.`
          },
          {
            title: "11. Changes to Terms",
            content: `We reserve the right to modify these Terms at any time. We will notify users of significant changes by:

- Updating the "Last updated" date on this page
- Posting a notice in the App
- Sending an email to registered users for material changes

Continued use of DocuX after changes constitutes acceptance of the updated Terms.`
          },
          {
            title: "12. Governing Law",
            content: `These Terms are governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of DocuX shall be resolved through good-faith negotiation first, followed by binding arbitration if necessary.`
          },
          {
            title: "13. Contact Us",
            content: `If you have any questions about these Terms of Service, please contact us at:

Airyl Tech
Email: support@docux.online
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
          <Link href="/privacy" style={{ fontSize: 13, color: "#7C3AED", textDecoration: "none", fontWeight: 500 }}>Privacy Policy</Link>
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