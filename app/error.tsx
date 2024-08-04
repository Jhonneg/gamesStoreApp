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
    <div>
      <h2>Something went wrong!</h2>
      <p>
        You need to configure your enviroment variables, check the readme.md
      </p>
      <p>
        The environment variables are AIRTABLE_TOKEN, UNSPLASH_ACCESS_KEY and
        MAPBOX_API. Create these environment variables with values inside
        .env.local file.
      </p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
