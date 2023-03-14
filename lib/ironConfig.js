export const ironOptions = {
  cookieName: "xenolaxy",
  password: process.env.NEXT_PUBLIC_COOKIE_KEY,
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  // secure: process.env.NODE_ENV === "production",
  cookieOptions: {
    maxAge: 60*60,
    secure: process.env.NODE_ENV === "production",
  },
};