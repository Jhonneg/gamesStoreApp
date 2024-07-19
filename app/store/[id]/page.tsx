import Link from "next/link";
import React from "react";

export default function Page(props: { params: { id: string } }) {
  const {
    params: { id },
  } = props;
  return (
    <div>
      Coffee store page: {id}
      <div className=" mb-2 mt-24 text-lg font-bold">
        <Link href="/">Back to home</Link>
      </div>
    </div>
  );
}
