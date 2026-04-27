"use client";

import { useState } from "react";
import { buildEmailHref, type EmailClient } from "@/lib/email-links";

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailClient, setEmailClient] = useState<EmailClient>("default");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Portfolio inquiry from ${form.name || "a recruiter"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    const target = buildEmailHref({
      to: email,
      client: emailClient,
      subject,
      body,
    });

    if (emailClient === "default") {
      window.location.href = target;
      return;
    }

    window.open(target, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-[1.5rem] p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="text-[var(--color-text-soft)]">Your name</span>
          <input
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-white outline-none focus:border-sky-300/40"
            placeholder="A recruiter, collaborator, or founder"
          />
        </label>
        <label className="space-y-2 text-sm">
          <span className="text-[var(--color-text-soft)]">Your email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-white outline-none focus:border-sky-300/40"
            placeholder="name@company.com"
          />
        </label>
      </div>
      <label className="mt-4 block space-y-2 text-sm">
        <span className="text-[var(--color-text-soft)]">Message</span>
        <textarea
          required
          rows={6}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-white outline-none focus:border-sky-300/40"
          placeholder="Tell me about the role, project scope, or research direction."
        />
      </label>
      <label className="mt-4 block space-y-2 text-sm">
        <span className="text-[var(--color-text-soft)]">Open email in</span>
        <select
          value={emailClient}
          onChange={(event) => setEmailClient(event.target.value as EmailClient)}
          className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-sky-300/40"
        >
          <option value="default">Default mail app</option>
          <option value="gmail">Gmail</option>
          <option value="outlook">Outlook</option>
        </select>
      </label>
      <button
        type="submit"
        className="button-primary mt-5 w-full bg-[linear-gradient(90deg,#7dd3fc_0%,#34d399_52%,#f5c451_100%)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(125,211,252,0.28)] hover:scale-[1.02] sm:w-auto"
      >
        Continue to email
      </button>
    </form>
  );
}
