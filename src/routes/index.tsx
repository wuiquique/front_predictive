import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Artists from "../pages/Artists/Artists";
import Songs from "../pages/Songs/Songs";
import About from "../pages/About";
import ArtistDetail from "../pages/Artists/Detail";
import SongDetail from "../pages/Songs/Detail";

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
        path: "/artists/:id",
        element: <ArtistDetail />,
      },
      {
        path: "/songs",
        element: <Songs />,
      },
      {
        path: "/songs/:id",
        element: <SongDetail />
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

export default routes;
