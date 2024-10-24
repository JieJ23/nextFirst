const runtime = "edge"

import Link from "next/link";
import { Footer } from "./footer";
import { Header } from "./header";
import Cards from "./CardComponent";

export default async function Home() {
  return (
    <main className="flex min-h-lvh flex-col items-center justify-between font-serif">
      <Header />
      <Cards />
      <Footer />
    </main>
  );
}
