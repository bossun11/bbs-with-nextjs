export async function GET() {
  const response = await fetch(`${process.env.BACKEND_API_URL}/posts`);
  const bbsAllData = await response.json();
  return Response.json(bbsAllData);
}
