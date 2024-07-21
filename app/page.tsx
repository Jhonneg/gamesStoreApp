import Banner from "@/components/banner.client";
import Link from "next/link";

export default function Home() {
  const coffeeStoreId = "meme-coffee";
  return (
    <main className="mb-56">
      <div className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
        <Link href={`/store/${coffeeStoreId}`}>Meme coffee</Link>
      </div>
    </main>
  );
}
