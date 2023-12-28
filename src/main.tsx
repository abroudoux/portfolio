import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from 'sonner';

import { ThemeProvider } from "@/config/theme-provider";

import App from "@/pages/App";
import Projects from "@/pages/Projects";

import Footer from "@/components/Footer";

import "@/style/index.css";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement,).render(
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/project" element={<Projects />} />
            </Routes>
            <Footer />
            <Toaster richColors />
        </BrowserRouter>
  </ThemeProvider>
);
