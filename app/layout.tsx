import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${inter.className} relative bg-gradient-to-bl from-zinc-950 to-zinc-900 pt-28 text-gray-950 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
