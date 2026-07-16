"use client";

import Link from "next/link";

import useMyMints from "@/hooks/useMyMints";

import {
  formatToken,
  shortenHash,
} from "@/lib/format";

export default function MyMintHistory() {
  const {
    myMints,
    loading,
  } = useMyMints();

  if (loading) {
    return (
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        Loading history...
      </div>
    );
  }

  if (myMints.length === 0) {
    return (
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <h2 className="text-2xl font-bold text-white">
          My Mint History
        </h2>

        <p className="mt-6 text-zinc-500">
          You haven&apos;t minted any PAWC yet.
        </p>

      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <h2 className="mb-8 text-2xl font-bold text-white">
        My Mint History
      </h2>

      <div className="space-y-5">

        {myMints.map((mint, index) => (

          <div
            key={mint.txHash}
            className="rounded-2xl border border-zinc-800 bg-black p-6"
          >

            <h3 className="font-bold text-lime-400">
              Mint #{myMints.length - index}
            </h3>

            <div className="mt-5 space-y-2">

              <div className="flex justify-between">

                <span className="text-zinc-500">
                  Reward
                </span>

                <span className="text-white">
                  {formatToken(mint.reward)} PAWC
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-zinc-500">
                  Paid
                </span>

                <span className="text-white">
                  {formatToken(mint.paid)} ETH
                </span>

              </div>

            </div>

            <Link
              href={`https://robinhoodchain.blockscout.com/tx/${mint.txHash}`}
              target="_blank"
              className="mt-5 inline-block text-blue-400 hover:underline"
            >
              View Transaction ({shortenHash(mint.txHash)})
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}