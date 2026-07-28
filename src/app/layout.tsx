import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RB BrewBook",
  description: "RB BrewBook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
