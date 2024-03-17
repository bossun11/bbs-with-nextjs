import BBSCardList from "@/components/BBSCardList";
import { BBSData } from "./types/types";

export default async function Home() {
  const response = await fetch("http://localhost:8000/api/posts", {
    cache: "no-cache",
  });
  const bbsAllData: BBSData[] = await response.json();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
