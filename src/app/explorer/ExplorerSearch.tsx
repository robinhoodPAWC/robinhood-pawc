"use client";

import { useState } from "react";

export default function ExplorerSearch() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="text-3xl font-bold text-white">
        Explorer
      </h2>

      <p className="mt-2 text-zinc-500">
        Search wallet or transaction
      </p>

      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="0x..."
        className="mt-8 w-full rounded-xl border border-zinc-700 bg-black p-4 text-white outline-none focus:border-lime-400"
      />

      <button
        className="mt-6 w-full rounded-xl bg-lime-400 py-4 font-bold text-black hover:bg-lime-300"
      >
        Search
      </button>

    </div>
  );
}