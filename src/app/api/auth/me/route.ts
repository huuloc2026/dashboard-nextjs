export async function GET(request: Request) {
  const cookies = request.headers.get("cookie");
  const token = cookies
    ?.split("; ")
    .find((c) => c.startsWith("accessToken="))
    ?.split("=")[1];

  if (!token) {
    return new Response(JSON.stringify({ message: "No token found" }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify({ token }), { status: 200 });
}
