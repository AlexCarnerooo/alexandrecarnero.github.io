import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexandre Carnero | Portfolio",
  description: "Portfolio personal de Alexandre Carnero - Desarrollador Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a192f] text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
