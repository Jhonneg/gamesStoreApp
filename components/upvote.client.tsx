"use client";

import Image from "next/image";

export default function Upvote({ voting }: { voting: number }) {
  function handleOnClick() {
    console.log("click");
  }

  return (
    <>
      <div className="mb-6 flex">
        <Image src="/static/star.svg" width="24" height="24" alt="star icon" />
        <p className="pl-2">{voting}</p>
      </div>
      <button onClick={handleOnClick}>Up vote! </button>
    </>
  );
}
