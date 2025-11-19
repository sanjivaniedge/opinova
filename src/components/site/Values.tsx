import Image from "next/image";
import Link from "next/link";

type ValueCard = {
  title: string;
  description: string;
  bg: string; // background color class
  iconSrc: string; // public/icons/* asset
  titleClass?: string; // optional extra classes for title color
};

const cards: ValueCard[] = [
  {
    title: "Respect",
    description:
      "We embrace the dignity and worth of every individual, whether student, farmer, entrepreneur or migrant worker.",
    bg: "bg-[#E9F7FB]",
    iconSrc: "/icons/i1.webp",
  },
  {
    title: "Integrity",
    description:
      "We build unbreakable trust so communities know their support is used fairly and for lasting good.",
    bg: "bg-[#FBECD8]",
    iconSrc: "/icons/i2.webp",
  },
  // {
  //   title: "Clarity",
  //   description:
  //     "Communities actively shape the solutions that affect them and turn shared understanding into shared success.",
  //   bg: "bg-[#EAF6EF]",
  //   iconSrc: "/icons/i3.webp",
  // },
  {
    title: "Transparency",
    description:
      "We share openly with donors and recipients, ensuring trust through clarity, honesty, and purpose in every contribution.",
    bg: "bg-[#FAD3BF]",
    iconSrc: "/icons/i4.webp",
  },
  {
    title: "Accessibility",
    description:
      "We stay open to all — across place, identity, and circumstance — because opportunity should never depend on who you are.",
    bg: "bg-[#E6E6E6]",
    iconSrc: "/icons/i5.webp",
    titleClass: "text-[#1F1F1F]",
  },
];

export function Values() {
  return (
    <section id="values" className="mx-auto max-w-6xl  md:py-16 ">
      <h2 className="text-center font-serif text-4xl font-bold md:text-5xl">Our VALUES (R.I.T.A.)</h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted-foreground">
        A fair, inclusive society where everyone has equal access to opportunity, power and resources to shape their
        future.
      </p>

      <div className="mt-10 flex  justify-center gap-8 md:gap-10 max-w-6xl mx-auto">
        {cards.map((c) => (
          <div
            key={c.title}
            className={`relative w-[320px]  md:w-[360px]  overflow-hidden rounded-2xl border border-[#E6E6E6] p-6 ${c.bg}`}>
            <div className="absolute left-6 top-6 grid  place-items-center rounded-full bg-white/35 shadow-inner ">
              <Image src={c.iconSrc} alt={c.title} width={80} height={80} />
            </div>
            <h3 className={`mt-24 font-serif text-3xl font-bold ${c.titleClass ?? ""}`}>{c.title}</h3>
            <p className="mt-6 text-sm text-[#3a3a3a] mb-10 opacity-90">
              {c.description}
            </p>
            {/* <div className="mt-6">
              <Link
                href="#"
                className="inline-block rounded-tl-xl rounded-bl-none rounded-tr-none rounded-br-xl border-2 border-[#F2792A] px-8 py-3 text-sm font-bold text-[#F2792A] transition-all duration-300 hover:bg-[#fff0e9]"
              >
                LEARN MORE
              </Link>

            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}