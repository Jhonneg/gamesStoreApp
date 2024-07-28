import { fetchGameStore } from "@/lib/games-stores";
import Link from "next/link";

async function getData() {
  return await fetchGameStore();
}

export default async function Page(props: { params: { id: string } }) {
  const {
    params: { id },
  } = props;
  const coffeeStore = await getData();

  return (
    <div className="h-full pb-80">
      <div className="m-auto grid max-w-full px-12 py-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4">
        Games store page: {id}
        <div className="mb-2 mt-24 text-lg font-bold">
          <Link href="/">Back to home</Link>
        </div>
      </div>
    </div>
  );
}
