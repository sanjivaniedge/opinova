"use client";
import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Bharat Ki Beti",
    badge: "March 2024",
    badgeColor: "bg-[#5FD3C2]",
    description:
      "Skills and technology training for young women pursuing engineering—removing financial barriers and improving employability.",
    description2:
      "This year, we launched a special program - Bharat Ki Beti Initiative - to support girl students from low-income families in completing an industry-relevant employment improvement course. The course, centered around a widely-used software tool in the tech industry, was designed to provide these young women with hands-on skills that are in high demand in today’s job market.",
    image: "/images/b.webp",
    imageOnLeft: true,
  },
  {
    title: "Health Checks for Migrant Workers",
    badge: "September 2024",
    badgeColor: "bg-[#76D3A3]",
    description:
      "In partnership with Sanjivani Pharmacy College, free health screenings reached 373+ migrant workers and their families during the sugarcane harvest.",
    description2:
      "A healthy body is the foundation for a productive life. By supporting these families, we are not only helping them stay healthy but also ensuring that their hard-earned money is not lost due to preventable health issues. This collaboration marks a small but significant step towards improving the lives of migrant workers and their families.",
    image: "/images/b2.webp",
    imageOnLeft: false,
  },
  {
    title: "“Be The Change” Innovation Endeavour",
    badge: "November 2024",
    badgeColor: "bg-[#F0A74A]",
    description:
      "Student teams built working prototypes; the winning all-women team developed Jalmitra—an affordable water-quality testing device for small farmers.",
    description2:
      "The initiative was designed to provide financial support for students to bring their ideas to life. However, the core philosophy behind Be The Change is not just about creating successful products—it’s about fostering a spirit of innovation and resilience.",
    image: "/images/work.webp",
    imageOnLeft: true,
  },
];

export function Programmes() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const s = slides[index];
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="programs">
      <h2 className="text-center font-serif text-4xl font-bold md:text-5xl">Signature PROGRAMMES</h2>
      <div className="relative mt-6 rounded-[20px] bg-white p-[50px] shadow-[0_4px_16px_7px_rgba(0,0,0,0.16)]">
        {/* white stroke per Figma */}
        <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-4 ring-white" />

        <button
          aria-label="prev"
          onClick={prev}
          className="absolute cursor-pointer -left-6 top-1/2 -translate-y-1/2 rounded-full bg-secondary p-3 text-4xl flex items-center justify-center"
        >
          <FiChevronLeft />
        </button>

        <button
          aria-label="next"
          onClick={next}
          className="absolute cursor-pointer -right-6 top-1/2 -translate-y-1/2 rounded-full bg-secondary p-3 text-4xl flex items-center justify-center"
        >
          <FiChevronRight />
        </button>

        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* image */}
          <div className={`overflow-hidden rounded-[20px] border border-[#E6E6E6] ${s.imageOnLeft ? '' : 'md:order-2'}`}>
            <Image src={s.image} alt={s.title} width={960} height={640} className="h-full w-full object-cover" />
          </div>
          {/* copy */}
          <div className={`${s.imageOnLeft ? '' : 'md:order-1'}`}>
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium text-white ${s.badgeColor}`}>{s.badge}</span>
            <h3 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">{s.title}</h3>
            <p className="mt-3 text-sm text-neutral-700">{s.description}</p>
            {s.description2 && (
              <p className="mt-3 text-sm text-neutral-700">{s.description2}</p>
            )}
            <button className="mt-8 bg-primary text-white font-bold text-sm px-5 py-2 rounded-tl-[10px] rounded-tr-[0px] rounded-br-[10px] rounded-bl-[0px] shadow-sm hover:bg-[#e36427] transition-all md:text-md md:px-12 md:py-4">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}