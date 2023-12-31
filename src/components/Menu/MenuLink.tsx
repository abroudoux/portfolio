import { FC } from "react";


type MenuLinkProps = {
    section : string;
};

const MenuLink : FC<MenuLinkProps> = ( props ) => {
    return (
        <li className="w-auto h-auto">
            <a href={`#${ props.section }`} className="w-full h-full flex-col-center-center py-3 px-6">
                { props.section }
            </a>
        </li>
    );
};


export default MenuLink;