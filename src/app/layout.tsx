import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../../src/app/components/Header";

export const metadata: Metadata = {
  title: "Agenda Organizada",
  description: "Gerencie sua agenda 100% grátis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <>
        <body>
          <header>
            <Header />
          </header>
          <main>{children}</main>
        </body>
      </>
    </html>
  );
}
