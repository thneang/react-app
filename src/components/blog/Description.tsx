"use server"
import path from "path";
import fs from "fs";

export default async function Home() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "homepage-description.txt"
  );
  const text = await fs.readFileSync(filePath, "utf8");
  return (
    <>
      <span className="m-2 p-2">{text}</span>
    </>
  );
}
