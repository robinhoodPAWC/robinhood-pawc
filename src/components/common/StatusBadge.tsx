interface Props {
  active: boolean;
}

export default function StatusBadge({
  active,
}: Props) {
  return (
    <span
      className={
        active
          ? "rounded-full bg-lime-500/20 px-3 py-1 text-lime-400"
          : "rounded-full bg-red-500/20 px-3 py-1 text-red-400"
      }
    >
      {active ? "Active" : "Paused"}
    </span>
  );
}