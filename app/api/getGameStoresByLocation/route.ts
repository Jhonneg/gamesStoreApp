import fetchGamesStores from "@/lib/games-stores";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const longLat = searchParams.get("longLat") || "";
    const limit = searchParams.get("limit") || "";
    if (longLat) {
      const response = await fetchGamesStores(longLat, parseInt(limit));
      return NextResponse.json(response);
    }
  } catch (err) {
    console.log("Api error", err);
    return (
      NextResponse.json(`Error from api ${err}`),
      {
        status: 500,
      }
    );
  }
}
