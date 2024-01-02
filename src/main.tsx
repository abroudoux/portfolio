import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Router, RouterProvider } from "react-router-dom";
import { Toaster } from 'sonner';

import { ThemeProvider } from "@/config/theme-provider";
import router from "@/router/router";

import App from "@/pages/App";
import Project from "@/pages/Project";

import "@/style/index.css";
import "@/style/layouts.css"


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/project/:id" element={<Project />} />
            </Routes>
            {/* <RouterProvider router={router} /> */}
            <Toaster richColors />
        </BrowserRouter>
  </ThemeProvider>
);
