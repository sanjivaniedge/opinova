"use client";
import { useState } from "react";

type DonateModalProps = {
  open: boolean;
  onClose: () => void;
};

export function DonateModal({ open, onClose }: DonateModalProps) {
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
    // Basic client validation (required fields)
    if (!name || !email || !linkedin || !country || !phone || !city) {
      setStatus({ type: "error", msg: "Please fill all required fields." });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, linkedin, country, phone, city, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "ok", msg: "Thanks! We’ll reach out shortly." });
        resetForm();
      } else {
        setStatus({ type: "error", msg: data.error || "Something went wrong." });
      }
    } catch (err) {
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
          <h3 className="font-serif text-2xl">Donate</h3>
          <button aria-label="close" onClick={onClose} className="rounded-full px-3 py-1 text-sm text-neutral-600 hover:bg-neutral-100">✕</button>
        </div>
        <p className="mt-1 text-sm text-neutral-700">Fill out the form and we’ll email you donation instructions.</p>

        <form onSubmit={submit} className="mt-4 space-y-3">
          <div>
            <label className="block text-sm font-medium">Full name <span className="text-red-600">*</span></label>
            <input required aria-required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email <span className="text-red-600">*</span></label>
            <input required aria-required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">LinkedIn URL <span className="text-red-600">*</span></label>
            <input required aria-required value={linkedin} onChange={(e) => setLinkedin(e.target.value)} type="url" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="https://www.linkedin.com/in/your-profile" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Country <span className="text-red-600">*</span></label>
              <input required aria-required value={country} onChange={(e) => setCountry(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="Country" />
            </div>
            <div>
              <label className="block text-sm font-medium">City <span className="text-red-600">*</span></label>
              <input required aria-required value={city} onChange={(e) => setCity(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="City" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Phone number <span className="text-red-600">*</span></label>
            <input required aria-required value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="e.g., +91 9876543210" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message (optional)</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 text-sm" rows={3} placeholder="Any notes" />
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
