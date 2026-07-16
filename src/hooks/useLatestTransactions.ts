"use client";

import { useEffect, useState } from "react";

export default function useLatestTransactions() {
  const [transactions, setTransactions] =
    useState([]);

  useEffect(() => {
    fetch("/api/blockchain/latest")
      .then((res) => res.json())
      .then(setTransactions);
  }, []);

  return transactions;
}