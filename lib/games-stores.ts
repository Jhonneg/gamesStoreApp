import { MapboxType } from "@/types";

function transformGamesData(result: MapboxType) {
  return {
    id: result.id,
    address: result.properties?.address || "",
    name: result.text,
    imgUrl:
      "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
}

export default async function fetchGamesStores() {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/games.json?proximity=ip&access_token=${process.env.MAPBOX_API}`
    );
    const data = await response.json();

    return data.features.map((result: MapboxType) =>
      transformGamesData(result)
    );
  } catch (err) {
    console.error("Error while fetching Games stores", err);
  }
}

export async function fetchGameStore() {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/poi.68719547287.json?proximity=ip&access_token=${process.env.MAPBOX_API}`
    );
    const data = await response.json();

    const transformedData = data.features.map((result: MapboxType) =>
      transformGamesData(result)
    );
    return transformedData.length > 0 ? transformedData[0] : {};
  } catch (err) {
    console.error("Error while fetching Games stores", err);
  }
}
