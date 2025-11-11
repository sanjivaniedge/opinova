"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const links = [
    { href: "#", label: "Home", bold: true },
    { href: "#programs", label: "Programs" },
    { href: "#impact", label: "Impact" },
    { href: "#team", label: "Team" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-4 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-secondary/80 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-secondary/70 md:px-8 md:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.webp" alt="Opinova Foundation" width={1200} height={100} className="h-12 w-40 md:h-12" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className={`${l.bold ? "font-semibold text-black" : "text-foreground hover:text-black"}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button aria-label="Open menu" variant="outline" className="h-10 w-10 rounded-full p-0 md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <Link href="/" className="flex items-center gap-3">
                  <Image src="/logo.webp" alt="Opinova Foundation" width={1200} height={100} className="h-14 w-40 " />
                </Link>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-3">
                {links.map((l) => (
                  <SheetClose asChild key={l.label}>
                    <Link href={l.href} className={`rounded-md px-3 py-2 ${l.bold ? "font-semibold" : "text-muted-foreground"}`}>
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
                <div className=" flex justify-center items-center">
                <button className=" bg-primary text-white font-bold text-sm px-5 py-2 rounded-tr-none rounded-br-xl rounded-tl-xl shadow-sm hover:bg-[#e36427] transition-all md:text-lg md:px-12 md:py-4">
                  DONATE
                </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Donate */}
          <button className="hidden md:block bg-primary text-white font-bold text-sm px-5 py-2 rounded-tr-none rounded-br-xl rounded-tl-xl shadow-sm hover:bg-[#e36427] transition-all md:text-lg md:px-12 md:py-4">
            DONATE
          </button>
        </div>
      </div>
    </header>
  );
}