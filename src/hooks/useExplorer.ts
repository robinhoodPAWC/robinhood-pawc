"use client";

import { useEffect, useState } from "react";

import { getLatestTransactions } from "@/services/explorer";
import { Transaction } from "@/types/blockchain";

export default function useExplorer() {

  const [loading, setLoading] =
    useState(true);

  const [transactions, setTransactions] =
    useState<Transaction[]>([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {

      const data =
        await getLatestTransactions();

      setTransactions(data.items);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }
  }

  return {

    loading,

    transactions,

    refresh: load,

  };

}