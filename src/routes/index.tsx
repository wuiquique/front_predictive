import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Artists from "../pages/Artists";
import Songs from "../pages/Songs";
import About from "../pages/About";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/artists",
        element: <Artists />,
      },
      {
        path: "/songs",
        element: <Songs />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

export default routes;
