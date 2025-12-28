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
  title: "Derecho de Familia Chile | NewCooltura Informada",
  description: "Tribunales de familia, calculadora de pension de alimentos y recursos legales",
  keywords: ["tribunales familia", "pension alimentos", "divorcio", "tuicion", "derecho familia Chile"],
  openGraph: {
    title: "Derecho de Familia - NewCooltura Informada",
    description: "Pension de alimentos y tribunales de familia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
