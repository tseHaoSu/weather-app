import { createBrowserRouter } from "react-router";
import DashboardPage from "./components/pages/DashboardPage";
import DataPage from "./components/pages/DataPage";
import ErrorPage from "./components/pages/ErrorPage";
import LandingPage from "./components/pages/LandingPage";
import Layout from "./components/pages/Layout";
import UVIndexPage from "./components/pages/UVIndexPage";
import RecommendationPage from "./components/pages/RecommendationPage";
import ReminderPage from "./components/pages/ReminderPage";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "main", element: <DashboardPage /> },
      { path: "data", element: <DataPage /> },
      { path: "uv", element: <UVIndexPage /> },
      { path: "uv-insights", element: <UVIndexPage /> },
      { path: "recommendation", element: <RecommendationPage /> },
      { path: "reminder", element: <ReminderPage /> },
      {path: "landing", element: <LandingPage />}
    ],
  },
]);

export default router;
