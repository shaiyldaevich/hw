import { createBrowserRouter } from "react-router-dom";
import LayoutSide from "../pagesSide/components/LayoutSide";
import HomePage from "../pagesSide/pages/HomePage";
import AboutPage from "../pagesSide/pages/AboutPage";
import LayoutAdmin from "../pagesAdmin/components/LayoutAdmin/LayoutAdmin";
import DashBourdPage from "../pagesAdmin/pages/DashBourdPage";
import SettingsPage from "../pagesAdmin/pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutSide />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin/dashboard",
        element: <DashBourdPage />,
      },
      {
        path: "/admin/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
