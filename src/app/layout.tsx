import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keshav Sharma",
  icons: {
    icon: "/icon.svg",
  },
  description:
    "Law graduate portfolio: corporate law, banking litigation, legal research, and regulatory compliance. Punjab & Haryana High Court experience.",
  metadataBase: new URL("https://example.com"), // placeholder; update to your own domain
  openGraph: {
    title: "Keshav Sharma",
    description:
      "Law graduate portfolio: corporate law, banking litigation, legal research, and regulatory compliance.",
    url: "https://example.com",
    siteName: "Keshav Sharma",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  );
}
