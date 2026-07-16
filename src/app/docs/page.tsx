import Navbar from "@/components/layout/Navbar";

export default function DocsPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-5xl font-black text-white">
          Documentation
        </h1>

        <p className="mt-3 text-zinc-400">
          Learn how Robinhood PAWC works.
        </p>
      </main>
    </>
  );
}