import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";

import Contact from "./pages/Contact";
import LatestBlog from "./pages/LatestBlog";
import NewsPage from "./pages/NewsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "LatestBlog/", element: <LatestBlog /> },
      { path: "Contact/", element: <Contact /> },
      { path: "NewsPage/:index", element: <NewsPage /> },
    ],
  },
]);
export default router;
