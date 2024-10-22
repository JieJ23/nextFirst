import Link from "next/link";
import { Footer } from "./footer";
import { Header } from "./header";

export default async function Home() {
  return (
    <main className="flex min-h-lvh flex-col items-center justify-between font-serif">
      <Header />
      <Link href="/about" className="text-white text-[24px] bg-[#db131369] rounded-xl p-4">Youtube</Link>
      <Link href="/contact" className="text-white text-[24px] bg-[#590c987d] rounded-xl p-4">Twitch</Link>
      <Footer />
    </main>
  );
}
