// Logout.tsx
import { redirect } from "@remix-run/node";
import { getSession, commitSession, destroySession } from "~/sessions"; // adjust the import path as needed

export const action = async ({ request }) => {
  // Get the session from the request
  const session = await getSession(request.headers.get("Cookie"));

  // Destroy the session to log the user out
  const cookie = await destroySession(session);

  // Commit the session to save the changes
  return redirect("/", {
    headers: {
      "Set-Cookie": cookie,
    },
  });
};

export default function Logout() {
  return null; // This can be empty as it only handles redirection
}
