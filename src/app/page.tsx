import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const RevealObserver = dynamic(() => import("@/components/RevealObserver"));
const Apresentacao = dynamic(() => import("@/components/Apresentacao"));
const Guias = dynamic(() => import("@/components/Guias"));
const Roteiro = dynamic(() => import("@/components/Roteiro"));
const Proposta = dynamic(() => import("@/components/Proposta"));
const CtaFinal = dynamic(() => import("@/components/CtaFinal"));
const WhatsAppFloat = dynamic(() => import("@/components/WhatsAppFloat"));

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <Hero />
      <Apresentacao />
      <Guias />
      <Roteiro />
      <Proposta />
      <CtaFinal />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
