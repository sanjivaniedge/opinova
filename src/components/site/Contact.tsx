import { FacebookIcon, InstagramIcon, LinkedinIcon,} from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:py-16" id="contact">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 rounded-2xl md:h-[500px] bg-[#4FC1E4]">
        <div className="flex flex-col justify-center  p-8">
          <h2 className=" font-serif text-4xl font-bold md:text-5xl">Get in TOUCH</h2>
          <div className="mt-6 space-y-3 text-sm ">
            <div className="mb-6">
              <div className="text-white font-semibold">ADDRESS:</div>
              <div className="text-white">J2 Leisure Town, Hadapsar, Pune, India</div>
            </div>
            <div className="mb-6">
              <div className="text-white font-semibold">EMAIL:</div>
              <div className="text-white">contact@opinovafoundation.com</div>
            </div>
            <div className="mb-6">
              <div className="text-white font-semibold">PHONE:</div>
              <div className="text-white">+91-9405678954</div>
            </div>
            <div className=" text-white font-semibold">
              <div className="mb-2">Follow us on social media</div>
              <div className="flex gap-8">
                <Link href="https://www.facebook.com/opinovafoundation" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <FacebookIcon className="h-8 w-8 text-[#4FC1E4]" strokeWidth={2.5} />
                  </span>
                </Link>
                <Link href="https://www.instagram.com/opinovafoundation" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <InstagramIcon className="h-8 w-8 text-[#4FC1E4]" strokeWidth={2.5} />
                  </span>
                </Link>
                <Link href="https://www.linkedin.com/company/opinova-foundation" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                    <LinkedinIcon className="h-8 w-8 text-[#4FC1E4]" strokeWidth={2.5} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Map"
            src="https://www.google.com/maps?q=Hadapsar+Pune+India&output=embed"
            className="md:h-[500px] h-[250px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}