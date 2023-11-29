import { json, type LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

type dataType = {
  message: string;
};

export const loader: LoaderFunction = () => {
  return json({ message: "Hello there!" });
};

export default function Settings() {
  const data: dataType = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Settings</h1>
      <p>This is awesome</p>
      <p>Message from loader: {data.message} </p>
      <nav>
        <Link to="app">App</Link>
        <Link to="profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}
