import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import AmbientAudioPlayer from "@/components/AmbientAudioPlayer";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Canoopea - Animalerie en ligne | Aquariophilie, Terrariophilie, Chiens & Chats",
  description:
    "Plus de 5000 références pour vos animaux. Spécialiste de l'aquariophilie, aquascaping, terrariophilie, chiens, chats, rongeurs et oiseaux. Boutique française, expédition soignée.",
  keywords: [
    "Canoopea",
    "animalerie en ligne",
    "aquariophilie",
    "aquascaping",
    "terrariophilie",
    "chiens",
    "chats",
    "Gab Aqua",
    "animaux de compagnie",
  ],
  authors: [{ name: "Canoopea" }],
  openGraph: {
    title: "Canoopea - Animalerie en ligne",
    description:
      "Plus de 5000 références pour vos animaux et biotopes vivants.",
    url: "https://canoopea.com",
    siteName: "Canoopea",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col bg-white text-gray-900 antialiased`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <AmbientAudioPlayer />
        <Chatbot />
      </body>
    </html>
  );
}
