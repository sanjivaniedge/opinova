import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const team = [
  { role: "FOUNDER", name: "Name", img: "https://picsum.photos/id/1005/460/300", tint: "bg-[#E9F7FB]" },
  { role: "PROJECT COORDINATOR", name: "Name", img: "https://picsum.photos/id/1011/460/300", tint: "bg-[#ECF8F0]" },
  { role: "BOARD & ADVISORS", name: "Name", img: "https://picsum.photos/id/1012/460/300", tint: "bg-[#F3F4F6]" },
];

export function Team() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="team">

      <h2 className="text-center font-serif text-4xl font-bold md:text-5xl">Our TEAM</h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
      A small, passionate team with experience in education, engineering and community development supported by volunteers and advisors.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {team.map((m) => (
          <div key={m.role} className="overflow-hidden rounded-2xl border border-border">
            <Image src={m.img} alt={m.role} width={460} height={300} className="w-full" />
            <div className={`p-6 ${m.tint}`}>
              <Badge variant="outline" className="text-xs">{m.role}</Badge>
              <div className="mt-2 font-serif text-2xl">{m.name}</div>
              <div className="mt-4 flex items-center gap-3 text-muted-foreground">
                <a
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
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}