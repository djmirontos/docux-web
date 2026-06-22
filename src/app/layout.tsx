import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg ',
    shortcut: '/favicon.svg ',
  },
  title: "DocuX - Your AI Document Assistant",
  description: "Scan, organise, and never lose a document again. DocuX uses AI to automatically classify your documents, extract key details, and keep everything searchable.",
  keywords: "document scanner, AI, OCR, document organiser, Android app, passport tracker, expiry reminder",
  openGraph: {
    title: "DocuX - Your AI Document Assistant",
    description: "Scan, organise, and never lose a document again.",
    url: "https://www.docux.online",
    siteName: "DocuX",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('docux-theme ');
                  if (theme === 'dark ') {
                    document.documentElement.classList.add('dark ');
                  } else if (!theme && window.matchMedia('(prefers-color-scheme: dark) ').matches) {
                    document.documentElement.classList.add('dark ');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
