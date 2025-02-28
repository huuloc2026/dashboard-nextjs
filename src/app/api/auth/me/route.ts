import { cookies } from "next/headers";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const token = accessToken;
  if (!token) {
    return new Response(JSON.stringify({ message: "No token found" }), {
      status: 401,
    });
  }

  return new Response(JSON.stringify({ token }), { status: 200 });
}
