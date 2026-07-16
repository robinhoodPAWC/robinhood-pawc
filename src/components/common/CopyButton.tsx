"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

import { toast } from "sonner";

interface CopyButtonProps {
  value: string;
}

export default function CopyButton({
  value,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      toast.success("Copied to clipboard");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      toast.error("Failed to copy");
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="rounded-lg p-2 transition hover:bg-zinc-800"
      aria-label="Copy"
    >
      {copied ? (
        <Check
          size={18}
          className="text-lime-400"
        />
      ) : (
        <Copy
          size={18}
          className="text-zinc-400"
        />
      )}
    </button>
  );
}