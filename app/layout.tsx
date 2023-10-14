import Header from "../components/Header/header";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
