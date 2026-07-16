"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange(value: string): void;
}

export default function ExplorerSearch({
  value,
  onChange,
}: Props) {
  return (
    <div className="mb-8">

      <div className="flex items-center rounded-2xl border border-zinc-800 bg-zinc-900 px-5">

        <Search
          size={18}
          className="text-zinc-500"
        />

        <input
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder="Search wallet or tx hash..."
          className="w-full bg-transparent px-4 py-4 text-white outline-none"
        />

      </div>

    </div>
  );
}