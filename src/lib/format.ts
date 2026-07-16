import { formatEther } from "viem";

export function formatToken(value: string) {
  return Number(
    formatEther(BigInt(value))
  ).toLocaleString();
}

export function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function shortenHash(hash: string) {
  return `${hash.slice(0, 10)}...${hash.slice(-8)}`;
}