import "./globals.css";
import { Title } from "@/components/ui/Title";
import { Footer } from "@/components/ui/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-6 xl:px-15 py-8 sm:py-15 text-center">
          <Title />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
