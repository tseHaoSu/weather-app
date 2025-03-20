import { createBrowserRouter } from "react-router";
import DashboardPage from "./components/pages/DashboardPage";
import DataPage from "./components/pages/DataPage";
import ErrorPage from "./components/pages/ErrorPage";
import LandingPage from "./components/pages/LandingPage";
import Layout from "./components/pages/Layout";
import UVIndexPage from "./components/pages/UVIndexPage";
import RecommendationPage from "./components/pages/RecommendationPage";
import ReminderPage from "./components/pages/ReminderPage";
import UVTipsPage from "./components/pages/UVTipsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { path: "main", element: <DashboardPage /> },
      { path: "data", element: <DataPage /> },
      { path: "uv", element: <UVIndexPage /> },
      { path: "uv-insights", element: <UVTipsPage /> },
      { path: "recommendation", element: <RecommendationPage /> },
      { path: "reminder", element: <ReminderPage /> },
    ],
  },
]);

export default router;
