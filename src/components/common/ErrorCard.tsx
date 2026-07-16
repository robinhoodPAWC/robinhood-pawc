"use client";

interface ErrorCardProps {
  title?: string;
  message: string;
}

export default function ErrorCard({
  title = "Something went wrong",
  message,
}: ErrorCardProps) {
  return (
    <div className="rounded-2xl border border-red-700 bg-red-950/30 p-6">

      <h2 className="text-xl font-bold text-red-400">
        {title}
      </h2>

      <p className="mt-3 text-red-200">
        {message}
      </p>

    </div>
  );
}