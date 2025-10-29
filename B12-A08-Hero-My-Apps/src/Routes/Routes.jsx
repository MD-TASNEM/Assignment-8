import { createBrowserRouter } from "react-router";
import Home from "./../Pages/Home";
import AllApps from "./../Pages/AllApps";
import AppDetails from "./../Pages/AppDetails";
import MyInstallation from "./../Pages/MyInstallation";
import NotFound from "./../Pages/NotFound";
import MainLayouts from "../assets/Layouts/MainLayouts";
import Header from "./../Components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    // errorElement: <NotFound />,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/Data/apps.json"),
      },
      {
        path: "/AllApps",
        element: <AllApps />,
      },
      {
        path: "/AppDetails",
        element: <AppDetails />,
      },
      {
        path: "/MyInstallation",
        element: <MyInstallation />,
      },
      {
        path: "/Header",
        element: <Header />,
      },
    ],
  },
]);
export default router;
