import { NextResponse } from "next/server";

const token = "sfjfslkfdfsf45345";
export const middleware = (request) => {
  console.log(request, " request");
  // if (request.nextUrl.pathname != "/login" && !token) {
  return NextResponse.redirect(new URL("/login", request.url));
  // }
};

export const config = {
  matcher: ["/product/:path*", "/about-us"],
};
