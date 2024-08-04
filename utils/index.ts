export default function getDomain() {
  return new URL(
    process.env.NODE_ENV === "production"
      ? "https://nextgames-stores.vercel.app"
      : "http://localhost:3000"
  );
}
