import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import useStore from "@/lib/store";

import Home from "@/sections/Home";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

import Menu from "@/components/Menu/Menu";


export default function App() {

    const { isProjectCardHovered, isTextHovered } = useStore();

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
            <motion.div className={`${isProjectCardHovered || isTextHovered ? 'cursor-hover' : 'cursor'} flex-col-center-center`}>
                {isProjectCardHovered && (
                    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <ArrowUpRight className="w-8 h-8" />
                    </motion.div>
                )}
            </motion.div>
        </>
    );
};