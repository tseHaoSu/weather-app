import { createBrowserRouter } from "react-router";
import LandingPage from "./components/pages/LandingPage";
import DashboardPage from "./components/pages/DashboardPage";
import DataPage from "./components/pages/DataPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <LandingPage /> },
      { path: "main", element: <DashboardPage /> },
      { path: "data", element: <DataPage /> },
    ],
  },
]);

export default router;
