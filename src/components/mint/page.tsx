import Navbar from "@/components/layout/Navbar";

export default function MintPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-5xl font-black text-white">
          Mint PAWC
        </h1>

        <p className="mt-3 text-zinc-400">
          Mint your PAWC inscription on Robinhood Chain.
        </p>
      </main>
    </>
  );
}