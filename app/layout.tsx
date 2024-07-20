import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Footer from "./_components/Footer";
import ActiveSectionContext from "./_context/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin | Web Developer",
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
        className={`${inter.className} relative h-screen w-screen overflow-x-hidden bg-zinc-950 pt-28 bg-dot-8-s-2-[#101010]`}
      >
        <ActiveSectionContext>
          <main>{children}</main>
          <Toaster position="bottom-right" reverseOrder={false} />
          <Footer />
        </ActiveSectionContext>
      </body>
    </html>
  );
}
