import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuestro Album 2026 ❤️",
  description: "Un lugar especial para nuestros recuerdos juntos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
