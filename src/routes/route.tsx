import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MosqueList from "../pages/MosqueList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/mosques",
    element: <MosqueList />,
  },
]);
