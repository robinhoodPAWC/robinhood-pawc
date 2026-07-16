"use client";

import Link from "next/link";

import useLatestMints from "@/hooks/useLatestMints";

import useExplorerSearch from "@/hooks/useExplorerSearch";

import {
  formatToken,
  shortenAddress,
  shortenHash,
} from "@/lib/format";

type CopyButtonProps = {
  value: string;
};

function CopyButton({ value }: CopyButtonProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // ignore
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300 transition hover:border-lime-400 hover:text-white"
    >
      Copy
    </button>
  );
}

export default function RecentMints() {
  const { mints, loading } = useLatestMints();

  const { filtered } = useExplorerSearch(mints);

  if (loading) {
    return (
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Recent Mints
        </h2>

        <p className="text-zinc-400">
          Loading recent mint activity...
        </p>
      </div>
    );
  }

  if (mints.length === 0) {
    return (
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Recent Mints
        </h2>

        <p className="text-zinc-400">
          No mint activity found.
        </p>
      </div>
    );
  }

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-8 text-2xl font-bold text-white">
        Recent Mints
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {filtered.map((mint) => (

          <div
            key={mint.txHash}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-lime-400"
          >

            <div className="flex items-center justify-between">

              <h3 className="font-bold text-lime-400">
                <div className="flex items-center gap-2">

  <span className="font-bold text-lime-400">
    {shortenAddress(mint.address)}
  </span>

  <CopyButton value={mint.address} />

</div>
              </h3>

              <span className="text-xs text-zinc-500">
                {mint.timestamp}
              </span>

            </div>

            <div className="mt-5 space-y-3">

              <div className="flex justify-between">

                <span className="text-zinc-500">
                  Quantity
                </span>

                <span className="font-medium text-white">
                  {mint.quantity}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-zinc-500">
                  Reward
                </span>

                <span className="font-medium text-lime-400">
                  {formatToken(mint.reward)} PAWC
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-zinc-500">
                  Paid
                </span>

                <span className="font-medium text-white">
                  {formatToken(mint.paid)} ETH
                </span>

              </div>

            </div>

            <Link
              href={`https://robinhoodchain.blockscout.com/tx/${mint.txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm text-blue-400 transition hover:text-blue-300 hover:underline"
            >
              View Transaction ({shortenHash(mint.txHash)})
            </Link>

          </div>

        ))}

      </div>

    </section>
  );
}