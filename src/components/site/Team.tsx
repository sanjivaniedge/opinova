"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import TeamModal from "./TeamModal";

type TeamMember = {
  role: string;
  name: string;
  subtitle?: string;
  img: string;
  tintHex: string; // matches figma rgba tint fills
  modalKey?: "shantam" | "rita" | null;
};

const team: TeamMember[] = [
  {
    role: "Text and Cases (McGraw Hill)",
    name: "Dr. Shantam Shukla",
    subtitle: "Author of Strategy: ",
    img: "/images/t1.webp",
    tintHex: "rgba(79, 193, 228, 0.20)", // blue tint from Figma
    modalKey: "shantam",
  },
  {
    role: "SRN Hospital, Prayagraj",
    name: "Dr. Rita Shukla",
    subtitle: "Former Consultant, ",
    img: "/images/t2.webp",
    tintHex: "rgba(103, 191, 135, 0.20)", // green tint from Figma
    modalKey: "rita",
  },

];

export function Team() {
  const [modal, setModal] = useState<"shantam" | "rita" | null>(null);
  return (
    <section className="mx-auto max-w-6xl px-6 md:py-16" id="team">
      <h2 className="text-center font-serif text-4xl font-bold md:text-5xl">Our TEAM</h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
        A small, passionate team with experience in education, engineering and community development supported by volunteers and advisors.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 mx-auto max-w-3xl">
        {team.map((m) => (
          <div
            key={m.role}
            className="rounded-[20px] border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.12)] overflow-hidden"
          >
            {/* Top image with only top corners rounded to match Figma */}
            <div className="relative w-full h-[220px] md:h-[260px]">
              <Image
                src={m.img}
                alt={m.role}
                fill
                className="object-cover rounded-t-[20px]"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={false}
              />
            </div>

            {/* Content area with tinted background */}
            <div className="px-6 py-6" style={{ backgroundColor: m.tintHex }}>
                  {/* Subtitle as CTA (Big) style: uppercase, bold, 18px */}
              {m.subtitle && (
                <div className="mt-3 text-[14px] md:text-[16px] font-semibold uppercase text-muted-foreground text-center">
                  {m.subtitle}
                </div>
              )}
              <div className=" text-[14px] md:text-[16px] font-semibold uppercase text-muted-foreground text-center">
                {m.role}
              </div>

              {/* Name uses serif at ~36px per Figma */}
              <div className="mt-3 font-serif font-bold text-[28px] md:text-[32px] leading-tight text-[#454545] text-center">
                {m.name}
              </div>

          

              {/* Social icons row */}
              <div className="mt-5 flex flex-col justify-center items-center gap-3 text-muted-foreground">
                <div className="flex items-center justify-center gap-3">
                {/* <a
                  href="https://instagram.com/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/10 hover:bg-white/40"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/10 hover:bg-white/40"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/10 hover:bg-white/40"
                >
                  <Facebook className="h-5 w-5" />
                </a> */}
                </div>
                {m.modalKey && (
                  <button
                    type="button"
                    onClick={() => setModal(m.modalKey!)}
                    className=" text-[14px] font-bold cursor-pointer uppercase text-[#F1743C] hover:opacity-80"
                  >
                    Read More &gt;
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals populated from Figma content */}
      <TeamModal
        open={modal === "shantam"}
        onClose={() => setModal(null)}
        title="Dr. Shantam Shukla"
        subtitleTop="Fellow (Ph.D., Business Policy), IIM Ahmedabad"
        subtitleMid="Author of Strategy: Text and Cases (McGraw Hill)"
        imageSrc="/images/t11.webp"
        body={[
          "Educator, strategist, and founder across academia and industry, Dr. Shantam Shukla co-founded Opinova—drawn from his research in open innovation—as an experiment in quiet impact.",
          "He believes progress endures when knowledge, empathy, and persistence meet purpose, turning ideas into systems of shared and sustainable change.",
        ]}
      />

      <TeamModal
        open={modal === "rita"}
        onClose={() => setModal(null)}
        title="Dr. Rita Shukla"
        subtitleTop="MBBS, MS (Obstetrics & Gynaecology)"
        subtitleMid="Former Consultant, SRN Hospital, Prayagraj"
        imageSrc="/images/t22.webp"
        body={[
          "With over five decades in women’s and community health, Dr. Rita Shukla has seen India’s grassroots realities firsthand through her work with ICMR.",
          "She believes healing begins with knowing one’s patient well—through empathy, attentive listening, and trust. Her compassionate approach mirrors Opinova’s philosophy that meaningful change begins with understanding before action.",
        ]}
      />
    </section>
  );
}
