import { createBrowserRouter } from "react-router";
import DashboardPage from "./components/pages/DashboardPage";
import DataPage from "./components/pages/DataPage";
import ErrorPage from "./components/pages/ErrorPage";
import LandingPage from "./components/pages/LandingPage";
import RecommendationPage from "./components/pages/RecommendationPage";
import UVIndexPage from "./components/pages/UVIndexPage";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "main", element: <DashboardPage /> },
      { path: "data", element: <DataPage /> },
      { path: "uv", element: <UVIndexPage /> },
      { path: "uv-insights", element: <UVIndexPage /> },
      { path: "recommendation", element: <RecommendationPage /> },
      { path: "reminder", element: <DataPage /> },
    ],
  },
]);

export default router;
