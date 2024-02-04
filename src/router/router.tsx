import { createBrowserRouter } from "react-router-dom";

import App from "@/pages/App";
import Project from "@/pages/Project";
import PageNotFound from "@/pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "project/:id",
    element: <Project />,
    errorElement: <PageNotFound />,
  },
]);

export default router;
