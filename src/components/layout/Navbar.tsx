"use client";

import Link from "next/link";

import WalletButton from "../wallet/WalletButton";

import useAdmin from "@/hooks/useAdmin";

import Image from "next/image";

export default function Navbar() {
  const { isOwner } = useAdmin();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
  src="/logo.png"
  alt="Robinhood PAWC"
  width={48}
  height={48}
  priority
  className="rounded-xl object-contain"
/>

          <div>

            <h1 className="text-xl font-black text-white">
              Robinhood PAWC
            </h1>

            <p className="text-xs text-zinc-500">
              Inscription Platform
            </p>

          </div>

        </Link>

        {/* Menu */}

        <nav className="hidden items-center gap-8 lg:flex">

          <Link
            href="/"
            className="text-zinc-400 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/mint"
            className="text-zinc-400 transition hover:text-white"
          >
            Mint
          </Link>

          <Link
            href="/explorer"
            className="text-zinc-400 transition hover:text-white"
          >
            Explorer
          </Link>

          <Link
            href="/leaderboard"
            className="text-zinc-400 transition hover:text-white"
          >
            Leaderboard
          </Link>

          <Link
            href="/wallet"
            className="text-zinc-400 transition hover:text-white"
          >
            My Wallet
          </Link>

          <Link
            href="/docs"
            className="text-zinc-400 transition hover:text-white"
          >
            Docs
          </Link>

         {isOwner && (
  <Link
    href="/admin"
    className="text-zinc-400 transition hover:text-white"
  >
    Admin
  </Link>
)}

        </nav>

        {/* Wallet */}

        <WalletButton />

      </div>

    </header>
    
  );

}
