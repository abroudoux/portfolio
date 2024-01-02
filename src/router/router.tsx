import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import { Toaster } from "sonner";

import App from "@/pages/App";
import Project from "@/pages/Project";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "project/:id",
        element: <Project />,
    },
]);

export default router;