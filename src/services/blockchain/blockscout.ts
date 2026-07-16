const API =
  "https://robinhoodchain.blockscout.com/api/v2";

export async function getLatestTransactions() {
  const res = await fetch(
    `${API}/transactions`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch transactions");
  }

  return res.json();
}

export async function getLatestBlocks() {
  const res = await fetch(
    `${API}/blocks`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blocks");
  }

  return res.json();
}