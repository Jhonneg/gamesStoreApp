"use client";
import { useFormState, useFormStatus } from "react-dom";
import upvoteAction from "@/actions";
import Image from "next/image";

import React from "react";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} aria-disabled={pending}>
      {pending ? (
        <Image
          src="/static/loading-spinner.svg"
          width="30"
          height="30"
          alt="Loading"
        />
      ) : (
        "Up vote!"
      )}
    </button>
  );
}

export default function Upvote({ voting, id }: { voting: number; id: string }) {
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
        <SubmitButton />
      </form>
    </>
  );
}
