"use server";

import { updateGameStore } from "@/lib/airtable";

export default async function upvoteAction(id: string) {
  console.log("upvote action");

  const data = await updateGameStore(id);
  console.log({ data });
  if (data) {
    return {
      voting: data.length > 0 ? data[0].voting : 0,
      id,
    };
  }
}
