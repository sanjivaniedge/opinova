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
          <h2 className="font-serif text-4xl font-semibold tracking-[0.06em] md:text-5xl">EMPOWERING COMMUNITIES.</h2>
          <h2 className="mt-2 font-serif italic text-2xl text-accent md:text-5xl">Inspiring Change.</h2>
          <p className="mx-auto mt-6 max-w-xl text-center text-sm text-muted-foreground ">
            We partner with local changemakers to turn ideas into lasting 
opportunity for students, farmers, entrepreneurs and neighbourhoods.
          </p>
          <div className="mt-6 flex justify-center items-center flex-wrap gap-4">
            <button className="bg-secondary text-primary font-bold text-sm px-5 py-2 rounded-tr-none rounded-br-xl rounded-tl-xl shadow-sm md:text-md md:px-12 md:py-4">
              GET INVOLVED
            </button>
            <button className="bg-primary text-white font-bold text-sm px-5 py-2 rounded-tr-none rounded-br-xl rounded-tl-xl shadow-sm hover:bg-[#e36427] transition-all md:text-md md:px-12 md:py-4">
              DONATE
            </button>
          </div>

        </div>
        {/* Hero image with floating stats */}
        <div className="mx-auto mt-10 max-w-6xl px-6">
          <div className="relative rounded-2xl border border-border pb-[88px]">
            <Image src="/images/banner.webp" alt="Chalkboard" width={1200} height={700} className="h-auto w-full rounded-2xl" />
            {/* floating stats */}
            <div className="absolute z-20 bottom-20 left-1/2 flex -translate-x-1/2 translate-y-1/2 gap-6">
              {[
                { value: "370+", label: "migrant workers\nscreened", color: "text-accent" },
                { value: "90+", label: "student prototypes\n& trainings", color: "text-[#64C58B]" },
                { value: "100+", label: "young women\ntrained", color: "text-[#F0A74A]" },
              ].map((s) => (
                <div
                  key={s.value}
                  className="flex h-[169px] w-[192px] flex-col items-center justify-center rounded-[20px] border border-border bg-white shadow-[0_6px_12px_rgba(0,0,0,0.12)]"
                >
                  <div className={`font-warblerserif text-5xl font-bold leading-none ${s.color}`}>{s.value}</div>
                  <div className="mt-2 w-40 text-center text-[13px] leading-tight text-neutral-800 whitespace-pre-line">
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