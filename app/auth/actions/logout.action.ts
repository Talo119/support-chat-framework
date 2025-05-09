import { destroySession, getSession } from "~/sessions.server";
import type { Route } from "./+types/logout.action";
import { redirect } from "react-router";

export async function action({
    request,
  }: Route.ActionArgs) {
    const session = await getSession(
      request.headers.get("Cookie")
    );
    return redirect("/auth/login", {
      headers: {
        "Set-Cookie": await destroySession(session),
      },
    });
  }