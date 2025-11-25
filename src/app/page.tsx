import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhyExist } from "@/components/site/WhyExist";
import { Believe } from "@/components/site/Believe";
import { Values } from "@/components/site/Values";
import { FocusGrid } from "@/components/site/FocusGrid";
import { Team } from "@/components/site/Team";
import { Programmes } from "@/components/site/Programmes";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <WhyExist />
      <Believe />
      <Values />
      <FocusGrid />
      <Team />
      <Programmes />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
