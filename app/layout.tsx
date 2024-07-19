import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin | Portfolio",
  description: "Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gradient-to-bl from-zinc-950 to-zinc-900 pt-28 text-gray-950`}
      >
        <main>{children}</main>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
