"use server";

import { updateGameStore } from "@/lib/airtable";

type State = {
  id: string;
};

export default async function upvoteAction(prevState: State) {
  const { id } = prevState;
  const data = await updateGameStore(id);
  console.log({ data });
  if (data) {
    return {
      voting: data.length > 0 ? data[0].voting : 0,
      id,
    };
  }
}
