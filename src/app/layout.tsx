import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Initialize Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Almanza Portfolio",
  description: "Website Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the font variable class and Tailwind font-sans */}
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}