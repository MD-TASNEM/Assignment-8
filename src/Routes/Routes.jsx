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
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AllApps",
        element: <AllApps />,
      },
      {
        path: "/AppDetails/:id",
        element: <AppDetails />,
           },

      {
        path: "/MyInstallation",
        element: <MyInstallation />,
      },
    ],
  },
]);
export default router;
