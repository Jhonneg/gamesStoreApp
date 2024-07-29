"use client";
import useTrackLocation from "@/hooks/use-track-location";
import Banner from "./banner.client";
import Card from "./card.server";
import { GameStoreType } from "@/types";
import { useEffect, useState } from "react";
import fetchGamesStores from "@/lib/games-stores";

export default function NearbyCoffeeStores() {
  const { handleTrackLocation, isFindingLocation, longLat, locationErrorMsg } =
    useTrackLocation();

  const [gameStores, setGameStores] = useState([]);

  const handleOnClick = () => {
    handleTrackLocation();
  };

  useEffect(() => {
    (async () => {
      if (longLat) {
        try {
          const limit = 10;
          const response = await fetch(
            `/api/getGameStoresByLocation?longLat=${longLat}&limit=${limit}`
          );
          const gameStores = await response.json();
          setGameStores(gameStores);
        } catch (err) {
          console.log(err);
        }
      }
    })();
  }, [longLat]);

  return (
    <div>
      <Banner
        handleOnClick={handleOnClick}
        buttonText={isFindingLocation ? "Locating" : "View stores nearby"}
      />
      {locationErrorMsg && <p>Error: {locationErrorMsg}</p>}

      {gameStores.length > 0 && (
        <div className="mt-20">
          <h2 className="mt-8 pb-8 text-4xl font-bold text-white">
            <p>Game stores located near you</p>
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6">
            {gameStores.map((gamesStores: GameStoreType) => (
              <Card
                key={gamesStores.id}
                name={gamesStores.name}
                imgUrl={gamesStores.imgUrl}
                href={`/store/${gamesStores.id}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
