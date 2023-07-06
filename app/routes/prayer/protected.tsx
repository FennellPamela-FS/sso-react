import { getAuth } from "@clerk/remix/ssr.server";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/demos/signin");
  }
  return json({ userId });
};

export default function Protected() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Protected</h1>
      <h2>You're in! UserId is {data.userId}</h2>
      <a href="https://mytcreative.com" target="_blank" rel="noreferrer">mytCreative</a>
    </div>);
}
