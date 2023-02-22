export const ironOptions = {
  cookieName: "route",
  password: process.env.NEXT_PUBLIC_COOKIE_KEY,
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  // secure: process.env.NODE_ENV === "production",
  cookieOptions: {
    maxAge: undefined,
    secure: process.env.NODE_ENV === "development",
  },
};