export async function getStats() {
  const res = await fetch("/api/stats");

  if (!res.ok) {
    throw new Error("Failed to fetch stats");
  }

  return res.json();
}

export async function getLatestMint() {
  const res = await fetch("/api/latest");

  if (!res.ok) {
    throw new Error("Failed to fetch latest mint");
  }

  return res.json();
}