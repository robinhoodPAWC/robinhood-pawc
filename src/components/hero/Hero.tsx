"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">

      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-8">

        <div className="max-w-3xl">

          <span className="rounded-full border border-lime-500/30 bg-lime-500/10 px-5 py-2 text-sm text-lime-400">
            Built on Robinhood Chain
          </span>

          <h1 className="mt-8 text-7xl font-black leading-tight text-white">

            Mint

            <span className="text-lime-400">

              {" "}PAWC

            </span>

            <br />

            Without Limits

          </h1>

          <p className="mt-8 text-xl leading-9 text-zinc-400">

            Robinhood PAWC is the easiest way to mint,
            track and explore inscriptions on Robinhood Chain.

          </p>

          <div className="mt-10 flex gap-4">

            <button className="rounded-xl bg-lime-400 px-8 py-4 font-bold text-black">

              Start Minting

            </button>

            <button className="rounded-xl border border-zinc-700 px-8 py-4 text-white">

              Explorer

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}