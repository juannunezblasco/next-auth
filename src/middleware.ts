import { NextRequest, NextResponse } from "next/server";

import { decrypt } from "./middlewares/auth/token";

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|images|styles|icons|favicon.ico|sw.js).*)']
}

export async function middleware (request: NextRequest) {

  const cookie = request.cookies.get('accessToken')?.value ?? ''

  const token = await decrypt(cookie);

  if (!/^\/auth\//.test(request.nextUrl.pathname) && !token) {
    console.log('redirecting to login')
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
  
  if (/^\/auth\//.test(request.nextUrl.pathname) && token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()

}
