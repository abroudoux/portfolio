import { FC, useEffect, useState } from "react";


type MenuLinkProps = {
    section : string;
};

const MenuLink : FC<MenuLinkProps> = ( props ) => {

    const [activeSection, setActiveSection] = useState(`#${ props.section }`);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = `${ props.section }`;

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
        <li className={`w-auto h-auto ${activeSection === props.section ? "active" : ""}`}>
            <a href={`#${ props.section }`} className="w-full h-full flex-col-center-center py-3 px-6">
                { props.section }
            </a>
        </li>
    );
};


export default MenuLink;