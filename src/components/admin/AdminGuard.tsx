"use client";

import useAdmin from "@/hooks/useAdmin";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOwner } = useAdmin();

  if (!isOwner) {
    return null;
  }

  return children;
}