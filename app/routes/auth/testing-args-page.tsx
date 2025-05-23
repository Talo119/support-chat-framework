import { data, Link } from "react-router";
import type { Route } from "./+types/testing-args-page";
import { sleep } from "~/lib/sleep";

export function meta() {
  return [
    { title: "Support Chat" },
    {
      property: "og:title",
      content: "Support Chat",
    },
    {
      name: "description",
      content: "This is the Support Chat",
    },
  ];
}

export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

export function links() {
  return [
    /* {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
    },
    {
      rel: "stylesheet",
      href: "https://example.com/some/styles.css",
    },
    {
      rel: "preload",
      href: "/images/banner.jpg",
      as: "image",
    }, */
  ];
}

export async function clientLoader() {
  await sleep(1500);
  return {
    message: "Hello, world from the client loader! hydrated",
  };
}

export function HydrateFallback() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
        <p className="text-xl text-gray-600">Cargando...</p>
      </div>
    </div>
  );
}

export default function TestingArgsPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const { id, name, age } = params;
  console.log({ id, name, age });
  console.log("Created component");
  return (
    <div>
      <h1 className="text-4xl font-bold">Name: { name }</h1>
      <h1 className="text-3xl font-bold">Age: { age }</h1>
      <h1 className="text-2xl font-bold">Id: { id }</h1>

      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p className="mb-4">Matched Routes: {JSON.stringify(matches)}</p>

      <Link
        to="/auth/testing"
        className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-colors"
      >
        Testing
      </Link>
    </div>
  );
}
