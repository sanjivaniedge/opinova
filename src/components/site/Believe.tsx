import Image from "next/image";

export function Believe() {
  return (
    <section id="believe" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="relative text-center">
        <h2 className="font-serif text-4xl font-bold tracking-wide md:text-5xl">What We BELIEVE</h2>

        <p className="mt-6 font-warblerserif text-2xl italic md:text-[28px]">
          “Give a man a fish and you feed him for a day.
        </p>
        <p className="font-warblerserif text-2xl italic md:text-[28px]">
          Teach a man to fish and you feed him for a lifetime.”
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-sm text-[#6f6f6f]">
          At Opinova, we back the final mile. We believe true impact happens when support meets action. That’s why we
          empower those ready to rise with skills, seed funding, or belief.
        </p>

        {/* Fish watermark on the right for larger screens */}
        <Image
          src="/deco/fish.webp"
          alt="fish"
          width={280}
          height={160}
          className="pointer-events-none absolute right-20 top-16 hidden md:block"
        />

        {/* Decorative wave */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/deco/deco3.webp"
            alt="wave"
            width={600}
            height={40}
            className="h-auto w-[560px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}