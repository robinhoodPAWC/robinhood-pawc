export default function ProgressBar() {
  const progress = 72;

  return (
    <section className="mx-auto mt-10 max-w-6xl px-6">

      <div className="mb-2 flex justify-between">

        <span className="text-zinc-400">
          Mint Progress
        </span>

        <span className="font-bold text-lime-400">
          {progress}%
        </span>

      </div>

      <div className="h-4 overflow-hidden rounded-full bg-zinc-800">

        <div
          className="h-full rounded-full bg-lime-500 transition-all"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </section>
  );
}