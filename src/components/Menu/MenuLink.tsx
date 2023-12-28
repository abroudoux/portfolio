import { FC } from "react";


type MenuLinkProps = {
    ref : string;
    title : string;
};

const MenuLink : FC<MenuLinkProps> = ( props ) => {
    return (
        <li className="w-full h-full">
            <a href={ props.ref } className="flex-col-center-center">
                { props.title }
            </a>
        </li>
    );
};


export default MenuLink;