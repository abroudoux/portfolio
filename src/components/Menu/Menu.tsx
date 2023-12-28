import MenuLink from "@/components/Menu/MenuLink";


export default function Menu() {
    return (
        <nav className="w-2/6 h-16 border-2 fixed bottom-10 rounded-lg bg-background">
            <ul className="flex-row-center-between w-full h-full">
                {/* <MenuLink ref="#home" title="home" />
                <MenuLink ref="#projects" title="projects" />
                <MenuLink ref="#about" title="about" />
                <MenuLink ref="#contact" title="contact" /> */}
                <li className="w-full h-full">
                    <a href="#home" className="w-full h-full flex-col-center-center">
                        home
                    </a>
                </li>
                <li className="w-full h-full">
                    <a href="#projects" className="w-full h-full flex-col-center-center">
                        projects
                    </a>
                </li>
                <li className="w-full h-full">
                    <a href="#about" className="w-full h-full flex-col-center-center">
                        about
                    </a>
                </li>
                <li className="w-full h-full">
                    <a href="#contact" className="w-full h-full flex-col-center-center">
                        contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};