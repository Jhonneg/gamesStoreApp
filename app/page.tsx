import Banner from "@/components/banner.client";
import CardComponent from "@/components/card.server";
import Link from "next/link";

export default function Home() {
  const coffeeStoreId = "meme-coffee";
  return (
    <main className="mb-56">
      <div className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
          <CardComponent
            name="Meme Coffee"
            imgUrl="/static/hero-image.png"
            href={`/store/${coffeeStoreId}`}
          />
        </div>
      </div>
    </main>
  );
}
