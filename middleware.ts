import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'
import { authMiddleware } from "@clerk/nextjs";
 
const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'vi'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewrite'
})
 
// export function middleware(request: NextRequest) {
//   return I18nMiddleware(request)
// }

export default authMiddleware({
  beforeAuth: (req) => {
    // Execute next-intl middleware before Clerk's auth middleware
    return I18nMiddleware(req);
  },
  // Ensure that locale specific sign-in pages are public
  //publicRoutes: ["/", "/:locale/sign-in"],
});
 
// export const config = {
//   matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
// }
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};