const activity = [
  {
    wallet: "0x91...AF2",
    amount: 1000,
    time: "2 sec ago",
  },
  {
    wallet: "0x72...B19",
    amount: 500,
    time: "8 sec ago",
  },
  {
    wallet: "0x61...E72",
    amount: 2500,
    time: "15 sec ago",
  },
  {
    wallet: "0x44...A91",
    amount: 800,
    time: "21 sec ago",
  },
];

export default function Activity() {
  return (
    <section className="mt-20">

      <h2 className="mb-8 text-3xl font-bold text-white">
        Live Activity
      </h2>

      <div className="space-y-4">

        {activity.map((item, index) => (

          <div
            key={index}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5"
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="font-semibold text-white">
                  {item.wallet}
                </p>

                <p className="mt-1 text-zinc-400">
                  Minted {item.amount} PAWC
                </p>

              </div>

              <span className="text-sm text-zinc-500">
                {item.time}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}