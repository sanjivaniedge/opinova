"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Bharat Ki Beti",
    badge: "March 2024",
    description:
      "Skills and technology training for young women pursuing engineering—removing financial barriers and improving employability.",
    image: "https://picsum.photos/id/1043/640/420",
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
      <div className="relative mt-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
        <button aria-label="prev" onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-secondary px-3 py-2">‹</button>
        <button aria-label="next" onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-secondary px-3 py-2">›</button>
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border">
            <Image src={s.image} alt={s.title} width={640} height={420} className="w-full" />
          </div>
          <div>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs">{s.badge}</span>
            <h3 className="mt-3 font-serif text-2xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {s.description}
            </p>
                 <button className="bg-primary mt-10 text-white font-bold text-sm px-5 py-2 rounded-tr-none rounded-br-xl rounded-tl-xl shadow-sm hover:bg-[#e36427] transition-all md:text-md md:px-12 md:py-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}