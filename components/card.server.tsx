import Image from "next/image";
import Link from "next/link";

type CardType = {
  name: string;
  imgUrl: string;
  href: string;
};

export default function CardComponent({ name, imgUrl, href }: CardType) {
  return (
    <Link href={imgUrl}>
      <h2>{name}</h2>
      <Image src={imgUrl} width={260} height={160} alt={name} />
    </Link>
  );
}
