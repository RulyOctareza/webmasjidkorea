import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MosqueList from "../pages/MosqueList";
import TestPage from "../pages/TestPage";
import ErrorPage from "../components/ErrorPage";

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
    path: "/test",
    element: <TestPage />,
  },
]);
