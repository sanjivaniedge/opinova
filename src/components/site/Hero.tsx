import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative">
      {/* Decorative wave top */}
      <div>
        <div className="pointer-events-none absolute top-6   w-full  justify-start">
          <Image src="/deco/deco1.webp" alt="wave" width={408} height={64} />
        </div>
        <div className="mx-auto max-w-6xl px-6 pt-32 text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-[0.06em] md:text-5xl">EMPOWERING COMMUNITIES.</h2>
          <h2 className="mt-2 font-serif italic text-3xl text-accent md:text-5xl">Inspiring Change.</h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm text-muted-foreground ">
            Building capacity, confidence, and opportunity so every empowered life and community sparks change for others.
          </p>
          <div className="mt-6 flex justify-center items-center flex-wrap gap-4">
            {/* <button className="bg-secondary text-primary font-bold text-sm px-5 py-2 rounded-tr-none rounded-br-xl rounded-tl-xl shadow-sm md:text-md md:px-12 md:py-4">
                  DONATE
              </button> */}
            {/* <button className="bg-primary text-white font-bold text-sm px-5 py-2 rounded-tr-none rounded-br-xl rounded-tl-xl shadow-sm hover:bg-[#e36427] transition-all md:text-md md:px-12 md:py-4">
                GET INVOLVED
            </button> */}
          </div>

        </div>
        {/* Hero image with floating stats */}
        <div className="mx-auto mt-10 max-w-6xl px-6 ">
          <div className="relative rounded-2xl  pb-[88px] overflow-hidden ">
            <Image src="/images/banner.webp" alt="Chalkboard" width={1200} height={700} className="h-auto w-full rounded-2xl" />
            {/* floating stats */}
            <div className="absolute z-20 pb-10 md:bottom-18 font-bold bottom-14 left-1/2 flex -translate-x-1/2 translate-y-1/2 md:gap-6 gap-2 ">
              {[
                { value: "370+", label: "migrant workers\nscreened", color: "text-accent" },
                { value: "90+", label: "student prototypes\n& trainings", color: "text-[#64C58B]" },
                { value: "100+", label: "young women\ntrained", color: "text-[#F0A74A]" },
              ].map((s) => (
                <div
                  key={s.value}
                  className="flex md:h-[169px] md:w-[192px] w-[90px] h-[120px] flex-col items-center justify-center rounded-[20px] p-2 border border-border bg-white shadow-[0_6px_12px_rgba(0,0,0,0.12)]"
                >
                  <div className={`font-warblerserif md:text-5xl text-2xl font-bold leading-none ${s.color}`}>{s.value}</div>
                  <div className="mt-2 md:w-40 text-center md:text-[13px] text-xs leading-tight text-neutral-800 whitespace-pre-line">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}