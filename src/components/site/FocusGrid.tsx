"use client";
import { useState } from "react";
import Image from "next/image";
import { ContributeModal } from "./ContributeModal";

export function FocusGrid() {
  const [contributeOpen, setcontributeOpen] = useState(false);
  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="focus">
      {/* Heading */}
      <div className="text-center">
        <h2 className="font-serif text-4xl font-bold md:text-5xl hidden md:block">
          What We  <span className="tracking-wider">[ FOCUS ]</span> On
        </h2>
        <h2 className="font-serif text-4xl font-bold md:text-5xl md:hidden block">
          What We <br /> <span className="tracking-wider">[ FOCUS ]</span> On
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
          We invest where the benefit reaches whole communities.
        </p>
      </div>


      {/* Grid: use 3 columns on md and above, then control spans */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">

        <div className="relative h-[380px] md:col-span-1 rounded-2xl border border-[#BEE6F5] bg-[#66C3E7] p-6 text-white shadow-sm flex flex-col items-start justify-center md:text-left text-center">
          <div className="grid h-16 w-16 place-items-center mb-6">
            <Image src="/icons/i7.webp" alt="skills" width={120} height={120} />
          </div>
          <h3 className="font-serif text-2xl font-semibold">Learning & Skills</h3>
          <p className="mt-3 text-sm text-black max-w-prose">
            Knowledge finds meaning when it meets opportunity.
            We help learning travel the last mile to livelihood.
            Each new skill becomes a spark for change.
          </p>
        </div>


        {/* 2) Rural Livelihood — wide on right (spans 2 columns) */}
        <div className="relative h-[380px] md:col-span-2 overflow-hidden rounded-2xl border border-[#E6E6E6] shadow-sm flex md:items-end items-center md:justify-start justify-center">
          <Image
            src="/images/focus.webp"
            alt="Rural Livelihood"
            width={1200}
            height={800}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          {/* Centered content */}
          <div className="relative z-10 px-6 text-white text-left md:max-w-[70%]">
            <h3 className="font-serif text-2xl font-semibold">Health & Well-being</h3>
            <p className="mt-3 pb-10 text-sm text-white/90 leading-relaxed">
              A healthy life anchors every journey.
              We bring care where it’s most needed,
              so effort and hope can continue without pause.
            </p>
          </div>
        </div>

        {/* 3) Community Engagement — wide on left (spans 2 columns) */}
        <div className="relative h-[380px] md:col-span-2 overflow-hidden rounded-2xl border border-[#E6E6E6] shadow-sm flex items-end justify-start">
          <Image
            src="/images/focus22.webp"
            alt="Community Engagement"
            width={1200}
            height={800}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          {/* Centered content */}
          <div className="relative z-10 px-6 text-white text-left md:max-w-[70%]">
            <h3 className="font-serif text-2xl font-semibold">Community Resilience</h3>
            <p className="mt-3 pb-10 text-sm text-white/90 leading-relaxed">
              Change endures when people stand together.
              We connect donors, mentors, and volunteers with grassroots efforts — building trust, capacity, and steady support that keep good work alive.
            </p>
          </div>
        </div>

        {/* 4) Entrepreneurship — narrow on right */}
        <div className="relative h-[380px] md:col-span-1 rounded-2xl border border-[#BFE6D2] bg-[#76D3A3] p-6 text-white shadow-sm flex flex-col items-start justify-center md:text-left text-center">
          <div className="grid h-16 w-16 place-items-center mb-10">
            <Image src="/icons/i6.webp" alt="entrepreneurship" width={80} height={80} />
          </div>
          <h3 className="font-serif text-2xl font-semibold">Entrepreneurship & Innovation</h3>
          <p className="mt-3 text-sm text-black leading-relaxed">
            New ideas light the path ahead.
            We stand beside those who build and test them,
            turning intent into opportunity for many.
          </p>
        </div>

      </div>
      <div className="flex justify-center mt-14">
        <button
          type="button"
          onClick={() => setcontributeOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={contributeOpen}
          className="bg-primary text-white font-bold text-sm px-5 py-2 rounded-tr-none rounded-br-xl rounded-tl-xl shadow-sm hover:bg-[#e36427] transition-all md:text-md md:px-12 md:py-4 "
        >
          GET INVOLVED
        </button>
      </div>
      <ContributeModal open={contributeOpen} onClose={() => setcontributeOpen(false)} />
    </section>
  );
}
