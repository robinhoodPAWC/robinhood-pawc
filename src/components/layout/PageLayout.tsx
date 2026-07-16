import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

export default function PageLayout({
  children,
}: Props) {
  return (
    <>
      <Navbar />

      <main className="mx-auto min-h-screen max-w-7xl px-6 py-12">

        {children}

      </main>

      <Footer />

    </>
  );
}