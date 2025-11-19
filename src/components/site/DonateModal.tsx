"use client";
import { useState } from "react";

type DonateModalProps = {
  open: boolean;
  onClose: () => void;
};

export function DonateModal({ open, onClose }: DonateModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | { type: "ok" | "error"; msg: string }>(null);
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setAmount("");
    setMessage("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    // Basic client validation
    if (!name || !email) {
      setStatus({ type: "error", msg: "Please provide your name and email." });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, amount, message }),
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
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl">Donate</h3>
          <button aria-label="close" onClick={onClose} className="rounded-full px-3 py-1 text-sm text-neutral-600 hover:bg-neutral-100">✕</button>
        </div>
        <p className="mt-1 text-sm text-neutral-700">Fill out the form and we’ll email you donation instructions.</p>

        <form onSubmit={submit} className="mt-4 space-y-3">
          <div>
            <label className="block text-sm font-medium">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">Amount (optional)</label>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 text-sm" placeholder="e.g., ₹1000" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message (optional)</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2 text-sm" rows={3} placeholder="Any notes" />
          </div>

          {status && (
            <div className={`${status.type === "ok" ? "text-green-700" : "text-red-700"} text-sm`}>{status.msg}</div>
          )}

          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="rounded-md border px-4 py-2 text-sm">Cancel</button>
            <button type="submit" disabled={loading} className="bg-primary text-white font-bold text-sm px-5 py-2 rounded-tr-none rounded-br-xl rounded-tl-xl shadow-sm hover:bg-[#e36427] transition-all disabled:opacity-60">
              {loading ? "Sending…" : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}