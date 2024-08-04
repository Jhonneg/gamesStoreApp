"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="m-12 bg-gray-700 p-12 text-white">
      <h2 className="text-3xl">Something went wrong!</h2>
      <p className="p-2">
        You need to configure your enviroment variables, check the README.md
      </p>
      <p className="p-2">
        The environment variables are AIRTABLE_TOKEN, UNSPLASH_ACCESS_KEY and
        MAPBOX_API. Create these environment variables with values inside
        .env.local file.
      </p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
