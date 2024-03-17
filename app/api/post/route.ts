export async function GET() {
  const response = await fetch("http://localhost:8000/api/posts", {
    cache: "no-cache",
  });
  const bbsAllData = await response.json();
  return Response.json(bbsAllData);
}
