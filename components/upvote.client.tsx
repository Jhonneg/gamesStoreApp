import Image from "next/image";

export default function Upvote() {
  return (
    <>
      <div className="mb-6 flex">
        <Image
          src="/static/icon/star.svg"
          width="24"
          height="24"
          alt="star icon"
        />
        <p className="pl-2">0</p>
      </div>
      <button onClick={}>Up vote! </button>
    </>
  );
}
