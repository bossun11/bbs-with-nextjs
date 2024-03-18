// 動的な値を使用する場合は、request: Requestを引数に追加しないとSyntaxErrorが発生する
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const response = await fetch(`${process.env.BACKEND_API_URL}/posts/${id}`);
  const bbsData = await response.json();
  return Response.json(bbsData);
}
