import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {

  metadataBase: new URL("https://krevexo-tools.vercel.app"),

  title: {
    default: "KREVEXO | Smart Tools for Modern Creators",
    template: "%s | KREVEXO",
  },

  description:
    "Free, fast browser tools for creators, marketers and everyday digital work. Compress images, format text, build campaign links, generate QR codes and more.",
  keywords: [
    "KREVEXO",
    "free online tools",
    "creator tools",
    "marketing tools",
    "image tools",
    "text tools",
    "browser tools",
  ],

  authors: [{ name: "KREVEXO" }],
  creator: "KREVEXO",
  publisher: "KREVEXO",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "KREVEXO | Smart Tools for Modern Creators",
    description:
      "Free, fast browser tools for creators, marketers and everyday digital work.",
    siteName: "KREVEXO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KREVEXO | Smart Tools for Modern Creators",
    description:
      "Free, fast browser tools for creators, marketers and everyday digital work.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
