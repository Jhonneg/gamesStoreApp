export default function getDomain() {
  return new URL(
    process.env.NODE_ENV === "production"
      ? "https://gamenext.netlify.app/"
      : "http://localhost:3000"
  );
}
