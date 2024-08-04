import Card from "@/components/card.server";
import NearbyCoffeeStores from "@/components/nearby-coffee-stores.client";
import fetchGamesStores from "@/lib/games-stores";
import { GameStoreType } from "@/types";

async function getData() {
  if (
    !process.env.MAPBOX_API ||
    !process.env.UNSPLASH_ACCESS_KEY ||
    !process.env.AIRTABLE_TOKEN
  ) {
    throw new Error("One of the API keys is missing");
  }
  const SAOPAULO_LONG_LAT = "-73.990593%2C40.740121";
  return await fetchGamesStores(SAOPAULO_LONG_LAT, 6);
}

export default async function Home() {
  const gamesStores = await getData();
  return (
    <main className="mb-56">
      <div className="mx-auto mt-10 max-w-6xl px-4">
        <NearbyCoffeeStores />
        <div className="mt-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            <p>São paulo stores</p>
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
            {gamesStores.map((gamesStores: GameStoreType) => (
              <Card
                key={gamesStores.id}
                name={gamesStores.name}
                imgUrl={gamesStores.imgUrl}
                href={`/store/${gamesStores.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
