import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen gap-3 h-dvh">
      <p className="font-bold text-9xl ">404</p>
      <p className="mb-10 text-lg font-normal">Page Not Found</p>
      <Link to={"/"} className="px-4 py-2 text-white bg-blue-600 rounded-lg">
        Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
