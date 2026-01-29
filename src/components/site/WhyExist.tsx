"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContributeModal } from "./ContributeModal";

export function WhyExist() {
  const [open, setOpen] = useState(false);
  return (
    <section id="exist">
      <div className="mx-auto max-w-6xl px-6 md:py-16 py-10">
        <div className="rounded-2xl border border-border bg-gradient-to-r from-[#FFE7D5] via-[#FFF4EB] to-[#FFD4B4] p-6 md:p-10">
          <div className="grid grid-cols-1 items-center md:gap-10 gap-6 md:grid-cols-2">
            <div>
              <div className="overflow-hidden rounded-xl border border-border">
                <Image src="/images/why2.webp" alt="Why we exist" width={640} height={480} className="w-[740px] h-[350px]" />
              </div>
            </div>
            <div className="">
              <h2 className="font-serif md:text-5xl text-4xl font-bold md:  mb-8">Why We EXIST</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Change hesitates at the edge of action.
<br/><br/>
                We step in softly — never to own, only to enable.
<br/><br/>
                We fill last gaps – turning intention into momentum.
<br/><br/>
                We create ripples – letting one spark travel through many hands.
<br/><br/>
                We build quiet cycles – where those touched by hope learn to pass it on.
<br/><br/>
                We are not the flame.
<br/><br/>
                We are the circle that keeps it glowing.
              </p>
              {/* <p className="mt-2 text-sm text-muted-foreground">
                We work with respect, transparency and a focus on solutions that last.
              </p> */}
              <ul className="mt-6 space-y-6 ">
                {[
                  {
                    title: "Opinova Foundation supports change where it quietly falters.",
                    desc: " We step in not to lead but to steady, bridging the last gap between effort and impact. By lending timely support, we help good work sustain itself—creating ripples of progress and keeping the shared light of hope glowing.",
                  },
                  // {
                  //   title: "We spark ripple effects:",
                  //   desc: "one skilled young woman, one affordable prototype, one healthy family lifts entire communities.",
                  // },
                  // {
                  //   title: "We build perpetual cycles:",
                  //   desc: "every life we touch is encouraged to pay it forward, just like Grameen Bank’s proven model.",
                  // },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    {/* <span className="mt-1 inline-flex p-[2px] h-4 w-4 items-center justify-center rounded-full bg-[#E6F7FB] ring-1 ring-[#2EB5D3]/40">
                      <Check className="h-4 w-4 text-[#2EB5D3]" />
                    </span> */}
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-[#3f3f3f]">{item.title}<br/> </span>
                      {item.desc}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center md:justify-start items-center">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="bg-primary mt-10 text-white cursor-pointer font-bold text-sm px-5 py-2 rounded-tr-none rounded-br-xl rounded-tl-xl shadow-sm hover:bg-[#e36427] transition-all md:text-md md:px-12 md:py-4"
                  aria-haspopup="dialog"
                  aria-expanded={open}
                >
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Form modal reused from contribute flow */}
      <ContributeModal open={open} onClose={() => setOpen(false)} />
      <div className="md:mt-8 mt-0 flex justify-center">
        <Image src="/deco/deco2.webp" alt="wave" width={1200} height={40} className="w-screen " />
      </div>
    </section>
  );
}
