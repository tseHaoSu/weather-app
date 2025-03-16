import { createBrowserRouter } from "react-router"; 
import LandingPage from "./components/pages/LandingPage";
import DashboardPage from "./components/pages/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <LandingPage /> },
      { path: "main", element: <DashboardPage /> },
    ],
  },
]);

export default router;
