import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const imbPlesSans = IBM_Plex_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ibmplexsans",
});

export const metadata: Metadata = {
  title: "Nextbucks",
  description: "Find coffee shop near you",
  icons: "https://img.icons8.com/ios-filled/50/FFFFFF/espresso-cup.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={imbPlesSans.className}>{children}</body>
    </html>
  );
}
