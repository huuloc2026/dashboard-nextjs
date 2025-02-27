import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const authPaths = ["/login", "/register"]; // ✅ Thêm "/" để hỗ trợ trang chủ
const privatePaths = ["/dashboard", "/profile", "/settings", "/me"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(pathname);
  const token = request.cookies.get("accessToken")?.value;
  // Chưa đăng nhập thì không cho vào private paths
  if (privatePaths.some((path) => pathname.startsWith(path)) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // Đăng nhập rồi thì không cho vào login/register nữa
  if (authPaths.some((path) => pathname.startsWith(path)) && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// 🔗 Middleware áp dụng cho toàn bộ app
export const config = {
  matcher: [
    "/me",
    "/login",
    "/register",
    "/dashboard",
    "/profile",
    "/settings",
  ],
};
