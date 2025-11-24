"use client";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 bg-[#2B2B2B] text-white rounded-t-3xl mx-auto max-w-6xl px-6">
      <div className=" px-6 py-10 md:py-12 ">
        <div className=" bg-[#2B2B2B] rounded-t-3xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
            {/* Left: logo and mission */}
            <div>
              <div className="flex items-center gap-3">
                <Image src="/logo-white.webp" alt="Opinova Foundation" width={160} height={48} className="h-12 w-auto" />
              </div>
              <p className="mt-6 max-w-sm text-sm text-[#D9D9D9]">
                We partner with local changemakers to turn ideas into lasting opportunity for students, farmers,
                entrepreneurs and neighbourhoods.
              </p>
            </div>

            {/* Right: newsletter */}
            <div>
              <h3 className="text-xl font-semibold">Subscribe to our newsletter</h3>
              <div className="mt-4 flex w-full md:max-w-xl items-center rounded-full bg-white pl-5 pr-2 shadow-sm">
                <input
                  type="email"
                  placeholder="Enter your email "
                  className="w-full flex-1 bg-transparent py-3 md:text-sm text-xs text-[#333] outline-none placeholder:text-[#9CA3AF]"
                />
                <button className="rounded-full bg-[#F2792A] md:px-6 px-4 py-2 text-sm font-bold text-white hover:bg-[#e36427] transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 border-t border-white" />

          {/* Bottom links */}
          <div className="mt-6 flex flex-col gap-4 text-sm text-[#D9D9D9] md:flex-row md:items-center md:justify-between justify-center">

            <div className="flex md:flex-wrap flex-col md:flex-row justify-center items-center gap-6">
              <span>© {new Date().getFullYear()} Opinova Foundation 2025</span>
              <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}