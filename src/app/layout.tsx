import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Inclusive Travel | Proposta Exclusiva",
  description:
    "Proposta exclusiva de viagem personalizada pela Inclusive Travel. Experiências únicas e roteiros sob medida para você.",
  keywords: [
    "viagem",
    "turismo",
    "proposta",
    "inclusive travel",
    "roteiro personalizado",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Inclusive Travel | Proposta Exclusiva",
    description:
      "Proposta exclusiva de viagem personalizada pela Inclusive Travel.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${notoSans.variable} antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
