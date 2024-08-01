import { createGameStore } from "@/lib/airtable";
import fetchGamesStores, { fetchGameStore } from "@/lib/games-stores";
import { GameStoreType } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function getData(id: string, queryId: string) {
  const gameStoreFromMapbox = await fetchGameStore(id, queryId);
  const _createGameStore = createGameStore(gameStoreFromMapbox, id);
  return gameStoreFromMapbox;
}

export async function generateStaticParams() {
  const SAOPAULO_LONG_LAT = "-73.990593%2C40.740121";

  const gamesStores = await fetchGamesStores(SAOPAULO_LONG_LAT, 6);
  return gamesStores.map((gamesStore: GameStoreType) => ({
    id: gamesStore.id,
  }));
}

export default async function Page(props: {
  params: { id: string };
  searchParams: { id: string };
}) {
  const {
    params: { id },
    searchParams: { id: queryId },
  } = props;
  const coffeeStore = await getData(id, queryId);
  const { name = "", address = "", imgUrl = "" } = coffeeStore;

  return (
    <div className="h-full pb-80">
      <div className="m-auto grid max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
        <div className="">
          <div className="mb-2 mt-24 text-lg font-bold">
            <Link href="/">← Back to home</Link>
          </div>
          <div className="my-4">
            <h1 className="text-4xl">{name}</h1>
          </div>
          <Image
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={740}
            height={360}
            className="max-h-[420px] min-w-full max-w-full rounded-lg border-2 sepia lg:max-w-[470px] "
            alt={"Game Store Image"}
          />
        </div>

        <div className={`glass mt-12 flex-col rounded-lg p-4 lg:mt-48`}>
          {address && (
            <div className="mb-4 flex">
              <Image
                src="/static/places.svg"
                width="24"
                height="24"
                alt="places icon"
              />
              <p className="pl-2">{address}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
