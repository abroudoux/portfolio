import { useEffect, useState } from "react";

import MenuLink from "@/components/Menu/MenuLink";


export default function Menu() {

    const [activeSection, setActiveSection] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "#home";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom > 0) {
                    currentSection = `#${section.id}`;
                }
            });

        setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <nav className="w-2/6 h-16 border-2 fixed bottom-10 rounded-lg bg-background">
            <ul className="flex-row-center-between w-full h-full">
                <li className={`w-full h-full ${activeSection === "#home" ? "active" : ""}`}>
                    <a href="#home" className="w-full h-full flex-col-center-center text-xl">
                        home
                    </a>
                </li>
                <li className={`w-full h-full ${activeSection === "#projects" ? "active" : ""}`}>
                    <a href="#projects" className="w-full h-full flex-col-center-center text-xl">
                        projects
                    </a>
                </li>
                <li className={`w-full h-full ${activeSection === "#about" ? "active" : ""}`}>
                    <a href="#about" className="w-full h-full flex-col-center-center text-xl">
                        about
                    </a>
                </li>
                <li className={`w-full h-full ${activeSection === "#contact" ? "active" : ""}`}>
                    <a href="#contact" className="w-full h-full flex-col-center-center text-xl">
                        contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};