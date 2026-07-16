import { apiFetch } from "@/lib/api";
import { LatestTransactionsResponse } from "@/types/blockchain";

export async function getLatestTransactions() {
  return apiFetch<LatestTransactionsResponse>(
    "/api/blockchain/latest"
  );
}