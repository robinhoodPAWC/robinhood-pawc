export interface Transaction {
  hash: string;
}

export interface LatestTransactionsResponse {
  items: Transaction[];
}