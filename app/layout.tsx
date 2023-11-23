import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "../utils/provider";


export const metadata: Metadata = {
  title: "Bất động sản",
  description: "By Fe Xưởng",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Provider>
          {children}
        </Provider >
      </body>
    </html>
  );
}
