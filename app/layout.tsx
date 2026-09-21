import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
});

const text = Instrument_Sans({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Cierra los ojos — The Mentalist",
  description:
    "Patrick Jane, la unidad del CBI, Red John y los momentos que lo cambiaron todo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
