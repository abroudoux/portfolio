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
        <nav className="h-12 w-auto border-2 fixed bottom-12 rounded-3xl backdrop-blur-xl text-sm">
            <ul className="flex-row-center-between w-full h-full">
                <MenuLink section="home" />
                <MenuLink section="projects" />
                <MenuLink section="about" />
                <MenuLink section="contact" />
                {/* <li className={`w-full h-full ${activeSection === "#home" ? "active" : ""}`}>
                    <a href="#home" className="w-full h-full flex-col-center-center py-3 px-6">
                        home
                    </a>
                </li>
                <li className={`w-full h-full ${activeSection === "#projects" ? "active" : ""}`}>
                    <a href="#projects" className="w-full h-full flex-col-center-center py-3 px-6">
                        projects
                    </a>
                </li>
                <li className={`w-full h-full ${activeSection === "#about" ? "active" : ""}`}>
                    <a href="#about" className="w-full h-full flex-col-center-center py-3 px-6">
                        about
                    </a>
                </li>
                <li className={`w-full h-full ${activeSection === "#contact" ? "active" : ""}`}>
                    <a href="#contact" className="w-full h-full flex-col-center-center py-3 px-6">
                        contact
                    </a>
                </li> */}
            </ul>
        </nav>
    );
};