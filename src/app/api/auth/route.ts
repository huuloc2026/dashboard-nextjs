export const dynamic = "force-static";

export async function POST(request: Request) {
  const res = await request.json();
  const token = res.result.accessToken;
  if (!token) {
    return new Response(JSON.stringify({ message: "Token is missing" }), {
      status: 400,
    });
  }

  return Response.json(
    { token },
    {
      status: 200,
      headers: { "Set-Cookie": `accessToken=${token}; Path=/; HttpOnly` },
    }
  );
}
// // ✅ API để logout và xóa cookie
// export async function DELETE() {
//   return new Response(null, {
//     status: 200,
//     headers: { "Set-Cookie": "accessToken=; Path=/; HttpOnly; Max-Age=0" },
//   });
// }
