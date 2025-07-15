import type { Metadata } from "next";
import "./globals.css";
// googleフォント読み込み用、後で考える
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "タシカニ市場",
  description: "活きのいいカニ揃ってるよ〜！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white">
        <main>{children}</main>
      </body>
    </html>
  );
}
