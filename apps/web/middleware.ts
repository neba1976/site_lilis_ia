import { NextRequest, NextResponse } from 'next/server';
import { CODES } from '@repo/i18n';
const def = 'es';
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/^.*\.[^/]+$/)
  )
    return NextResponse.next();
  const seg = pathname.split('/').filter(Boolean)[0];
  if (!seg || !(CODES as readonly string[]).includes(seg)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${def}${pathname}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
export const config = { matcher: ['/((?!_next|api).*)'] };
