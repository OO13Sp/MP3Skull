// sessions.ts (or a similar file where you manage sessions)
import { createCookieSessionStorage } from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET; // Make sure you have a session secret

const storage = createCookieSessionStorage({
  cookie: {
    name: "your-session-cookie-name",
    secure: true, // set to true in production
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24, // 1 day
    sameSite: "lax",
    secrets: [sessionSecret],
  },
});

// Export the functions needed to manage sessions
export const { getSession, commitSession, destroySession } = storage;
