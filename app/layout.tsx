import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Young Investor",
  description: "One-page visualisation for the Young Investor program.",
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
