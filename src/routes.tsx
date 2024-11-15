import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";

import Contact from "./pages/Contact";
import LatestBlog from "./pages/LatestBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },

      { path: "LatestBlog/", element: <LatestBlog /> },
      { path: "Contact/", element: <Contact /> },
    ],
  },
]);
export default router;
