"use client";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-10">

      <h1 className="text-4xl font-black text-white">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-2 text-zinc-500">
          {subtitle}
        </p>
      )}

    </div>
  );
}