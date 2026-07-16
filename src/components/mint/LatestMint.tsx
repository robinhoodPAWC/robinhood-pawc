const data = [
  {
    wallet: "0x81...b19",
    amount: "1000 PAWC",
    time: "2 sec ago",
  },
  {
    wallet: "0x72...6ef",
    amount: "500 PAWC",
    time: "5 sec ago",
  },
  {
    wallet: "0x91...e43",
    amount: "250 PAWC",
    time: "12 sec ago",
  },
];

export default function LatestMint() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Latest Mint
      </h2>

      <div className="space-y-4">

        {data.map((item, index) => (
          <div
            key={index}
            className="border-b border-zinc-800 pb-3"
          >
            <p className="font-semibold">
              {item.wallet}
            </p>

            <p className="text-zinc-400">
              {item.amount}
            </p>

            <p className="text-sm text-zinc-500">
              {item.time}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}