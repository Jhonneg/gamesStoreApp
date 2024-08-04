"use client";
import { useFormState } from "react-dom";
import upvoteAction from "@/actions";
import Image from "next/image";

export default function Upvote({ voting, id }: { voting: number; id: string }) {
  function handleOnClick() {
    console.log("click");
  }
  const initialState = {
    id,
    voting,
  };
  const [state, dispatch] = useFormState(upvoteAction, initialState);
  return (
    <>
      <form action={dispatch}>
        <div className="mb-6 flex">
          <Image
            src="/static/star.svg"
            width="24"
            height="24"
            alt="star icon"
          />
          <p className="pl-2">{state.voting}</p>
        </div>
        <button onClick={handleOnClick}>Up vote! </button>
      </form>
    </>
  );
}
