import { MapboxType } from "@/types";

async function getListOfGameStorePhotos() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query="video games"&page=1&perPage=10&orientation=landscape`
    );
    const photos = await response.json();
    const results = photos?.results || [];
    return results?.map((result: { urls: any }) => result.urls["small"]);
  } catch (err) {
    console.log("Error fetching photo", err);
  }
}

function transformGamesData(
  idx: number,
  result: MapboxType,
  photos: Array<string>
) {
  return {
    id: result.id,
    address: result.properties?.address || "",
    name: result.text,
    imgUrl: photos.length > 0 ? photos[idx] : "",
  };
}

export default async function fetchGamesStores(longLat: string, limit: number) {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/games.json?limit=${limit}&proximity=${longLat}&access_token=${process.env.MAPBOX_API}`
    );
    const data = await response.json();
    const photos = await getListOfGameStorePhotos();

    return data?.features?.map(
      (result: MapboxType, idx: number) =>
        transformGamesData(idx, result, photos) || []
    );
  } catch (err) {
    console.error("Error while fetching Games stores", err);
    return [];
  }
}

export async function fetchGameStore(id: string, queryId: string) {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${id}.json?proximity=ip&access_token=${process.env.MAPBOX_API}`
    );
    const data = await response.json();
    const photos = await getListOfGameStorePhotos();

    const gameStore =
      data?.features?.map((result: MapboxType, idx: number) =>
        transformGamesData(parseInt(queryId), result, photos)
      ) || [];
    return gameStore.length > 0 ? gameStore[0] : {};
  } catch (err) {
    console.error("Error while fetching Games stores", err);
    return {}
  }
}
