import { useEffect } from "react";

import Home from "@/sections/Home";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

import Menu from "@/components/Menu/Menu";


export default function App() {

    useEffect(() => {
        const cursor: HTMLSpanElement | null = document.querySelector('.cursor');

        function handleCursor(e: MouseEvent) {
            if (cursor) {
                cursor.style.left = `${e.x}px`;
                cursor.style.top = `${e.y}px`;
            };
        };

        window.addEventListener('mousemove', (e) => handleCursor(e));

        return () => {
              window.removeEventListener('mousemove', (e) => handleCursor(e));
        };
    }, []);

    return (
        <>
            <Home />
            <Projects />
            <About />
            <Contact />
            <Menu />
            <div className="cursor"></div>
        </>
    );
};