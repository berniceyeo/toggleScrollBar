import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ApiDetails from "./pages/ApiDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: ":apiName",
    element: <ApiDetails />,
  },
]);
