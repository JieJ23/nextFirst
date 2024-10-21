import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/about" className="text-white">to about</Link>
      <Link href="/contact" className="text-white">to contact</Link>
    </main>
  );
}
