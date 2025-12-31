"use client";
import { useState } from "react";

type ContributeModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ContributeModal({ open, onClose }: ContributeModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | { type: "ok" | "error"; msg: string }>(null);
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setLinkedin("");
    setCountry("");
    setPhone("");
    setCity("");
    setMessage("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!name || !email || !linkedin || !country || !phone || !city) {
      setStatus({ type: "error", msg: "Please fill all required fields." });
      return;
    }
    setLoading(true);
    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("linkedin", linkedin);
    form.append("country", country);
    form.append("city", city);
    form.append("phone", phone);
    form.append("message", message);
    // console.log([...form.entries()]);   // uncomment to debug payload
    try {
      const res = await fetch("https://formspree.io/f/xdkvkoen", {
        method: "POST",
        body: form,
        headers: {
          Accept: "application/json",
          "X-Requested-With": "xhr", // helps Formspree identify AJAX
        },
      });
      if (res.ok) {
        setStatus({ type: "ok", msg: "Thanks! We’ll reach out shortly." });
        resetForm();
      } else {
        setStatus({ type: "error", msg: "Submission failed. Please try again." });
      }
    } catch {
      setStatus({ type: "error", msg: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute cursor-pointer inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl">contribute</h3>
          <button aria-label="close" onClick={onClose} className="rounded-full px-3 py-1 text-sm text-neutral-600 hover:bg-neutral-100">✕</button>
        </div>
        <p className="mt-1 text-sm text-neutral-700">Fill out the form and we’ll email you donation instructions.</p>

        <form onSubmit={submit} className="mt-4 space-y-3">
          <div>
            <label className="block text-sm font-medium">Full name <span className="text-red-500">*</span></label>
            <input name="name" value={name} onChange={(e) => setName(e.target.value)} required aria-required="true" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email <span className="text-red-500">*</span></label>
            <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required aria-required="true" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">LinkedIn URL <span className="text-red-500">*</span></label>
            <input name="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} required aria-required="true" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="https://linkedin.com/in/you" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Country <span className="text-red-500">*</span></label>
              <input name="country" value={country} onChange={(e) => setCountry(e.target.value)} required aria-required="true" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="India" />
            </div>
            <div>
              <label className="block text-sm font-medium">City <span className="text-red-500">*</span></label>
              <input name="city" value={city} onChange={(e) => setCity(e.target.value)} required aria-required="true" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="Lucknow" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Phone number <span className="text-red-500">*</span></label>
            <input name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required aria-required="true" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="+91 98765 43210" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message (optional)</label>
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 text-sm" rows={3} placeholder="Any notes" />
          </div>

          {status && (
            <div className={`${status.type === "ok" ? "text-green-700" : "text-red-700"} text-sm`}>{status.msg}</div>
          )}

          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="rounded-md cursor-pointer border px-4 py-2 text-sm">Cancel</button>
            <button type="submit" disabled={loading} className="bg-primary cursor-pointer text-white font-bold text-sm px-5 py-2 rounded-tr-none rounded-br-xl rounded-tl-xl shadow-sm hover:bg-[#e36427] transition-all disabled:opacity-60">
              {loading ? "Sending…" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
