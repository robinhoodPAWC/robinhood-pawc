"use client";

import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: ReactNode;
  icon?: ReactNode;
}

export default function StatCard({
  title,
  value,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-lime-400">

      <div className="flex items-center justify-between">

        <p className="text-sm text-zinc-500">
          {title}
        </p>

        {icon}

      </div>

      <div className="mt-5 text-3xl font-bold text-white">
        {value}
      </div>

    </div>
  );
}