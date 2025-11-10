export function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16" id="contact">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 h-[500px] bg-[#4FC1E4]">
        <div className="flex flex-col justify-center  p-8">
          <h2 className=" font-serif text-4xl font-bold md:text-5xl">Get in TOUCH</h2>
          <div className="mt-6 space-y-3 text-sm ">
            <div>
              <div className="text-white font-semibold">ADDRESS:</div>
              <div className="text-white">J2 Leisure Town, Hadapsar, Pune, India</div>
            </div>
            <div>
              <div className="text-white font-semibold">EMAIL:</div>
              <div className="text-white">contact@opinovafoundation.com</div>
            </div>
            <div>
              <div className="text-white font-semibold">PHONE:</div>
              <div className="text-white">+91-9405678954</div>
            </div>
            <div className="pt-4 text-white font-semibold">Follow us on social media</div>
          </div>
        </div>
        <div className="overflow-hidden rounded-l-2xl border border-border">
          <iframe
            title="Map"
            src="https://www.google.com/maps?q=Hadapsar+Pune+India&output=embed"
            className="h-[500px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}