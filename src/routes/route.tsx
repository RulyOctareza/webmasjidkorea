import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MosqueList from "../pages/MosqueList";
import ErrorPage from "../components/ErrorPage";
import MosqueSearch from "../pages/MosqueSearch";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mosques",
    element: <MosqueList />,
  },
  {
    path: "/search",
    element: <MosqueSearch />,
  },
]);
