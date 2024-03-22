import { BBSData } from "@/app/types/types";
import EditBBSDialog from "@/components/EditBBSDialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  const { title, content } = bbsDetailData;
  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-700">ユーザー名</p>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">{content}</p>
      </div>

      <div className="flex justify-between">
        <Link href={"/"}>
          <Button>戻る</Button>
        </Link>

        <div className="grid grid-cols-2 gap-2">
          <EditBBSDialog bbsDetailData={bbsDetailData} />

          <Link
            href={"/"}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-md"
          >
            削除
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BBSDetailPage;
