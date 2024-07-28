import Banner from "@/components/banner.client";
import Card from "@/components/card.server";
import fetchGamesStores from "@/lib/games-stores";
import { GamesStoresTypes } from "@/types";


async function getData() {
  return await fetchGamesStores();
}

export default async function Home() {
  const gamesStores = await getData();
  return (
    <main className="mb-56">
      <div className="mx-auto mt-10 max-w-6xl px-4">
        <Banner />
        <div className="mt-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            São Paulo stores
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
            {gamesStores.map((gamesStores: GamesStoresTypes) => (
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
