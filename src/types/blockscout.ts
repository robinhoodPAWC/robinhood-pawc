export interface BlockscoutTransaction {
  hash: string;
  value: string;
  timestamp: string;
  from?: {
    hash?: string;
  };
}

export interface BlockscoutResponse {
  items: BlockscoutTransaction[];
}