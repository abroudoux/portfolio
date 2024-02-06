import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Link className="flex-col-center-center h-screen w-full gap-6" to={"/"}>
      <h1 className="text-8xl">404</h1>
      <h2 className="text-3xl">Page not found</h2>
      <p className="text-lg">Click to go back to the main page</p>
    </Link>
  );
}
