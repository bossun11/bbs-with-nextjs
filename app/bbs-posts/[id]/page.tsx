import { BBSData } from "@/app/types/types";

async function getDetailBBSData(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/post/${id}`,
    {
      cache: "no-store",
    }
  );

  const bbsDetailData: BBSData = await response.json();

  return bbsDetailData;
}

const BBSDetailPage = async ({ params }: { params: { id: number } }) => {
  const bbsDetailData = await getDetailBBSData(params.id);
  console.log(bbsDetailData);
  return <div>page</div>;
};

export default BBSDetailPage;
