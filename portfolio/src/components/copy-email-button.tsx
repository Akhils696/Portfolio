"use client";

import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
};

export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="chip-link border border-white/10 bg-slate-950/35 px-4 py-2 text-sm text-white hover:border-sky-300/40 hover:bg-sky-400/10"
    >
      {copied ? "Email copied" : "Copy email"}
    </button>
  );
}
