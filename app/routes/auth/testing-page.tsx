import { sleep } from "~/lib/sleep";
import type { Route } from "./+types/testing-page";
import { Form, Link, NavLink, useNavigation } from "react-router";

export async function action({ request }: Route.ActionArgs) {
  await sleep(1000);
  const data = await request.formData();
  const name = data.get("name");
  const allData = Object.fromEntries(data);
  console.log("Server Side - Action");
  console.log({ name, allData });
  return { ok: true };
}

export async function clientAction({
  serverAction,
  request,
}: Route.ClientActionArgs) {
  await sleep(1000);
  const formData = await request.clone().formData();
  const allData = Object.fromEntries(formData);
  // can still call the server action if needed
  const data = await serverAction();

  return {
    message: "Hello, world from the client action!",
    data,
    allData,
  };
}

export async function loader() {
  console.log("Hola mundo desde el loader - server");
  return {
    message: "Hello, world desde el server loader!",
  };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  console.log("Hola mundo desde el client loader!- client");
  // call the server loader
  const serverData = await serverLoader();
  console.log("serverData", serverData.message);
  // And/or fetch data on the client
  // const data = getDataFromClient();
  // Return the data to expose through useLoaderData()
  return {
    message: "Hello, world desde el client loader!",
    serverData: serverData,
  };
}

export default function MyRouteComponent({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const navigation = useNavigation();
  const isPosting = navigation.state === "submitting";
  console.log("isPosting", isPosting);
  return (
    <div>
      <h1 className="text-2xl font-bold">Testing Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p className="mb-4">Matched Routes: {JSON.stringify(matches)}</p>

      <NavLink
        to="/auth/testing-args/abc-123/Carlos/37"
        className={({ isPending }) =>
          isPending
            ? "border border-primary text-muted-foreground px-4 py-2 rounded-md"
            : "border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-colors"
        }
      >
        Testing Args
      </NavLink>

      <Form className="mt-4 flex gap-2x" method="post">
        <input
          type="text"
          name="name"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          name="Age"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <button
          disabled={isPosting}
          type="submit"
          className="border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPosting ? "Submitting..." : "Submit"}
        </button>
      </Form>
    </div>
  );
}
