import { createBrowserRouter } from "react-router";
import Home from "./../Pages/Home";
import AllApps from "./../Pages/AllApps";
import AppDetails from "./../Pages/AppDetails";
import MyInstallation from "./../Pages/MyInstallation";
import NotFound from "./../Pages/NotFound";
import MainLayouts from "../assets/Layouts/MainLayouts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <NotFound />,
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
        path: "/AppDetails/:id",
        element: <AppDetails />,
        loader: () => fetch("/Data/apps.json"),
      },

      {
        path: "/MyInstallation",
        element: <MyInstallation />,
      },
    ],
  },
]);
export default router;
