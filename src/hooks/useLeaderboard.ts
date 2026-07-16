"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import type {
  LeaderboardEntry,
} from "@/types/leaderboard";

export default function useLeaderboard() {
  const [items, setItems] =
    useState<LeaderboardEntry[]>([]);

  const [loading, setLoading] =
    useState(true);

  async function load() {
    try {
      const { data } =
        await axios.get(
          "/api/leaderboard"
        );

      setItems(data.items);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();

    const timer =
      setInterval(load, 15000);

    return () =>
      clearInterval(timer);
  }, []);

  return {
    items,
    loading,
  };
}