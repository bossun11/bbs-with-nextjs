export async function GET() {
  const response = await fetch(`${process.env.BACKEND_API_URL}/posts`);
  const bbsAllData = await response.json();
  return Response.json(bbsAllData);
}

// export async function POST(request: Request) {
//   const { title, content } = await request.json();

//   const response = await fetch(`${process.env.BACKEND_API_URL}/posts`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ title, content }),
//   });

//   return response;
// }
