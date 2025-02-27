export const dynamic = "force-static";

export async function POST(request: Request) {
  const res = await request.json();
  const token = res.result.accessToken;
  if (!token) {
    return Response.error();
  }
  return Response.json(
    { token },
    {
      status: 200,
      headers: { "Set-Cookie": `accessToken=${token}; Path=/; HttpOnly` },
    }
  );
}
