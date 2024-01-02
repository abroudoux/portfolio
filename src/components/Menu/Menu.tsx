import MenuLink from "@/components/Menu/MenuLink";


export default function Menu() {
    return (
        <nav className="h-12 w-auto border-2 fixed bottom-16 rounded-3xl backdrop-blur-xl text-sm">
            <ul className="flex-row-center-between w-full h-full">
                <MenuLink section="home" />
                <MenuLink section="projects"  />
                <MenuLink section="about"  />
                <MenuLink section="contact"  />
            </ul>
        </nav>
    );
};