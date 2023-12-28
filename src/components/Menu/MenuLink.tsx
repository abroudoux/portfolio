import { FC, useState } from "react";


type MenuLinkProps = {
    ref : string;
    title : string;
};

const MenuLink : FC<MenuLinkProps> = ( props ) => {

    const [activeSection, setActiveSection] = useState("#home");

    return (
        <li className={`w-full h-full ${activeSection === props.ref ? "active" : ""}`}>
            <a href={ props.ref } className="w-full h-full flex-col-center-center">
                { props.title }
            </a>
        </li>
    );
};


export default MenuLink;