import "./App.css";
import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";

import View from "./pages/Content/view";
import Add from "./pages/Content/add";

import ViewMedia from "./pages/Media/viewMedia";
import AddMedia from "./pages/Media/addMedia";
import Navigation from "./components/AddNewMedia/navigation";
import Amer from "./components/amer/Amer";
import Gallery from "./pages/Media/gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/amer",
        element: <Amer />
      },
      {
        path: "/content",

        children: [
          {
            path: "/content/view",
            element: <View />,
          },
          {
            path: "/content/add",
            element: <Add />,
          },
        ],
      },
      {
        path: "/media",

        children: [
          {
            path: "/media/view",
            element: <ViewMedia />,
          },
      
          {
            path: "/media/add",
            element: <AddMedia />,
          children:  [
              {
                path: "all",
                element: <Navigation />,
              },
              {
                path: "images",
                element: <Navigation />,
              },
              {
                path: "documents",
                element: <Navigation />,
              },
              {
                path: "videos",
                element: <Navigation />,
              },
            ],
          },
          {
            path: "/media/add/abc",
            element: <Gallery />,
          },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
