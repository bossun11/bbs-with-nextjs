import BBSCardList from "@/components/BBSCardList";
import { BBSData } from "./types/types";

async function getBBSAllData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/post`,
    {
      cache: "no-store",
    }
  );

  const bbsAllData: BBSData[] = await response.json();

  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
